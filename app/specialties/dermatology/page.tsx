import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Dermatology Virtual Assistant | Dr. Capital VA',
  description: 'HIPAA VAs for dermatologists. Procedure scheduling, cosmetic consultations, biopsy result follow-up, insurance pre-authorization.',
};

export default function DermatologySpecialtyPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Specialties', href: '/specialties' }, { label: 'Dermatology', href: '/specialties/dermatology' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Dermatology Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            Specialized support for dermatologists and aesthetic practices. Procedure scheduling, cosmetic consultations, biopsy coordination, pathology result management.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Dermatology VA Expertise</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Dermatology blends medical and cosmetic cases. You manage skin cancer screening, diagnostic biopsies, treatment of dermatologic conditions, and elective cosmetic procedures. Your dermatology VA handles the scheduling, consultations, and follow-up coordination.
          </p>
          <h3 className="font-bold text-teal-deep mb-6">Dermatology VA Tasks</h3>
          <ul className="space-y-3 text-text-secondary text-sm">
            {[
              'Cosmetic consultation booking and expectations management',
              'Procedure scheduling: Mohs micrographic surgery, laser, cryotherapy, chemical peels',
              'Biopsy result follow-up and patient notification',
              'Pathology tracking and provider communication',
              'Before/after photo management and patient consent',
              'Insurance pre-authorization for procedures',
              'Post-procedure care instructions and complication monitoring',
              'Medication refill management for dermatologic conditions',
              'Patient education about skin cancer prevention',
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
          <h2 className="font-serif text-4xl mb-8">Cosmetic Consultations → Revenue</h2>
          <p className="text-lg text-white/70 mb-8">
            Cosmetic consultations often convert to procedures. Your dermatology VA ensures consultations happen, sets proper expectations, and follows up on conversion.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-white mb-2">Before</p>
              <p className="text-white/70 text-sm">Cosmetic consultation scheduled, patient cancels or forgets. Opportunity lost.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">With Dermatology VA</p>
              <p className="text-white/70 text-sm">Confirmation call, pre-visit education, follow-up booking. 40% improvement in consultation-to-procedure conversion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Example: Dermatology Practice</h2>
          <div className="bg-warm-cream rounded-2xl p-8 border border-gray-200 space-y-4 text-text-secondary text-sm">
            <p><strong className="text-teal-deep">Challenge:</strong> Dermatology practice with both medical and cosmetic services. Cosmetic consultation no-show rate was 35%. Biopsy results weren't being communicated promptly to patients. Insurance pre-auth delays slowed elective procedures.</p>
            <p><strong className="text-teal-deep">Solution:</strong> Dermatology VA managed consultations, biopsy coordination, and pre-auth tracking.</p>
            <p><strong className="text-teal-deep">Result:</strong> Consultation no-show rate dropped to 10%. Biopsy result communication improved to 24-48 hours. Pre-auth processing reduced from 5 days to 2 days. Cosmetic procedure volume increased 25%.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">Grow your dermatology practice</h2>
          <p className="text-lg text-white/70 mb-8">Dermatology VAs improve procedure volume, patient satisfaction, and compliance rates.</p>
          <ContactForm showName={false} showPhone={false} showSpecialty={false} showMessage={false} buttonText="Schedule Consultation" />
        </div>
      </section>
    </main>
  );
}
