import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';
import { getRegion, getCity, regions } from '@/lib/healthcare-data';

export const metadata: Metadata = {
  title: 'Healthcare Virtual Assistant Services',
  description: 'Healthcare virtual assistant support for your city.',
};

export async function generateStaticParams() {
  const { regions } = await import('@/lib/healthcare-data').then(m => ({ regions: m.regions }));
  const params: Array<{ region: string; city: string }> = [];

  regions.forEach(region => {
    region.cities.forEach(city => {
      params.push({
        region: region.slug,
        city: city.slug,
      });
    });
  });

  return params;
}

export default function CityPage({ params }: { params: { region: string; city: string } }) {
  const region = getRegion(params.region);
  if (!region) notFound();

  const city = getCity(params.region, params.city);
  if (!city) notFound();

  const currencies = {
    usa: '$',
    uk: '£',
    'middle-east': 'AED',
    apac: 'A$',
  };

  const currencySymbol = currencies[params.region as keyof typeof currencies] || '$';

  const partTimePrice = {
    usa: 700,
    uk: 560,
    'middle-east': 2570,
    apac: 1080,
  };

  const fullTimePrice = {
    usa: 1300,
    uk: 1040,
    'middle-east': 4775,
    apac: 2010,
  };

  const priceType = params.region as keyof typeof partTimePrice;
  const pt = partTimePrice[priceType];
  const ft = fullTimePrice[priceType];

  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[
            { label: 'Locations', href: '#' },
            { label: region.name, href: `/locations/${params.region}` },
            { label: city.name, href: `/locations/${params.region}/${params.city}` },
          ]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Healthcare Virtual Assistant Services in {city.name}</h1>
          <p className="text-xl text-text-secondary">Expert VA support for {city.name} healthcare practices. HIPAA-certified, EHR-trained, and ready to serve your patients.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">Healthcare Landscape in {city.name}</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            {city.name} is a major healthcare hub with world-class medical facilities, diverse medical specialties, and a strong patient base. Major hospital systems and health networks serve the area, including comprehensive primary care, specialists, urgent care, and surgical facilities. Dr. Capital VA understands the unique demands of {city.name}'s healthcare market and provides specialized VA support tailored to local practice needs.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Major Healthcare Providers</h2>
          <ul className="space-y-2 text-text-secondary mb-12">
            {city.majorSystems.map((hospital, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-coral-accent font-bold">→</span>
                <span>{hospital}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Medical Admin Salary in {city.name}</h2>
          <div className="bg-warm-cream rounded-lg p-8 border-l-4 border-coral-accent mb-12">
            <p className="text-text-secondary mb-4">
              Local medical receptionist/administrative salaries average <strong>TBD per year</strong> for full-time positions, not including benefits. High staff turnover and training costs are common challenges.
            </p>
            <p className="text-text-secondary font-semibold">
              Dr. Capital VA delivers 40 hours/week of dedicated healthcare admin support for <strong>{currencySymbol}{ft}/month</strong> with zero turnover and full HIPAA compliance.
            </p>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Our Services in {city.name}</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {[
              { slug: 'patient-scheduling', name: 'Patient Scheduling' },
              { slug: 'medical-billing', name: 'Medical Billing' },
              { slug: 'patient-follow-up', name: 'Patient Follow-Up' },
              { slug: 'intake-management', name: 'Intake Management' },
              { slug: 'referral-coordination', name: 'Referral Coordination' },
              { slug: 'telehealth-support', name: 'Telehealth Support' },
            ].map((service) => (
              <Link
                key={service.slug}
                href={`/locations/${params.region}/${params.city}/${service.slug}`}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-coral-accent hover:shadow-lg transition"
              >
                <h3 className="font-bold text-teal-deep">{service.name}</h3>
                <p className="text-text-secondary text-sm mt-2">Learn more in {city.name}</p>
              </Link>
            ))}
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Why {city.name} Practices Choose Dr. Capital VA</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-2">Local Healthcare Knowledge</h3>
              <p className="text-text-secondary text-sm">We understand {city.name}'s healthcare market, major hospital systems, specialty distributions, and local compliance requirements.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-2">Cost-Effective Alternative to Hiring</h3>
              <p className="text-text-secondary text-sm">Instead of hiring a local medical receptionist ({currencySymbol}TBD+/year + benefits + training), get a dedicated VA for {currencySymbol}{ft}/month with no downtime or turnover.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-2">HIPAA Compliance Guaranteed</h3>
              <p className="text-text-secondary text-sm">All VAs are HIPAA-certified with background checks, NDA agreements, and zero-breach track record. Your patient data is protected.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-2">Immediate Productivity</h3>
              <p className="text-text-secondary text-sm">Our VAs are trained on leading EHR platforms used in {city.name}. They're productive within days, not months.</p>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Pricing in {city.name}</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep text-lg mb-4">Part-Time (20 hrs/week)</h3>
              <p className="text-4xl font-serif text-coral-accent mb-4">{currencySymbol}{pt}</p>
              <p className="text-text-secondary text-sm mb-4">Month-to-month, no lock-in, 30-day guarantee</p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ Scheduling & patient follow-up</li>
                <li>✓ Insurance verification</li>
                <li>✓ Patient communication</li>
                <li>✓ Backup VA included</li>
              </ul>
            </div>
            <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-4">Full-Time (40 hrs/week)</h3>
              <p className="text-4xl font-serif text-coral-accent mb-4">{currencySymbol}{ft}</p>
              <p className="text-text-secondary text-sm mb-4">Month-to-month, no lock-in, 30-day guarantee</p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ All services above, plus:</li>
                <li>✓ Medical billing & claims</li>
                <li>✓ Full intake management</li>
                <li>✓ Dedicated Client Manager</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">How quickly can I get started?</h3>
              <p className="text-text-secondary text-sm">Within 48 hours. We'll match you with a healthcare-trained VA, conduct a brief handoff call, and your VA begins supporting your practice immediately.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What if I'm not satisfied?</h3>
              <p className="text-text-secondary text-sm">30-day money-back guarantee, no questions asked. If your VA isn't a good fit, we'll replace them or give you a full refund.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Do your VAs know our local EHR systems?</h3>
              <p className="text-text-secondary text-sm">Yes. We train VAs on Athenahealth, Epic, eClinicalWorks, Kareo, DrChrono, and other platforms commonly used in {city.name}.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Is it really HIPAA compliant?</h3>
              <p className="text-text-secondary text-sm">Yes, fully HIPAA-certified. All VAs have background checks, sign NDAs, use encrypted VPN connections, and operate under strict access controls. We maintain zero-breach record since 2019.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Get Healthcare VA Support in {city.name}</h2>
            <p className="mb-6 text-lg text-white/80">Join {city.name} practices that have freed up provider time and increased revenue with a dedicated healthcare virtual assistant.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Book Your Strategy Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
