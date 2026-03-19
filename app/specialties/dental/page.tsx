import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Dental Practice Virtual Assistant | Dr. Capital VA',
  description: 'HIPAA-trained VAs for dental practices. Hygiene scheduling, treatment plan follow-up, insurance pre-authorization, recall management.',
};

export default function DentalSpecialtyPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Specialties', href: '/specialties' }, { label: 'Dental', href: '/specialties/dental' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Dental Practice Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            Specialized admin support for general dentistry, orthodontics, and specialty practices. Hygiene scheduling, recall management, and treatment plan coordination.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Dental VA Expertise</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Dental practices have distinct workflows. Hygiene visits, treatment planning, recall management, cosmetic consultations, and insurance pre-auth for expensive procedures. Our dental VAs understand these workflows and manage the admin that usually falls to your front desk and hygienists.
          </p>
          <h3 className="font-bold text-teal-deep mb-6">Common Dental VA Tasks</h3>
          <ul className="space-y-3 text-text-secondary">
            {[
              'Hygiene appointment scheduling and coordination',
              'Treatment plan follow-up: patient education and acceptance',
              'Insurance pre-authorization for major procedures (crowns, implants, braces)',
              'Recall management: patient outreach for 6-month and annual visits',
              'Cosmetic consultation booking and treatment planning',
              'Patient education about procedures and costs',
              'Payment plan setup and follow-up',
              'Lab case tracking and coordination',
              'Post-op follow-up calls after procedures',
            ].map((task, idx) => (
              <li key={idx} className="flex gap-3 text-sm">
                <span className="text-teal-accent mt-0.5">✓</span> {task}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-8">Recall & Retention</h2>
          <p className="text-lg text-white/70 mb-8">
            Preventive care drives revenue in dentistry. Patients who come for regular cleanings and exams catch issues early. Your dental VA manages the entire recall cycle.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-serif font-bold mb-2">6–12 mo</div>
              <p className="text-white/70 text-sm">Recall intervals tracked automatically</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold mb-2">3+</div>
              <p className="text-white/70 text-sm">Touchpoints per patient per year</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold mb-2">40%+</div>
              <p className="text-white/70 text-sm">Increase in recall compliance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Relevant Services for Dental</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: 'Patient Scheduling', slug: 'patient-scheduling' },
              { name: 'Medical Billing', slug: 'medical-billing' },
              { name: 'Patient Follow-Up', slug: 'patient-follow-up' },
            ].map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div className="bg-warm-cream rounded-lg p-4 border border-gray-200 hover:shadow-md-healthcare transition-all cursor-pointer">
                  <p className="font-semibold text-teal-deep text-sm">{service.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Example: General Dentistry Practice</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4 text-text-secondary text-sm">
            <p><strong className="text-teal-deep">Challenge:</strong> 2-hygienist dental practice had 30% recall no-show rate. Insurance pre-auth for major procedures took weeks. Admin staff frustrated with recall calling.</p>
            <p><strong className="text-teal-deep">Solution:</strong> Dental VA managed recall outreach, pre-auth tracking, and treatment plan follow-up.</p>
            <p><strong className="text-teal-deep">Result:</strong> Recall show rate improved to 85%. Pre-auth turnaround reduced from 2 weeks to 3 days. Revenue from preventive care and major cases increased 20%.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">Boost recall and treatment acceptance</h2>
          <p className="text-lg text-white/70 mb-8">Dental VAs drive patient retention and revenue.</p>
          <ContactForm showName={false} showPhone={false} showSpecialty={false} showMessage={false} buttonText="Get Started" />
        </div>
      </section>
    </main>
  );
}
