'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface HeroQuickRfqProps {
  locale: string;
  isAr: boolean;
}

export function HeroQuickRfq({ locale, isAr }: HeroQuickRfqProps) {
  const router = useRouter();
  const [material, setMaterial] = useState('');
  const [quantity, setQuantity] = useState('1-5 kg / 10-50 tolas');
  const [destination, setDestination] = useState('United Arab Emirates');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (material) params.set('family', material);
    if (quantity) params.set('volume', quantity);
    if (destination) params.set('country', destination);
    router.push(`/${locale}/rfq?${params.toString()}`);
  };

  return (
    <div className="tradeling-rfq-widget">
      <div className="tradeling-rfq-head">
        <div className="cluster" style={{ gap: 8 }}>
          <div className="tradeling-rfq-badge-icon">
            <FileText size={15} />
          </div>
          <span className="tradeling-rfq-head-title">
            {isAr ? 'طلب عروض أسعار فوري بالجملة' : 'Request Instant Wholesale Quotations'}
          </span>
        </div>
        <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
          <Clock size={11} />
          {isAr ? 'رد خلال 24 ساعة' : '1-Min Submission'}
        </span>
      </div>

      <p className="tradeling-rfq-subtitle">
        {isAr
          ? 'حدد المادة والكمية المطلوبة. تصلك عروض تسعير مباشرة من مقطرين ومزارع معتمدة دون وسطاء.'
          : 'Specify your requirement and receive competitive wholesale quotations directly from accredited distillers and producers.'}
      </p>

      <form onSubmit={handleSubmit} className="tradeling-rfq-form">
        <div className="tradeling-rfq-input-group">
          <label className="tradeling-rfq-label">
            {isAr ? 'المادة أو الصنف المطلوب' : 'Material or Product Family'}
          </label>
          <input
            type="text"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            placeholder={isAr ? 'مثال: دهن عود هندي معتق، خشب غطاس...' : 'e.g., Aged Assam Oud Oil, Wild Sinking Wood...'}
            className="form-input"
            required
          />
        </div>

        <div className="tradeling-rfq-row">
          <div className="tradeling-rfq-input-group" style={{ flex: 1 }}>
            <label className="tradeling-rfq-label">
              {isAr ? 'الكمية التقديرية' : 'Estimated Volume'}
            </label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="form-select"
            >
              <option value="Sample lot / 1-5 tolas">{isAr ? 'عينات فحص (1-5 تولات / 100غ)' : 'Evaluation Sample (1-5 tolas)'}</option>
              <option value="1-5 kg / 10-50 tolas">{isAr ? 'كمية تجارية صغيرة (1-5 كغ / 10-50 تولة)' : 'Small Commercial (1-5 kg / 10-50 tolas)'}</option>
              <option value="10-50 kg / 100+ tolas">{isAr ? 'شحنة جملة كبيرة (10-50 كغ / 100+ تولة)' : 'Wholesale Bulk (10-50 kg / 100+ tolas)'}</option>
              <option value="Contract production">{isAr ? 'توريد تعاقدي سنوي / تصنيع خاص' : 'Contract Annual Distillation'}</option>
            </select>
          </div>

          <div className="tradeling-rfq-input-group" style={{ flex: 1 }}>
            <label className="tradeling-rfq-label">
              {isAr ? 'بلد التسليم' : 'Destination Country'}
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="form-select"
            >
              <option value="United Arab Emirates">{isAr ? 'الإمارات العربية المتحدة (دبي / أبوظبي)' : 'United Arab Emirates (Dubai / Abu Dhabi)'}</option>
              <option value="Saudi Arabia">{isAr ? 'المملكة العربية السعودية (الرياض / جدة)' : 'Saudi Arabia (Riyadh / Jeddah)'}</option>
              <option value="Kuwait">{isAr ? 'دولة الكويت (مدينة الكويت)' : 'Kuwait (Kuwait City)'}</option>
              <option value="Qatar">{isAr ? 'دولة قطر (الدوحة)' : 'Qatar (Doha)'}</option>
              <option value="Oman">{isAr ? 'سلطنة عمان (مسقط)' : 'Oman (Muscat)'}</option>
              <option value="United Kingdom">{isAr ? 'المملكة المتحدة (لندن)' : 'United Kingdom (London)'}</option>
              <option value="United States">{isAr ? 'الولايات المتحدة الأمريكية' : 'United States (New York)'}</option>
              <option value="France">{isAr ? 'فرنسا (باريس / غراس)' : 'France (Paris / Grasse)'}</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-lg tradeling-rfq-submit">
          <span>{isAr ? 'الحصول على عروض الأسعار الآن' : 'Get Verified Wholesale Quotes'}</span>
          <ArrowRight size={15} className="icon-dir-flip" />
        </button>

        <div className="tradeling-rfq-footer">
          <span className="cluster" style={{ gap: 5 }}>
            <CheckCircle2 size={13} style={{ color: 'var(--green-700)' }} />
            <span>{isAr ? 'بدون عمولة وساطة' : '0% Commission'}</span>
          </span>
          <span className="cluster" style={{ gap: 5 }}>
            <ShieldCheck size={13} style={{ color: 'var(--green-700)' }} />
            <span>{isAr ? 'حماية بيانات المشتري' : 'Confidential Buyer Data'}</span>
          </span>
          <span className="cluster" style={{ gap: 5 }}>
            <CheckCircle2 size={13} style={{ color: 'var(--green-700)' }} />
            <span>{isAr ? 'موردون معتمدون' : 'Direct Distillers'}</span>
          </span>
        </div>
      </form>
    </div>
  );
}
