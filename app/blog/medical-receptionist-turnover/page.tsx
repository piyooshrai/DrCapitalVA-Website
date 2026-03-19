import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'The True Cost of Medical Receptionist Turnover',
  description: 'Why healthcare staff turnover costs 50-200% of salary. How virtual assistants solve the turnover crisis.',
};

export default function ReceptionistTurnoverPage() {
  return (
    <main>
      <article>
        <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Turnover Cost', href: '/blog/medical-receptionist-turnover' }]} />
            <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">The True Cost of Medical Receptionist Turnover</h1>
            <p className="text-text-secondary">Medical staff turnover costs 50–200% of annual salary. Why practices should consider virtual assistant alternatives.</p>
          </div>
        </section>

        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">The Turnover Crisis in Healthcare</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Medical receptionists have among the highest turnover rates in healthcare: 35–50% annually. This means practices are constantly recruiting, hiring, training, and replacing staff.
            </p>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">The Real Cost of One Receptionist Leaving</h2>
            <table className="w-full mb-8 text-sm border border-gray-300">
              <tbody>
                <tr className="border-b border-gray-300 bg-warm-cream">
                  <td className="p-3 font-bold">Recruitment & advertising</td>
                  <td className="p-3 text-right">$1,500–$3,000</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-3 font-bold">Interview & hiring process</td>
                  <td className="p-3 text-right">20 hours × $50/hr = $1,000</td>
                </tr>
                <tr className="border-b border-gray-300 bg-warm-cream">
                  <td className="p-3 font-bold">Training & onboarding (new hire)</td>
                  <td className="p-3 text-right">40–80 hours × $50/hr = $2,000–$4,000</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-3 font-bold">Lost productivity (learning curve)</td>
                  <td className="p-3 text-right">Month 1–3 at 60% efficiency = $3,000</td>
                </tr>
                <tr className="border-b border-gray-300 bg-warm-cream">
                  <td className="p-3 font-bold">Severance/final paycheck (departing)</td>
                  <td className="p-3 text-right">$2,000–$4,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-lg">TOTAL COST PER DEPARTURE</td>
                  <td className="p-3 text-right font-bold text-lg">$9,500–$16,000</td>
                </tr>
              </tbody>
            </table>

            <p className="text-text-secondary mb-8">
              <strong>For a practice with 2 receptionists and 50% turnover:</strong> One receptionist leaves every year, costing $9,500–$16,000 annually just in direct costs. Indirect costs (patient satisfaction, scheduling errors, billing delays) can double this number.
            </p>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Why Receptionists Leave</h2>
            <ul className="space-y-3 text-text-secondary mb-8">
              <li className="flex gap-3"><span className="text-coral-accent font-bold">1.</span><span><strong>Low pay</strong>: Average $35K–$40K. Many leave for higher-paying positions.</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">2.</span><span><strong>High stress:</strong> Answering 50–100 calls/day, managing angry patients, administrative overload.</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">3.</span><span><strong>No career growth:</strong> Receptionists see few opportunities for advancement.</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">4.</span><span><strong>Burnout:</strong> Long hours, difficult personalities, monotonous work.</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">5.</span><span><strong>Lack of support:</strong> Many practices don't invest in receptionist training or tools.</span></li>
            </ul>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">The VA Alternative: Stability & Cost Savings</h2>
            <p className="text-text-secondary mb-6">
              Dr. Capital VA eliminates turnover problems:
            </p>
            <ul className="space-y-3 text-text-secondary mb-8">
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span><strong>97% retention:</strong> VAs don't leave. Your team stays intact.</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span><strong>No recruitment costs:</strong> We handle hiring. You get a match in 48 hours.</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span><strong>No training costs:</strong> VA arrives trained and ready.</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span><strong>Scalability:</strong> Need more hours? Scale up instantly without hiring.</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span><strong>Lower salary cost:</strong> $1,300/month vs $3,000–$4,000 for in-house.</span></li>
            </ul>

            <div className="bg-teal-deep text-white rounded-lg p-8 text-center mt-12">
              <h2 className="font-serif text-3xl mb-4">Stop the Turnover Cycle</h2>
              <p className="mb-6 text-lg text-white/80">Get a stable, reliable VA who won't leave you understaffed.</p>
              <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Get Stable Admin Support
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
