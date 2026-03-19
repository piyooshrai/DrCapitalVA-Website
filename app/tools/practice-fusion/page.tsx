import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Practice Fusion EHR Virtual Assistant Support | Dr. Capital VA',
  description: 'Dr. Capital VA expertise with Practice Fusion. VA support for scheduling, billing, patient management, and practice optimization.',
};

const PracticeFusionPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '#' }, { label: 'Practice Fusion', href: '/tools/practice-fusion' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Practice Fusion EHR Virtual Assistant Support</h1>
          <p className="text-xl text-text-secondary">Expert VA support for Practice Fusion users. Scheduling, billing, patient engagement, and workflow optimization.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">About Practice Fusion</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Practice Fusion is a cloud-based EHR and practice management system known for its ease of use and strong patient engagement features.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">VA Tasks in Practice Fusion</h2>
          <ul className="space-y-3 text-text-secondary mb-12">
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Appointment scheduling and optimization</span></li>
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Patient portal management</span></li>
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Insurance verification and eligibility</span></li>
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Medical billing and claims</span></li>
          </ul>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Maximize Your Practice Fusion Potential?</h2>
            <p className="mb-6 text-lg text-white/80">Get a Practice Fusion-trained VA who will optimize your patient engagement, billing, and scheduling.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Book Your Strategy Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PracticeFusionPage;
