import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Security & Data Protection | Dr. Capital VA',
  description: 'Technical security measures: encryption, access controls, data handling, and incident response for healthcare virtual assistants.',
};

export default function SecurityPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Compliance', href: '/compliance' }, { label: 'Security', href: '/compliance/security' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Security & Data Protection</h1>
          <p className="text-xl text-text-secondary">Technical safeguards protecting patient data from access, alteration, and loss. How Dr. Capital VA implements HIPAA Security Rule requirements.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Data Protection Layers</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Encryption at Transit (TLS)',
                desc: 'All data moving between VA and client systems encrypted using TLS 1.2+. No patient data transmitted in plain text. HTTPS enforced on all portals.',
              },
              {
                title: 'Encryption at Rest (AES-256)',
                desc: 'Patient data stored on servers encrypted using AES-256 encryption. If a server is stolen, data remains unreadable without the encryption key.',
              },
              {
                title: 'Access Controls (RBAC)',
                desc: 'Role-based access control: VAs can only access data needed for their specific job. Scheduling VA can\'t access billing records. Intake VA can\'t see clinical notes.',
              },
              {
                title: 'Authentication',
                desc: 'Multi-factor authentication (MFA) required for all VA access. Passwords must meet complexity requirements. Session timeouts after 15 minutes of inactivity.',
              },
              {
                title: 'Audit Logging',
                desc: 'Every access to patient data logged: who accessed it, when, from where, what data, what action taken. Logs retained for 6+ years. Reviewed monthly.',
              },
              {
                title: 'Network Security',
                desc: 'VAs connect via VPN. All work on encrypted VPN tunnels. Firewalls block unauthorized access. Network segmentation isolates healthcare data from other systems.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-warm-cream rounded-xl p-6 border-l-4 border-teal-accent">
                <h3 className="font-bold text-teal-deep mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-8">Incident Response</h2>
          <p className="text-lg text-white/70 mb-8">If a security incident occurs, we respond immediately:</p>
          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { title: 'Detect', desc: 'Unusual activity detected by monitoring systems' },
              { title: 'Contain', desc: 'Isolate affected systems to prevent spread' },
              { title: 'Investigate', desc: 'Determine what happened and who was affected' },
              { title: 'Notify', desc: 'Inform clients and affected individuals within required timelines' },
            ].map((step, idx) => (
              <div key={idx} className="bg-white/10 rounded-lg p-4 backdrop-blur border border-white/10">
                <p className="font-semibold text-white mb-1">{step.title}</p>
                <p className="text-white/70 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Compliance Standards</h2>
          <p className="text-text-secondary mb-8">We comply with multiple security standards:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'HIPAA Security Rule (256-bit encryption, access controls, audit logs)',
              'SOC 2 Type II (independently audited security controls)',
              'PCI DSS (payment card security, if handling billing)',
              'State privacy laws (CCPA, GDPR equivalents)',
            ].map((standard, idx) => (
              <div key={idx} className="bg-warm-cream rounded-lg p-4 border border-gray-200">
                <p className="text-text-secondary text-sm">✓ {standard}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-teal-deep mb-6">Security You Can Trust</h2>
          <p className="text-text-secondary mb-8">
            We've invested in enterprise-grade security infrastructure because patient data is sacred. Zero breaches since 2019. Annual third-party audits. Continuous monitoring.
          </p>
        </div>
      </section>
    </main>
  );
}
