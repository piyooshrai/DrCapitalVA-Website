import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Kareo EHR & Billing Virtual Assistant Support | Dr. Capital VA',
  description: 'Dr. Capital VA expertise with Kareo. VA support for scheduling, medical billing, insurance verification, and patient management.',
};

export default function KareoPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '#' }, { label: 'Kareo', href: '/tools/kareo' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Kareo EHR & Billing Virtual Assistant Support</h1>
          <p className="text-xl text-text-secondary">Expert VA support for Kareo users. Scheduling, medical billing, insurance verification, and patient management in one integrated platform.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">About Kareo</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Kareo is a cloud-based EHR and practice management platform designed for independent practices, particularly specialty clinics and small health systems. It combines scheduling, EHR, medical billing, and patient communication in one integrated system. Kareo is known for ease of use and straightforward billing — making it an excellent platform for VA support.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Key VA Tasks in Kareo</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">1. Appointment Scheduling & Management</h3>
              <p className="text-text-secondary text-sm">Your VA creates, modifies, and manages appointments directly in Kareo. They schedule patients, manage cancellations, optimize provider schedules, and send appointment confirmations. Kareo's user-friendly scheduler makes this seamless.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">2. Insurance Verification & Eligibility</h3>
              <p className="text-text-secondary text-sm">Your VA verifies patient insurance in Kareo before appointments. They confirm coverage, check copays, deductibles, and prior authorization requirements. Kareo integrates with major clearinghouses for real-time eligibility checks.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">3. Patient Registration & Demographics</h3>
              <p className="text-text-secondary text-sm">Your VA maintains accurate patient information in Kareo: contact details, insurance data, emergency contacts, medical history. Clean data ensures smooth billing and patient communication.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">4. Medical Billing & Claims Submission</h3>
              <p className="text-text-secondary text-sm">Kareo's billing is one of its strongest features. Your VA manages claims submission, monitors claim status, identifies denials, and coordinates resubmissions. They track aging AR and follow up on unpaid claims.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">5. Denial Management & Appeals</h3>
              <p className="text-text-secondary text-sm">Your VA reviews claim denials in Kareo, determines root causes, and initiates corrected claims or appeals. This directly improves your collection rates and cash flow.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">6. Patient Communication & Follow-Up</h3>
              <p className="text-text-secondary text-sm">Your VA sends appointment reminders, post-visit follow-ups, recall messages, and patient education through Kareo's communication tools. They improve patient engagement and appointment adherence.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">7. Patient Billing & Collections</h3>
              <p className="text-text-secondary text-sm">Your VA manages patient statements, follows up on unpaid balances, responds to billing questions, and processes payments. This improves patient collections and reduces days sales outstanding (DSO).</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">8. Reporting & Analytics</h3>
              <p className="text-text-secondary text-sm">Your VA runs Kareo reports on scheduling, claims, collections, denial rates, and provider productivity. These reports inform operational decisions and identify improvement areas.</p>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Specialties That Use Kareo</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['Primary Care', 'Orthopedics', 'Dermatology', 'Internal Medicine', 'Pediatrics', 'Multi-Specialty'].map((specialty, idx) => (
              <div key={idx} className="bg-warm-cream rounded-lg p-4 border border-gray-200">
                <p className="text-text-secondary text-sm">→ {specialty}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Why Kareo Practices Benefit from VAs</h2>
          <ul className="space-y-3 text-text-secondary mb-12">
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Billing automation:</strong> Kareo has excellent built-in billing tools. VAs optimize them to improve collections by 20%+ monthly.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>User-friendly platform:</strong> Kareo is easy to learn. VAs become productive quickly with minimal training.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>High ROI:</strong> Kareo + VA combination delivers quick payback on investment through billing optimization and improved scheduling.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Are your VAs trained on Kareo?</h3>
              <p className="text-text-secondary text-sm">Yes. All our VAs are trained on Kareo's scheduling, billing, eligibility, claims, and reporting modules. They're ready to work on day one.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">How much can a VA improve our billing?</h3>
              <p className="text-text-secondary text-sm">Typical improvements: 20–30% faster claims processing, 3–5% reduction in denial rates, 15–20% improvement in collection rates. For a $1M revenue practice, this translates to $15,000–$30,000 annual improvement.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What's the learning curve?</h3>
              <p className="text-text-secondary text-sm">Kareo is one of the most user-friendly EHR platforms. Our VAs are productive in scheduling and basic billing within days, and handling complex claims/denials within 2–3 weeks.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Maximize Your Kareo Investment?</h2>
            <p className="mb-6 text-lg text-white/80">Get a Kareo-trained VA who will optimize your billing, scheduling, and patient management.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Get Kareo VA Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
