import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'VA Vetting Process | Dr. Capital VA',
  description: 'How Dr. Capital VA vets and hires healthcare virtual assistants. 5-step vetting for HIPAA compliance and healthcare excellence.',
};

export default function VettingProcessPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Compliance', href: '/compliance' }, { label: 'Vetting Process', href: '/compliance/vetting-process' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">How We Vet Healthcare Virtual Assistants</h1>
          <p className="text-xl text-text-secondary">The 5-step process that ensures only the top 3% of applicants become Dr. Capital VA team members.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">5-Step Vetting Process</h2>
          <div className="space-y-8">
            {[
              {
                step: 1,
                title: 'Application Screening',
                desc: 'We review 100+ applications per opening. We filter for: healthcare experience, relevant skills, reliability indicators, communication ability. 70% screened out here.',
              },
              {
                step: 2,
                title: 'HIPAA Training & Certification',
                desc: 'Remaining candidates complete HIPAA training module. Must pass test with 90%+. This filters for healthcare commitment and willingness to follow compliance protocols.',
              },
              {
                step: 3,
                title: 'Background Verification (Checkr)',
                desc: 'We conduct Checkr background checks: criminal history, identity verification, professional licenses. Any concerns result in automatic disqualification.',
              },
              {
                step: 4,
                title: 'Competency Interview',
                desc: 'Technical interview assessing: EHR knowledge, administrative skills, scenario handling (e.g., "What would you do if a patient called with a medical emergency?"), cultural fit.',
              },
              {
                step: 5,
                title: 'Reference Verification & Trial Period',
                desc: 'We call references. Remaining candidates start a 30-day trial period. They work on real client cases under supervision. Performance monitored closely. Only 10-15% pass trial.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-teal-deep text-white flex items-center justify-center font-serif text-2xl flex-shrink-0">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-teal-deep text-lg mb-2">{item.title}</h3>
                  <p className="text-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-8">Why This Matters</h2>
          <p className="text-lg text-white/70 mb-8">
            Generic VA companies hire 80-90% of applicants. Dr. Capital VA hires 3%. This rigorous vetting ensures you get someone competent, trustworthy, and healthcare-aware.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-bold mb-2">100</div>
              <p className="text-white/70 text-sm">Applications per opening</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold mb-2">5</div>
              <p className="text-white/70 text-sm">Vetting stages</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-bold mb-2">3%</div>
              <p className="text-white/70 text-sm">Hired</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Ongoing Accountability</h2>
          <p className="text-text-secondary mb-8">Vetting doesn't end at hire. We maintain standards through:</p>
          <ul className="space-y-3 text-text-secondary">
            {[
              '✓ Monthly performance reviews',
              '✓ Quarterly HIPAA compliance audits',
              '✓ Client satisfaction tracking',
              '✓ Ongoing training and professional development',
              '✓ Annual recertification requirements',
            ].map((item, idx) => (
              <li key={idx} className="text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
