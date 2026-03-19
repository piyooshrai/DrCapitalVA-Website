import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Telehealth Virtual Assistant | Dr. Capital VA',
  description: 'Virtual visit scheduling, patient tech support, pre-visit form distribution, and telehealth billing support.',
};

export default function TelehealthSupportPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Telehealth Support', href: '/services/telehealth-support' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Telehealth Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            Virtual visit scheduling, patient tech support, pre-visit form distribution, consent collection, and post-visit documentation support.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">What Your Telehealth VA Handles</h2>
          <div className="space-y-6">
            {[
              { title: 'Virtual Visit Scheduling', desc: 'Schedules video appointments. Sends meeting links to patients. Manages timezone conversion. Coordinates multi-provider telehealth.' },
              { title: 'Patient Tech Support', desc: 'Provides pre-visit tech support: How to join video call? Internet speed OK? Camera/microphone working? Troubleshoots connection issues.' },
              { title: 'Pre-Visit Form Distribution', desc: 'Sends pre-visit questionnaires, medical history updates, consent forms to patients via secure portal before telehealth appointment.' },
              { title: 'Telehealth Consent Collection', desc: 'Collects specific telehealth consents: privacy, recording, technology limitations, emergency protocol acknowledgment.' },
              { title: 'Waiting Room Management', desc: 'Monitors virtual waiting room. Checks patient readiness. Alerts provider when patient ready. Handles room drops and reconnections.' },
              { title: 'Post-Visit Documentation Support', desc: 'Follows up with patients after telehealth visit. Sends prescription summaries. Distributes post-visit instructions. Schedules follow-ups.' },
              { title: 'Prescription Follow-Up', desc: 'Tracks prescriptions issued during telehealth. Confirms patient able to fill prescription. Coordinates with pharmacies if needed.' },
              { title: 'Telehealth Billing Support', desc: 'Handles billing for virtual visits: modifier codes, authorization requirements, insurance coverage verification for telehealth.' },
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
          <h2 className="font-serif text-4xl mb-8">Telehealth Platforms Supported</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Doxy.me', 'Zoom for Healthcare', 'Teladoc', 'EHR-Integrated Video', 'Google Meet (HIPAA)', 'Microsoft Teams for Healthcare'].map((platform) => (
              <div key={platform} className="bg-white/10 rounded-lg p-4 backdrop-blur border border-white/10">
                <p className="font-semibold text-white">{platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Why Telehealth Support Matters</h2>
          <div className="bg-warm-cream rounded-2xl p-8 space-y-6">
            <div>
              <h3 className="font-bold text-teal-deep mb-2">Patient No-Shows Are Expensive</h3>
              <p className="text-text-secondary text-sm">Telehealth visits have 25-40% no-show rate without reminder support. Your VA sends reminders and technical support, drastically reducing no-shows.</p>
            </div>
            <div>
              <h3 className="font-bold text-teal-deep mb-2">Tech Support Keeps Visits Running</h3>
              <p className="text-text-secondary text-sm">15% of patients struggle with video tech. Your VA gets them in the room successfully. Provider never waits.</p>
            </div>
            <div>
              <h3 className="font-bold text-teal-deep mb-2">Compliance Is Critical</h3>
              <p className="text-text-secondary text-sm">Telehealth has different consents, privacy rules, and documentation needs than in-person. Your VA ensures HIPAA compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Which Specialties Use Telehealth Support</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Primary Care', 'Mental Health', 'Pediatrics', 'Dermatology', 'Cardiology', 'Therapy/Counseling'].map((spec) => (
              <div key={spec} className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-teal-deep">{spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Telehealth Growth Opportunity</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4 text-text-secondary">
            <div>
              <h3 className="font-semibold text-teal-deep mb-2">Pre-COVID</h3>
              <p className="text-sm">Telehealth: less than 5% of visits</p>
            </div>
            <div>
              <h3 className="font-semibold text-teal-deep mb-2">Post-COVID (2025)</h3>
              <p className="text-sm">Telehealth: 20-30% of visits and growing</p>
            </div>
            <div>
              <h3 className="font-semibold text-teal-deep mb-2">Your Opportunity</h3>
              <p className="text-sm">With proper support, you can safely expand telehealth offerings without increasing admin burden.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Real Impact: Mental Health Practice</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4 text-text-secondary">
            <p><strong className="text-teal-deep">Challenge:</strong> Teletherapy practice had 35% no-show rate on virtual sessions. Therapists were handling tech support, slowing down sessions. Billing for telehealth was confusing.</p>
            <p><strong className="text-teal-deep">Solution:</strong> Telehealth VA manages scheduling reminders, tech support, and billing code verification.</p>
            <p><strong className="text-teal-deep">Result:</strong> No-show rate dropped to 8%. Therapist efficiency improved 25%. Billing accuracy for telehealth codes improved from 72% to 98%.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">Maximize your telehealth revenue</h2>
          <p className="text-lg text-white/70 mb-8">Telehealth support drives higher completion rates and billing accuracy.</p>
          <ContactForm showName={false} showPhone={false} showSpecialty={false} showMessage={false} buttonText="Explore Telehealth Support" />
        </div>
      </section>
    </main>
  );
}
