import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'EHR Management: How a VA Keeps Patient Records Clean',
  description: 'Why data quality matters and how VAs maintain clean, accurate EHR data for better billing, compliance, and patient care.',
};

export default function EHRManagementPage() {
  return (
    <main>
      <article>
        <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'EHR Management', href: '/blog/ehr-management-va' }]} />
            <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">EHR Management: How a VA Keeps Patient Records Clean</h1>
            <p className="text-text-secondary">Why data quality matters and how VAs maintain accurate EHR data for better billing and compliance.</p>
          </div>
        </section>

        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">The Data Quality Problem</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              70% of healthcare organizations report data quality issues. Dirty data causes claim denials (wrong insurance info), HIPAA violations (incomplete audit trails), billing delays, and patient care errors. A dedicated VA keeps data clean and compliance-ready.
            </p>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Key EHR Data Management Tasks</h2>
            <ul className="space-y-3 text-text-secondary mb-8">
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Patient demographic accuracy (name, DOB, address, contact)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Insurance data entry and updates</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Allergy and medication reconciliation</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Problem list accuracy and relevance</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Chart audit and duplicate resolution</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Documentation completeness verification</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Coding accuracy and compliance audits</span></li>
            </ul>

            <div className="bg-teal-deep text-white rounded-lg p-8 text-center mt-12">
              <h2 className="font-serif text-3xl mb-4">Get Clean, Compliant EHR Data</h2>
              <p className="mb-6 text-lg text-white/80">Let a VA keep your patient records accurate and audit-ready.</p>
              <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Get EHR Management Support
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
