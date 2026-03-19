import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Pediatric Practice Virtual Assistant | Dr. Capital VA',
  description: 'HIPAA VAs for pediatricians. Well-child visit scheduling, immunization tracking, school form processing, parent communication.',
};

export default function PediatricsSpecialtyPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Specialties', href: '/specialties' }, { label: 'Pediatrics', href: '/specialties/pediatrics' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Pediatric Practice Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            Specialized support for pediatricians. Well-child visit scheduling, immunization tracking, school form processing, parent communication.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Pediatric VA Expertise</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Pediatric practices manage preventive care, acute illness, developmental screening, and school coordination. You're tracking well-child visits, immunizations, school forms, and parent communication. Your pediatric VA handles this workflow with sensitivity to parents and families.
          </p>
          <h3 className="font-bold text-teal-deep mb-6">Pediatric VA Responsibilities</h3>
          <ul className="space-y-3 text-text-secondary text-sm">
            {[
              'Well-child visit scheduling at standard intervals (2m, 4m, 6m, 12m, 15m, 18m, 24m, etc.)',
              'Immunization tracking and reminder outreach',
              'School form completion: physical forms, sports clearances, behavioral/developmental screening',
              'Developmental milestone screening administration and tracking',
              'Sick visit scheduling and parent pre-visit questionnaires',
              'Allergy and special health needs documentation',
              'Parent education materials distribution',
              'Follow-up on acute illness (ear infection, bronchiolitis, etc.)',
              'Coordination with schools and daycares regarding health concerns',
            ].map((task, idx) => (
              <li key={idx} className="flex gap-2 text-sm">
                <span className="text-teal-accent mt-0.5">✓</span> {task}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-8">Parent Communication Excellence</h2>
          <p className="text-lg text-white/70 mb-8">
            Pediatric patients have parents/guardians who need reassurance and education. Your pediatric VA is trained in parent-friendly communication and health literacy.
          </p>
          <ul className="space-y-3">
            {[
              '✓ Plain-language health communication',
              '✓ Multilingual support (Spanish, Mandarin, etc.)',
              '✓ Developmental appropriateness for different ages',
              '✓ Sensitivity to parenting anxiety and concerns',
              '✓ Non-judgmental approach to parenting styles',
              '✓ Vaccine hesitancy education resources',
            ].map((item, idx) => (
              <li key={idx} className="text-white/90">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Example: Busy Pediatric Practice</h2>
          <div className="bg-warm-cream rounded-2xl p-8 border border-gray-200 space-y-4 text-text-secondary text-sm">
            <p><strong className="text-teal-deep">Challenge:</strong> Pediatric practice with 3 providers and 50+ well-child visits monthly. School forms were falling through the cracks. Parent no-shows for well-child visits were 15%. Staff turnover was high due to admin burnout.</p>
            <p><strong className="text-teal-deep">Solution:</strong> Pediatric VA hired to manage well-child scheduling, school forms, and parent communications.</p>
            <p><strong className="text-teal-deep">Result:</strong> Well-child visit show rate improved to 95%. School form turnaround reduced from weeks to 2 days. Parent satisfaction increased. Admin staff morale improved, reducing turnover.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">Strengthen your pediatric practice</h2>
          <p className="text-lg text-white/70 mb-8">Pediatric VAs improve preventive care completion, parent satisfaction, and staff retention.</p>
          <ContactForm showName={false} showPhone={false} showSpecialty={false} showMessage={false} buttonText="Get Support" />
        </div>
      </section>
    </main>
  );
}
