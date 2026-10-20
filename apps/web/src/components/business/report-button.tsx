'use client';

import { useState } from 'react';
import { Flag, Loader2, CheckCircle2, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

/**
 * "Report this producer" control.
 *
 * Pattern ported from IndexOrbit's report modal on the business profile
 * (`src/app/businesses/[slug]/client.tsx` → `ReportForm`). OudGuide's
 * version routes through the toast system for feedback rather than
 * `alert()`, and uses the clean/green skin.
 */

const REASONS = [
  { value: 'INCORRECT_INFO', label: 'Incorrect information', labelAr: 'معلومات غير صحيحة' },
  { value: 'MISLEADING_CLAIMS', label: 'Misleading origin or quality claims', labelAr: 'ادعاءات منشأ أو جودة مضللة' },
  { value: 'CLOSED_BUSINESS', label: 'Producer is no longer operating', labelAr: 'المنشأة لم تعد تعمل' },
  { value: 'FAKE_LISTING', label: 'Fabricated or impersonated listing', labelAr: 'قائمة مزيّفة أو منتحلة' },
  { value: 'SPAM', label: 'Spam or solicitation', labelAr: 'إزعاج أو رسائل ترويجية' },
  { value: 'OTHER', label: 'Other', labelAr: 'أخرى' },
];

export function ReportButton({
  slug,
  producerName,
  locale,
}: {
  slug: string;
  producerName: string;
  locale: string;
}) {
  const isAr = locale === 'ar';
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason) {
      toast({
        title: isAr ? 'الرجاء اختيار سبب' : 'Please choose a reason',
        variant: 'error',
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`/api/v1/directory/businesses/${slug}/report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason, description }),
      });
      const data = await res.json();

      if (!res.ok) {
        toast({
          title: isAr ? 'تعذّر إرسال البلاغ' : 'Could not submit the report',
          description: data.error,
          variant: 'error',
        });
        return;
      }

      setDone(true);
      toast({
        title: isAr ? 'تم استلام البلاغ' : 'Report received',
        description: isAr
          ? 'سيراجع فريق التحرير هذا الملف خلال المدة النظامية.'
          : 'Our editorial team will review this profile within statutory timelines.',
        variant: 'success',
      });
      setTimeout(() => {
        setIsOpen(false);
        setDone(false);
        setReason('');
        setDescription('');
      }, 1600);
    } catch {
      toast({
        title: isAr ? 'تعذّر إرسال البلاغ' : 'Could not submit the report',
        description: isAr ? 'يرجى المحاولة بعد قليل.' : 'Please try again shortly.',
        variant: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="btn btn-ghost btn-sm"
        style={{ color: 'var(--ink-soft)' }}
      >
        <Flag size={13} />
        {isAr ? 'الإبلاغ عن هذا الملف' : 'Report this profile'}
      </button>

      {isOpen && (
        <div className="mihrab-modal" onClick={() => setIsOpen(false)}>
          <div
            className="mihrab-modal-content"
            style={{ maxWidth: 480 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mihrab-modal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span className="meta">{isAr ? 'بلاغ تحريري' : 'Editorial Report'}</span>
                <h2 style={{ fontSize: '1.2rem', margin: '4px 0 0' }}>
                  {isAr ? 'الإبلاغ عن هذا الملف' : 'Report this producer'}
                </h2>
              </div>
              <button onClick={() => setIsOpen(false)} className="icon-button" aria-label="Close">
                <X size={17} />
              </button>
            </div>

            <div className="mihrab-modal-body">
              {done ? (
                <div className="text-center" style={{ padding: '32px 0' }}>
                  <CheckCircle2 size={40} style={{ color: 'var(--green-600)', margin: '0 auto 14px' }} />
                  <p style={{ fontWeight: 600, margin: 0 }}>
                    {isAr ? 'تم استلام البلاغ' : 'Thank you — your report has been received.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p className="text-body" style={{ fontSize: '0.86rem', marginBottom: 20 }}>
                    {isAr
                      ? `ملاحظة على ملف «${producerName}». يراجع فريق التحرير كل بلاغ، ونصحّح السجل علناً عند التحقق.`
                      : `A note on the ${producerName} profile. Every report is reviewed by the editorial team, and the public register is corrected on verification.`}
                  </p>

                  <div className="form-field">
                    <label className="form-label" htmlFor="report-reason">
                      {isAr ? 'سبب البلاغ *' : 'Reason *'}
                    </label>
                    <select
                      id="report-reason"
                      name="reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      required
                      className="form-select"
                    >
                      <option value="">{isAr ? 'اختر السبب...' : 'Select a reason...'}</option>
                      {REASONS.map((r) => (
                        <option key={r.value} value={r.value}>
                          {isAr ? r.labelAr : r.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label" htmlFor="report-description">
                      {isAr ? 'تفاصيل إضافية' : 'Additional details'}
                    </label>
                    <textarea
                      id="report-description"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      maxLength={2000}
                      className="form-textarea"
                      placeholder={isAr
                        ? 'اذكر الدليل المرجعي أو المصدر الذي بُني عليه البلاغ...'
                        : 'Cite the reference or source that the report is based on...'}
                    />
                  </div>

                  <div className="cluster" style={{ justifyContent: 'flex-end', marginTop: 8 }}>
                    <button type="button" onClick={() => setIsOpen(false)} className="btn btn-outline btn-sm">
                      {isAr ? 'إلغاء' : 'Cancel'}
                    </button>
                    <button type="submit" disabled={submitting} className="btn btn-primary btn-sm">
                      {submitting ? <Loader2 size={14} className="spin" /> : <Flag size={14} />}
                      {isAr ? 'إرسال البلاغ' : 'Submit report'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
