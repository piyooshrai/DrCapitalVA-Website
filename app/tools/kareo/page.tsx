import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Kareo EHR & Billing Virtual Assistant Support | Dr. Capital VA',
  description: 'Dr. Capital VA expertise with Kareo. VA support for scheduling, medical billing, insurance verification, and patient management.',
};

const KareoPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '#' }, { label: 'Kareo', href: '/tools/kareo' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Kareo EHR & Billing Virtual Assistant Support</h1>
          <p className="text-xl text-text-secondary">Expert VA support for Kareo users. Scheduling, medical billing, insurance verification, and patient management in one integrated platform.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">About Kareo</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Kareo is a cloud-based EHR and practice management platform designed for independent practices, particularly specialty clinics and small health systems.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Key VA Tasks in Kareo</h2>
          <ul className="space-y-3 text-text-secondary mb-12">
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Appointment scheduling and management</span></li>
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Insurance verification and eligibility</span></li>
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Medical billing and claims submission</span></li>
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Patient communication and follow-up</span></li>
          </ul>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Maximize Your Kareo Investment?</h2>
            <p className="mb-6 text-lg text-white/80">Get a Kareo-trained VA who will optimize your billing, scheduling, and patient management.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Get Kareo VA Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default KareoPage;
