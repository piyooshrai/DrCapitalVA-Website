import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Primary Care Virtual Assistant | Dr. Capital VA',
  description: 'HIPAA-trained VAs for primary care practices. Scheduling, billing, patient follow-up, and administrative support.',
};

export default function PrimaryCareSpecialtyPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Specialties', href: '/specialties' }, { label: 'Primary Care', href: '/specialties/primary-care' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Primary Care Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            Specialized support for family medicine, internal medicine, and general practice. Managing wellness visits, chronic disease follow-up, and preventive care coordination.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Primary Care VA Expertise</h2>
          <div className="prose prose-lg max-w-none text-text-secondary space-y-6">
            <p>
              Primary care is the backbone of healthcare. Your practice manages preventive care, chronic disease, acute illness, mental health screening, and health maintenance — often for the same patient across decades.
            </p>
            <p>
              This breadth creates unique admin challenges. You're coordinating annual wellness visits, managing complex medication regimens, tracking preventive care gaps (is Mrs. Johnson due for her mammo?), and following up on lab results from 20+ different test types.
            </p>
            <p>
              Our primary care VAs understand this ecosystem. They know the difference between a wellness visit and an acute visit from a billing perspective. They track preventive care calendars. They manage chronic disease follow-ups. They're trained on the major platforms: Athenahealth, Epic, eClinicalWorks, Kareo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-8">Common Tasks Primary Care VAs Handle</h2>
          <ul className="space-y-4">
            {[
              'Annual wellness visit scheduling and pre-visit planning',
              'Chronic disease management: diabetes, hypertension, COPD follow-ups',
              'Preventive care tracking: colonoscopies, mammograms, vaccines, screenings',
              'Medication refill management and patient adherence calls',
              'Lab result notification and patient education',
              'Mental health screening and referral coordination',
              'Patient follow-up after acute illness (UTI, bronchitis, etc.)',
              'Insurance pre-authorization for medications and procedures',
              'Care coordination with specialists',
              'Patient education about lifestyle changes',
            ].map((task, idx) => (
              <li key={idx} className="flex gap-3">
                <svg className="w-5 h-5 text-teal-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Platforms & Tools</h2>
          <p className="text-text-secondary mb-8">Primary care VAs are trained on:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Athenahealth', 'Epic', 'eClinicalWorks', 'Kareo', 'DrChrono', 'Practice Fusion'].map((tool) => (
              <Link key={tool} href={`/tools/${tool.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="bg-warm-cream rounded-lg p-4 border border-gray-200 hover:shadow-md-healthcare transition-all cursor-pointer">
                  <p className="font-semibold text-teal-deep">{tool}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Compliance Considerations</h2>
          <p className="text-text-secondary mb-6">
            Primary care handles sensitive data: psychiatric records, substance abuse history, pregnancy status, sexual history. Your primary care VA maintains strict confidentiality and clinical sensitivity.
          </p>
          <ul className="space-y-2 text-text-secondary text-sm">
            {[
              '✓ Sensitive topic training (mental health, substance use, sexual health)',
              '✓ Depression screening (PHQ-9) and suicide risk identification',
              '✓ Medication interaction awareness',
              '✓ Allergy and adverse drug event tracking',
              '✓ Patient safety alert management',
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">Relevant Services for Primary Care</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: 'Patient Scheduling', slug: 'patient-scheduling' },
              { name: 'Medical Billing', slug: 'medical-billing' },
              { name: 'Patient Follow-Up', slug: 'patient-follow-up' },
              { name: 'Intake Management', slug: 'intake-management' },
            ].map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md-healthcare transition-all cursor-pointer">
                  <p className="font-semibold text-teal-deep">{service.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Real Impact: Family Medicine Practice</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4 text-text-secondary">
            <p><strong className="text-teal-deep">Challenge:</strong> 3-provider family medicine clinic had no system for tracking preventive care. Patients missed wellness visits and screenings. Admin staff spent 25% of time on follow-up calls.</p>
            <p><strong className="text-teal-deep">Solution:</strong> Hired Dr. Capital VA to manage preventive care calendar, send reminders, and coordinate follow-ups. Integrated with Athenahealth EHR.</p>
            <p><strong className="text-teal-deep">Result:</strong> Preventive care completion rate increased from 56% to 82%. Patient satisfaction scores improved. Admin staff freed up for clinical support.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">Ready to streamline primary care operations?</h2>
          <p className="text-lg text-white/70 mb-8">Our primary care VAs free your team to focus on patient care, not paperwork.</p>
          <ContactForm showName={false} showPhone={false} showSpecialty={false} showMessage={false} buttonText="Book a Call" />
        </div>
      </section>
    </main>
  );
}
