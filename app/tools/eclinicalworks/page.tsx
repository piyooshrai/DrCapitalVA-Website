import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'eClinicalWorks EHR Virtual Assistant Support | Dr. Capital VA',
  description: 'Dr. Capital VA expertise with eClinicalWorks. VA support for scheduling, patient data management, billing, and practice optimization.',
};

const EclinicalWorksPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '#' }, { label: 'eClinicalWorks', href: '/tools/eclinicalworks' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">eClinicalWorks EHR Virtual Assistant Support</h1>
          <p className="text-xl text-text-secondary">Expert VA support for eClinicalWorks users. Scheduling, patient management, billing, and clinical workflow optimization.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">About eClinicalWorks</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            eClinicalWorks is a comprehensive EHR and practice management solution widely used by independent practices and urgent care clinics.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">VA Tasks in eClinicalWorks</h2>
          <ul className="space-y-3 text-text-secondary mb-12">
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Appointment scheduling and optimization</span></li>
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Insurance verification and eligibility</span></li>
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Medical billing and claims management</span></li>
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Patient communication and follow-up</span></li>
          </ul>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Optimize Your eClinicalWorks Workflow?</h2>
            <p className="mb-6 text-lg text-white/80">Get an eClinicalWorks-trained VA to manage your scheduling, billing, and patient engagement.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EclinicalWorksPage;
