import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Epic EHR Virtual Assistant Support | Dr. Capital VA',
  description: 'Dr. Capital VA expertise with Epic EHR. VA support for scheduling, patient access, billing, and administrative tasks in Epic.',
};

export default function EpicPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '#' }, { label: 'Epic', href: '/tools/epic' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Epic EHR Virtual Assistant Support</h1>
          <p className="text-xl text-text-secondary">Expert VA support for Epic users. Scheduling, patient access portal management, billing support, and administrative optimization.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">About Epic EHR</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Epic is the largest EHR system in the US, used by 56% of hospitals and major health systems. It's powerful but complex — with modules for clinical documentation, billing, scheduling, patient access (MyChart), and more. Epic practices often struggle with administrative workload and patient access portal management.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Key VA Tasks in Epic</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">1. Scheduling & Appointment Management</h3>
              <p className="text-text-secondary text-sm">Your VA manages appointments in Epic's scheduling system. They create, modify, and cancel appointments while respecting provider availability and clinic protocols. They monitor overbooked or underutilized slots and optimize scheduling for efficiency.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">2. Patient Access Portal (MyChart) Management</h3>
              <p className="text-text-secondary text-sm">Epic's MyChart is a patient portal where patients view records, request refills, message providers, and manage their account. Your VA helps manage patient access, activate accounts, handle account resets, and ensure patient portal engagement.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">3. Patient Communication & Message Management</h3>
              <p className="text-text-secondary text-sm">Your VA manages patient messages in Epic, responds to routine inquiries, coordinates appointment details, sends reminders, and escalates clinical questions to providers. They keep the inbox manageable and ensure timely responses.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">4. Insurance Verification & Eligibility</h3>
              <p className="text-text-secondary text-sm">Your VA verifies patient insurance in Epic before visits. They check coverage, copays, deductibles, and authorization requirements. Epic integrates with clearinghouses, making this process streamlined.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">5. Billing Support & Claims Monitoring</h3>
              <p className="text-text-secondary text-sm">Your VA monitors claims in Epic's billing module, tracks claim status, identifies rejections, and works with billing staff to resubmit. They generate reports on denial rates and collection metrics.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">6. Refill Request Management</h3>
              <p className="text-text-secondary text-sm">Medication refill requests come through MyChart/in-basket. Your VA screens refill requests, verifies refill appropriateness, and routes them to providers for approval. This prevents delays and improves patient satisfaction.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">7. Referral Processing</h3>
              <p className="text-text-secondary text-sm">Your VA manages referrals in Epic. They generate referrals, verify insurance coverage for specialist visits, send referrals to external providers, and track referral status. They ensure timely specialist access for patients.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">8. Patient Data & Registration Management</h3>
              <p className="text-text-secondary text-sm">Your VA maintains accurate patient demographics, contact info, insurance details, and emergency contacts in Epic. Clean data ensures smooth billing, communication, and care delivery.</p>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Why Epic Practices Need VAs</h2>
          <ul className="space-y-3 text-text-secondary mb-12">
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Patient inbox overflow:</strong> Hundreds of messages/day. Providers can't keep up alone.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Scheduling complexity:</strong> Multi-provider, multi-location scheduling requires dedicated attention.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>MyChart adoption:</strong> Practices struggle to get patients engaged with the portal. VAs increase adoption and engagement.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Claims denials:</strong> Epic's billing complexity leads to denials. VAs reduce denial rates and improve collections.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Specialties Using Epic</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['Primary Care', 'Cardiology', 'Orthopedics', 'Mental Health', 'Multi-Specialty', 'Hospital Systems'].map((specialty, idx) => (
              <div key={idx} className="bg-warm-cream rounded-lg p-4 border border-gray-200">
                <p className="text-text-secondary text-sm">→ {specialty}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Is Epic hard to learn?</h3>
              <p className="text-text-secondary text-sm">Epic is complex, but our VAs are trained on core modules. They become productive in scheduling, messaging, and patient access within days. Advanced billing/referral work comes quickly after.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Can a VA handle MyChart support?</h3>
              <p className="text-text-secondary text-sm">Yes, absolutely. Managing patient portal engagement, account issues, and patient communication is a core VA task in Epic. It significantly improves portal adoption.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What if our practice is part of a health system?</h3>
              <p className="text-text-secondary text-sm">Dr. Capital VA works with health system instances of Epic. We follow all system security policies, integrate with system IT, and respect system workflows.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Optimize Your Epic System?</h2>
            <p className="mb-6 text-lg text-white/80">Get an Epic-trained VA to manage your patient inbox, MyChart, scheduling, and billing support.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Talk to an Epic Specialist
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
