import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Patient Follow-Up Virtual Assistant | Dr. Capital VA',
  description: 'Post-visit calls, appointment reminders, prescription tracking, lab coordination, and care plan adherence support.',
};

export default function PatientFollowUpPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Patient Follow-Up', href: '/services/patient-follow-up' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Patient Follow-Up Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            Post-visit calls, appointment reminders, prescription refill coordination, lab result notification, and care plan adherence. No patient falls through the cracks.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">What Your Follow-Up VA Does</h2>
          <div className="space-y-6">
            {[
              { title: 'Post-Visit Check-In Calls', desc: 'Calls patients 24-48 hours after visit to check on their condition, answer questions, and identify any issues. Escalates concerns to provider if needed.' },
              { title: 'Appointment Reminders', desc: 'Sends reminders via phone, text, or email 24-48 hours before upcoming appointments. Reduces no-show rate significantly.' },
              { title: 'Prescription Refill Coordination', desc: 'Tracks prescription expiration dates. Coordinates refill requests with pharmacy. Confirms patient received medication.' },
              { title: 'Lab Result Notification', desc: 'Monitors lab results in EHR. Notifies patients when results are available. Explains normal vs abnormal findings in patient-friendly language.' },
              { title: 'Care Plan Adherence Calls', desc: 'For chronic conditions, calls patients to check if they\'re following care plan: medications, lifestyle changes, follow-up appointments.' },
              { title: 'Referral Follow-Through', desc: 'Tracks specialist referrals. Ensures patients schedule appointments. Confirms they attended.' },
              { title: 'Preventive Care Reminders', desc: 'Reminds patients of preventive care due: annual exams, screenings, vaccinations, wellness visits.' },
              { title: 'Patient Satisfaction Surveys', desc: 'Conducts simple post-visit satisfaction surveys. Captures feedback for quality improvement.' },
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
          <h2 className="font-serif text-4xl mb-8">Measurable Outcomes</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold mb-2">40%</div>
              <p className="text-white/70 text-sm">Reduction in no-show rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold mb-2">60%</div>
              <p className="text-white/70 text-sm">Improvement in care plan adherence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold mb-2">35%</div>
              <p className="text-white/70 text-sm">Higher patient satisfaction scores</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">HIPAA-Compliant Patient Communication</h2>
          <div className="bg-warm-cream rounded-2xl p-8 space-y-4">
            <p className="text-text-secondary">
              Patient follow-up requires calling and texting patients about their health. This is sensitive. Your VA maintains HIPAA compliance throughout.
            </p>
            <ul className="space-y-3 text-text-secondary text-sm">
              {[
                'All patient calls logged in EHR for continuity of care',
                'Encryption for SMS/text communications',
                'HIPAA training covers appropriate disclosure and privacy',
                'Calls documented with patient responses in secure records',
                'Do Not Call compliance for phone outreach',
                'Patient consent verified before initiating follow-up',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-teal-accent">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Who Benefits Most</h2>
          <div className="space-y-4">
            {[
              { spec: 'Primary Care', reason: 'Chronic disease management, preventive care tracking, medication adherence' },
              { spec: 'Cardiology', reason: 'Post-procedure follow-up, medication compliance critical for outcomes' },
              { spec: 'Mental Health', reason: 'Treatment adherence and patient engagement directly impact outcomes' },
              { spec: 'Orthopedics', reason: 'Post-op follow-up, PT adherence, pain management support' },
            ].map((item) => (
              <div key={item.spec} className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-teal-deep">{item.spec}</p>
                <p className="text-sm text-text-secondary mt-1">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">Cost Analysis</h2>
          <p className="text-text-secondary mb-8">Follow-up support costs $700–$1,300/month but typically saves more through improved outcomes and reduced readmissions.</p>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-text-secondary">Dr. Capital VA Follow-Up (monthly)</span>
                <span className="font-bold text-teal-deep">$700–$1,300</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-text-secondary">Average readmission avoidance (monthly)</span>
                <span className="font-bold text-coral-accent">$2,000–$5,000+</span>
              </div>
              <div className="flex justify-between items-center pt-3 bg-warm-cream p-4 rounded-lg">
                <span className="font-semibold text-teal-deep">Net monthly benefit</span>
                <span className="font-bold text-green-600">$700–$4,300+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">Improve patient outcomes while reducing costs</h2>
          <p className="text-lg text-white/70 mb-8">Patient follow-up is one of the fastest ROI services we offer.</p>
          <ContactForm showName={false} showPhone={false} showSpecialty={false} showMessage={false} buttonText="See Impact for Your Practice" />
        </div>
      </section>
    </main>
  );
}
