import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Athenahealth Virtual Assistant Support | Dr. Capital VA',
  description: 'Dr. Capital VA expertise with Athenahealth EHR. VA tasks in Athena scheduling, billing, insurance verification, and platform optimization.',
};

const AthenaHealthPage = () => {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '#' }, { label: 'Athenahealth', href: '/tools/athenahealth' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Athenahealth Virtual Assistant Support</h1>
          <p className="text-xl text-text-secondary">Expert Athena support from remote healthcare virtual assistants. Scheduling, billing, insurance verification, and practice optimization.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">What Is Athenahealth?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Athenahealth is a cloud-based EHR and practice management platform used by thousands of healthcare practices across the US. It handles patient scheduling, medical billing, insurance verification, clinical documentation, and revenue cycle management in a single integrated system.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">VA Tasks in Athenahealth</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">Scheduling & Optimization</h3>
              <p className="text-text-secondary text-sm">Your VA manages patient appointments directly in Athena, creates new appointments, modifies existing ones, and optimizes scheduling to reduce no-shows and gaps.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">Insurance Verification</h3>
              <p className="text-text-secondary text-sm">Before appointments, your VA verifies patient insurance eligibility in Athena. They check coverage, copays, deductibles, and prior authorization requirements.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">Medical Billing</h3>
              <p className="text-text-secondary text-sm">Your VA monitors claims submission, reviews claim statuses, identifies rejections, and resubmits corrected claims to ensure faster payment.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready for Athena Support?</h2>
            <p className="mb-6 text-lg text-white/80">Get an Athena-trained VA who understands your platform and can optimize your billing, scheduling, and patient engagement.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Get Athena VA Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AthenaHealthPage;
