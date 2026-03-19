import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Epic EHR Virtual Assistant Support | Dr. Capital VA',
  description: 'Dr. Capital VA expertise with Epic EHR. VA support for scheduling, patient access, billing, and administrative tasks in Epic.',
};

const EpicPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '#' }, { label: 'Epic', href: '/tools/epic' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Epic EHR Virtual Assistant Support</h1>
          <p className="text-xl text-text-secondary">Expert VA support for Epic users. Scheduling, patient access portal management, billing support, and administrative optimization.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">About Epic EHR</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Epic is the largest EHR system in the US, used by 56% of hospitals and major health systems. It offers integrated scheduling, EHR, billing, and patient access, but requires dedicated VA support for optimal workflow.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Key VA Tasks in Epic</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">Patient Portal Management</h3>
              <p className="text-text-secondary text-sm">Your VA manages MyChart accounts, activates patient access, and improves patient portal engagement.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">Patient Communication</h3>
              <p className="text-text-secondary text-sm">Your VA manages patient messages in Epic, responds to routine inquiries, and coordinates appointment details.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">Billing Support</h3>
              <p className="text-text-secondary text-sm">Your VA monitors claims in Epic's billing module, tracks claim status, and identifies denials for resubmission.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Optimize Your Epic System?</h2>
            <p className="mb-6 text-lg text-white/80">Get an Epic-trained VA to manage your patient inbox, MyChart, scheduling, and billing support.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Talk to an Epic Specialist
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EpicPage;
