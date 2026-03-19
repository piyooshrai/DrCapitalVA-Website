import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Download: HIPAA Compliance Checklist for Virtual Assistants',
  description: 'Free downloadable HIPAA checklist for healthcare practices hiring virtual assistants. BAAs, training, security requirements included.',
};

export default function HIPAAChecklistPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Resources', href: '#' }, { label: 'HIPAA Checklist', href: '/resources/hipaa-checklist' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">HIPAA Compliance Checklist for VAs</h1>
          <p className="text-xl text-text-secondary">Download our complete checklist to ensure your VA meets all HIPAA requirements.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h2 className="font-serif text-2xl text-teal-deep mb-6">What's Included</h2>
              <ul className="space-y-3 text-text-secondary mb-8">
                <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>BAA requirements checklist</span></li>
                <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>HIPAA training verification</span></li>
                <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Background check requirements</span></li>
                <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Security controls checklist</span></li>
                <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>NDA template</span></li>
                <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Audit log requirements</span></li>
                <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Breach notification procedures</span></li>
              </ul>
            </div>

            <div className="bg-warm-cream rounded-lg p-8 border-l-4 border-coral-accent">
              <h2 className="font-serif text-2xl text-teal-deep mb-6">Download Now</h2>
              <p className="text-text-secondary mb-6">Enter your email to download the complete HIPAA VA Compliance Checklist (PDF).</p>
              <ContactForm />
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8 mt-16">Why This Matters</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            HIPAA violations can cost $100–$50,000 per patient record exposed. Using this checklist ensures your VA meets all compliance requirements before handling patient data.
          </p>
        </div>
      </section>
    </main>
  );
}
