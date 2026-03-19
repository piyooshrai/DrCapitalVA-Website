import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Mental Health Practice Virtual Assistant | Dr. Capital VA',
  description: 'HIPAA-trained VAs for therapists and psychiatrists. Session scheduling, intake management, crisis coordination.',
};

export default function MentalHealthSpecialtyPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Specialties', href: '/specialties' }, { label: 'Mental Health', href: '/specialties/mental-health' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Mental Health Practice Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            Specialized support for therapists, counselors, and psychiatrists. Session scheduling, intake assessments, insurance verification, and crisis line coordination.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Mental Health VA Expertise</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Mental health practice is relationship-based. Trust is everything. Your admin support must be discreet, confidential, and clinically aware. Our mental health VAs understand trauma-informed care, crisis protocols, and the sensitive nature of psychiatric information.
          </p>
          <h3 className="font-bold text-teal-deep mb-6">Mental Health VA Responsibilities</h3>
          <ul className="space-y-3 text-text-secondary text-sm">
            {[
              'Therapy session scheduling with sensitivity to client needs',
              'Intake assessment scheduling and form management',
              'Insurance verification for mental health coverage',
              'Pre-session form completion: mood tracking, symptom review',
              'Crisis line triaging and emergency response coordination',
              'Psychiatric medication management follow-up reminders',
              'Referral coordination for higher levels of care',
              'Telehealth session technical support (especially important for remote therapy)',
              'Patient follow-up after crisis events or hospitalization',
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
          <h2 className="font-serif text-4xl mb-8">Crisis Protocol & Safety</h2>
          <p className="text-lg text-white/70 mb-8">
            Mental health VAs are trained in crisis protocols: how to respond to suicidal ideation reports, recognize red flags, and coordinate emergency response.
          </p>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur border border-white/10">
            <ul className="space-y-3">
              {[
                '✓ Suicide risk assessment awareness',
                '✓ Crisis hotline protocols (988, Crisis Text Line)',
                '✓ Emergency contact procedures',
                '✓ Documentation of crisis events',
                '✓ De-escalation communication skills',
                '✓ Mandatory reporting obligation training',
              ].map((item, idx) => (
                <li key={idx} className="text-white/90">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Confidentiality & HIPAA</h2>
          <p className="text-text-secondary mb-6">
            Mental health information is among the most sensitive in healthcare. Your mental health VA maintains strict confidentiality and is trained in state-specific privacy rules.
          </p>
          <ul className="space-y-2 text-text-secondary text-sm">
            {[
              '✓ No discussion of patient identities outside clinical need',
              '✓ Secure communication (encrypted phone, secure messaging)',
              '✓ Awareness of state privacy laws beyond HIPAA',
              '✓ Discrimination and stigma prevention in communication',
              '✓ Trauma-informed communication practices',
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Real Impact: Group Therapy Practice</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4 text-text-secondary text-sm">
            <p><strong className="text-teal-deep">Challenge:</strong> 5-therapist group practice with waiting list of 3+ months. Admin staff burned out from scheduling and intake calls. No crisis protocol in place.</p>
            <p><strong className="text-teal-deep">Solution:</strong> Mental health VA hired to manage scheduling, intake, and crisis coordination.</p>
            <p><strong className="text-teal-deep">Result:</strong> Intake scheduling automated. Waiting list reduced to 2 weeks. Crisis calls handled professionally. Admin staff morale improved.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">Grow your mental health practice</h2>
          <p className="text-lg text-white/70 mb-8">Our mental health VAs free your clinicians to focus on therapeutic work, not paperwork.</p>
          <ContactForm showName={false} showPhone={false} showSpecialty={false} showMessage={false} buttonText="Learn More" />
        </div>
      </section>
    </main>
  );
}
