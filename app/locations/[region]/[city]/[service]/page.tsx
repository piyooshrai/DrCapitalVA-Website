import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';
import { getRegion, getCity, getService } from '@/lib/healthcare-data';

export const metadata: Metadata = {
  title: 'Healthcare Virtual Assistant Services',
  description: 'Expert healthcare virtual assistant support for your practice.',
};

const serviceTasks = {
  'patient-scheduling': [
    'Appointment creation and management in your EHR system',
    'No-show reduction strategies and follow-up scheduling',
    'Provider schedule optimization for maximum utilization',
    'Patient confirmation calls and appointment reminders',
    'Cancellation management and waitlist coordination',
    'Recurring appointment and recall scheduling',
    'Coverage scheduling for provider absences',
    'Real-time schedule adjustments based on patient needs',
  ],
  'medical-billing': [
    'Claim submission and status monitoring',
    'Insurance eligibility verification before service',
    'Denial analysis and corrective claim resubmission',
    'Patient billing and collections follow-up',
    'Revenue cycle reporting and metrics tracking',
    'CPT and ICD code compliance verification',
    'Payer contract review and maximum fee optimization',
    'Accounts receivable aging management',
  ],
  'patient-follow-up': [
    'Post-visit follow-up communication and education',
    'Appointment no-show prevention through proactive contact',
    'Medication adherence reminders for chronic conditions',
    'Test result notification and explanation to patients',
    'Preventive care and wellness reminder campaigns',
    'Specialist referral follow-up and coordination',
    'Patient satisfaction surveys and feedback collection',
    'Care gap identification and intervention',
  ],
  'intake-management': [
    'New patient registration and data entry',
    'Insurance information collection and verification',
    'Demographic accuracy and HIPAA-compliant updates',
    'Medical history form completion and review',
    'Allergy and medication reconciliation',
    'Consent form management and e-signature coordination',
    'Patient education and practice orientation materials',
    'Data quality assurance and error prevention',
  ],
  'referral-coordination': [
    'Specialist referral generation and submission',
    'Insurance pre-authorization request management',
    'Referral tracking and specialist communication',
    'Patient education on specialist appointments',
    'Follow-up coordination post-specialist visit',
    'Records request and transfer to specialists',
    'Appointment scheduling at specialist offices',
    'Care plan integration with specialist recommendations',
  ],
  'telehealth-support': [
    'Patient education on telehealth technology and setup',
    'Pre-visit technical troubleshooting and support',
    'Virtual waiting room management',
    'Post-visit documentation and follow-up messaging',
    'Prescription coordination for telemedicine visits',
    'Recording management and HIPAA-compliant storage',
    'Patient privacy and confidentiality verification',
    'Telehealth platform optimization and workflow management',
  ],
};

const serviceDescriptions = {
  'patient-scheduling': 'Patient scheduling management reduces no-shows by 30-40% and optimizes provider utilization, directly increasing revenue.',
  'medical-billing': 'Medical billing VA support can improve collections by 20-30% and reduce denial rates from 8% to 3-4%, significantly impacting revenue cycle.',
  'patient-follow-up': 'Patient follow-up increases appointment adherence by 35-50% and improves clinical outcomes through better medication compliance and care engagement.',
  'intake-management': 'Accurate intake management ensures clean data, faster claims processing, and improved patient experience from first contact.',
  'referral-coordination': 'Specialist referral coordination ensures timely specialist access, improves care continuity, and reduces referral delays by 50%+.',
  'telehealth-support': 'Telehealth support maximizes the efficiency of virtual visits, improves patient satisfaction, and enables providers to see more patients remotely.',
};

const serviceKeywords = {
  'patient-scheduling': 'Patient Scheduling Virtual Assistant',
  'medical-billing': 'Medical Billing Virtual Assistant',
  'patient-follow-up': 'Patient Follow-Up Virtual Assistant',
  'intake-management': 'Intake Management Virtual Assistant',
  'referral-coordination': 'Referral Coordination Virtual Assistant',
  'telehealth-support': 'Telehealth Support Virtual Assistant',
};

