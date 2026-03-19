import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Cardiology Virtual Assistant | Dr. Capital VA',
  description: 'HIPAA VAs for cardiologists and cardiac teams. Stress test scheduling, procedure coordination, post-op follow-up support.',
};

export default function CardiologySpecialtyPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Specialties', href: '/specialties' }, { label: 'Cardiology', href: '/specialties/cardiology' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Cardiology Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            Specialized support for interventional cardiologists, electrophysiologists, and cardiac teams. Procedure scheduling, test coordination, medication management follow-up.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Cardiology VA Expertise</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Cardiology requires precision scheduling and complex coordination. Stress tests, catheterizations, device placements, arrhythmia monitoring — each has unique pre-op, post-op, and follow-up requirements. Your cardiology VA understands these protocols and manages the logistics.
          </p>
          <h3 className="font-bold text-teal-deep mb-6">Cardiology VA Tasks</h3>
          <ul className="space-y-3 text-text-secondary text-sm">
            {[
              'Stress test and exercise testing scheduling',
              'Echocardiogram and imaging coordination',
              'Cardiac catheterization pre-op and post-op management',
              'Device implantation (pacemaker, ICD) scheduling and follow-up',
              'Medication management: warfarin, antiplatelet, ACE inhibitors tracking',
              'Holter monitor and event monitor placement and result follow-up',
              'Electrophysiology ablation procedure coordination',
              'Cardiac rehabilitation referral and enrollment',
              'Post-procedure follow-up calls and complications monitoring',
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
          <h2 className="font-serif text-4xl mb-8">High-Risk Patient Management</h2>
          <p className="text-lg text-white/70 mb-8">
            Cardiac patients require regular follow-up and close monitoring. Your cardiology VA manages the intensive outreach and compliance tracking that keeps patients safe.
          </p>
          <ul className="space-y-3">
            {[
              'Blood pressure and heart rate monitoring reminders',
              'Medication adherence calls (especially anticoagulation)',
              'Weight monitoring for fluid retention (CHF patients)',
              'Symptom tracking: chest pain, dyspnea, palpitations',
              'Appointment adherence for regular follow-ups',
              'Device interrogation scheduling (pacemakers, ICDs)',
            ].map((item, idx) => (
              <li key={idx} className="flex gap-2 text-white/90 text-sm">
                <span className="text-teal-accent">→</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Impact: Cardiology Practice</h2>
          <div className="bg-warm-cream rounded-2xl p-8 border border-gray-200 space-y-4 text-text-secondary text-sm">
            <p><strong className="text-teal-deep">Challenge:</strong> 3-cardiologist practice managing 40+ procedures monthly. Post-op follow-up was inconsistent. No system for medication adherence tracking. Preventable complications from poor follow-up.</p>
            <p><strong className="text-teal-deep">Solution:</strong> Cardiology VA implemented to manage pre/post-op coordination and follow-up calls.</p>
            <p><strong className="text-teal-deep">Result:</strong> 30-day post-procedure complication rate decreased 25%. Patient satisfaction increased. Time for cardiologists freed up for direct patient care.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">Optimize your cardiac practice operations</h2>
          <p className="text-lg text-white/70 mb-8">Cardiology VAs improve patient safety and outcomes while freeing up clinician time.</p>
          <ContactForm showName={false} showPhone={false} showSpecialty={false} showMessage={false} buttonText="Discuss Cardiology Support" />
        </div>
      </section>
    </main>
  );
}
