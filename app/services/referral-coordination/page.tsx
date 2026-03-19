import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Referral Coordination Virtual Assistant | Dr. Capital VA',
  description: 'Specialist referral processing, prior authorization management, records transfer, and appointment coordination.',
};

export default function ReferralCoordinationPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Referral Coordination', href: '/services/referral-coordination' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Referral Coordination Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            Specialist referral processing, prior authorization management, records transfer coordination, and appointment scheduling with specialists.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">What Your Referral Coordinator Does</h2>
          <div className="space-y-6">
            {[
              { title: 'Specialist Referral Processing', desc: 'Processes referral requests from providers. Determines appropriate specialists. Routes referrals to correct facilities.' },
              { title: 'Prior Authorization Management', desc: 'Initiates prior authorization requests. Tracks authorization status. Follows up on approvals/denials. Re-appeals if denied.' },
              { title: 'Records Transfer Coordination', desc: 'Requests medical records from your practice for specialist. Sends via secure fax/portal. Confirms receipt.' },
              { title: 'Appointment Scheduling', desc: 'Coordinates specialist appointment scheduling. Provides appointment details to patient. Ensures timely scheduling.' },
              { title: 'Insurance Network Verification', desc: 'Verifies specialist is in-network. Confirms coverage. Identifies any restrictions.' },
              { title: 'Referral Status Tracking', desc: 'Maintains referral status log. Tracks pending authorizations. Alerts providers to delays.' },
              { title: 'Patient Communication', desc: 'Updates patients on referral status. Explains authorization requirements. Provides appointment details and preparation instructions.' },
              { title: 'Follow-Up Coordination', desc: 'Ensures specialist results return to primary provider. Schedules follow-up appointment if needed. Confirms care continuity.' },
            ].map((task, idx) => (
              <div key={idx} className="bg-warm-cream rounded-xl p-6 border-l-4 border-teal-accent">
                <h3 className="font-bold text-teal-deep mb-2">{task.title}</h3>
                <p className="text-text-secondary text-sm">{task.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-8">Impact on Patient Care</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-serif font-bold mb-2">60%</div>
              <p className="text-white/70 text-sm">Faster referral processing time</p>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold mb-2">90%</div>
              <p className="text-white/70 text-sm">Authorization approval rate on first attempt</p>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold mb-2">3x</div>
              <p className="text-white/70 text-sm">Fewer prior auth denials with proper documentation</p>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold mb-2">100%</div>
              <p className="text-white/70 text-sm">Care continuity with follow-up coordination</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Referral Workflow Excellence</h2>
          <div className="bg-warm-cream rounded-2xl p-8">
            <div className="space-y-4">
              {[
                'Referral received → Documentation reviewed → Authorization initiated within 24 hours',
                'Insurance contacted → Status tracked → Patient notified of approval/timeline',
                'Specialist appointment scheduled → Records sent → Patient receives appointment details',
                'Specialist appointment occurs → Results returned to PCP → Follow-up scheduled if needed',
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-deep text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-text-secondary pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Specialties Benefiting Most</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Primary Care', 'Cardiology', 'Orthopedics', 'Mental Health', 'Multi-Location'].map((spec) => (
              <div key={spec} className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-teal-deep">{spec}</p>
                <p className="text-xs text-text-muted mt-1">High referral volume</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Example: Orthopedic Clinic</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4 text-text-secondary">
            <p><strong className="text-teal-deep">Challenge:</strong> Orthopedic clinic sends 50+ referrals monthly. Staff spent 20% of time coordinating authorizations. Patients waited 2-3 weeks for specialists due to authorization delays.</p>
            <p><strong className="text-teal-deep">Solution:</strong> Referral VA handles all authorization initiation, tracking, and patient communication. Integrated with EHR for real-time status.</p>
            <p><strong className="text-teal-deep">Result:</strong> Referrals processed within 24 hours. Authorization approval rate improved from 75% to 92% on first attempt. Specialist appointment wait time reduced from 2-3 weeks to 5-7 days.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">Accelerate your referral process</h2>
          <p className="text-lg text-white/70 mb-8">Referral coordination reduces denials, accelerates care, and improves patient satisfaction.</p>
          <ContactForm showName={false} showPhone={false} showSpecialty={false} showMessage={false} buttonText="See ROI for Your Practice" />
        </div>
      </section>
    </main>
  );
}
