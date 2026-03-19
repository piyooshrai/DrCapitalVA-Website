import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'eClinicalWorks EHR Virtual Assistant Support | Dr. Capital VA',
  description: 'Dr. Capital VA expertise with eClinicalWorks. VA support for scheduling, patient data management, billing, and practice optimization.',
};

export default function EclinicalWorksPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '#' }, { label: 'eClinicalWorks', href: '/tools/eclinicalworks' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">eClinicalWorks EHR Virtual Assistant Support</h1>
          <p className="text-xl text-text-secondary">Expert VA support for eClinicalWorks users. Scheduling, patient management, billing, and clinical workflow optimization.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">About eClinicalWorks</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            eClinicalWorks is a comprehensive EHR and practice management solution widely used by independent practices, urgent care, and specialty clinics. It's known for its integrated scheduling, billing, clinical documentation, and patient communication tools. eClinicalWorks practices benefit significantly from VA support for administrative workload management.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">VA Tasks in eClinicalWorks</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">1. Appointment Scheduling & Optimization</h3>
              <p className="text-text-secondary text-sm">Your VA manages the eClinicalWorks scheduler, creating and modifying appointments, managing cancellations, and optimizing provider schedules. They track no-shows, schedule follow-ups, and ensure smooth patient flow.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">2. Patient Check-In & Registration</h3>
              <p className="text-text-secondary text-sm">Your VA prepares patients for visits by confirming appointments, updating demographics, verifying insurance, and managing check-in. They ensure all information is current in eClinicalWorks before the visit.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">3. Insurance Verification & Eligibility</h3>
              <p className="text-text-secondary text-sm">Your VA verifies patient insurance coverage directly in eClinicalWorks. They confirm copays, deductibles, and coverage for planned procedures. This prevents billing surprises and improves collections.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">4. Billing & Claims Management</h3>
              <p className="text-text-secondary text-sm">Your VA oversees billing in eClinicalWorks. They monitor claims submission, track claim status, identify denials, and coordinate resubmissions. They generate daily billing reports and track aging AR.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">5. Patient Communication & Follow-Up</h3>
              <p className="text-text-secondary text-sm">Your VA uses eClinicalWorks' messaging and patient portal features to send appointment reminders, post-visit follow-ups, care instructions, and recalls. They maintain patient engagement and improve outcome compliance.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">6. Lab Results & Order Management</h3>
              <p className="text-text-secondary text-sm">Your VA tracks incoming lab results in eClinicalWorks, ensures results are reviewed by providers, coordinates follow-up communication with patients, and routes results appropriately.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">7. Referral Processing</h3>
              <p className="text-text-secondary text-sm">Your VA generates and sends referrals within eClinicalWorks. They verify insurance coverage, track specialist response, and follow up with patients on referral status.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">8. Reporting & Analytics</h3>
              <p className="text-text-secondary text-sm">Your VA runs eClinicalWorks reports on appointment metrics, claims, collections, patient satisfaction, and provider productivity. These reports drive operational decisions.</p>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Specialties Using eClinicalWorks</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['Primary Care', 'Urgent Care', 'Mental Health', 'Physical Therapy', 'Pediatrics', 'Dental'].map((specialty, idx) => (
              <div key={idx} className="bg-warm-cream rounded-lg p-4 border border-gray-200">
                <p className="text-text-secondary text-sm">→ {specialty}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Why eClinicalWorks Practices Use VAs</h2>
          <ul className="space-y-3 text-text-secondary mb-12">
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Billing complexity:</strong> eClinicalWorks billing requires active management. VAs optimize claims submission.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Patient engagement:</strong> VAs use portal features to improve follow-up and patient retention.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Scheduling optimization:</strong> VAs reduce gaps and no-shows, increasing practice efficiency.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Are your VAs trained on eClinicalWorks?</h3>
              <p className="text-text-secondary text-sm">Yes. Our VAs are trained on eClinicalWorks scheduling, billing, patient management, and reporting. They integrate seamlessly with your practice workflows.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Can a VA manage our entire back office?</h3>
              <p className="text-text-secondary text-sm">Yes. A full-time VA can manage scheduling, insurance verification, billing, patient communication, and administrative tasks. This frees up your staff to focus on clinical support.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What's the typical impact?</h3>
              <p className="text-text-secondary text-sm">Practices see 20%+ improvement in collections, 30% reduction in no-shows, and 50% increase in appointment reminders sent. These improvements directly impact revenue.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Optimize Your eClinicalWorks Workflow?</h2>
            <p className="mb-6 text-lg text-white/80">Get an eClinicalWorks-trained VA to manage your scheduling, billing, and patient engagement.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
