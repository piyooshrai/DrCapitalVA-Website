import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Dr. Capital VA vs Athena Health VA Services: Comparison',
  description: 'Compare Dr. Capital VA with Athena Health VA services. Pricing, Athena platform expertise, HIPAA compliance, and which is right for your practice.',
};

export default function CompareAthenHealthVAPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Compare', href: '#' }, { label: 'vs Athena Health VA', href: '/compare/athena-health-va' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Dr. Capital VA vs Athena Health VA Services</h1>
          <p className="text-xl text-text-secondary">Both specialize in Athena support, but which offers the better value and partnership?</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">Overview</h2>
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-warm-cream rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep text-lg mb-4">Dr. Capital VA</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><strong>Specialization:</strong> Multi-platform (Athena, Epic, eClinicalWorks, etc.)</li>
                <li><strong>Core focus:</strong> Healthcare admin + Athena expertise</li>
                <li><strong>Vetting:</strong> 5-step, 3% hired, healthcare-specific</li>
                <li><strong>HIPAA certified:</strong> Yes, with BAA</li>
                <li><strong>Pricing:</strong> $700–$1,300/month</li>
                <li><strong>Commitment:</strong> Month-to-month, no lock-in</li>
                <li><strong>Support:</strong> Dedicated Client Manager</li>
              </ul>
            </div>
            <div className="bg-warm-cream rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep text-lg mb-4">Athena Health VA Services</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><strong>Specialization:</strong> Athena-only (integrated partner)</li>
                <li><strong>Core focus:</strong> Athena Power User support</li>
                <li><strong>Vetting:</strong> Athena-certified, unclear depth</li>
                <li><strong>HIPAA certified:</strong> Yes (as Athena partner)</li>
                <li><strong>Pricing:</strong> $1,000–$2,500/month (varies by scope)</li>
                <li><strong>Commitment:</strong> Often longer contracts</li>
                <li><strong>Support:</strong> Athena channel management</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Pricing & Value Comparison</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-teal-deep text-white">
                  <th className="border border-gray-300 p-4 text-left">Factor</th>
                  <th className="border border-gray-300 p-4 text-left">Dr. Capital VA</th>
                  <th className="border border-gray-300 p-4 text-left">Athena Health VA</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Base monthly cost</strong></td>
                  <td className="border border-gray-300 p-4">$700–$1,300</td>
                  <td className="border border-gray-300 p-4">$1,000–$2,500</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Setup/onboarding</strong></td>
                  <td className="border border-gray-300 p-4">Included</td>
                  <td className="border border-gray-300 p-4">May be extra ($500–$2,000)</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Minimum commitment</strong></td>
                  <td className="border border-gray-300 p-4">None (month-to-month)</td>
                  <td className="border border-gray-300 p-4">Often 6–12 months</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Backup VA included</strong></td>
                  <td className="border border-gray-300 p-4">✓ Yes</td>
                  <td className="border border-gray-300 p-4">△ Not standard</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Multi-EHR support</strong></td>
                  <td className="border border-gray-300 p-4">✓ 6+ platforms</td>
                  <td className="border border-gray-300 p-4">✗ Athena only</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Scalability (add hours)</strong></td>
                  <td className="border border-gray-300 p-4">✓ Flexible</td>
                  <td className="border border-gray-300 p-4">△ Contract-dependent</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>30-day guarantee</strong></td>
                  <td className="border border-gray-300 p-4">✓ Yes</td>
                  <td className="border border-gray-300 p-4">✗ Varies</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Athena Expertise Comparison</h2>
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-coral-accent text-lg mb-4">Dr. Capital VA Athena Skills</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ Athena scheduling (appointment mgmt, recalls)</li>
                <li>✓ Athena billing (claims, denials, EOBs)</li>
                <li>✓ Insurance verification & eligibility</li>
                <li>✓ Patient registration in Athena</li>
                <li>✓ Encounter documentation support</li>
                <li>✓ Athena reporting & analytics</li>
                <li>✓ But NOT exclusively Athena (cross-platform)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-coral-accent text-lg mb-4">Athena Health VA Services</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ Deep Athena expertise (their specialty)</li>
                <li>✓ Athena Power User level</li>
                <li>✓ Advanced workflow optimization</li>
                <li>✓ Athena-specific troubleshooting</li>
                <li>✓ Custom configuration support</li>
                <li>✓ Direct Athena partnership</li>
                <li>✗ ONLY Athena (no multi-platform flexibility)</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Key Differences</h2>
          <div className="space-y-8 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-3">Dr. Capital VA Advantages</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><strong>Lower cost entry:</strong> $700/mo vs $1,000+/mo</li>
                <li><strong>No contract lock-in:</strong> Month-to-month, leave anytime</li>
                <li><strong>Flexibility:</strong> If you change EHRs (Athena → Epic), your VA stays trained on the new system</li>
                <li><strong>Backup coverage:</strong> Included at no extra cost</li>
                <li><strong>Risk-free:</strong> 30-day money-back guarantee</li>
                <li><strong>Dedicated support:</strong> Your own Client Manager</li>
                <li><strong>Faster onboarding:</strong> 48-hour VA match promise</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-teal-deep">
              <h3 className="font-bold text-teal-deep mb-3">Athena Health VA Advantages</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><strong>Deep Athena expertise:</strong> Their sole focus</li>
                <li><strong>Official partner status:</strong> Athena-certified support</li>
                <li><strong>Advanced optimization:</strong> Workflow tuning, custom configuration</li>
                <li><strong>Integrated billing:</strong> If you use Athena billing exclusively</li>
                <li><strong>Training programs:</strong> For internal staff on Athena</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Real-World Scenario: Primary Care Practice</h2>
          <div className="bg-white rounded-lg p-8 border-l-4 border-coral-accent mb-12">
            <p className="text-text-secondary mb-4">
              <strong>Practice profile:</strong> 3-provider primary care clinic using Athena for scheduling, billing, and EHR. Annual revenue: $1.5M. Current pain points: insurance verification taking 3+ hours/day, billing denials at 8% (industry avg 3%), patient follow-up sporadic.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div>
                <p className="font-semibold text-teal-deep mb-3">With Dr. Capital VA:</p>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Cost: $1,300/mo (full-time)</li>
                  <li>• Athena expert + admin support</li>
                  <li>• Insurance verification (3 hrs/day → 30 min)</li>
                  <li>• Billing denial mgmt (8% → 4%)</li>
                  <li>• Revenue recovery: ~$500/mo</li>
                  <li>• ROI: Month 1 positive</li>
                  <li>• Exit anytime if not satisfied</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-teal-deep mb-3">With Athena Health VA:</p>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Cost: $1,500–$2,000/mo</li>
                  <li>• Deep Athena workflow optimization</li>
                  <li>• Similar insurance verification gains</li>
                  <li>• Similar billing improvements</li>
                  <li>• Requires 6–12 month contract</li>
                  <li>• Potential exit costs if unhappy</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">What If You Switch EHRs?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            This is a critical consideration. If your practice uses Athena today but might switch to Epic or eClinicalWorks in the future (consolidation, merger, system upgrade), you're locked in with Athena Health VA services. Dr. Capital VA VAs are trained across multiple platforms and can transition with you.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Many practices evolve over time. Starting with a flexible VA partnership (Dr. Capital VA) protects your investment in staff training.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Is Dr. Capital VA's Athena training as deep as Athena Health VA?</h3>
              <p className="text-text-secondary text-sm">Dr. Capital VA VAs are trained on Athena billing, scheduling, eligibility, and reporting. If you need advanced workflow optimization or custom configuration, Athena Health VA has deeper specialization. However, for 80% of practices, Dr. Capital VA's Athena expertise is sufficient and more cost-effective.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What's the real cost difference?</h3>
              <p className="text-text-secondary text-sm">Dr. Capital VA: $700–$1,300/month, month-to-month. Athena Health VA: $1,000–$2,500+/month, typically with 6–12 month contracts. Over a year, Dr. Capital VA saves $2,400–$14,400 for most practices — and you can leave anytime.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Will Dr. Capital VA integrate with our Athena system?</h3>
              <p className="text-text-secondary text-sm">Yes. Dr. Capital VA VAs work remotely, access Athena via secure VPN, and follow HIPAA protocols. They integrate into your team and your Athena workflow seamlessly. No special setup beyond standard remote access.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">If I'm unhappy, what happens?</h3>
              <p className="text-text-secondary text-sm">With Dr. Capital VA: 30-day money-back guarantee + month-to-month cancel anytime. With Athena Health VA: You're typically in a contract, so early exit may incur fees or penalties.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Get Athena Support That Works for Your Budget?</h2>
            <p className="mb-6 text-lg text-white/80">Let's discuss your Athena needs and show you how Dr. Capital VA can deliver expert support at a better price with no lock-in.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Talk to an Athena Expert
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
