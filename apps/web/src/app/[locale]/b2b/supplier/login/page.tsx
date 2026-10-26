import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { SupplierLoginForm } from '@/components/b2b/supplier-login-form';

export const metadata: Metadata = {
  title: 'Supplier Sign In',
  description: 'Sign in to the OudGuide supplier console.',
  robots: { index: false, follow: false },
};

export default async function B2bSupplierLoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  void params;
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 560 }}>
        <div className="card-frame" style={{ padding: 32 }}>
          <SupplierLoginForm />
        </div>
      </div>
    </div>
  );
}
