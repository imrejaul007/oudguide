'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2, Send, ShieldCheck, FileText } from 'lucide-react';
import { quickLeadCopy, pick } from '@/lib/copy/b2b-portal';

interface QuickLeadFormProps {
  locale: string;
  isAr: boolean;
  /** Pre-fill the family, e.g. from a product page CTA. */
  initialFamily?: string;
  /** Pre-fill the destination, e.g. from the hero widget. */
  initialDestination?: string;
  /** Address the request to one supplier rather than to matching. */
  initialSupplierSlug?: string;
  /** Where this form was submitted from, for lead attribution. */
  source?: string;
}

const FAMILIES = [
  { value: 'Oud wood', label: 'Oud wood / agarwood' },
  { value: 'Oud oil', label: 'Oud oil (dehn al oud)' },
  { value: 'Perfume oil', label: 'Perfume oil' },
  { value: 'Finished perfume', label: 'Finished perfume / attar' },
  { value: 'Bakhoor/incense', label: 'Bakhoor / incense' },
  { value: 'Sandalwood', label: 'Sandalwood' },
  { value: 'Other', label: 'Other' },
];

const DESTINATIONS = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Kuwait',
  'Qatar',
  'Oman',
  'Bahrain',
  'Jordan',
  'Egypt',
  'United Kingdom',
  'United States',
  'France',
  'Germany',
  'India',
  'Other',
];

const TIMELINES = [
  'Within 2 weeks',
  'Within 1 month',
  'Within 3 months',
  'Within 6 months',
  'Flexible / contract',
];

