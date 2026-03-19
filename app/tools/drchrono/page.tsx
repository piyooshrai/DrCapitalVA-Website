import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'DrChrono EHR & Practice Management Virtual Assistant Support | Dr. Capital VA',
  description: 'Dr. Capital VA expertise with DrChrono. VA support for scheduling, billing, patient management, and practice optimization.',
};

const DrChronoPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '#' }, { label: 'DrChrono', href: '/tools/drchrono' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">DrChrono EHR & Practice Management Support</h1>
          <p className="text-xl text-text-secondary">Expert VA support for DrChrono users. Scheduling, billing, patient engagement, and administrative workflow optimization.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">About DrChrono</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            DrChrono is a cloud-based EHR and practice management system designed for independent practices and small groups.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">VA Tasks in DrChrono</h2>
          <ul className="space-y-3 text-text-secondary mb-12">
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Scheduling and calendar management</span></li>
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Insurance verification</span></li>
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Medical billing and claims</span></li>
            <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Patient portal engagement</span></li>
          </ul>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Supercharge Your DrChrono System?</h2>
            <p className="mb-6 text-lg text-white/80">Get a DrChrono-trained VA to handle scheduling, billing, and patient engagement while you focus on patient care.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Get DrChrono Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DrChronoPage;
