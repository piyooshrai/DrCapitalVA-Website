import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Multi-Location Clinic Virtual Assistant | Dr. Capital VA',
  description: 'HIPAA VAs for multi-location practices. Centralized scheduling, standardized intake, cross-location reporting.',
};

export default function MultiLocationSpecialtyPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Specialties', href: '/specialties' }, { label: 'Multi-Location', href: '/specialties/multi-location' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Multi-Location Practice Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            Centralized admin support for healthcare groups across multiple locations. Standardized workflows, consistent compliance, unified reporting.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Multi-Location Challenges</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Running multiple locations creates unique admin complexity. Each location may have different processes, systems, and staff. You need consistency across locations but flexibility for local needs. Compliance must be uniform. Reporting must be centralized. That's where your multi-location VA excels.
          </p>
          <h3 className="font-bold text-teal-deep mb-6">What Multi-Location VAs Handle</h3>
          <ul className="space-y-3 text-text-secondary text-sm">
            {[
              'Centralized scheduling across all locations with provider-specific availability',
              'Patient routing to appropriate location based on service and distance',
              'Standardized intake process applied consistently across locations',
              'Cross-location patient record integration and duplicate prevention',
              'Compliance audits across all locations for HIPAA consistency',
              'Unified billing and revenue cycle tracking across locations',
              'Centralized prior authorization management for all locations',
              'Standardized performance metrics and reporting by location',
              'Provider scheduling optimization across locations',
              'Training consistency: new hires follow same onboarding regardless of location',
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
          <h2 className="font-serif text-4xl mb-8">Scalability & Growth</h2>
          <p className="text-lg text-white/70 mb-8">
            Growing to new locations creates operational challenges. Your multi-location VA ensures each new location operates with the same standards from day one.
          </p>
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur border border-white/10">
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-white mb-1">Pre-Launch Support</p>
                <p className="text-white/70 text-sm">Training new staff. Setting up EHR at new location. Establishing vendor relationships.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Day-One Operations</p>
                <p className="text-white/70 text-sm">Scheduling system live. Patient intake workflow running. Billing integrated with corporate system.</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Ongoing Consistency</p>
                <p className="text-white/70 text-sm">Cross-location audits. Performance metrics. Process improvements applied uniformly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Example: 3-Location Surgical Group</h2>
          <div className="bg-warm-cream rounded-2xl p-8 border border-gray-200 space-y-4 text-text-secondary text-sm">
            <p><strong className="text-teal-deep">Challenge:</strong> Surgical group with 3 locations in different cities. Each location managed scheduling/intake independently. No consistent processes. Data silos prevented unified reporting. Compliance audits revealed inconsistencies across locations.</p>
            <p><strong className="text-teal-deep">Solution:</strong> Centralized multi-location VA to standardize processes across all 3 locations. Implemented unified scheduling and intake system.</p>
            <p><strong className="text-teal-deep">Result:</strong> Unified reporting revealed inefficiencies (now visible across locations). Cross-location patient coordination improved. Compliance became uniform. Operations reduced by 15% through efficiency improvements.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Growth Planning</h2>
          <p className="text-text-secondary mb-8">
            If you're planning to expand to additional locations, we can help you scale with consistency. Multi-location VA support grows with you.
          </p>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-deep text-white flex items-center justify-center font-bold text-sm">1</div>
                <p className="text-text-secondary text-sm"><strong>1-2 locations:</strong> Part-time VA can handle coordination</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-deep text-white flex items-center justify-center font-bold text-sm">2</div>
                <p className="text-text-secondary text-sm"><strong>3-4 locations:</strong> Full-time VA dedicated to coordination</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-deep text-white flex items-center justify-center font-bold text-sm">3</div>
                <p className="text-text-secondary text-sm"><strong>5+ locations:</strong> Multi-location VA team with location-specific support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">Scale with consistency and confidence</h2>
          <p className="text-lg text-white/70 mb-8">Multi-location VA support enables growth without operational complexity.</p>
          <ContactForm showName={false} showPhone={false} showSpecialty={false} showMessage={false} buttonText="Discuss Growth Strategy" />
        </div>
      </section>
    </main>
  );
}
