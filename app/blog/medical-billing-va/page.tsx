import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Medical Billing Virtual Assistants: Claims, Denials & Revenue Cycle',
  description: 'How medical billing VAs improve claims acceptance, reduce denials, and optimize your revenue cycle.',
};

export default function MedicalBillingVAPage() {
  return (
    <main>
      <article>
        <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Medical Billing VA', href: '/blog/medical-billing-va' }]} />
            <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Medical Billing Virtual Assistants</h1>
            <p className="text-text-secondary">How billing VAs reduce denial rates, accelerate claims, and optimize your revenue cycle.</p>
          </div>
        </section>

        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">The Billing Crisis</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Average dental/medical denial rate: 8–12%. Average claim processing time: 45–60 days. Many practices have $100K+ in aging AR (accounts receivable). A medical billing VA can cut denial rates to 3–5%, accelerate claims to 15–20 days, and recover thousands in lost revenue.
            </p>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">What Billing VAs Do</h2>
            <ul className="space-y-3 text-text-secondary mb-8">
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Insurance verification before service (prevent surprises)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Clean claims submission (reduce rejections)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Denial analysis and corrected resubmission</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Appeal management for denied claims</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Patient billing and collections follow-up</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Aging AR tracking and resolution</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Revenue cycle reporting and analysis</span></li>
            </ul>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Financial Impact Example</h2>
            <p className="text-text-secondary mb-4">$1M annual revenue practice:</p>
            <ul className="space-y-2 text-text-secondary mb-8">
              <li>• Denial rate reduction: 8% → 4% = $40K recovered/year</li>
              <li>• Claims acceleration: 60-day → 20-day DSO = $30K cash flow improvement</li>
              <li>• Patient collections improvement: +15% = $25K additional</li>
              <li>• Total annual benefit: $95K</li>
              <li>• VA cost: $15.6K/year</li>
              <li>• ROI: 509%</li>
            </ul>

            <div className="bg-teal-deep text-white rounded-lg p-8 text-center mt-12">
              <h2 className="font-serif text-3xl mb-4">Recover Lost Revenue Through Billing Optimization</h2>
              <p className="mb-6 text-lg text-white/80">Get a billing VA who knows claims, denials, and revenue cycle optimization.</p>
              <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Get Billing VA Support
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