export function QuickLeadForm({
  locale,
  isAr,
  initialFamily,
  initialDestination,
  initialSupplierSlug,
  source = 'quick-form',
}: QuickLeadFormProps) {
  const router = useRouter();
  const [family, setFamily] = useState(initialFamily ?? '');
  const [quantity, setQuantity] = useState('');
  const [destination, setDestination] = useState(initialDestination ?? '');
  const [timeline, setTimeline] = useState('');
  const [samples, setSamples] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setError(
        isAr
          ? 'يرجى الموافقة على مشاركة المتطلبات مع الموردين قبل الإرسال.'
          : 'Please agree to share your requirement with matching suppliers before submitting.'
      );
      return;
    }

    setSubmitting(true);
    setError(null);

    const payload = new URLSearchParams({
      source,
      product_family: family,
      quantity,
      destination_country: destination,
      timeline,
      samples_requested: samples ? 'true' : 'false',
      buyer_name: name,
      company_name: company,
      buyer_email: email,
      buyer_whatsapp: phone,
      preferred_channel: 'email',
      consent_to_contact: consent ? 'true' : 'false',
      consent_to_quote: consent ? 'true' : 'false',
    });

    if (initialSupplierSlug) {
      payload.set('selected_supplier_slug', initialSupplierSlug);
    }

    try {
      const res = await fetch('/api/v1/b2b/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.lead_id) {
        throw new Error(data.error || 'Submission failed');
      }

      router.push(`/${locale}/b2b/quote/${data.lead_id}`);
    } catch (err) {
      setError(
        isAr
          ? 'تعذر إرسال الطلب. يرجى المحاولة مرة أخرى.'
          : 'Could not submit your request. Please try again.'
      );
      setSubmitting(false);
      void err;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="quick-lead-form" noValidate>
      <div className="quick-lead-grid">
        <div className="quick-lead-field">
          <label htmlFor="ql-family">{pick(locale, quickLeadCopy.material)}</label>
          <select
            id="ql-family"
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            required
          >
            <option value="" disabled>
              {isAr ? 'اختر...' : 'Select…'}
            </option>
            {FAMILIES.map((f) => (
              <option key={f.value} value={f.value}>
                {isAr
                  ? {
                      'Oud wood': 'خشب العود / القرع',
                      'Oud oil': 'دهن العود',
                      'Perfume oil': 'زيت العطر',
                      'Finished perfume': 'عطر جاهز / عطارة',
                      'Bakhoor/incense': 'بخور',
                      Sandalwood: 'صندل',
                      Other: 'أخرى',
                    }[f.value as keyof Record<string, string> | undefined] ?? f.label
                  : f.label}
              </option>
            ))}
          </select>
        </div>

        <div className="quick-lead-field">
          <label htmlFor="ql-quantity">{pick(locale, quickLeadCopy.quantity)}</label>
          <input
            id="ql-quantity"
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder={pick(locale, quickLeadCopy.quantityPlaceholder)}
          />
        </div>

        <div className="quick-lead-field">
          <label htmlFor="ql-destination">{pick(locale, quickLeadCopy.destination)}</label>
          <select
            id="ql-destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          >
            <option value="" disabled>
              {isAr ? 'اختر...' : 'Select…'}
            </option>
            {DESTINATIONS.map((d) => (
              <option key={d} value={d}>
                {isAr
                  ? {
                      'United Arab Emirates': 'الإمارات العربية المتحدة',
                      'Saudi Arabia': 'المملكة العربية السعودية',
                      Kuwait: 'الكويت',
                      Qatar: 'قطر',
                      Oman: 'عُمان',
                      Bahrain: 'البحرين',
                      Jordan: 'الأردن',
                      Egypt: 'مصر',
                      'United Kingdom': 'المملكة المتحدة',
                      'United States': 'الولايات المتحدة',
                      France: 'فرنسا',
                      Germany: 'ألمانيا',
                      India: 'الهند',
                      Other: 'أخرى',
                    }[d as keyof Record<string, string> | undefined] ?? d
                  : d}
              </option>
            ))}
          </select>
        </div>

        <div className="quick-lead-field">
          <label htmlFor="ql-timeline">{pick(locale, quickLeadCopy.timeline)}</label>
          <select
            id="ql-timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
          >
            <option value="">{isAr ? 'لا بأس بالانتظار' : 'Flexible'}</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="quick-lead-field">
          <label htmlFor="ql-name">{pick(locale, quickLeadCopy.name)}</label>
          <input
            id="ql-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="quick-lead-field">
          <label htmlFor="ql-company">{pick(locale, quickLeadCopy.company)}</label>
          <input
            id="ql-company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="quick-lead-field">
          <label htmlFor="ql-email">{pick(locale, quickLeadCopy.email)}</label>
          <input
            id="ql-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="quick-lead-field">
          <label htmlFor="ql-phone">{pick(locale, quickLeadCopy.phone)}</label>
          <input
            id="ql-phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            dir="ltr"
          />
        </div>
      </div>

      <label className="quick-lead-check">
        <input
          type="checkbox"
          checked={samples}
          onChange={(e) => setSamples(e.target.checked)}
        />
        <span>{pick(locale, quickLeadCopy.samples)}</span>
      </label>

      <label className="quick-lead-check quick-lead-consent">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
        />
        <span>{pick(locale, quickLeadCopy.consent)}</span>
      </label>

      {error && <p className="quick-lead-error" role="alert">{error}</p>}

      <button
        type="submit"
        className="btn btn-primary btn-lg quick-lead-submit"
        disabled={submitting}
      >
        {submitting ? <Loader2 size={15} className="spin" /> : <Send size={15} />}
        <span>{pick(locale, quickLeadCopy.submit)}</span>
      </button>

      <div style={{ display: 'flex', gap: 10, alignItems: 'center', justifyContent: 'center' }}>
        <Link
          href={`/${locale}/rfq${family ? `?family=${encodeURIComponent(family)}` : ''}`}
          style={{
            display: 'inline-flex',
            gap: 6,
            alignItems: 'center',
            fontSize: '0.85rem',
            color: 'var(--ink-muted)',
            fontWeight: 500,
          }}
        >
          <FileText size={13} />
          {isAr ? 'ملء المواصفات الكاملة (67 حقلاً)' : 'Fill the full 67-field specification'}
        </Link>
      </div>

      <p className="quick-lead-privacy-note">
        <ShieldCheck size={13} />
        {isAr
          ? 'تبقى بيانات اتصالك محجوبة حتى تعتمِد الموردَ بالاسم.'
          : 'Your contact details stay withheld until you approve a supplier by name.'}
      </p>
    </form>
  );
}
