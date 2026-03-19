import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Client Portal | Dr. Capital VA',
  description: 'HIPAA-compliant client portal for task management, document sharing, and performance tracking. Launching March 2025.',
};

export default function PortalPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Client Portal', href: '/portal' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Complete visibility into your VA's work.</h1>
          <p className="text-xl text-text-secondary">
            Task tracking, document sharing, performance metrics — all in one HIPAA-compliant portal. Launching March 2025.
          </p>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Task Management',
                desc: 'Assign tasks, set priorities, track progress in real-time. See exactly what your VA is working on and when.',
              },
              {
                title: 'Time Tracking',
                desc: 'Transparent time logging by task. No guessing about hours worked. Verify billing matches actual work.',
              },
              {
                title: 'Document Sharing',
                desc: 'HIPAA-compliant document upload and sharing. Encrypted storage. Audit trails for all file access.',
              },
              {
                title: 'Performance Metrics',
                desc: 'Monthly reports: tasks completed, patient satisfaction scores, EHR accuracy rates, compliance audits.',
              },
              {
                title: 'Chat & Collaboration',
                desc: 'Direct messaging with your VA and Client Manager. Keep communication organized in one place.',
              },
              {
                title: 'Compliance Dashboard',
                desc: 'HIPAA training status, BAA documentation, background check verification, security audit results.',
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-warm-cream rounded-2xl p-8">
                <h3 className="font-bold text-teal-deep mb-3">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HIPAA Compliance Matters */}
      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-8">HIPAA-Compliant by Design</h2>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              We didn't use a generic project management tool. We built the portal from scratch with healthcare compliance as the foundation.
            </p>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur border border-white/10">
              <ul className="space-y-3">
                {[
                  'End-to-end encryption for all documents',
                  'Audit logs showing who accessed what and when',
                  'Role-based access controls (practice admin, provider, staff)',
                  'PHI encryption at rest and in transit',
                  'No automatic logging to third-party services',
                  'HIPAA Business Associate Agreement included',
                  'Annual penetration testing by external security firm',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <svg className="w-5 h-5 text-teal-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">Who Benefits Most</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Multi-Location Practices',
                desc: 'Centralized task management across locations. See which office is using the VA for what. Track consistency across sites.',
              },
              {
                title: 'Quality-Focused Practices',
                desc: 'Monthly performance reports with metrics on patient satisfaction, EHR accuracy, and compliance. Hold your VA accountable with data.',
              },
              {
                title: 'Compliance-Heavy Practices',
                desc: 'HIPAA audit trail for every document. Proof of compliance training. BAA documentation in one place. Audit-ready.',
              },
              {
                title: 'Growing Practices',
                desc: 'As you add more VAs, the portal scales with you. Manage multiple team members from one dashboard.',
              },
            ].map((useCase, idx) => (
              <div key={idx} className="border-l-4 border-teal-accent pl-6 py-2">
                <h3 className="font-semibold text-teal-deep mb-2">{useCase.title}</h3>
                <p className="text-text-secondary text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Timeline */}
      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">Roadmap</h2>
          <div className="space-y-8">
            {[
              {
                phase: 'Phase 1',
                date: 'March 2025',
                features: [
                  'Task management & tracking',
                  'Time logging',
                  'Document upload & sharing',
                  'Basic reporting',
                  'Chat with Client Manager',
                ],
              },
              {
                phase: 'Phase 2',
                date: 'April 2025',
                features: [
                  'Performance dashboards',
                  'HIPAA compliance tracking',
                  'Multi-user access controls',
                  'Mobile app (iOS/Android)',
                  'Advanced reporting & analytics',
                ],
              },
              {
                phase: 'Phase 3',
                date: 'Q2 2025',
                features: [
                  'EHR API integrations',
                  'Automated billing & invoicing',
                  'Custom workflows',
                  'Webhooks & Zapier integration',
                  'White-label option for larger practices',
                ],
              },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-baseline gap-4 mb-4">
                  <h3 className="font-serif text-2xl text-teal-deep">{item.phase}</h3>
                  <p className="text-teal-accent font-semibold">{item.date}</p>
                </div>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="text-text-secondary text-sm flex gap-2">
                      <span className="text-teal-accent">→</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Will the portal be included in my plan?', a: 'Yes. Full-Time and Enterprise plans include portal access at no additional cost. Part-Time plans get access but with limited features.' },
              { q: 'Can we use it with our current practice management system?', a: 'Yes. We\'re building EHR integrations in Phase 3. For now, the portal works alongside your current systems.' },
              { q: 'Is there a per-user cost?', a: 'No. Unlimited users. Practice owner, providers, admin staff — all can access the portal with appropriate permissions.' },
              { q: 'What about data privacy?', a: 'Full HIPAA compliance. Encrypted storage and transmission. Audit logs for every access. BAA agreement included.' },
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
          <h2 className="font-serif text-4xl mb-6">Get early access to the portal</h2>
          <p className="text-xl text-white/70 mb-8">Sign up for a Dr. Capital VA plan today and get portal access when it launches in March 2025.</p>
          <Link href="/contact" className="btn-white">Book a Strategy Call</Link>
        </div>
      </section>
    </main>
  );
}
