import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Virtual Assistants for Multi-Location Clinics: Standardize Your Admin',
  description: 'How multi-location clinics use VAs to standardize workflows, reduce errors, and scale efficiently across all locations.',
};

export default function MultiLocationPage() {
  return (
    <main>
      <article>
        <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Multi-Location', href: '/blog/multi-location-clinic-va' }]} />
            <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Virtual Assistants for Multi-Location Clinics</h1>
            <p className="text-text-secondary">How to standardize workflows, reduce admin errors, and scale efficiently across multiple practice locations.</p>
          </div>
        </section>

        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">The Multi-Location Challenge</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Managing multiple locations creates workflow inconsistencies. Location A uses one EHR workflow, Location B uses another. Billing is handled differently at each site. Patient communication is inconsistent. Adding dedicated VAs to each location quickly becomes expensive and complex.
            </p>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">The VA Solution</h2>
            <p className="text-text-secondary mb-6">
              A single centralized VA team across all locations:
            </p>
            <ul className="space-y-3 text-text-secondary mb-8">
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Standardizes all workflows (same processes at every location)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Reduces errors through consistency</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Scales cost-effectively (no need for separate staff per location)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Centralizes billing for network pricing power</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Ensures consistent patient experience</span></li>
            </ul>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Scaling Strategy</h2>
            <p className="text-text-secondary mb-6">
              <strong>Phase 1 (2 locations):</strong> 1 FT VA ($1,300/month) handles both locations<br/>
              <strong>Phase 2 (3–5 locations):</strong> 1 FT + 1 PT VA ($2,000/month total)<br/>
              <strong>Phase 3 (6+ locations):</strong> 2 FT VAs with specialization ($2,600/month)<br/>
            </p>

            <div className="bg-teal-deep text-white rounded-lg p-8 text-center mt-12">
              <h2 className="font-serif text-3xl mb-4">Scale Without Hiring More Staff</h2>
              <p className="mb-6 text-lg text-white/80">Get centralized VA support across all your locations.</p>
              <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Scale Your Multi-Location Network
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
