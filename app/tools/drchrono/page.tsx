import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'DrChrono EHR & Practice Management Virtual Assistant Support | Dr. Capital VA',
  description: 'Dr. Capital VA expertise with DrChrono. VA support for scheduling, billing, patient management, and practice optimization.',
};

export default function DrChronoPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Tools', href: '#' }, { label: 'DrChrono', href: '/tools/drchrono' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">DrChrono EHR & Practice Management Support</h1>
          <p className="text-xl text-text-secondary">Expert VA support for DrChrono users. Scheduling, billing, patient engagement, and administrative workflow optimization.</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">About DrChrono</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            DrChrono is a cloud-based EHR and practice management system designed for independent practices and small groups. It offers integrated scheduling, EHR, billing, patient portal, and mobile capabilities. DrChrono users appreciate its affordability and flexibility, making it popular with specialty practices and startup clinics.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">VA Tasks in DrChrono</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">1. Scheduling & Calendar Management</h3>
              <p className="text-text-secondary text-sm">Your VA manages the DrChrono calendar, creating appointments, managing cancellations, and optimizing provider schedules. They send appointment confirmations and manage no-show tracking.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">2. Insurance Verification</h3>
              <p className="text-text-secondary text-sm">Your VA verifies patient insurance before appointments using DrChrono's eligibility tools. They confirm coverage, copays, deductibles, and manage prior authorization requests.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">3. Patient Data Management</h3>
              <p className="text-text-secondary text-sm">Your VA maintains accurate patient information in DrChrono: demographics, contact info, medical history, insurance details. They ensure data accuracy for billing and communication.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">4. Medical Billing & Claims</h3>
              <p className="text-text-secondary text-sm">Your VA manages medical billing in DrChrono. They generate claims, monitor submission status, track denials, and coordinate resubmissions. They track revenue and aging AR.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">5. Patient Portal Engagement</h3>
              <p className="text-text-secondary text-sm">Your VA manages the DrChrono patient portal. They activate patient accounts, handle portal questions, and send reminders to increase patient engagement with the platform.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">6. Patient Communication</h3>
              <p className="text-text-secondary text-sm">Your VA sends appointment reminders, post-visit follow-ups, and recalls through DrChrono's messaging system. They improve appointment adherence and patient satisfaction.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">7. Mobile Integration Support</h3>
              <p className="text-text-secondary text-sm">Your VA supports providers using DrChrono's mobile app. They troubleshoot mobile access, help with on-the-go documentation, and ensure seamless mobile workflows.</p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep text-lg mb-3">8. Reporting & Performance Analytics</h3>
              <p className="text-text-secondary text-sm">Your VA generates DrChrono reports on appointments, claims, collections, provider productivity, and patient metrics. These reports drive continuous improvement.</p>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Specialties Using DrChrono</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {['Primary Care', 'Telemedicine', 'Occupational Medicine', 'Urgent Care', 'Fertility Clinics', 'Specialty Practices'].map((specialty, idx) => (
              <div key={idx} className="bg-warm-cream rounded-lg p-4 border border-gray-200">
                <p className="text-text-secondary text-sm">→ {specialty}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Why DrChrono Practices Use VAs</h2>
          <ul className="space-y-3 text-text-secondary mb-12">
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Mobile-first support:</strong> DrChrono's strength is mobile. VAs help practices maximize mobile workflows and remote access.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Affordability:</strong> DrChrono is cost-effective. Adding a VA creates comprehensive practice management without high overhead.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-coral-accent font-bold">✓</span>
              <span><strong>Startup-friendly:</strong> New practices often use DrChrono. VAs help founders focus on clinical delivery rather than admin.</span>
            </li>
          </ul>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Do your VAs know DrChrono?</h3>
              <p className="text-text-secondary text-sm">Yes. Our VAs are trained on DrChrono's scheduling, billing, patient portal, and reporting. They're ready to support your practice workflows immediately.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Can a VA handle mobile workflows?</h3>
              <p className="text-text-secondary text-sm">Absolutely. VAs support providers using DrChrono's mobile app, troubleshoot access issues, and ensure smooth on-the-go documentation. This is especially valuable for telemedicine and field practices.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">What's the cost impact?</h3>
              <p className="text-text-secondary text-sm">A VA ($700–$1,300/month) typically saves practices $2,000–$4,000/month in improved billing, reduced billing errors, and reclaimed provider time. Payback is immediate.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Ready to Supercharge Your DrChrono System?</h2>
            <p className="mb-6 text-lg text-white/80">Get a DrChrono-trained VA to handle scheduling, billing, and patient engagement while you focus on patient care.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Get DrChrono Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
