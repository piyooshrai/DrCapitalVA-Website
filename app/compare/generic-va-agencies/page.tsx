import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Dr. Capital VA vs Generic VA Agencies: Why Healthcare is Different',
  description: 'Why healthcare practices should avoid generic VA agencies. Comparison of Dr. Capital VA vs generic VA companies for HIPAA compliance and reliability.',
};

export default function CompareGenericVAPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Compare', href: '#' }, { label: 'vs Generic VA Agencies', href: '/compare/generic-va-agencies' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Dr. Capital VA vs Generic VA Agencies</h1>
          <p className="text-xl text-text-secondary">Why healthcare requires specialized virtual assistant support, not one-size-fits-all solutions.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">The Core Problem: Generic VAs in Healthcare</h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Generic VA agencies (Belay, Fancy Hands, Time Etc., Zirtual, etc.) are designed for general business support: email, scheduling, research, customer service. They work great for e-commerce, marketing, and administrative roles across industries. But healthcare is fundamentally different — it has legal requirements (HIPAA), clinical context, and patient safety concerns that generic agencies don't address.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-teal-deep text-white">
                  <th className="border border-gray-300 p-4 text-left">Feature</th>
                  <th className="border border-gray-300 p-4 text-left">Dr. Capital VA</th>
                  <th className="border border-gray-300 p-4 text-left">Generic VA Agencies</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>HIPAA compliance</strong></td>
                  <td className="border border-gray-300 p-4">✓ Certified, BAA included</td>
                  <td className="border border-gray-300 p-4">✗ Not addressed</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Healthcare vetting</strong></td>
                  <td className="border border-gray-300 p-4">✓ 5-step, 3% hired</td>
                  <td className="border border-gray-300 p-4">✗ Generic screening</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>EHR/practice software training</strong></td>
                  <td className="border border-gray-300 p-4">✓ Included (Athena, Epic, etc.)</td>
                  <td className="border border-gray-300 p-4">✗ Not provided</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Medical terminology knowledge</strong></td>
                  <td className="border border-gray-300 p-4">✓ Required for hiring</td>
                  <td className="border border-gray-300 p-4">✗ No requirement</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Background check depth</strong></td>
                  <td className="border border-gray-300 p-4">✓ Checkr verified</td>
                  <td className="border border-gray-300 p-4">△ Basic check (varies)</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Backup coverage included</strong></td>
                  <td className="border border-gray-300 p-4">✓ Yes</td>
                  <td className="border border-gray-300 p-4">✗ Not standard</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Dedicated Client Manager</strong></td>
                  <td className="border border-gray-300 p-4">✓ Yes</td>
                  <td className="border border-gray-300 p-4">✗ Ticket-based support</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>No patient data handling</strong></td>
                  <td className="border border-gray-300 p-4">✓ Full PHI access trained</td>
                  <td className="border border-gray-300 p-4">✗ Not recommended for PHI</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Pricing Comparison</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-teal-deep text-white">
                  <th className="border border-gray-300 p-4 text-left">Agency</th>
                  <th className="border border-gray-300 p-4 text-left">Cost (per month)</th>
                  <th className="border border-gray-300 p-4 text-left">Healthcare-Ready?</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Dr. Capital VA</strong></td>
                  <td className="border border-gray-300 p-4">$700–$1,300</td>
                  <td className="border border-gray-300 p-4">✓ Yes</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Belay</strong></td>
                  <td className="border border-gray-300 p-4">$1,000–$2,000+</td>
                  <td className="border border-gray-300 p-4">✗ No</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Fancy Hands</strong></td>
                  <td className="border border-gray-300 p-4">$200–$1,000</td>
                  <td className="border border-gray-300 p-4">✗ No</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Time Etc.</strong></td>
                  <td className="border border-gray-300 p-4">$1,000–$2,000</td>
                  <td className="border border-gray-300 p-4">✗ No</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Zirtual</strong></td>
                  <td className="border border-gray-300 p-4">$600–$1,500</td>
                  <td className="border border-gray-300 p-4">✗ No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Why Generic VA Agencies Fail in Healthcare</h2>
          <div className="space-y-8 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-3">1. No HIPAA Compliance</h3>
              <p className="text-text-secondary text-sm mb-3">
                Generic agencies don't guarantee HIPAA compliance. They won't sign Business Associate Agreements, don't enforce encryption, and don't understand patient data handling. If you use them for patient data, YOU are taking the compliance risk. A breach could cost $100+ per patient record exposed (regulatory fines + legal liability).
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-3">2. No Healthcare Expertise</h3>
              <p className="text-text-secondary text-sm mb-3">
                A generic VA may have never seen an EHR before. They don't understand scheduling terminology, billing cycles, insurance verification, or compliance workflows. You end up training them yourself (wasting 40–80 hours), and mistakes are inevitable. Dr. Capital VA arrives trained on Athena, Epic, eClinicalWorks, and healthcare workflows.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-3">3. High Turnover</h3>
              <p className="text-text-secondary text-sm mb-3">
                Generic agencies have 40–60% annual turnover. You invest weeks training a VA, then they leave for another client or job. Dr. Capital VA has 97% retention — your VA stays trained and committed to your practice long-term.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-3">4. No Accountability</h3>
              <p className="text-text-secondary text-sm mb-3">
                If something goes wrong, generic agencies offer limited recourse. You're dealing with a ticket-based support system and a VA who has 10+ clients. Dr. Capital VA assigns you a dedicated Client Manager and guarantees replacement if you're unsatisfied.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-3">5. Confidentiality Risk</h3>
              <p className="text-text-secondary text-sm mb-3">
                Generic VAs work with many clients across industries. They may not understand the sensitivity of healthcare data or NDAs. There's an inherent risk of patient information being discussed outside of secure channels. Dr. Capital VA VAs sign strict NDAs and work only with healthcare clients — confidentiality is enforced.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-3">6. Timezone & Language Issues</h3>
              <p className="text-text-secondary text-sm mb-3">
                Many generic VA agencies employ offshore VAs with limited English or poor timezone overlap. Healthcare requires real-time communication for patient calls, schedule changes, and urgent issues. Dr. Capital VA has global coverage with healthcare-fluent support.
              </p>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Real Scenario: Why a Dentist Switched from Generic VA to Dr. Capital VA</h2>
          <div className="bg-white rounded-lg p-8 border-l-4 border-coral-accent mb-12">
            <p className="text-text-secondary mb-4">
              <strong>Dr. Sarah (dentist):</strong> "I hired a generic VA for $600/month to handle patient scheduling and appointment reminders. After 2 weeks, I realized:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary text-sm mb-6">
              <li>The VA didn't know our scheduling software (Dentrix) and was making manual errors</li>
              <li>Patients were getting appointment reminders at wrong times</li>
              <li>Insurance verification was taking 3x longer than before</li>
              <li>The VA asked about patient info in a Slack channel (confidentiality issue!)</li>
              <li>No one from the agency took responsibility for problems</li>
            </ul>
            <p className="text-text-secondary mb-4">
              After 2 months, I ended the contract. I then hired Dr. Capital VA. From day one: trained on Dentrix, understood dental workflows, handled insurance calls professionally, and had a dedicated Client Manager. The $200/month difference paid for itself immediately in reduced errors and reclaimed time."
            </p>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">The True Cost of "Saving" with Generic VAs</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-warm-cream rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-3">Hidden Costs of Generic VA Agencies:</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• <strong>Training time:</strong> 40–80 hours of your time to teach EHR/workflows ($2,000–$4,000 value)</li>
                <li>• <strong>Mistakes:</strong> Billing errors, missed appointments, patient follow-up failures ($500–$2,000/month)</li>
                <li>• <strong>Turnover friction:</strong> Finding, hiring, training replacements (time + cost)</li>
                <li>• <strong>Compliance risk:</strong> Potential HIPAA violations (fines can reach $100+ per record exposed)</li>
                <li>• <strong>Lost productivity:</strong> Time spent managing and correcting VA work instead of seeing patients</li>
              </ul>
            </div>
            <div className="bg-warm-cream rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-3">Dr. Capital VA Eliminates These Costs:</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• <strong>Zero training time:</strong> VA arrives trained on your EHR</li>
                <li>• <strong>Quality guarantee:</strong> 30-day money-back guarantee, replacement if unhappy</li>
                <li>• <strong>Stability:</strong> 97% retention rate — your VA stays</li>
                <li>• <strong>Compliance included:</strong> HIPAA certification, BAA, zero breaches</li>
                <li>• <strong>Immediate impact:</strong> Your schedule improves from week 1</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">What We'd Need to Say About Using a Generic VA</h2>
          <div className="bg-white rounded-lg p-8 border-l-4 border-coral-accent mb-12">
            <p className="text-text-secondary font-semibold mb-4">If you decide to use a generic VA for healthcare tasks, here's what we recommend:</p>
            <ol className="list-decimal pl-6 space-y-2 text-text-secondary text-sm">
              <li>Do NOT give them access to patient data (PHI) of any kind</li>
              <li>Require them to sign an NDA and BAA</li>
              <li>Use encrypted communication only (no Slack, email, or WhatsApp for patient info)</li>
              <li>Provide extensive training on HIPAA and your workflows</li>
              <li>Conduct monthly compliance audits</li>
              <li>Assume full legal liability for any breaches or violations</li>
              <li>Budget for 50% turnover annually</li>
            </ol>
            <p className="text-text-secondary mt-6 font-semibold">
              In other words: it's possible, but you're taking on significant risk and overhead. Dr. Capital VA removes all of this.
            </p>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Can I use a generic VA for non-clinical admin (email, scheduling)?</h3>
              <p className="text-text-secondary text-sm">Theoretically yes, for pure email/scheduling. But in practice, you can't separate clinical and admin in healthcare. Emails reference patient care, scheduling involves insurance verification, and you'll eventually need them touching sensitive work. Better to have a healthcare-trained VA from day one.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Why is Dr. Capital VA $200–$300/month more?</h3>
              <p className="text-text-secondary text-sm">You're paying for healthcare expertise, HIPAA compliance, rigorous vetting, and support. That $200–$300/month difference protects you from legal liability (HIPAA fines are $100+ per exposed record), eliminates training time, and guarantees quality. It's insurance + support, not just a salary difference.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What if I only need 10 hours/week?</h3>
              <p className="text-text-secondary text-sm">Dr. Capital VA offers a Part-Time plan at $700/month (20 hrs/week). Even if you only need 10 hours, the healthcare expertise and compliance protection still applies. Worth every penny for risk mitigation alone.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What if I save money using a generic VA and invest it in my practice?</h3>
              <p className="text-text-secondary text-sm">That math breaks down once you factor in training time, turnover, and mistakes. Most practices spend 20+ hours training a generic VA, only to have them quit. Dr. Capital VA arrives ready to work. The ROI is typically positive by month 1.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Stop Compromising on Healthcare Support</h2>
            <p className="mb-6 text-lg text-white/80">Get a healthcare-trained, HIPAA-certified VA that's ready to work from day one — not a generic assistant who needs weeks of training and carries compliance risk.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Book Your Strategy Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
