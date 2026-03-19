import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Pricing | Dr. Capital VA - Healthcare Virtual Assistant Pricing',
  description: 'Dr. Capital VA pricing plans from $700/month. Flexible month-to-month contracts with no lock-in. Compare costs vs medical receptionists.',
};

export default function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Pricing', href: '/pricing' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Transparent pricing. No long-term lock-in.</h1>
          <p className="text-xl text-text-secondary">All plans month-to-month. Cancel anytime. Add or reduce hours as your practice grows.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Part-Time',
                price: '$700',
                period: '/month',
                hours: '20 hours/week',
                features: [
                  'Dedicated VA',
                  'HIPAA trained & certified',
                  'Checkr background verified',
                  'BAA agreement included',
                  'Dedicated Client Manager',
                  'Weekly check-ins',
                  'EHR training included',
                  'Email & chat support',
                ],
              },
              {
                name: 'Full-Time',
                price: '$1,300',
                period: '/month',
                hours: '40 hours/week',
                features: [
                  'Dedicated VA',
                  'HIPAA trained & certified',
                  'Checkr background verified',
                  'BAA agreement included',
                  'Dedicated Client Manager',
                  'Weekly check-ins',
                  'EHR training included',
                  'Email & chat support',
                  'Backup VA coverage included',
                  'Bi-weekly performance reviews',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '',
                hours: '2-5 VAs',
                features: [
                  'Multiple dedicated VAs',
                  'HIPAA trained & certified',
                  'Checkr background verified',
                  'BAA agreement included',
                  'Dedicated Account Manager',
                  'Weekly check-ins',
                  'Custom EHR training',
                  'Priority support',
                  'Full backup coverage',
                  'Custom compliance audits',
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-teal-deep text-white shadow-lg-healthcare'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className={`font-serif text-3xl mb-2 ${plan.highlighted ? 'text-white' : 'text-teal-deep'}`}>
                  {plan.name}
                </h3>
                <div className="mb-1">
                  <span className={`font-serif text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-teal-deep'}`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlighted ? 'text-white/70' : 'text-text-secondary'}>{plan.period}</span>
                </div>
                <p className={`text-sm mb-8 ${plan.highlighted ? 'text-white/60' : 'text-text-muted'}`}>
                  {plan.hours}
                </p>

                <Link
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider mb-8 transition-all ${
                    plan.highlighted
                      ? 'bg-white text-teal-deep hover:bg-warm-cream'
                      : 'bg-teal-deep text-white hover:bg-teal-mid'
                  }`}
                >
                  Get Started
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${
                          plan.highlighted ? 'text-teal-accent' : 'text-teal-deep'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12 text-center">
            vs. Hiring a Medical Receptionist Locally
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-teal-deep text-white">
                  <th className="p-4 text-left font-semibold">Option</th>
                  <th className="p-4 text-left font-semibold">Monthly Cost</th>
                  <th className="p-4 text-left font-semibold">Annual Cost</th>
                  <th className="p-4 text-left font-semibold">What You Get</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="p-4 font-semibold text-teal-deep">Local Medical Receptionist</td>
                  <td className="p-4">$3,200–$3,750</td>
                  <td className="p-4 font-bold text-coral-accent">$38K–$45K</td>
                  <td className="p-4 text-sm text-text-secondary">Salary only. Add taxes, benefits, turnover costs.</td>
                </tr>
                <tr className="border-b border-gray-300 bg-warm-white">
                  <td className="p-4 font-semibold text-teal-deep">Freelancer VA</td>
                  <td className="p-4">$1,000–$2,000</td>
                  <td className="p-4">$12K–$24K</td>
                  <td className="p-4 text-sm text-text-secondary">No HIPAA training. No background check. High turnover.</td>
                </tr>
                <tr className="bg-teal-deep text-white">
                  <td className="p-4 font-semibold">Dr. Capital VA Full-Time</td>
                  <td className="p-4 font-bold">$1,300</td>
                  <td className="p-4 font-bold">$15,600</td>
                  <td className="p-4 text-sm text-white/80">HIPAA trained, Checkr verified, dedicated, managed, no turnover.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-text-secondary text-center mt-8">
            You save $22K–$29K annually while getting a dedicated, HIPAA-trained professional managed by us.
          </p>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12 text-center">
            How We Compare to Other Healthcare VA Services
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-warm-cream">
                  <th className="p-4 text-left font-semibold text-teal-deep">Feature</th>
                  <th className="p-4 text-center font-semibold text-teal-deep">Dr. Capital VA</th>
                  <th className="p-4 text-center font-semibold">Hello Rache</th>
                  <th className="p-4 text-center font-semibold">ScribeEMR</th>
                  <th className="p-4 text-center font-semibold">Generic VAs</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price (Full-Time)', '$1,300/mo', '$1,520/mo', 'Custom', '$1,000–$2,000/mo'],
                  ['Dedicated VA', '✓', '✓', '✗', '✓'],
                  ['HIPAA Trained', '✓', '✓', '✓', '✗'],
                  ['Checkr Background Check', '✓', '✗', '✗', '✗'],
                  ['Client Manager', '✓', '✗', '✗', '✗'],
                  ['Backup VA Coverage', '✓', '✗', '✗', '✗'],
                  ['Month-to-Month', '✓', '✓', '✗', '✓'],
                  ['BAA Agreement', '✓', '✓', '✓', '✗'],
                  ['EHR Training', '✓', 'Limited', 'Scribing only', '✗'],
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-warm-white' : ''}>
                    <td className="p-4 font-semibold text-text-primary">{row[0]}</td>
                    <td className="p-4 text-center text-teal-deep font-bold">{row[1]}</td>
                    <td className="p-4 text-center text-text-secondary">{row[2]}</td>
                    <td className="p-4 text-center text-text-secondary">{row[3]}</td>
                    <td className="p-4 text-center text-text-secondary">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Can I cancel anytime?', a: 'Yes. Month-to-month contracts. 30 days notice to cancel. No penalties.' },
              { q: 'What if the VA isn\'t a good fit?', a: 'We\'ll replace them. You only pay for time worked. Usually a re-match within 3 days.' },
              { q: 'Are there hidden fees?', a: 'No. Pricing includes HIPAA training, Client Manager, BAA, background check, and support. That\'s it.' },
              { q: 'Can I adjust hours mid-month?', a: 'Yes. Tell us by the 1st of the month for the following month. Flexible scaling as your needs change.' },
              { q: 'What EHRs do you support?', a: 'Athenahealth, Epic, eClinicalWorks, Kareo, DrChrono, Practice Fusion, and others. Tell us your EHR, we train for it.' },
              { q: 'Is HIPAA compliance guaranteed?', a: 'Yes. BAA agreement, annual audits, Checkr verified, encrypted systems, NDA. Full compliance or we fix it at no cost.' },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-teal-deep mb-2">{item.q}</h3>
                <p className="text-text-secondary">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">Ready to save time and money?</h2>
          <p className="text-xl text-white/70 mb-8">Book a free 15-minute strategy call to discuss your practice's needs.</p>
          <Link href="/contact" className="btn-white">Get Started Today</Link>
        </div>
      </section>
    </main>
  );
}
