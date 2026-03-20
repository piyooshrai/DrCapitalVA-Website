import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';
import { getRegion } from '@/lib/healthcare-data';

export const metadata: Metadata = {
  title: 'Healthcare Virtual Assistant Services by Region',
  description: 'Find Dr. Capital VA healthcare virtual assistant services in your region.',
};

export async function generateStaticParams() {
  return [
    { region: 'usa' },
    { region: 'uk' },
    { region: 'middle-east' },
    { region: 'apac' },
  ];
}

export default function RegionPage({ params }: { params: { region: string } }) {
  const region = getRegion(params.region);
  if (!region) notFound();

  const regionTitles = {
    usa: 'United States',
    uk: 'United Kingdom',
    'middle-east': 'Middle East',
    apac: 'Asia-Pacific',
  };

  const regionDescriptions = {
    usa: 'The United States healthcare market spans diverse specialties and practice sizes, from independent clinics to major health systems. Dr. Capital VA serves practices across all 50 states with HIPAA-certified virtual assistants trained on leading EHR platforms.',
    uk: 'The UK healthcare system combines NHS practices with private clinics. Dr. Capital VA understands UK healthcare workflows, GDPR compliance, and practice management requirements across England, Scotland, Wales, and Northern Ireland.',
    'middle-east': 'The Middle East healthcare market is rapidly growing with modern facilities and international patient bases. Dr. Capital VA provides HIPAA-compliant VA support for private clinics, hospitals, and multi-specialty groups across the UAE, Saudi Arabia, and Qatar.',
    apac: 'The Asia-Pacific region includes diverse healthcare systems across Australia, New Zealand, and beyond. Dr. Capital VA serves English-speaking practices with AHPRA-aware compliance and timezone-friendly support.',
  };

  const regionComplianceFocus = {
    usa: 'HIPAA compliance, state privacy laws, Medicare/Medicaid billing',
    uk: 'GDPR data protection, NHS compliance, private practice standards',
    'middle-east': 'DHA (Dubai Health Authority), HAAD (Abu Dhabi), clinical trial support',
    apac: 'AHPRA (Australia), privacy acts, international billing standards',
  };

  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Locations', href: '#' }, { label: regionTitles[params.region as keyof typeof regionTitles] || 'Region', href: `/locations/${params.region}` }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">
            Healthcare Virtual Assistant Services in {regionTitles[params.region as keyof typeof regionTitles]}
          </h1>
          <p className="text-xl text-text-secondary">HIPAA-certified VA support for healthcare practices across the region.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">Healthcare in {regionTitles[params.region as keyof typeof regionTitles]}</h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            {regionDescriptions[params.region as keyof typeof regionDescriptions]}
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Compliance Focus for {regionTitles[params.region as keyof typeof regionTitles]}</h2>
          <div className="bg-warm-cream rounded-lg p-8 border-l-4 border-coral-accent mb-12">
            <p className="text-text-secondary">
              {regionComplianceFocus[params.region as keyof typeof regionComplianceFocus]}
            </p>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Cities Served</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {region.cities.map((city) => (
              <a
                key={city.slug}
                href={`/locations/${params.region}/${city.slug}`}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-coral-accent hover:shadow-lg transition"
              >
                <h3 className="font-bold text-teal-deep mb-2">{city.name}</h3>
                <p className="text-text-secondary text-sm">{('state' in city ? city.state : city.country)}</p>
              </a>
            ))}
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Services Available</h2>
          <div className="space-y-3 mb-12">
            {['Patient Scheduling', 'Medical Billing', 'Patient Follow-Up', 'Intake Management', 'Referral Coordination', 'Telehealth Support'].map((service, idx) => (
              <div key={idx} className="flex items-center gap-3 text-text-secondary">
                <span className="text-coral-accent font-bold">✓</span>
                <span>{service}</span>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Why Choose Dr. Capital VA in {regionTitles[params.region as keyof typeof regionTitles]}</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-2">Regional Compliance Expertise</h3>
              <p className="text-text-secondary text-sm">We understand local healthcare regulations, compliance frameworks, and practice standards specific to {regionTitles[params.region as keyof typeof regionTitles]}.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-2">EHR Platform Knowledge</h3>
              <p className="text-text-secondary text-sm">Our VAs are trained on platforms commonly used in your region, ensuring immediate productivity with your systems.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-2">Healthcare Expertise</h3>
              <p className="text-text-secondary text-sm">Not generic VAs — our team understands healthcare workflows, billing cycles, and clinical terminology specific to your region.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-2">Timezone Compatibility</h3>
              <p className="text-text-secondary text-sm">Our global team ensures timezone overlap and real-time support for your practice, whenever you need it.</p>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Get Started</h2>
          <p className="text-text-secondary mb-12">
            Ready to add a healthcare virtual assistant to your team? Choose your city to learn more about local healthcare landscape and services, or contact us directly to discuss your practice needs.
          </p>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Find Your Local Healthcare VA Support</h2>
            <p className="mb-6 text-lg text-white/80">Select a city above or book a strategy call to discuss your practice's specific needs.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Book Your Strategy Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
