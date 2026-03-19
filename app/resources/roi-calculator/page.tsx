import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Healthcare VA ROI Calculator | Dr. Capital VA',
  description: 'Calculate the return on investment for a healthcare virtual assistant. See your potential savings and revenue gains.',
};

export default function ROICalculatorPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Resources', href: '#' }, { label: 'ROI Calculator', href: '/resources/roi-calculator' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Healthcare VA ROI Calculator</h1>
          <p className="text-xl text-text-secondary">Calculate your potential return on investment with a healthcare virtual assistant.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 border border-gray-200 mb-12">
            <h2 className="font-serif text-3xl text-teal-deep mb-6">Practice Metrics</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-text-secondary font-semibold mb-2">Annual Practice Revenue</label>
                <input type="number" placeholder="$1,000,000" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-text-secondary font-semibold mb-2">Current No-Show Rate (%)</label>
                <input type="number" placeholder="20" min="0" max="100" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-text-secondary font-semibold mb-2">Current Denial Rate (%)</label>
                <input type="number" placeholder="8" min="0" max="100" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-text-secondary font-semibold mb-2">Hours of Admin Work Per Week (Provider)</label>
                <input type="number" placeholder="15" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
            </div>
          </div>

          <div className="bg-warm-cream rounded-lg p-8 border-l-4 border-coral-accent mb-12">
            <h2 className="font-serif text-3xl text-teal-deep mb-6">Estimated Annual Benefits</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                <span className="text-text-secondary">No-Show Recovery (30% reduction)</span>
                <span className="font-bold text-lg text-coral-accent">$25,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                <span className="text-text-secondary">Denial Reduction (50% fewer denials)</span>
                <span className="font-bold text-lg text-coral-accent">$30,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                <span className="text-text-secondary">Provider Time Value (15 hrs/week × $100/hr)</span>
                <span className="font-bold text-lg text-coral-accent">$78,000</span>
              </div>
              <div className="flex justify-between items-center pt-4 text-lg">
                <span className="font-bold text-teal-deep">Total Estimated Benefit</span>
                <span className="font-bold text-2xl text-coral-accent">$133,000</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-4">Part-Time VA</h3>
              <p className="text-4xl font-serif text-coral-accent mb-2">$700</p>
              <p className="text-text-secondary text-sm mb-4">/month</p>
              <div className="space-y-2 text-text-secondary text-sm">
                <p><strong>Annual Cost:</strong> $8,400</p>
                <p><strong>Annual Benefit:</strong> $75,000</p>
                <p><strong>Net ROI:</strong> 793%</p>
              </div>
            </div>
            <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-4">Full-Time VA</h3>
              <p className="text-4xl font-serif text-coral-accent mb-2">$1,300</p>
              <p className="text-text-secondary text-sm mb-4">/month</p>
              <div className="space-y-2 text-text-secondary text-sm">
                <p><strong>Annual Cost:</strong> $15,600</p>
                <p><strong>Annual Benefit:</strong> $133,000</p>
                <p><strong>Net ROI:</strong> 753%</p>
              </div>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Invest in Your Practice?</h2>
            <p className="mb-6 text-lg text-white/80">Let's discuss how a healthcare VA can deliver this ROI for your specific practice.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Schedule a Strategy Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
