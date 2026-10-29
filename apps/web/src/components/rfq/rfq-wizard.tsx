'use client';

import { useState, useMemo } from 'react';
import {
  PUBLIC_FIELD_LIST,
  PUBLIC_FIELD_EXTRA_KEYS,
  PUBLIC_STAGES,
  PUBLIC_STAGE_LABELS,
  publicLabel,
  publicHelp,
  publicOptionLabel,
  type PublicField,
} from '../../../../../packages/contracts/src/rfq-public-schema.ts';
import { isFieldVisibleByKey } from '../../../../../packages/contracts/src/rfq-visibility.ts';
import { useDebounce } from '@/lib/hooks';
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Loader2,
  ShieldCheck,
  Info,
  Lock,
  CircleCheck,
} from 'lucide-react';

/**
 * Dynamic 67-field RFQ wizard.
 *
 * The reference schema (`apps/web/src/data/rfq_fields.json`) defines 67
 * conditionally-visible fields across 12 stages. This component renders the
 * real thing: it walks the stage list, evaluates `isFieldVisible()` for
 * every field against the current answers, and only shows what applies.
 *
 * The previously live form rendered roughly six fields and hard-coded two
 * stages. This restores the full specification, including:
 *   - the Wood / Oil / Perfume branches that appear once a product family
 *     is chosen,
 *   - the Sample branch that appears once samples are requested,
 *   - the contact-channel branch (email vs phone vs WhatsApp),
 *   - the Consent stage with its unticked opt-in controls, and
 *   - the Matching stage (request mode, recipient cap, redaction consent).
 */

/**
 * The public projection of the form, and nothing else.
 *
 * The wizard used to import the reference schema and the field map, which
 * put the internal `Q` identifiers and the internal handling notes into
 * the browser bundle. It now imports the projection, which carries no
 * internal vocabulary at all.
 */
const FIELDS = PUBLIC_FIELD_LIST;

/** Stages the buyer walks through, in order. */
const BUYER_STAGES = PUBLIC_STAGES as readonly string[];

const STAGE_LABELS = PUBLIC_STAGE_LABELS;

/** Stages that only appear when their branch is triggered. */
const CONDITIONAL_STAGES = new Set(['Wood', 'Oil', 'Perfume', 'Sample']);

/**
 * The option values a field offers.
 *
 * These come from the projection, not from parsing the schema column. The
 * schema column mixes real options with prose instructions, and parsing it
 * produced three defects that were live: the acronyms "SDS" and "COA" were
 * lower-cased, the contact channel collapsed to a single option so that
 * neither the email nor the phone field ever appeared, and the request
 * mode became a prose string the server could not read.
 *
 * An option's VALUE is machine data. The server reads it: the product
 * branch tests `family.includes('wood')`, the introduction path tests
 * `request_mode === 'selected_supplier'`. Only the display text is
 * localised.
 */
const choicesOf = (field: PublicField) => field.options.map((o) => o.value);

