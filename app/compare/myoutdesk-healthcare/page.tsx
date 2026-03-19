import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Dr. Capital VA vs My Outdesk Healthcare: Comparison',
  description: 'Compare Dr. Capital VA with My Outdesk for healthcare VA services. Pricing, vetting, HIPAA compliance, and which is better for your practice.',
};

export default function CompareMyOutdeskPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Compare', href: '#' }, { label: 'vs My Outdesk', href: '/compare/myoutdesk-healthcare' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Dr. Capital VA vs My Outdesk</h1>
          <p className="text-xl text-text-secondary">Compare the leading offshore and onshore VA services for healthcare. Pricing, quality, compliance, and support models.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">Overview: Who Are They?</h2>
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-warm-cream rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep text-lg mb-4">Dr. Capital VA</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><strong>Model:</strong> Dedicated remote VA (distributed team)</li>
                <li><strong>Location:</strong> Global, vetted and trained by Dr. Capital VA</li>
                <li><strong>Founded:</strong> 2019, healthcare division 2021</li>
                <li><strong>Vetting:</strong> Rigorous 5-step process, 3% hired</li>
                <li><strong>HIPAA:</strong> Certified, BAA included</li>
                <li><strong>Pricing:</strong> $700–$1,300/month</li>
                <li><strong>Guarantee:</strong> 30-day money-back</li>
              </ul>
            </div>
            <div className="bg-warm-cream rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep text-lg mb-4">My Outdesk</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><strong>Model:</strong> Freelancer marketplace + agency matching</li>
                <li><strong>Location:</strong> Primarily Philippines (offshore)</li>
                <li><strong>Founded:</strong> Early 2000s, established brand</li>
                <li><strong>Vetting:</strong> Basic screening, large pool available</li>
                <li><strong>HIPAA:</strong> Not guaranteed (depends on VA selected)</li>
                <li><strong>Pricing:</strong> $600–$1,500/month (wide range)</li>
                <li><strong>Guarantee:</strong> Not standard</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Pricing & Terms</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-teal-deep text-white">
                  <th className="border border-gray-300 p-4 text-left">Factor</th>
                  <th className="border border-gray-300 p-4 text-left">Dr. Capital VA</th>
                  <th className="border border-gray-300 p-4 text-left">My Outdesk</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Part-time cost</strong></td>
                  <td className="border border-gray-300 p-4">$700/month</td>
                  <td className="border border-gray-300 p-4">$600–$900/month</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Full-time cost</strong></td>
                  <td className="border border-gray-300 p-4">$1,300/month</td>
                  <td className="border border-gray-300 p-4">$800–$1,500/month</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Setup fee</strong></td>
                  <td className="border border-gray-300 p-4">Included</td>
                  <td className="border border-gray-300 p-4">$0–$1,000 (varies)</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Minimum commitment</strong></td>
                  <td className="border border-gray-300 p-4">None (month-to-month)</td>
                  <td className="border border-gray-300 p-4">Often 3 months</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Money-back guarantee</strong></td>
                  <td className="border border-gray-300 p-4">✓ 30 days</td>
                  <td className="border border-gray-300 p-4">△ Varies (limited)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Quality & Vetting: The Real Difference</h2>
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-coral-accent text-lg mb-4">Dr. Capital VA Vetting</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ 5-step vetting process</li>
                <li>✓ Healthcare experience required</li>
                <li>✓ Checkr background verification</li>
                <li>✓ HIPAA training & certification</li>
                <li>✓ Technical interview (EHR knowledge)</li>
                <li>✓ 30-day trial period</li>
                <li>✓ Only 3% of applicants hired</li>
                <li>✓ Replacement guarantee if unhappy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-coral-accent text-lg mb-4">My Outdesk Vetting</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>△ Resume review + test assessment</li>
                <li>△ General admin skills, not healthcare-focused</li>
                <li>△ Background checks vary</li>
                <li>△ No HIPAA training standard</li>
                <li>△ You interview candidates</li>
                <li>△ Limited trial/guarantee</li>
                <li>△ You hire from large pool (80%+ acceptance)</li>
                <li>△ If VA quits, you rehire from marketplace</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-teal-deep text-white">
                  <th className="border border-gray-300 p-4 text-left">Feature</th>
                  <th className="border border-gray-300 p-4 text-center">Dr. Capital VA</th>
                  <th className="border border-gray-300 p-4 text-center">My Outdesk</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary text-sm">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4">HIPAA compliance guaranteed</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Yes</td>
                  <td className="border border-gray-300 p-4 text-center">✗ No</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4">Healthcare-focused vetting</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Yes</td>
                  <td className="border border-gray-300 p-4 text-center">✗ No</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4">EHR platform training included</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Yes</td>
                  <td className="border border-gray-300 p-4 text-center">△ You provide</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4">Dedicated Client Manager</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Yes</td>
                  <td className="border border-gray-300 p-4 text-center">✗ Not included</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4">Backup VA coverage</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Included</td>
                  <td className="border border-gray-300 p-4 text-center">✗ You hire another</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4">Replacement guarantee</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Yes</td>
                  <td className="border border-gray-300 p-4 text-center">△ Limited</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4">48-hour VA match</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Yes</td>
                  <td className="border border-gray-300 p-4 text-center">△ Longer timeline</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4">Month-to-month (no contract lock)</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Yes</td>
                  <td className="border border-gray-300 p-4 text-center">△ Often 3+ month minimum</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Strengths & Weaknesses</h2>
          <div className="space-y-8 mb-12">
            <div>
              <h3 className="font-bold text-coral-accent text-lg mb-4">Dr. Capital VA Strengths</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ HIPAA compliance built-in</li>
                <li>✓ Healthcare expertise guaranteed</li>
                <li>✓ Rigorous vetting (only 3% hired)</li>
                <li>✓ Full support from Client Manager</li>
                <li>✓ Backup VA if primary unavailable</li>
                <li>✓ 30-day money-back guarantee</li>
                <li>✓ No lock-in (month-to-month)</li>
                <li>✓ Zero breaches since 2019</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-coral-accent text-lg mb-4">My Outdesk Strengths</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ Lower entry price ($600–$900)</li>
                <li>✓ Large freelancer pool (80%+ available)</li>
                <li>✓ Flexible hiring (pick your own VA)</li>
                <li>✓ Established platform (20+ years)</li>
                <li>✓ Proven offshore model</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="font-bold text-teal-deep text-lg mb-4">Dr. Capital VA Weaknesses</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>△ Slightly higher entry price ($700)</li>
                <li>△ Newer company (founded 2019)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-teal-deep text-lg mb-4">My Outdesk Weaknesses</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✗ No HIPAA guarantee (compliance risk)</li>
                <li>✗ No healthcare vetting standard</li>
                <li>✗ You manage hiring/training (time-consuming)</li>
                <li>✗ No backup VA if yours leaves</li>
                <li>✗ Limited support if VA underperforms</li>
                <li>✗ Offshore timezone delays (Philippines is 12+ hours ahead of US)</li>
                <li>✗ Language barriers possible</li>
                <li>✗ Higher turnover (freelancer model)</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Real-World Concern: Compliance Risk</h2>
          <div className="bg-white rounded-lg p-8 border-l-4 border-coral-accent mb-12">
            <p className="text-text-secondary mb-4">
              <strong>The hidden cost of My Outdesk for healthcare:</strong> HIPAA compliance is YOUR responsibility. If your VA (from My Outdesk) accesses patient data without proper training, encryption, or BAA, and there's a breach, YOU are liable — not the marketplace.
            </p>
            <p className="text-text-secondary mb-4">
              Many practices hire offshore VAs to save $200–$300/month, only to discover:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-secondary text-sm mb-6">
              <li>The VA doesn't understand HIPAA requirements</li>
              <li>Secure data transfer methods aren't in place</li>
              <li>No BAA agreement exists (legal requirement)</li>
              <li>Audit trails aren't configured</li>
              <li>If a breach occurs, legal liability falls on you</li>
            </ul>
            <p className="text-text-secondary font-semibold">
              The compliance risk exposure can be 10–100x the monthly savings. With Dr. Capital VA, this risk is eliminated — we handle it.
            </p>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Can I use a My Outdesk VA for healthcare?</h3>
              <p className="text-text-secondary text-sm">Technically yes, but not recommended if you handle patient data. You'd need to personally ensure HIPAA compliance, create a BAA, provide training, and manage risk. With Dr. Capital VA, it's handled for you.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Why is Dr. Capital VA more expensive?</h3>
              <p className="text-text-secondary text-sm">You're paying for healthcare expertise, HIPAA compliance, rigorous vetting, and support. The $100–$200/month difference protects you from compliance risk, ensures VA quality, and includes a Client Manager. It's not just a price difference — it's a risk mitigation difference.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What about timezone differences with My Outdesk?</h3>
              <p className="text-text-secondary text-sm">My Outdesk VAs are primarily in the Philippines (12+ hours ahead of US). This means limited overlap for real-time communication, troubleshooting, and urgent issues. Dr. Capital VA has global coverage with overlap-friendly timezones.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What if my My Outdesk VA quits?</h3>
              <p className="text-text-secondary text-sm">You start over — interview, hire, train another VA from the marketplace. Dr. Capital VA replaces your VA with a backup at no cost. No downtime, no hiring hassle.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Healthcare Deserves Better Than Bargain VAs</h2>
            <p className="mb-6 text-lg text-white/80">See how Dr. Capital VA delivers compliance, quality, and peace of mind at a price that makes sense for healthcare practices.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Get Healthcare VA Quotes
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
