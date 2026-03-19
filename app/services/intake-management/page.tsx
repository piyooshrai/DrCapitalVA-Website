import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Patient Intake Virtual Assistant | Dr. Capital VA',
  description: 'New patient registration, insurance processing, medical history collection, consent forms, and HIPAA authorization management.',
};

export default function IntakeManagementPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Services', href: '/services' }, { label: 'Intake Management', href: '/services/intake-management' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Patient Intake Virtual Assistant</h1>
          <p className="text-xl text-text-secondary">
            New patient registration, insurance card processing, medical history collection, consent form distribution, and prior authorization initiation.
          </p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">What Your Intake VA Manages</h2>
          <div className="space-y-6">
            {[
              { title: 'New Patient Registration', desc: 'Registers patients in your EHR and scheduling system. Creates patient accounts. Sets up patient portal access.' },
              { title: 'Insurance Card Processing', desc: 'Collects insurance cards from new patients. Processes card information into billing system. Verifies coverage.' },
              { title: 'Demographic Data Entry', desc: 'Accurately enters patient demographics: name, DOB, contact info, address. Ensures data consistency across systems.' },
              { title: 'Medical History Collection', desc: 'Distributes medical history forms. Collects past medical history, medications, allergies, surgical history. Enters into EHR.' },
              { title: 'Consent Form Distribution', desc: 'Provides notice of privacy practices. Collects signed general consents. Handles specialty-specific consents.' },
              { title: 'HIPAA Authorization Forms', desc: 'Manages HIPAA authorizations for medical records requests. Tracks expirations. Re-obtains as needed.' },
              { title: 'Referral Documentation', desc: 'Collects referral documents from referring providers. Verifies completeness. Files in chart.' },
              { title: 'Prior Authorization Initiation', desc: 'Initiates prior authorization requests with insurance for scheduled procedures. Tracks status. Alerts providers to denials.' },
            ].map((task, idx) => (
              <div key={idx} className="bg-warm-cream rounded-xl p-6 border-l-4 border-teal-accent">
                <h3 className="font-bold text-teal-deep mb-2">{task.title}</h3>
                <p className="text-text-secondary text-sm">{task.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-8">Data Quality & Accuracy</h2>
          <p className="text-lg text-white/70 mb-8">
            Intake errors compound downstream. Wrong insurance = claim rejections. Missing allergies = safety risk. Your intake VA treats data accuracy as non-negotiable.
          </p>
          <ul className="space-y-3">
            {[
              'Double-entry verification for critical data (DOB, insurance)',
              'Monthly data quality audits',
              'EHR validation before patient first appointment',
              'Duplicate patient detection and merging',
              'Accuracy targets: 99.5% on critical fields',
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <svg className="w-5 h-5 text-teal-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">HIPAA Compliance in Intake</h2>
          <div className="bg-warm-cream rounded-2xl p-8 space-y-4">
            <p className="text-text-secondary">
              Intake is the gateway to PHI access. Insurance cards, medical history, allergies, consent forms — all sensitive. Your intake VA maintains strict compliance.
            </p>
            <ul className="space-y-3 text-text-secondary text-sm">
              {[
                'Secure collection of insurance cards (encrypted scanning/storage)',
                'Forms processed in secure document systems',
                'Consent verifications logged and tracked',
                'Patient portal account setup with encryption',
                'Access to patient data limited to intake workflow',
                'Audit trails for all patient record creation',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-teal-accent">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Specialties Using Intake Support</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {['Primary Care', 'Dental', 'Mental Health', 'Orthopedics', 'Pediatrics', 'Cardiology'].map((spec) => (
              <div key={spec} className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="font-semibold text-teal-deep">{spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Real Impact</h2>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="space-y-4 text-text-secondary">
              <p><strong className="text-teal-deep">Challenge:</strong> A pediatric practice was spending 45 minutes per new patient on intake. Data entry errors were frequent. Parents couldn't complete forms pre-visit.</p>
              <p><strong className="text-teal-deep">Solution:</strong> Implemented intake VA to handle registration, form collection, and data entry. EHR fully populated before first appointment.</p>
              <p><strong className="text-teal-deep">Result:</strong> Check-in time reduced from 45 min to 10 min. Data errors dropped 85%. Provider efficiency increased 30%.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6">Streamline your intake process</h2>
          <p className="text-lg text-white/70 mb-8">Intake support pays for itself through improved provider efficiency and fewer billing delays from bad data.</p>
          <ContactForm showName={false} showPhone={false} showSpecialty={false} showMessage={false} buttonText="Get Started" />
        </div>
      </section>
    </main>
  );
}
