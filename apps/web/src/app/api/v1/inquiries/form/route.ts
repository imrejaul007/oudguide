import { seed, domain } from '@/lib/data';
import { NextResponse } from 'next/server';


import type { RfqFormValues } from '../../../../../../../packages/contracts/src/rfq-fields.ts';



export async function POST(request: Request) {
  const formData = await request.formData();
  const locale = formData.get('locale') || 'en';
  const channel = (formData.get('preferred_contact_channel') as string) || 'email';

  const values: RfqFormValues = {
    product_family: formData.get('product_family') as string,
    quantity: formData.get('quantity') ? Number(formData.get('quantity')) : 10,
    quantity_unit: formData.get('quantity_unit') as string,
    target_price_per_unit: formData.get('target_price_per_unit') as string,
    origin_preference: formData.get('origin_preference') as string,
    destination_country: (formData.get('destination_country') as string) || 'United Arab Emirates',
    destination_city: formData.get('destination_city') as string,
    samples_requested: formData.get('samples_requested') === 'true',
    preferred_contact_channel: channel,
    buyer_name: (formData.get('buyer_name') as string) || 'Commercial Buyer',
    buyer_email: channel === 'email' ? (formData.get('buyer_email') as string) : undefined,
    buyer_phone: channel !== 'email' ? (formData.get('buyer_phone') as string) : undefined,
    company_name: formData.get('company_name') as string,
    request_mode: 'matching',
  };

  const result = domain.submitInquiry(values);
  return NextResponse.redirect(new URL(`/${locale}/inquiries/${result.inquiry_id}`, request.url), 303);
}
