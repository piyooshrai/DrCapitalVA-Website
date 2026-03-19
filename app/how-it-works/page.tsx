import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'How It Works | Dr. Capital VA',
  description: 'Learn how Dr. Capital VA matches you with a healthcare VA, onboards them for HIPAA compliance, and launches support for your practice.',
};

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'How It Works', href: '/how-it-works' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">From strategy call to hired VA in 48 hours</h1>
          <p className="text-xl text-text-secondary">A process built for healthcare. HIPAA compliance baked in from day one.</p>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                num: '1',
                title: 'Strategy Call',
                desc: 'We discuss your practice\'s biggest bottlenecks. How many appointments per week? What\'s draining your time? Which EHR system? Any compliance requirements beyond standard HIPAA? We listen before we sell.',
              },
              {
                num: '2',
                title: 'VA Match',
                desc: 'We match you with a vetted VA from our network. We consider specialty expertise, timezone, language needs, and personality fit. Most matches happen within 48 hours. We present 1-2 options. You choose.',
              },
              {
                num: '3',
                title: 'HIPAA Onboarding',
                desc: 'Your VA completes healthcare-specific onboarding: HIPAA training, NDA signing, BAA review, background verification review, system access setup. Your Client Manager oversees every step. Usually 1 week.',
              },
              {
                num: '4',
                title: 'Launch & Support',
                desc: 'VA starts handling tasks. Your Client Manager checks in weekly. We monitor compliance. We handle scheduling changes. We replace the VA if they don\'t meet expectations. You get continuity and peace of mind.',
              },
            ].map((step) => (
              <div key={step.num}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-deep text-white rounded-2xl font-serif text-2xl mb-6">
                  {step.num}
                </div>
                <h3 className="font-bold text-teal-deep text-lg mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA-Specific Onboarding */}
      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-8">Healthcare-Specific Onboarding</h2>
          <div className="space-y-6">
            {[
              { title: 'HIPAA Training Certification', desc: 'VA completes our proprietary HIPAA training module. Tests on privacy rules, security standards, breach notification, PHI handling. Must score 90%+. Annual recertification required.' },
              { title: 'Business Associate Agreement', desc: 'We sign a BAA with your practice. Legally binding commitment to HIPAA compliance. Covers encryption, access controls, audit trails, breach notification procedures. Non-negotiable.' },
              { title: 'Background Verification', desc: 'Checkr verifies VA identity, criminal history, professional credentials. We don\'t just ask — we verify. Results reviewed by our compliance officer before VA gets access.' },
              { title: 'System Access Protocols', desc: 'Your Client Manager helps VA set up secure access to your EHR, practice management system, scheduling software. Encrypted connections. Two-factor authentication. Monitored access logs.' },
              { title: 'NDA & Confidentiality', desc: 'VA signs NDA specifically covering patient data, practice operations, and proprietary workflows. Breach of NDA results in immediate termination and legal action.' },
              { title: 'Ongoing Monitoring', desc: 'We don\'t set it and forget it. Quarterly compliance audits. Random access log reviews. Quarterly check-ins with you. We replace VAs if we sense any slip in standards.' },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Manager Role */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Your Dedicated Client Manager</h2>
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            Unlike VA agencies that disappear after matching you with a contractor, we assign a dedicated Client Manager who stays with you the entire engagement.
          </p>
          <div className="bg-warm-cream rounded-2xl p-8 space-y-4">
            {[
              'Weekly check-ins to assess VA performance and satisfaction',
              'Handles scheduling changes, time off, emergency coverage',
              'Monitors HIPAA compliance and security practices',
              'Provides performance reviews and improvement plans',
              'Replaces VA immediately if expectations aren\'t met',
              'Escalation point for any issues — you never deal directly with the VA on problems',
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-accent flex-shrink-0 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EHR Support */}
      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">EHR & Practice Management Platform Support</h2>
          <p className="text-text-secondary mb-8">We train VAs on the major platforms:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Athenahealth', 'Epic', 'eClinicalWorks', 'Kareo', 'DrChrono', 'Practice Fusion'].map((platform) => (
              <div key={platform} className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-teal-deep">{platform}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary mt-8">If you use a different platform, we train for it. VAs don't learn on the job — they learn before they start.</p>
        </div>
      </section>

      {/* Backup VA Coverage */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-6">Backup VA Coverage</h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            Clinics live and die by continuity. When your staff member is sick, your admin stops. That's why we offer backup VA coverage — another trained VA who knows your workflows and can step in immediately.
          </p>
          <div className="bg-teal-deep text-white rounded-2xl p-8">
            <p className="mb-4">Backup coverage is included with Full-Time plans ($1,300/mo) and available as add-on for Part-Time. We rotate backups quarterly to keep them sharp.</p>
            <p className="text-white/70">Your practice never has an operational gap.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How long is the onboarding process?', a: 'Usually 1-2 weeks from VA match to launch. We prioritize HIPAA compliance over speed — no shortcuts.' },
              { q: 'What if we don\'t like the matched VA?', a: 'We\'ll re-match within 3 days. No penalty. We only win if you\'re happy.' },
              { q: 'Can we request a specific timezone?', a: 'Absolutely. We can match US-based, UK-based, or other timezones depending on your needs.' },
              { q: 'How do we handle software access if the VA leaves?', a: 'We manage deprovisioning entirely. Access removal within hours. Your practice never manually touches this.' },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-teal-deep mb-2">{item.q}</h3>
                <p className="text-text-secondary">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">Ready to get started?</h2>
          <p className="text-xl text-white/70 mb-8">Book your strategy call today.</p>
          <Link href="/contact" className="btn-white">Book a Strategy Call</Link>
        </div>
      </section>
    </main>
  );
}
