import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Hello Rache vs Dr. Capital VA: Which Healthcare VA is Right?',
  description: 'Detailed comparison of Hello Rache and Dr. Capital VA. Pricing, HIPAA compliance, vetting, and which is best for healthcare practices.',
};

export default function HelloRacheComparisonPage() {
  return (
    <main>
      <article>
        <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'vs Hello Rache', href: '/blog/vs-hello-rache' }]} />
            <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Hello Rache vs Dr. Capital VA: Healthcare VA Comparison</h1>
            <p className="text-text-secondary">Which healthcare VA platform is right for your practice? HIPAA compliance, pricing, and vetting differences explained.</p>
          </div>
        </section>

        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">The Quick Answer</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Hello Rache is a freelancer marketplace offering lower-cost VAs without healthcare specialization. Dr. Capital VA is a healthcare-focused VA service with HIPAA compliance, rigorous vetting, and dedicated support. For healthcare practices handling patient data, Dr. Capital VA is the compliance-safe choice.
            </p>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Key Differences</h2>
            <table className="w-full mb-8 text-sm border border-gray-300">
              <thead>
                <tr className="bg-teal-deep text-white">
                  <th className="p-3 text-left">Feature</th>
                  <th className="p-3 text-left">Hello Rache</th>
                  <th className="p-3 text-left">Dr. Capital VA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="p-3 font-bold">HIPAA Compliance</td>
                  <td className="p-3">Not guaranteed</td>
                  <td className="p-3">✓ Certified</td>
                </tr>
                <tr className="border-b border-gray-300 bg-warm-cream">
                  <td className="p-3 font-bold">Healthcare Vetting</td>
                  <td className="p-3">Basic screening</td>
                  <td className="p-3">✓ 5-step, 3% hired</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-3 font-bold">Pricing</td>
                  <td className="p-3">$400–$800/mo</td>
                  <td className="p-3">$700–$1,300/mo</td>
                </tr>
                <tr className="border-b border-gray-300 bg-warm-cream">
                  <td className="p-3 font-bold">Commitment</td>
                  <td className="p-3">Hourly/project</td>
                  <td className="p-3">✓ Month-to-month</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="p-3 font-bold">Dedicated Support</td>
                  <td className="p-3">Marketplace</td>
                  <td className="p-3">✓ Client Manager</td>
                </tr>
              </tbody>
            </table>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Which Should You Choose?</h2>
            <p className="text-text-secondary mb-6">
              <strong>Choose Hello Rache if:</strong> You only need non-clinical admin (email, scheduling) with no patient data access, and budget is extremely tight.
            </p>
            <p className="text-text-secondary mb-6">
              <strong>Choose Dr. Capital VA if:</strong> You handle patient data, need HIPAA compliance, want HIPAA guarantees, and value dedicated support. (Strongly recommended for healthcare practices.)
            </p>

            <div className="bg-teal-deep text-white rounded-lg p-8 text-center mt-12">
              <h2 className="font-serif text-3xl mb-4">Get Healthcare VA Compliance Without Compromise</h2>
              <p className="mb-6 text-lg text-white/80">Choose a VA partner built for healthcare from the ground up.</p>
              <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Get HIPAA-Compliant VA Support
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
