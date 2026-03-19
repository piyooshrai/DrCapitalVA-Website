import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Athenahealth Virtual Assistant Support | Dr. Capital VA',
  description: 'Dr. Capital VA expertise with Athenahealth EHR. VA tasks in Athena scheduling, billing, insurance verification, and platform optimization.',
};

export default function AthenaHealthPage() {
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
            Athenahealth is a cloud-based EHR and practice management platform used by thousands of healthcare practices across the US. It handles patient scheduling, medical billing, insurance verification, clinical documentation, and revenue cycle management in a single integrated system. Many practices choose Athena for its user-friendly interface and comprehensive billing automation.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">VA Tasks in Athenahealth</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">1. Appointment Scheduling & Management</h3>
              <p className="text-text-secondary text-sm">Your VA manages patient appointments directly in Athena's scheduling module. They create new appointments, modify existing ones, send confirmation messages, manage cancellations, and optimize scheduling to reduce no-shows and gaps. They ensure proper scheduling of procedures and follow-ups based on clinical protocols.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">2. Insurance Verification</h3>
              <p className="text-text-secondary text-sm">Before appointments, your VA verifies patient insurance eligibility in Athena. They check coverage, copays, deductibles, and prior authorization requirements. This prevents appointment-day surprises and ensures your practice gets paid. Athena integrates with insurance clearinghouses, making verification fast and accurate.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">3. Patient Registration & Data Entry</h3>
              <p className="text-text-secondary text-sm">Your VA updates and maintains patient demographics in Athena. They enter new patient information, update contact details, manage insurance information, and ensure data accuracy. Clean data in Athena means faster claims processing and better reporting.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">4. Medical Billing & Claims Submission</h3>
              <p className="text-text-secondary text-sm">Athena's billing engine is powerful, but it requires oversight. Your VA monitors claims submission, reviews claim statuses, identifies rejections, and resubmits corrected claims. They work with the clearinghouse to ensure clean claims reach insurers and get paid faster. This is one of the highest-value tasks a VA can perform.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">5. Denial Management & Follow-Up</h3>
              <p className="text-text-secondary text-sm">When claims are denied, your VA reviews denial reasons in Athena, determines if it's a provider error, payer error, or missing documentation, and takes corrective action. They resubmit claims with corrected info, appeal if necessary, and track payment status. This directly increases your revenue.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">6. Patient Follow-Up & Recalls</h3>
              <p className="text-text-secondary text-sm">Your VA uses Athena's patient communication tools to send appointment reminders, follow-up messages after visits, preventive care reminders, and recalls. They track open action items in Athena and ensure nothing falls through the cracks. This improves patient engagement and appointment adherence.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">7. Athena Reporting & Analytics</h3>
              <p className="text-text-secondary text-sm">Athena has robust reporting tools. Your VA runs daily/weekly reports on appointment no-shows, claim acceptance rates, revenue by provider, aging AR (accounts receivable), and other KPIs. These reports inform your practice decisions and identify bottlenecks.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">8. Patient Billing & Collections</h3>
              <p className="text-text-secondary text-sm">Your VA manages patient statements in Athena. They follow up on unpaid balances, send payment reminders, respond to patient billing questions, and process payments. This improves your patient collections rate and cash flow.</p>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Specialties That Use Athenahealth</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['Primary Care', 'Dental', 'Mental Health', 'Orthopedics', 'Dermatology', 'Multi-Location Clinics'].map((specialty, idx) => (
              <div key={idx} className="bg-warm-cream rounded-lg p-4 border border-gray-200">
                <p className="text-text-secondary text-sm">→ {specialty}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Why VAs Excel in Athena</h2>
          <ul className="space-y-3 text-text-secondary mb-12">
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Intuitive interface:</strong> Athena is designed to be user-friendly. VAs can learn it quickly and become productive in days.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Comprehensive platform:</strong> All tasks (scheduling, billing, patient comms) are in one system. VAs don't need to juggle 5 different tools.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Automation-friendly:</strong> Athena has built-in workflows and automations that VAs can leverage to work smarter.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>High-value tasks:</strong> Billing, claims, denials, and recalls directly impact revenue. VAs quickly pay for themselves.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Example: Dental Practice Using Athena + Dr. Capital VA</h3>
          <div className="bg-warm-cream rounded-lg p-8 border-l-4 border-coral-accent mb-12">
            <p className="text-text-secondary mb-4">
              <strong>Scenario:</strong> A 2-provider dental practice using Athena was struggling with scheduling gaps, insurance verification delays, and patient follow-up.
            </p>
            <p className="text-text-secondary mb-4">
              <strong>With Dr. Capital VA:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-6">
              <li>VA manages Athena scheduling → 90% practice utilization (was 70%)</li>
              <li>VA verifies insurance before visits → 100% coverage confirmed (saves billing surprises)</li>
              <li>VA sends recall reminders → 35% improvement in preventive appointment bookings</li>
              <li>VA monitors claims in Athena → 8% denial rate (was 12%)</li>
            </ul>
            <p className="text-text-secondary font-semibold">
              Result: $3,500/month revenue increase. ROI on $1,300/month VA cost is immediate.
            </p>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Does Dr. Capital VA know Athenahealth?</h3>
              <p className="text-text-secondary text-sm">Yes. All our VAs are trained on Athena's core modules (scheduling, billing, eligibility, claims). They arrive ready to work, no onboarding needed on the platform.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Can a VA handle medical billing in Athena?</h3>
              <p className="text-text-secondary text-sm">Absolutely. Medical billing is one of the highest-impact tasks. Your VA monitors claims, manages denials, tracks AR, and ensures clean claims reach payers. Many practices see 20%+ improvement in collection rates.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Will the VA need my Athena login?</h3>
              <p className="text-text-secondary text-sm">Yes, but securely. Your VA accesses Athena via a VPN and encrypted connection. We follow HIPAA security protocols. You maintain control and can audit all VA activity through Athena's access logs.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What if we're a small practice?</h3>
              <p className="text-text-secondary text-sm">Part-time VAs ($700/month) work great for small practices. Even 10 hours/week of Athena management (scheduling, recalls, basic billing oversight) typically saves practices $1,000+/month in increased revenue.</p>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Related Services for Athena Users</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <a href="/services/medical-billing" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-coral-accent transition">
              <p className="font-semibold text-teal-deep">Medical Billing</p>
              <p className="text-text-secondary text-sm">Claims, denials, and revenue cycle</p>
            </a>
            <a href="/services/patient-scheduling" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-coral-accent transition">
              <p className="font-semibold text-teal-deep">Patient Scheduling</p>
              <p className="text-text-secondary text-sm">Appointments and no-show reduction</p>
            </a>
            <a href="/services/patient-follow-up" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-coral-accent transition">
              <p className="font-semibold text-teal-deep">Patient Follow-Up</p>
              <p className="text-text-secondary text-sm">Recalls and patient engagement</p>
            </a>
            <a href="/services/intake-management" className="bg-white rounded-lg p-4 border border-gray-200 hover:border-coral-accent transition">
              <p className="font-semibold text-teal-deep">Intake Management</p>
              <p className="text-text-secondary text-sm">Patient registration and data entry</p>
            </a>
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
}
