import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Orthopedic Surgery Virtual Assistant | Dr. Capital VA',
  description: 'HIPAA VAs for orthopedic practices. Surgical scheduling, PT referral coordination, post-op follow-up, imaging management.',
};

export default function OrthopedicsSpecialtyPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Specialties', href: '/specialties' }, { label: 'Orthopedics', href: '/specialties/orthopedics' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Orthopedic Surgery Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            Specialized support for orthopedic surgeons. Surgical scheduling, physical therapy coordination, post-operative follow-up, imaging management.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Orthopedic VA Expertise</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Orthopedic practices balance surgical cases with conservative management. You're scheduling surgeries, coordinating PT, managing imaging, following up post-op, and tracking rehab progress. Your orthopedic VA manages this complex coordination.
          </p>
          <h3 className="font-bold text-teal-deep mb-6">Orthopedic VA Responsibilities</h3>
          <ul className="space-y-3 text-text-secondary text-sm">
            {[
              'Surgical case scheduling and pre-op preparation',
              'Physical therapy referral and enrollment coordination',
              'Post-operative follow-up calls and wound check-in',
              'MRI and imaging scheduling and authorization',
              'Work restrictions and return-to-work documentation',
              'Brace and orthothotics fitting coordination',
              'Therapy progress monitoring and graduation',
              'Workers compensation and disability form management',
              'Surgical outcome tracking and complication monitoring',
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
          <h2 className="font-serif text-4xl mb-8">PT Coordination = Faster Recovery</h2>
          <p className="text-lg text-white/70 mb-8">
            Successful orthopedic outcomes depend on patient compliance with physical therapy. Your orthopedic VA ensures patients start PT, attend sessions, and progress appropriately.
          </p>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur border border-white/10 space-y-4">
            <div>
              <p className="font-semibold text-white mb-1">Patient Adherence Support</p>
              <p className="text-white/70 text-sm">Reminder calls before PT sessions. Progress check-ins. Motivation when rehab is painful.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">PT Communication</p>
              <p className="text-white/70 text-sm">Requests progress reports from PT. Flags patients not progressing. Communicates barriers to surgeon.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Return-to-Work Clearance</p>
              <p className="text-white/70 text-sm">Coordinates PT discharge. Obtains return-to-work documentation. Communicates clearance to employer/worker\'s comp.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Real Example: Sports Medicine Clinic</h2>
          <div className="bg-warm-cream rounded-2xl p-8 border border-gray-200 space-y-4 text-text-secondary text-sm">
            <p><strong className="text-teal-deep">Challenge:</strong> Sports medicine practice with high surgical volume. 60+ post-op follow-ups monthly. PT compliance was poor (30% of patients stopped after 2-3 sessions).</p>
            <p><strong className="text-teal-deep">Solution:</strong> Orthopedic VA hired to manage surgical scheduling, PT coordination, and post-op follow-up.</p>
            <p><strong className="text-teal-deep">Result:</strong> PT compliance improved to 80%. Surgical outcomes improved (measured by return-to-sport rates). Admin time reduced 25%.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">Improve surgical outcomes through better coordination</h2>
          <p className="text-lg text-white/70 mb-8">Orthopedic VAs drive patient compliance, faster recovery, and surgical success rates.</p>
          <ContactForm showName={false} showPhone={false} showSpecialty={false} showMessage={false} buttonText="Discuss Orthopedic Support" />
        </div>
      </section>
    </main>
  );
}
