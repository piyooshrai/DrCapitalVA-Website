import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'HIPAA Compliance | Dr. Capital VA - Healthcare VA Compliance Authority',
  description: 'Complete guide to HIPAA-compliant virtual assistants. BAAs, encryption, training, background checks, breach procedures, and audit trails.',
};

export default function HIPAACompliancePage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Compliance', href: '/compliance' }, { label: 'HIPAA', href: '/compliance/hipaa' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">HIPAA Compliance for Virtual Assistants</h1>
          <p className="text-xl text-text-secondary">
            The complete guide. What HIPAA requires for remote workers handling PHI. How Dr. Capital VA certifies every VA to the highest standards.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">What Is HIPAA?</h2>
          <div className="prose prose-lg max-w-none text-text-secondary space-y-6">
            <p>
              HIPAA (Health Insurance Portability and Accountability Act of 1996) is federal law that protects patient privacy and security. If your practice handles patient data (which it does), HIPAA applies to you — and anyone you contract to handle that data.
            </p>
            <p>
              Virtual assistants who access patient names, medical records, insurance information, or appointment histories are handling Protected Health Information (PHI). This makes them "Business Associates" under HIPAA, legally bound to the same compliance standards as your practice.
            </p>
            <p>
              Most VA agencies don't understand this. They treat healthcare clients like any other client. Dr. Capital VA was built differently — HIPAA compliance is our foundation, not an afterthought.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-12">The 4 Pillars of HIPAA Compliance</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: 'Privacy', desc: 'Who can access PHI? Only those with clinical need. VAs can\'t share patient info casually. Patient records are never discussed outside secure systems.' },
              { title: 'Security', desc: 'How is PHI protected? Encrypted storage. Encrypted transmission. Access logs. Password policies. Firewall protection. Virus scanning. Regular updates.' },
              { title: 'Breach Notification', desc: 'What happens if data is exposed? Immediate notification to affected patients. Regulatory reporting. Root cause analysis. Corrective action.' },
              { title: 'Audit & Accountability', desc: 'How is compliance verified? Access logs tracked. Compliance audits conducted. Training documented. Violations investigated.' },
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white/10 rounded-xl p-6 backdrop-blur border border-white/10">
                <h3 className="font-semibold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">How Dr. Capital VA Ensures HIPAA Compliance</h2>
          <div className="space-y-8">
            {[
              {
                title: 'Business Associate Agreements (BAAs)',
                desc: 'Every Dr. Capital VA client signs a BAA. This is a legal document stating we agree to HIPAA compliance, data handling requirements, breach notification procedures, and liability. It\'s not optional — it\'s mandatory for healthcare.',
              },
              {
                title: 'HIPAA Training & Certification',
                desc: 'Every healthcare VA completes our proprietary HIPAA training module covering: privacy rules, security standards, PHI handling, breach notification, patient rights, and your practice\'s specific workflows. VAs must pass a test (90%+ required) before client assignment. Annual recertification required.',
              },
              {
                title: 'Checkr Background Verification',
                desc: 'We don\'t just ask about criminal history — we verify it through Checkr. Background check includes: identity verification, criminal history, professional licenses, employment history. Results reviewed by our compliance officer before VA gets access.',
              },
              {
                title: 'Encrypted Communications',
                desc: 'All patient-related communications encrypted: email (TLS), file transfer (SFTP), video calls (HIPAA-compliant platforms). No PHI in plain text. No patient data on personal devices. VPN required for all remote work.',
              },
              {
                title: 'Access Controls & Audit Trails',
                desc: 'Every access to patient data is logged: who accessed it, when, from where, what was accessed. We review access logs monthly. Unusual patterns flagged immediately.',
              },
              {
                title: 'NDA & Confidentiality Agreements',
                desc: 'Beyond HIPAA, VAs sign strict NDAs covering patient data, practice operations, and proprietary workflows. Breach of NDA results in immediate termination and legal action.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-warm-cream rounded-xl p-6 border-l-4 border-teal-accent">
                <h3 className="font-bold text-teal-deep mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Our HIPAA Guarantees</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4">
            <div className="flex gap-4">
              <div className="text-teal-deep font-bold text-xl flex-shrink-0">✓</div>
              <div>
                <p className="font-semibold text-teal-deep">100% HIPAA Compliance</p>
                <p className="text-text-secondary text-sm">Every client, every VA, every engagement. No exceptions.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-teal-deep font-bold text-xl flex-shrink-0">✓</div>
              <div>
                <p className="font-semibold text-teal-deep">Zero Breaches Since 2019</p>
                <p className="text-text-secondary text-sm">We've never had a data breach. Our compliance is proven.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-teal-deep font-bold text-xl flex-shrink-0">✓</div>
              <div>
                <p className="font-semibold text-teal-deep">Annual Third-Party Audits</p>
                <p className="text-text-secondary text-sm">We hire external auditors to verify compliance. Results available on request.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-teal-deep font-bold text-xl flex-shrink-0">✓</div>
              <div>
                <p className="font-semibold text-teal-deep">BAA Liability Coverage</p>
                <p className="text-text-secondary text-sm">If we breach HIPAA, our errors & omissions insurance covers damages. You're protected.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">FAQ</h2>
          <div className="space-y-6">
            {[
              { q: 'What happens if there\'s a HIPAA breach?', a: 'We notify you immediately. We assist with patient notification. We cooperate with regulators. Our insurance covers damages. We implement corrective actions to prevent recurrence.' },
              { q: 'Can we audit Dr. Capital VA?', a: 'Absolutely. You can request access logs, security documentation, and compliance records anytime. We welcome third-party audits.' },
              { q: 'Is a BAA mandatory?', a: 'Yes. If your practice handles PHI (which it does), federal law requires a BAA with any third party that touches that data.' },
              { q: 'What if we use a non-HIPAA-compliant tool?', a: 'We help you transition away. Patient data stays on HIPAA-compliant platforms. We won\'t process PHI through generic tools like Slack or Gmail.' },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-teal-deep mb-2">{item.q}</h3>
                <p className="text-text-secondary">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">HIPAA Compliance You Can Trust</h2>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">
            We've built our entire company around HIPAA compliance. Every hire, every process, every tool. It's not a checkbox — it's how we operate.
          </p>
          <Link href="/contact" className="btn-white">
            Book a Compliance Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