export function RfqWizard({
  locale,
  isAr,
  selectedSupplier,
}: {
  locale: string;
  isAr: boolean;
  selectedSupplier?: string;
}) {
  const [values, setValues] = useState<Record<string, any>>({
    request_mode: selectedSupplier ? 'selected_supplier' : 'matching',
    selected_supplier_id: selectedSupplier ?? '',
    max_recipient_cap: 3,
  });
  const [stageIndex, setStageIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Which stages have any visible field right now?
  const visibleStages = useMemo(() => {
    return BUYER_STAGES.filter((stage) => {
      if (!CONDITIONAL_STAGES.has(stage)) return true;
      return FIELDS.some(
        (f) => f.stage === stage && isFieldVisibleByKey(f.key, values as any)
      );
    });
  }, [values]);

  const currentStage = visibleStages[Math.min(stageIndex, visibleStages.length - 1)];

  const stageFields = useMemo(
    () => FIELDS.filter((f) => f.stage === currentStage && isFieldVisibleByKey(f.key, values as any)),
    [currentStage, values]
  );

  const totalVisible = useMemo(
    () => FIELDS.filter((f) => isFieldVisibleByKey(f.key, values as any)).length,
    [values]
  );

  const setValue = (key: string, value: any) => {
    // Store under the semantic key the domain service reads. The two
    // vocabularies had drifted apart once — the wizard posted `Q01=…`
    // while the domain read `product_family` — which meant every answer
    // the buyer gave was discarded on submit. The projection carries the
    // public key, so the two cannot drift apart again.
    const extras = PUBLIC_FIELD_EXTRA_KEYS[key] ?? [];
    setValues((prev) => {
      const next: Record<string, any> = { ...prev, [key]: value };
      for (const extra of extras) next[extra] = value;
      return next;
    });
  };

  const isRequired = (f: PublicField) => f.required;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Consent controls must be affirmatively ticked (Q55).
    if (!values.consent_approved) {
      setError(
        isAr
          ? 'يلزم الموافقة على معالجة بيانات الطلب للمتابعة.'
          : 'You must acknowledge the inquiry processing notice to continue.'
      );
      return;
    }

    setSubmitting(true);
    try {
      const body = new URLSearchParams();
      body.set('locale', locale);
      for (const [k, v] of Object.entries(values)) {
        if (v === undefined || v === null || v === '') continue;
        if (typeof v === 'boolean') {
          body.set(k, v ? 'true' : 'false');
          continue;
        }
        body.set(k, Array.isArray(v) ? v.join(', ') : String(v));
      }
      // "advice needed" is a valid answer that is NOT a request for samples,
      // so the answer must be compared against the Yes/no options rather
      // than tested for truthiness.
      const sampleAnswer = values.samples_requested;
      const wantsSamples =
        sampleAnswer === true || sampleAnswer === 'Yes' || sampleAnswer === 'yes';
      body.set('samples_requested', wantsSamples ? 'true' : 'false');
      body.set('preferred_contact_channel', values.preferred_contact_channel || 'email');
      if (selectedSupplier) body.set('selected_supplier_slug', selectedSupplier);

      const res = await fetch('/api/v1/inquiries/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        redirect: 'manual',
      });

      if (res.status >= 300 && res.status < 400) {
        const location = res.headers.get('location');
        if (location) {
          window.location.href = location;
          return;
        }
      }

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || (isAr ? 'تعذّر إرسال الطلب.' : 'Could not submit the request.'));
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (data.inquiry_id) {
        window.location.href = `/${locale}/inquiries/${data.inquiry_id}`;
        return;
      }
      setSubmitted(true);
    } catch {
      setError(isAr ? 'تعذّر الاتصال بالخدمة. يرجى المحاولة بعد قليل.' : 'Could not reach the service. Please try again shortly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="card-frame text-center" style={{ padding: 48 }}>
        <CircleCheck size={36} style={{ color: 'var(--green-600)', margin: '0 auto 14px' }} />
        <h2 className="h3">{isAr ? 'تم استلام طلبك' : 'Your inquiry has been received'}</h2>
      </div>
    );
  }

  const stageNumber = visibleStages.indexOf(currentStage) + 1;
  const isLast = stageIndex >= visibleStages.length - 1;

  return (
    <form onSubmit={handleSubmit}>
      {/* PROGRESS */}
      <div style={{ marginBottom: 32 }}>
        <div className="row-between" style={{ marginBottom: 12 }}>
          <span className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
            {isAr
              ? `المرحلة ${stageNumber} من ${visibleStages.length}`
              : `Stage ${stageNumber} of ${visibleStages.length}`}
          </span>
          <span className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
            {isAr
              ? `${totalVisible} حقلاً منطبقاً على إجاباتك`
              : `${totalVisible} fields apply to your answers`}
          </span>
        </div>
        <div
          style={{
            height: 3,
            background: 'var(--line)',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${(stageNumber / visibleStages.length) * 100}%`,
              background: 'linear-gradient(90deg, var(--green-600), var(--green-400, var(--green-500)))',
              transition: 'width 0.3s ease',
            }}
          />
        </div>
        {/* Stage chips */}
        <div className="filter-chip-row" style={{ marginTop: 14 }}>
          {visibleStages.map((s, i) => (
            <button
              key={s}
              type="button"
              onClick={() => setStageIndex(i)}
              className={`filter-chip ${i === stageIndex ? 'active' : ''}`}
              style={{ fontSize: '0.72rem', padding: '5px 11px' }}
            >
              {i < stageIndex ? <Check size={11} /> : null}
              {isAr ? STAGE_LABELS[s]?.ar ?? s : STAGE_LABELS[s]?.en ?? s}
            </button>
          ))}
        </div>
      </div>

      {/* STAGE CARD */}
      <section className="card-frame" style={{ marginBottom: 20 }}>
        <div className="row-between" style={{ marginBottom: 22 }}>
          <h2 className="h3" style={{ margin: 0 }}>
            {isAr ? STAGE_LABELS[currentStage]?.ar ?? currentStage : STAGE_LABELS[currentStage]?.en ?? currentStage}
          </h2>
          <span className="badge badge-locked">
            {stageFields.length} {isAr ? 'حقل' : 'fields'}
          </span>
        </div>

        <div className="stack-6">
          {stageFields.map((f) => (
            <RfqField
              key={f.key}
              field={f}
              value={values[f.key]}
              onChange={(v) => setValue(f.key, v)}
              isAr={isAr}
              required={isRequired(f)}
            />
          ))}
        </div>

        {stageFields.length === 0 && (
          <p className="text-body" style={{ fontSize: '0.88rem' }}>
            {isAr
              ? 'لا توجد حقول إضافية لهذه المرحلة بناءً على إجاباتك الحالية.'
              : 'No additional fields apply at this stage given your current answers.'}
          </p>
        )}
      </section>

      {/* ERROR */}
      {error && (
        <div
          className="cluster"
          role="alert"
          style={{
            gap: 8,
            marginBottom: 16,
            padding: '12px 16px',
            background: 'var(--terracotta-tint)',
            border: '1px solid var(--terracotta-line)',
            borderRadius: 6,
            color: 'var(--terracotta)',
            fontSize: '0.86rem',
          }}
        >
          <Info size={15} />
          {error}
        </div>
      )}

      {/* NAVIGATION */}
      <div className="row-between">
        <button
          type="button"
          onClick={() => setStageIndex((i) => Math.max(0, i - 1))}
          disabled={stageIndex === 0}
          className="btn btn-outline btn-sm"
        >
          <ChevronLeft size={14} />
          {isAr ? 'السابق' : 'Back'}
        </button>

        <div className="cluster" style={{ gap: 8 }}>
          <span className="meta" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>
            <Lock size={11} style={{ display: 'inline', verticalAlign: 'middle', marginInlineEnd: 4 }} />
            {isAr
              ? 'تبقى بياناتك محجوبة حتى تعتمد على مستلم محدد بالاسم'
              : 'Your contact details stay withheld until you approve a named recipient'}
          </span>
        </div>

        {isLast ? (
          <button type="submit" disabled={submitting} className="btn btn-primary btn-lg">
            {submitting ? <Loader2 size={16} className="spin" /> : <ShieldCheck size={16} />}
            {isAr ? 'إرسال الطلب ←' : 'Submit inquiry →'}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setStageIndex((i) => Math.min(visibleStages.length - 1, i + 1))}
            className="btn btn-primary btn-lg"
          >
            {isAr ? 'التالي' : 'Continue'}
            <ChevronRight size={15} />
          </button>
        )}
      </div>
    </form>
  );
}

/* ==========================================================================
   Individual field renderer
   ========================================================================== */

function RfqField({
  field,
  value,
  onChange,
  isAr,
  required,
}: {
  field: PublicField;
  value: any;
  onChange: (v: any) => void;
  isAr: boolean;
  required: boolean;
}) {
  const choices = choicesOf(field);
  // The DOM id is the PUBLIC key, not the internal Q identifier.
  //
  // OG-A10 removed the Q identifiers from the customer-facing form, but the
  // element ids still carried them, so `id="Q01"` and `for="Q01"` were in
  // the served HTML and in the RSC payload. The internal schema id stays
  // where it belongs — in the admin schema and in the field map — and the
  // buyer-facing document carries only the public key. The key is also the
  // field's form name, so the two were already the same string.
  const name = field.key;
  const id = name;
  const label = publicLabel(field.key, isAr);
  const help = publicHelp(field.key, isAr);
  const isChoice = field.inputType === 'Select';

  // Affirmative controls (consent, opt-ins, redaction permission) must be
  // unticked checkboxes, never free text.
  const isAffirmative = field.inputType === 'Checkbox';

  // The processing notice is a read-only recipient banner, not an input.
  const isNotice = field.inputType === 'Read-only';

  if (isNotice) {
    return (
      <div
        className="privacy-shield"
        style={{ margin: 0, display: 'block' }}
      >
        <div className="privacy-shield-body">
          <h4>{label}</h4>
          <p>{help}</p>
        </div>
      </div>
    );
  }

  if (isAffirmative) {
    return (
      <div className="form-field" style={{ marginBottom: 0 }}>
        <label
          className="form-label"
          htmlFor={id}
          style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}
        >
          <input
            id={id}
            name={name}
            type="checkbox"
            checked={value === true || value === 'true'}
            onChange={(e) => onChange(e.target.checked)}
            style={{ marginTop: 3, width: 16, height: 16, accentColor: 'var(--green-700)', flexShrink: 0 }}
          />
          <span>
            {label}
            {required && <span style={{ color: 'var(--terracotta)', marginInlineStart: 4 }}>*</span>}
          </span>
        </label>
        {help && (
          <p className="form-help">
            <Lock size={10} style={{ display: 'inline', verticalAlign: 'middle', marginInlineEnd: 4 }} />
            {help}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="form-field" style={{ marginBottom: 0 }}>
      <label className="form-label" htmlFor={id}>
        {label}
        {required && <span style={{ color: 'var(--terracotta)', marginInlineStart: 4 }}>*</span>}
      </label>

      {isChoice && choices.length > 0 ? (
        <select
          id={id}
          name={name}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          className="form-select"
          required={required}
        >
          <option value="">{isAr ? 'اختر...' : 'Select...'}</option>
          {choices.map((c) => (
            <option key={c} value={c}>
              {publicOptionLabel(field.key, c, isAr)}
            </option>
          ))}
        </select>
      ) : field.inputType === 'Textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          className="form-textarea"
          rows={3}
          required={required}
        />
      ) : field.inputType === 'Number' ? (
        <input
          id={id}
          name={name}
          type="number"
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          className="form-input"
          required={required}
        />
      ) : field.inputType === 'Date' ? (
        <input
          id={id}
          name={name}
          type="date"
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          className="form-input"
          required={required}
        />
      ) : field.inputType === 'File' ? (
        <input
          id={id}
          name={name}
          type="file"
          className="form-input"
          style={{ padding: 8 }}
        />
      ) : (
        <input
          id={id}
          name={name}
          type="text"
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          className="form-input"
          required={required}
        />
      )}

      {help && (
        <p className="form-help">
          <Lock size={10} style={{ display: 'inline', verticalAlign: 'middle', marginInlineEnd: 4 }} />
          {help}
        </p>
      )}
    </div>
  );
}
