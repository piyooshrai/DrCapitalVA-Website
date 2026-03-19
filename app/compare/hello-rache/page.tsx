import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Dr. Capital VA vs Hello Rache: Complete Comparison',
  description: 'Detailed feature-by-feature comparison of Dr. Capital VA and Hello Rache. Pricing, HIPAA compliance, vetting process, and use cases for healthcare practices.',
};

export default function CompareHelloRachePage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Compare', href: '#' }, { label: 'vs Hello Rache', href: '/compare/hello-rache' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Dr. Capital VA vs Hello Rache</h1>
          <p className="text-xl text-text-secondary">Which virtual assistant service is right for your healthcare practice?</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">Company Overview</h2>
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-warm-cream rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep text-lg mb-4">Dr. Capital VA</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><strong>Founded:</strong> 2019</li>
                <li><strong>Healthcare focus:</strong> 100% (since 2021)</li>
                <li><strong>HIPAA certified:</strong> Yes (2023)</li>
                <li><strong>Headquarters:</strong> Tampa, FL</li>
                <li><strong>Vetting:</strong> 5-step, 3% hired</li>
                <li><strong>Hire model:</strong> Dedicated VA, month-to-month</li>
              </ul>
            </div>
            <div className="bg-warm-cream rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep text-lg mb-4">Hello Rache</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><strong>Founded:</strong> ~2015</li>
                <li><strong>Healthcare focus:</strong> Partial (mixed industries)</li>
                <li><strong>HIPAA certified:</strong> Unclear/limited disclosure</li>
                <li><strong>Headquarters:</strong> USA-based, distributed team</li>
                <li><strong>Vetting:</strong> Not publicly detailed</li>
                <li><strong>Hire model:</strong> VAs available for hire, gig marketplace</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Pricing Comparison</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-teal-deep text-white">
                  <th className="border border-gray-300 p-4 text-left">Feature</th>
                  <th className="border border-gray-300 p-4 text-left">Dr. Capital VA</th>
                  <th className="border border-gray-300 p-4 text-left">Hello Rache</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Part-Time (20 hrs/week)</strong></td>
                  <td className="border border-gray-300 p-4">$700/month</td>
                  <td className="border border-gray-300 p-4">$400–$800/month (varies)</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Full-Time (40 hrs/week)</strong></td>
                  <td className="border border-gray-300 p-4">$1,300/month</td>
                  <td className="border border-gray-300 p-4">$800–$1,600/month (varies)</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Setup/Onboarding Fee</strong></td>
                  <td className="border border-gray-300 p-4">Included</td>
                  <td className="border border-gray-300 p-4">$0–$500 (varies)</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Minimum Commitment</strong></td>
                  <td className="border border-gray-300 p-4">None (month-to-month)</td>
                  <td className="border border-gray-300 p-4">None (hourly/project basis)</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Replacement/Fallback VA</strong></td>
                  <td className="border border-gray-300 p-4">Included (no extra cost)</td>
                  <td className="border border-gray-300 p-4">Not standard (you hire additional VAs)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Feature Comparison</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-teal-deep text-white">
                  <th className="border border-gray-300 p-4 text-left">Feature</th>
                  <th className="border border-gray-300 p-4 text-center">Dr. Capital VA</th>
                  <th className="border border-gray-300 p-4 text-center">Hello Rache</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary text-sm">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4">HIPAA compliance guaranteed</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Yes</td>
                  <td className="border border-gray-300 p-4 text-center">△ Partial</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4">Healthcare-specific vetting</td>
                  <td className="border border-gray-300 p-4 text-center">✓ 5-step, 3%</td>
                  <td className="border border-gray-300 p-4 text-center">△ Basic</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4">EHR/platform training</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Included</td>
                  <td className="border border-gray-300 p-4 text-center">△ You provide</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4">Dedicated VA (not shared)</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Yes</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Yes</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4">Backup/fallback coverage</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Included</td>
                  <td className="border border-gray-300 p-4 text-center">✗ Not included</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4">Client success manager</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Included</td>
                  <td className="border border-gray-300 p-4 text-center">△ Limited</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4">Client portal/dashboard</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Coming 2025</td>
                  <td className="border border-gray-300 p-4 text-center">△ Basic</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4">Money-back guarantee</td>
                  <td className="border border-gray-300 p-4 text-center">✓ Yes, 30 days</td>
                  <td className="border border-gray-300 p-4 text-center">△ Not standard</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Strengths & Weaknesses</h2>
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-coral-accent text-lg mb-4">Dr. Capital VA Strengths</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ 100% healthcare focus — no mixed industries</li>
                <li>✓ HIPAA-certified team with BAA agreements</li>
                <li>✓ Rigorous 5-step vetting (only 3% hired)</li>
                <li>✓ Backup VA included at no extra cost</li>
                <li>✓ Dedicated Client Manager for each practice</li>
                <li>✓ EHR training included (Athena, Epic, etc.)</li>
                <li>✓ Zero breaches since 2019</li>
                <li>✓ Transparent pricing, month-to-month</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-coral-accent text-lg mb-4">Hello Rache Strengths</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ Lower entry price ($400–$800 for part-time)</li>
                <li>✓ Large freelancer pool to choose from</li>
                <li>✓ No minimum commitment (hourly)</li>
                <li>✓ Flexible hiring (pick your own VA)</li>
                <li>✓ Marketplace model (you control hiring)</li>
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-teal-deep text-lg mb-4">Dr. Capital VA Weaknesses</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>△ Slightly higher entry price ($700 part-time)</li>
                <li>△ Limited to dedicated VA model (no à la carte hiring)</li>
                <li>△ Newer (founded 2019 vs Hello Rache 2015)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-teal-deep text-lg mb-4">Hello Rache Weaknesses</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✗ HIPAA compliance not guaranteed or clearly disclosed</li>
                <li>✗ Mixed-industry freelancers (not healthcare-specific)</li>
                <li>✗ No vetting for healthcare expertise</li>
                <li>✗ No backup VA if your VA becomes unavailable</li>
                <li>✗ You manage hiring/training yourself</li>
                <li>✗ No client success support</li>
                <li>✗ Compliance risk in regulated healthcare setting</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Use Cases: Who Should Choose Each?</h2>
          <div className="space-y-8 mb-12">
            <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-3">Choose Dr. Capital VA if:</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ You handle patient data and need HIPAA compliance</li>
                <li>✓ You want a dedicated, healthcare-trained VA (not a freelancer)</li>
                <li>✓ You need backup coverage if your VA is sick/unavailable</li>
                <li>✓ You want a partner, not just a contractor</li>
                <li>✓ You need someone immediately trained on your EHR</li>
                <li>✓ You want zero compliance risk in your admin operations</li>
                <li>✓ You prefer peace of mind over lowest price</li>
              </ul>
            </div>
            <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-teal-deep">
              <h3 className="font-bold text-teal-deep mb-3">Choose Hello Rache if:</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>△ You only need basic admin support (scheduling, email)</li>
                <li>△ You have tight budget constraints</li>
                <li>△ You're comfortable hiring/training/managing the VA yourself</li>
                <li>△ You don't handle patient data (non-clinical admin only)</li>
                <li>△ You want flexibility to swap VAs quickly</li>
                <li>△ You have IT support to manage HIPAA compliance yourself</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">The Bottom Line</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            <strong>Dr. Capital VA</strong> is built for healthcare practices that need HIPAA-compliant, dedicated support. You're paying a premium for expertise, compliance, and peace of mind. Your VA is healthcare-trained, your practice is protected by BAAs and audit logs, and there's always a backup if something goes wrong. This is the right choice if patient data security is a priority.
          </p>
          <p className="text-text-secondary mb-12 leading-relaxed">
            <strong>Hello Rache</strong> is a marketplace of freelancers. It's cheaper and flexible, but you're taking on the risk of hiring someone without healthcare expertise, managing HIPAA compliance yourself, and having no support if your VA leaves. This works for non-clinical admin or if you have strong IT/compliance management internally.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Is Hello Rache HIPAA compliant?</h3>
              <p className="text-text-secondary text-sm">Hello Rache does not publicly guarantee HIPAA compliance for all VAs. Individual VAs may claim HIPAA knowledge, but there's no vetting, certification, or BAA from the platform. You're taking on compliance risk.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Can I try Dr. Capital VA risk-free?</h3>
              <p className="text-text-secondary text-sm">Yes. Dr. Capital VA offers a 30-day money-back guarantee. If you're not satisfied, you get your money back, no questions. This ensures you can test the match without financial risk.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What if my VA becomes unavailable?</h3>
              <p className="text-text-secondary text-sm">With Dr. Capital VA, you have a backup VA included. If your primary VA is sick or unavailable, the backup takes over seamlessly. With Hello Rache, you'd need to hire and train a new VA yourself.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Do I need to train the VA on my EHR?</h3>
              <p className="text-text-secondary text-sm">With Dr. Capital VA, training is included — they arrive knowing Athena, Epic, eClinicalWorks, etc. With Hello Rache, you train the VA yourself, which takes time and resources.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Compare in Detail?</h2>
            <p className="mb-6 text-lg text-white/80">Let's talk about your specific practice needs and which solution is the best fit.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
