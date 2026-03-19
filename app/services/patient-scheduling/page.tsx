import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';
import { services, specialties } from '@/lib/healthcare-data';

export const metadata: Metadata = {
  title: 'Patient Scheduling Virtual Assistant | Dr. Capital VA',
  description: 'Appointment booking, rescheduling, no-show management, and calendar optimization by HIPAA-trained patient scheduling VAs.',
};

export default function PatientSchedulingPage() {
  const service = services.find((s) => s.slug === 'patient-scheduling');

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Patient Scheduling', href: '/services/patient-scheduling' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Patient Scheduling Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            Appointment booking, rescheduling, cancellation management, and multi-provider calendar optimization. Your patients get seen on time.
          </p>
        </div>
      </section>

      {/* Tasks */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">What Your Scheduling VA Handles</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Appointment Booking & Rescheduling',
                desc: 'Your VA books appointments based on provider availability and patient preference. Handles reschedules, confirms recurring visits, manages waitlists. Coordinates across multiple locations if needed.',
              },
              {
                title: 'Multi-Provider Calendar Optimization',
                desc: 'Balances provider schedules to avoid conflicts and overbooking. Manages overlap time, lunch breaks, and provider time blocks. Ensures each provider has realistic patient volumes.',
              },
              {
                title: 'Cancellation Management',
                desc: 'Handles cancellations and fills empty slots immediately. Maintains waitlist and notifies eligible patients. Processes refunds or rescheduling. Updates billing system.',
              },
              {
                title: 'Patient Verification & Confirmation',
                desc: 'Confirms upcoming appointments 24-48 hours before. Handles pre-appointment questionnaires and forms. Verifies insurance coverage and co-pays.',
              },
              {
                title: 'No-Show Follow-up',
                desc: 'Tracks no-shows and no-call-no-shows. Follows up with missed-appointment calls. Identifies patterns to reduce future no-shows. Documents reasons in EHR.',
              },
              {
                title: 'New Patient Slot Management',
                desc: 'Allocates appropriate appointment lengths for new vs. returning patients. Tracks first-available slots. Manages new patient intake process alongside scheduling.',
              },
              {
                title: 'Waitlist & Urgent Appointment Coordination',
                desc: 'Maintains active waitlist for last-minute openings. Calls waitlisted patients to fill urgent slots. Coordinates same-day appointments.',
              },
              {
                title: 'EHR Integration & Billing Sync',
                desc: 'Updates your EHR with appointment changes in real-time. Syncs appointments to billing system. Flags no-shows for provider review. Updates patient communication history.',
              },
            ].map((task, idx) => (
              <div key={idx} className="bg-warm-cream rounded-xl p-6 border-l-4 border-teal-accent">
                <h3 className="font-bold text-teal-deep mb-2">{task.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{task.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EHR Tools */}
      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-8">Platforms We Support</h2>
          <p className="text-lg text-white/70 mb-8">
            Your scheduling VA is trained on the major EHR and practice management systems. We don't learn on the job — we certify before day one.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Athenahealth', 'Epic', 'eClinicalWorks', 'Kareo', 'DrChrono', 'Practice Fusion'].map((tool) => (
              <div key={tool} className="bg-white/10 rounded-lg p-4 backdrop-blur border border-white/10">
                <p className="font-semibold text-white">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">HIPAA Compliance in Scheduling</h2>
          <div className="bg-warm-cream rounded-2xl p-8 space-y-4">
            <p className="text-text-secondary">
              Scheduling involves patient data: names, phone numbers, insurance information, appointment history. This is PHI. Your VA handles it with HIPAA rigor.
            </p>
            <ul className="space-y-3 text-text-secondary text-sm">
              {[
                'All scheduling communications encrypted (no PHI in plain text emails)',
                'Patient phone numbers and medical history accessed only in secure EHR',
                'Cancellation/no-show data tracked securely without exposing patient records',
                'Waitlist information protected with role-based access controls',
                'Audit logs track all scheduling changes and who made them',
                'Annual HIPAA recertification required',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-teal-accent flex-shrink-0">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12 text-center">Cost Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-teal-deep text-white">
                  <th className="p-4 text-left font-semibold">Option</th>
                  <th className="p-4 text-center font-semibold">Monthly</th>
                  <th className="p-4 text-center font-semibold">Annual</th>
                  <th className="p-4 text-left font-semibold">What You Get</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="p-4 font-semibold text-teal-deep">Medical Receptionist (Local)</td>
                  <td className="p-4 text-center">$3,200–$3,750</td>
                  <td className="p-4 text-center font-bold text-coral-accent">$38K–$45K</td>
                  <td className="p-4 text-sm">Salary, benefits, turnover risk</td>
                </tr>
                <tr className="bg-teal-deep text-white">
                  <td className="p-4 font-semibold">Dr. Capital VA Scheduling</td>
                  <td className="p-4 text-center font-bold">$700–$1,300</td>
                  <td className="p-4 text-center font-bold">$8.4K–$15.6K</td>
                  <td className="p-4 text-sm">Dedicated, trained, managed, HIPAA-verified</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-secondary text-center mt-6">Save $22K–$36K annually while getting a dedicated, HIPAA-trained professional.</p>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Real Example</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="space-y-4 text-text-secondary">
              <div>
                <h3 className="font-bold text-teal-deep mb-2">Challenge</h3>
                <p>A 4-provider primary care clinic was managing 80+ appointments per week manually. No-show rate was 12%. Patients waited 3+ weeks for appointments. Front desk staff spent 60% of time on scheduling instead of clinical support.</p>
              </div>
              <div>
                <h3 className="font-bold text-teal-deep mb-2">Solution</h3>
                <p>Hired Dr. Capital VA scheduling support. VA took over all appointment booking, rescheduling, and no-show follow-up. Integrated with their Athenahealth EHR. Front desk shifted to patient intake and insurance verification.</p>
              </div>
              <div>
                <h3 className="font-bold text-teal-deep mb-2">Result</h3>
                <p>No-show rate dropped to 7%. Average wait for appointments fell to 10 days. Front desk productivity increased 40%. Administrative cost reduced by $28K annually (full-time hiring cost minus $15.6K VA cost).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Which Specialties Use This Service</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Primary Care', 'Dental', 'Cardiology', 'Orthopedics', 'Dermatology', 'Pediatrics'].map((spec) => (
              <Link key={spec} href={`/specialties/${spec.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md-healthcare transition-all cursor-pointer">
                  <p className="font-semibold text-teal-deep">{spec}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">FAQ</h2>
          <div className="space-y-6">
            {[
              { q: 'Can your VA handle same-day scheduling?', a: 'Yes. They manage waitlists and fill cancellations in real-time. If a slot opens, eligible patients are called immediately.' },
              { q: 'What if our EHR changes?', a: 'We re-train the VA on the new system before you switch. No learning curve for your practice.' },
              { q: 'Can they handle insurance pre-authorization during scheduling?', a: 'They verify insurance coverage and alerts to pre-auth requirements, but complex authorizations are flagged for your staff to handle.' },
              { q: 'Do they handle patient payment collection?', a: 'No. They verify co-pays and inform patients, but actual payment is collected at check-in by your staff.' },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-teal-deep mb-2">{item.q}</h3>
                <p className="text-text-secondary">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-4xl mb-6">Ready to free up your front desk?</h2>
            <p className="text-lg text-white/70 mb-8">
              A scheduling VA typically pays for itself within the first 2-3 months through reduced no-shows and better appointment utilization.
            </p>
            <ContactForm
              showName={false}
              showPhone={false}
              showSpecialty={false}
              showMessage={false}
              buttonText="Book Strategy Call"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
