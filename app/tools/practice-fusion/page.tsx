import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Practice Fusion EHR Virtual Assistant Support | Dr. Capital VA',
  description: 'Dr. Capital VA expertise with Practice Fusion. VA support for scheduling, billing, patient management, and practice optimization.',
};

export default function PracticeFusionPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '#' }, { label: 'Practice Fusion', href: '/tools/practice-fusion' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Practice Fusion EHR Virtual Assistant Support</h1>
          <p className="text-xl text-text-secondary">Expert VA support for Practice Fusion users. Scheduling, billing, patient engagement, and workflow optimization.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">About Practice Fusion</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Practice Fusion is a cloud-based EHR and practice management system known for its ease of use and strong patient engagement features. It offers integrated scheduling, EHR, billing, and a robust patient portal. Practice Fusion users appreciate its intuitive interface and seamless workflows, making it ideal for practices looking to delegate administrative tasks to a VA.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">VA Tasks in Practice Fusion</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">1. Appointment Scheduling & Optimization</h3>
              <p className="text-text-secondary text-sm">Your VA manages the Practice Fusion scheduler, creating appointments, managing cancellations, and optimizing provider availability. They reduce scheduling gaps and no-shows, improving practice utilization.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">2. Patient Portal Management</h3>
              <p className="text-text-secondary text-sm">Practice Fusion's patient portal is one of its strongest features. Your VA activates patient accounts, helps patients navigate the portal, and encourages engagement with online features like appointment booking and message center.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">3. Insurance Verification & Eligibility</h3>
              <p className="text-text-secondary text-sm">Your VA verifies patient insurance in Practice Fusion before appointments. They check coverage, confirm copays, verify deductibles, and manage prior authorization requests integrated with the platform.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">4. Patient Registration & Demographics</h3>
              <p className="text-text-secondary text-sm">Your VA maintains accurate patient data in Practice Fusion. They enter new patients, update demographics, manage insurance information, and ensure all data is current and complete for billing and clinical care.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">5. Medical Billing & Claims</h3>
              <p className="text-text-secondary text-sm">Your VA manages billing in Practice Fusion. They generate claims, monitor claim status, identify denials, and resubmit corrected claims. They track collections and aging AR to improve cash flow.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">6. Patient Communication & Engagement</h3>
              <p className="text-text-secondary text-sm">Your VA uses Practice Fusion's messaging and communication tools to send appointment reminders, post-visit follow-ups, preventive care reminders, and patient education. They improve patient engagement and satisfaction.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">7. Prescription & Refill Management</h3>
              <p className="text-text-secondary text-sm">Your VA monitors prescription refill requests in Practice Fusion, screens requests, verifies appropriateness, and routes to providers for approval. This ensures timely patient care and reduces medication access delays.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">8. Reporting & Performance Tracking</h3>
              <p className="text-text-secondary text-sm">Your VA generates Practice Fusion reports on appointments, claims, collections, patient engagement, and provider productivity. These reports identify improvement opportunities and track KPIs.</p>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Specialties Using Practice Fusion</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['Primary Care', 'Internal Medicine', 'Family Medicine', 'Urgent Care', 'Pediatrics', 'Mental Health'].map((specialty, idx) => (
              <div key={idx} className="bg-warm-cream rounded-lg p-4 border border-gray-200">
                <p className="text-text-secondary text-sm">→ {specialty}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Why Practice Fusion Practices Benefit from VAs</h2>
          <ul className="space-y-3 text-text-secondary mb-12">
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Patient portal strength:</strong> Practice Fusion excels at patient engagement. VAs maximize portal adoption and usage.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Ease of use:</strong> Practice Fusion is intuitive. VAs become productive quickly and manage multiple tasks efficiently.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Patient communication focus:</strong> VAs leverage Practice Fusion's messaging tools to improve patient satisfaction and engagement.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Real Example: Primary Care Practice</h2>
          <div className="bg-warm-cream rounded-lg p-8 border-l-4 border-coral-accent mb-12">
            <p className="text-text-secondary mb-4">
              <strong>Practice:</strong> 2-provider primary care clinic, 2,000 active patients, using Practice Fusion.
            </p>
            <p className="text-text-secondary mb-4">
              <strong>Before VA:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-text-secondary text-sm mb-6">
              <li>5 patient portal accounts activated per week (poor adoption)</li>
              <li>30% insurance verification errors</li>
              <li>90-day denial resolution time</li>
              <li>Providers handling scheduling/billing admin in evenings</li>
            </ul>
            <p className="text-text-secondary mb-4">
              <strong>After Dr. Capital VA (first 90 days):</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 text-text-secondary text-sm mb-6">
              <li>25+ patient portal activations per week (50% adoption improvement)</li>
              <li>5% insurance verification errors (significant reduction)</li>
              <li>30-day denial resolution (3x faster)</li>
              <li>Providers focus on patient care, admin handled by VA</li>
              <li>Monthly revenue increase: $2,500+</li>
            </ul>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Are your VAs trained on Practice Fusion?</h3>
              <p className="text-text-secondary text-sm">Yes. All our VAs are trained on Practice Fusion's scheduling, patient portal, billing, insurance verification, and patient communication tools. They're ready to support your practice immediately.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">How can a VA improve patient portal adoption?</h3>
              <p className="text-text-secondary text-sm">Your VA activates patient accounts during check-in, explains portal benefits, helps patients set up first login, and sends follow-up reminders. This simple engagement increases adoption significantly — typically 30–50% improvement.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What's the ROI for a Practice Fusion practice?</h3>
              <p className="text-text-secondary text-sm">Typical ROI: 20–25% improvement in collections, 30–40% reduction in billing errors, 50% improvement in patient engagement, and 15+ hours/week saved by providers. For a $1M revenue practice, annual benefit is $15,000–$25,000.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Maximize Your Practice Fusion Potential?</h2>
            <p className="mb-6 text-lg text-white/80">Get a Practice Fusion-trained VA who will optimize your patient engagement, billing, and scheduling — while you focus on patient care.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Book Your Strategy Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
