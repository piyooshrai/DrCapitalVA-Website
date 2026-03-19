import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'How Much Does a Medical Virtual Assistant Cost in 2025?',
  description: 'Medical VA pricing breakdown. Compare costs of hiring in-house, freelance, and dedicated healthcare VA services for your practice.',
};

export default function MedicalVACostPage() {
  return (
    <main>
      <article>
        <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Medical VA Cost', href: '/blog/medical-va-cost' }]} />
            <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">How Much Does a Medical Virtual Assistant Cost in 2025?</h1>
            <p className="text-text-secondary">Pricing breakdown: in-house hiring vs freelance vs dedicated healthcare VAs. What's actually worth the investment.</p>
          </div>
        </section>

        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">2025 Medical VA Pricing Overview</h2>
            <p className="text-text-secondary mb-6">
              Medical virtual assistant costs vary dramatically depending on the model. In-house hiring costs $35K–$50K/year. Freelance VAs range from $400–$1,500/month. Dedicated healthcare VA services run $700–$2,500/month.
            </p>

            <div className="bg-warm-cream rounded-lg p-6 mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-teal-deep">
                    <th className="text-left pb-2">Option</th>
                    <th className="text-left pb-2">Cost/Month</th>
                    <th className="text-left pb-2">HIPAA Ready?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-2">In-house hire</td>
                    <td className="py-2">$3K–$4K + benefits</td>
                    <td className="py-2">✓ Yes</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2">Freelance VA (generic)</td>
                    <td className="py-2">$400–$800</td>
                    <td className="py-2">✗ No</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="py-2">Dr. Capital VA</td>
                    <td className="py-2">$700–$1,300</td>
                    <td className="py-2">✓ Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">True Cost of In-House Hiring</h2>
            <p className="text-text-secondary mb-4">
              A full-time medical receptionist salary in 2025 averages $38K–$45K. Add 25–30% for benefits (insurance, taxes, retirement), bringing total to $48K–$59K annually per staff member.
            </p>
            <p className="text-text-secondary mb-4">
              Hidden costs: training (40+ hours), onboarding software, office supplies, equipment, and turnover replacement costs. Medical receptionist turnover averages 35%+ annually, meaning you're constantly recruiting and training new staff.
            </p>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Why Dedicated Healthcare VA Services Save Money</h2>
            <p className="text-text-secondary mb-6">
              A dedicated healthcare VA ($1,300/month) typically delivers:
            </p>
            <ul className="space-y-2 text-text-secondary mb-8">
              <li className="flex gap-3"><span className="text-coral-accent">✓</span><span>20–30% improvement in collections (from $2K–$4K/month revenue gain)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent">✓</span><span>3–5% reduction in denial rates (more clean claims submitted)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent">✓</span><span>30–40% reduction in no-shows (better scheduling and follow-up)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent">✓</span><span>15–20 hours/week saved for providers (reclaimed clinical time)</span></li>
            </ul>
            <p className="text-text-secondary font-semibold">
              For most practices, ROI is positive within month 1 of revenue improvements.
            </p>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">The Real Cost: Bad VA Choices</h2>
            <p className="text-text-secondary mb-4">
              Hiring a generic VA for $600/month might seem smart until:
            </p>
            <ul className="space-y-2 text-text-secondary mb-8">
              <li className="flex gap-3"><span className="text-coral-accent">✗</span><span>You spend 40+ hours training them on your EHR (cost: $1,500–$2,500)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent">✗</span><span>Billing errors cost you $500–$2,000/month in denied claims</span></li>
              <li className="flex gap-3"><span className="text-coral-accent">✗</span><span>They quit after 3 months; you restart the hiring/training cycle</span></li>
              <li className="flex gap-3"><span className="text-coral-accent">✗</span><span>HIPAA breach costs you $50,000+ in fines and legal fees (per incident)</span></li>
            </ul>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Our Pricing: Transparent & Included</h2>
            <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
              <p className="text-text-secondary mb-4"><strong>Dr. Capital VA Part-Time: $700/month (20 hours/week)</strong></p>
              <ul className="space-y-2 text-text-secondary text-sm mb-6">
                <li>• Scheduling, patient follow-up, basic billing</li>
                <li>• HIPAA-certified VA with background check</li>
                <li>• VPN access, encrypted communication</li>
                <li>• Backup VA coverage included</li>
                <li>• 30-day money-back guarantee</li>
              </ul>

              <p className="text-text-secondary mb-4"><strong>Dr. Capital VA Full-Time: $1,300/month (40 hours/week)</strong></p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• All above, plus medical billing & claims</li>
                <li>• Dedicated Client Manager</li>
                <li>• Full intake management</li>
                <li>• Month-to-month, no contract lock-in</li>
                <li>• 97% retention rate (your VA stays)</li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Simple ROI Calculation</h2>
            <p className="text-text-secondary mb-6">
              <strong>Scenario:</strong> 2-provider primary care practice, $1M annual revenue.
            </p>
            <ul className="space-y-3 text-text-secondary mb-8">
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">Cost:</span>
                <span>Dr. Capital VA full-time = $1,300/month ($15,600/year)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">Billing improvement:</span>
                <span>25% faster claims + 4% fewer denials = $2,500/month gain ($30K/year)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">Provider time:</span>
                <span>15 hours/week × 2 providers × 48 weeks = $30K value (clinical focus)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">Total annual benefit:</span>
                <span>$30K + $30K = $60K</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">Net ROI:</span>
                <span>($60K – $15.6K) ÷ $15.6K = <strong>284% ROI</strong></span>
              </li>
            </ul>

            <div className="bg-teal-deep text-white rounded-lg p-8 text-center mt-12">
              <h2 className="font-serif text-3xl mb-4">Get the Cost-Benefit Analysis for Your Practice</h2>
              <p className="mb-6 text-lg text-white/80">We'll show you exactly how much a VA investment will return to your bottom line.</p>
              <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Calculate Your ROI
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
