import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Medical Billing Virtual Assistant | Dr. Capital VA',
  description: 'Insurance verification, claims submission, denial management, and revenue cycle support by HIPAA-trained billing VAs.',
};

export default function MedicalBillingPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Medical Billing', href: '/services/medical-billing' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Medical Billing Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            Insurance verification, eligibility checks, claims submission, denial management, and payment posting. Revenue cycle support without the headache.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">What Your Billing VA Handles</h2>
          <div className="space-y-6">
            {[
              { title: 'Insurance Verification', desc: 'Verifies patient insurance coverage before appointments. Confirms eligibility and benefits. Checks co-pays and deductibles. Updates patient financial responsibility.' },
              { title: 'Eligibility Checking', desc: 'Verifies real-time insurance eligibility. Identifies coverage gaps and pre-authorization requirements. Notifies patients of cost estimates.' },
              { title: 'Claims Submission', desc: 'Prepares and submits claims to insurance companies. Tracks claim status. Handles electronic and paper submissions. Resolves submission rejections.' },
              { title: 'Denial Management', desc: 'Tracks denied claims. Analyzes reasons for denial. Prepares appeals with supporting documentation. Re-submits appeals. Follows up on appeal status.' },
              { title: 'Payment Posting', desc: 'Posts insurance payments to patient accounts. Reconciles payment discrepancies. Updates aging reports. Identifies underpayments.' },
              { title: 'Patient Billing', desc: 'Sends patient billing statements. Follows up on unpaid balances. Negotiates payment plans. Handles insurance-related patient inquiries.' },
              { title: 'EOB Review & Tracking', desc: 'Reviews Explanation of Benefits (EOB) documents. Identifies coding errors. Flags unusual payment patterns. Updates records.' },
              { title: 'Revenue Cycle Reporting', desc: 'Generates monthly revenue cycle reports. Tracks key metrics: days sales outstanding, denial rate, clean claim rate. Identifies bottlenecks.' },
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
          <h2 className="font-serif text-4xl mb-8">Billing Platforms Supported</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Athenahealth', 'Kareo Billing', 'AdvancedMD', 'DrChrono', 'Tebra'].map((tool) => (
              <div key={tool} className="bg-white/10 rounded-lg p-4 backdrop-blur border border-white/10">
                <p className="font-semibold text-white">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">HIPAA & Insurance Compliance</h2>
          <div className="bg-warm-cream rounded-2xl p-8 space-y-4">
            <p className="text-text-secondary">Insurance data is sensitive. Patient account numbers, claim histories, insurance company communications — all PHI. Your billing VA maintains strict compliance.</p>
            <ul className="space-y-3 text-text-secondary text-sm">
              {[
                'Insurance communications encrypted and logged',
                'Patient financial data accessed only in secure billing systems',
                'EOB documents stored securely with audit trails',
                'No PHI shared via email without encryption',
                'Annual HIPAA and billing compliance training',
                'Regular audits of billing practices and error rates',
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
                  <td className="p-4 font-semibold text-teal-deep">Medical Biller (Local)</td>
                  <td className="p-4 text-center">$3,300–$4,600</td>
                  <td className="p-4 text-center font-bold text-coral-accent">$40K–$55K</td>
                  <td className="p-4 text-sm">Salary, benefits, training time</td>
                </tr>
                <tr className="bg-teal-deep text-white">
                  <td className="p-4 font-semibold">Dr. Capital VA Billing</td>
                  <td className="p-4 text-center font-bold">$700–$1,300</td>
                  <td className="p-4 text-center font-bold">$8.4K–$15.6K</td>
                  <td className="p-4 text-sm">Trained, verified, managed, HIPAA-compliant</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-secondary text-center mt-6">Reduce billing costs by $24K–$46K annually while improving claims processing speed.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Impact Example</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="space-y-4 text-text-secondary">
              <p><strong className="text-teal-deep">Challenge:</strong> A 3-provider clinic had 15% denial rate and 45 days average billing cycle time. Insurance denials were being missed. Patient billing was backlogged.</p>
              <p><strong className="text-teal-deep">Solution:</strong> Implemented billing VA support with daily claim tracking and denial follow-up. Integrated with Kareo billing system.</p>
              <p><strong className="text-teal-deep">Result:</strong> Denial rate dropped to 8%. Billing cycle time improved to 28 days. Recovered $12K+ in missed insurance claims within first 60 days.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Specialties Using Billing Support</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Primary Care', 'Dental', 'Orthopedics', 'Cardiology', 'Multi-Location'].map((spec) => (
              <div key={spec} className="bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:shadow-md-healthcare transition-all">
                <p className="font-semibold text-teal-deep">{spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Can they handle complex coding issues?', a: 'They identify coding errors and flag them for your team or compliance officer. They don\'t assign codes (that\'s provider responsibility) but catch documentation gaps.' },
              { q: 'Do they negotiate with insurance companies?', a: 'They communicate with insurance companies on claim status and follow-up, but major negotiation is handled by your practice leadership.' },
              { q: 'What about patient payment negotiations?', a: 'They can set up payment plans and discuss options, but any financial assistance or write-offs are approved by you.' },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-teal-deep mb-2">{item.q}</h3>
                <p className="text-text-secondary">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">See what billing support can do for your revenue cycle</h2>
          <p className="text-lg text-white/70 mb-8">Book a consultation to discuss your current billing challenges.</p>
          <ContactForm showName={false} showPhone={false} showSpecialty={false} showMessage={false} buttonText="Book a Call" />
        </div>
      </section>
    </main>
  );
}