export default function CityServicePage({
  params,
}: {
  params: { region: string; city: string; service: string };
}) {
  const region = getRegion(params.region);
  if (!region) notFound();

  const cityData = getCity(params.region, params.city);
  if (!cityData) notFound();

  const serviceData = getService(params.service);
  if (!serviceData) notFound();

  const tasks = serviceTasks[params.service as keyof typeof serviceTasks] || [];
  const description = serviceDescriptions[params.service as keyof typeof serviceDescriptions];
  const keyword = serviceKeywords[params.service as keyof typeof serviceKeywords];

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
          <Breadcrumbs
            items={[
              { label: 'Locations', href: '#' },
              { label: region.name, href: `/locations/${params.region}` },
              { label: cityData.name, href: `/locations/${params.region}/${params.city}` },
              {
                label: serviceData.name,
                href: `/locations/${params.region}/${params.city}/${params.service}`,
              },
            ]}
          />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">
            {keyword} in {cityData.name}
          </h1>
          <p className="text-xl text-text-secondary">
            {description}
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">What Your VA Handles</h2>
          <div className="space-y-4 mb-12">
            {tasks.map((task, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-coral-accent font-bold flex-shrink-0">✓</span>
                <p className="text-text-secondary">{task}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Why {serviceData.name} Matters in {cityData.name}</h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            {cityData.name} healthcare practices face intense competition and rising administrative workload. {serviceData.name} support directly impacts your practice's efficiency, patient satisfaction, and revenue. By delegating these critical tasks to a healthcare-trained VA, your providers can focus on patient care while your practice operates at peak efficiency.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Cost Comparison in {cityData.name}</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-teal-deep text-white">
                  <th className="border border-gray-300 p-3 text-left">Option</th>
                  <th className="border border-gray-300 p-3 text-left">Cost</th>
                  <th className="border border-gray-300 p-3 text-left">Benefits</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary text-sm">
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Hire local admin staff</td>
                  <td className="border border-gray-300 p-3">{currencySymbol}35K–{currencySymbol}45K/year + benefits</td>
                  <td className="border border-gray-300 p-3">In-person presence; high turnover (35%+ annually)</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-3">Generic VA agency</td>
                  <td className="border border-gray-300 p-3">{currencySymbol}600–{currencySymbol}1,200/month</td>
                  <td className="border border-gray-300 p-3">Affordable; but no healthcare expertise, no HIPAA guarantee</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3"><strong>Dr. Capital VA (Part-Time)</strong></td>
                  <td className="border border-gray-300 p-3"><strong>{currencySymbol}{pt}/month</strong></td>
                  <td className="border border-gray-300 p-3"><strong>Healthcare-trained, HIPAA-certified, 97% retention</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Impact on Your Practice</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-warm-cream rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-3">Provider Time Saved</h3>
              <p className="text-2xl font-serif text-coral-accent mb-2">10–15 hours/week</p>
              <p className="text-text-secondary text-sm">Reclaimed time for patient care and clinical work.</p>
            </div>
            <div className="bg-warm-cream rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-3">Revenue Impact</h3>
              <p className="text-2xl font-serif text-coral-accent mb-2">{currencySymbol}1,500–{currencySymbol}3,000/month</p>
              <p className="text-text-secondary text-sm">Typical monthly improvement from optimized workflows.</p>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Relevant Specialties in {cityData.name}</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {cityData.specialties.map((specialty) => (
              <Link
                key={specialty}
                href={`/specialties/${specialty.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '')}`}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-coral-accent transition"
              >
                <p className="text-teal-deep font-semibold">{specialty}</p>
              </Link>
            ))}
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">How It Works</h2>
          <div className="space-y-6 mb-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-deep text-white flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h3 className="font-bold text-teal-deep mb-2">Strategy Call</h3>
                <p className="text-text-secondary">We discuss your practice needs, workflows, and current challenges. No obligation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-deep text-white flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h3 className="font-bold text-teal-deep mb-2">VA Match</h3>
                <p className="text-text-secondary">We match you with a healthcare-trained VA and provide a 48-hour onboarding.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-deep text-white flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h3 className="font-bold text-teal-deep mb-2">HIPAA Onboarding</h3>
                <p className="text-text-secondary">Your VA completes HIPAA training, signs NDA, and gains access to your systems via secure VPN.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-deep text-white flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <h3 className="font-bold text-teal-deep mb-2">Launch & Optimize</h3>
                <p className="text-text-secondary">Your VA begins supporting your practice with your Client Manager providing ongoing support and optimization.</p>
              </div>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Pricing in {cityData.name}</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep text-lg mb-4">Part-Time</h3>
              <p className="text-4xl font-serif text-coral-accent mb-2">{currencySymbol}{pt}</p>
              <p className="text-text-secondary text-sm mb-4">/month, 20 hours/week</p>
              <a href="/contact" className="text-coral-accent font-semibold text-sm hover:underline">Get started →</a>
            </div>
            <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-4">Full-Time</h3>
              <p className="text-4xl font-serif text-coral-accent mb-2">{currencySymbol}{ft}</p>
              <p className="text-text-secondary text-sm mb-4">/month, 40 hours/week</p>
              <a href="/contact" className="text-coral-accent font-semibold text-sm hover:underline">Get started →</a>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">How quickly can my VA start?</h3>
              <p className="text-text-secondary text-sm">Within 48 hours of matching. We'll coordinate a handoff call and your VA will be supporting your practice immediately.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What if I need to scale up or down?</h3>
              <p className="text-text-secondary text-sm">Month-to-month contract with no lock-in. Upgrade from part-time to full-time anytime, or cancel if your needs change.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Is it really HIPAA compliant?</h3>
              <p className="text-text-secondary text-sm">Yes, fully HIPAA-certified with BAA agreements, background checks, encrypted VPN access, and zero breaches since 2019.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Get Expert {serviceData.name} Support</h2>
            <p className="mb-6 text-lg text-white/80">Schedule a 15-minute strategy call to see how a dedicated healthcare VA can transform your practice operations in {cityData.name}.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Book Your Strategy Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
