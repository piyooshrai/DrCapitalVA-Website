import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Telehealth Support: Why Your Virtual Visits Need a VA',
  description: 'How telehealth VAs manage patient intake, technology support, and follow-up to maximize virtual visit efficiency.',
};

export default function TelehealthVAPage() {
  return (
    <main>
      <article>
        <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Telehealth Support', href: '/blog/telehealth-va-support' }]} />
            <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Telehealth Support: Why Your Virtual Visits Need a VA</h1>
            <p className="text-text-secondary">How telehealth VAs manage patient preparation, tech support, and follow-up to maximize virtual visit efficiency.</p>
          </div>
        </section>

        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">The Telehealth Opportunity</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Telehealth has grown 360% since 2019. Practices that optimize virtual visits see 30–50% higher patient volume and 25–40% improvement in appointment adherence. The key: dedicated VA support for patient prep and tech management.
            </p>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">VA Telehealth Responsibilities</h2>
            <ul className="space-y-3 text-text-secondary mb-8">
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Pre-visit patient education (tech setup, what to expect)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Patient enrollment in platform (Zoom, Doxy, Teladoc)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Tech troubleshooting (connectivity, camera, audio)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Intake form collection (digital completion)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Session recording and storage (HIPAA-compliant)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Post-visit follow-up and care coordination</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Prescription coordination and patient education</span></li>
            </ul>

            <div className="bg-teal-deep text-white rounded-lg p-8 text-center mt-12">
              <h2 className="font-serif text-3xl mb-4">Scale Telehealth with VA Support</h2>
              <p className="mb-6 text-lg text-white/80">Maximize virtual visit efficiency with dedicated telehealth VA support.</p>
              <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Get Telehealth VA Support
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
