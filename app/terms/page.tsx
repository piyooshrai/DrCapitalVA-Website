import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service | Dr. Capital VA',
  description: 'Terms of service for Dr. Capital VA website and services.',
};

export default function TermsPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Terms', href: '/terms' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Terms of Service</h1>
          <p className="text-text-secondary">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto prose prose-lg max-w-none text-text-secondary space-y-8">
          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Agreement to Terms</h2>
            <p>
              These Terms of Service govern your use of the drcapitalva.com website and services. By accessing or using our services, you agree to be bound by these terms. If you do not agree, do not use our services.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Company" means Dr. Capital VA and The Human Capital</li>
              <li>"Service" means our website, services, virtual assistants, and related offerings</li>
              <li>"User" or "Client" means any healthcare practice or individual using our services</li>
              <li>"VA" or "Virtual Assistant" means a remote worker assigned to your practice</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Service Engagement</h2>
            <p>
              All services are provided on a month-to-month basis. You may cancel with 30 days written notice. We may terminate services if: (1) you breach these terms, (2) you fail to pay, or (3) you violate HIPAA or legal requirements.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Payment Terms</h2>
            <p>
              Payment is due on the 1st of each month. Late payment fees apply after 15 days overdue. We reserve the right to suspend services for non-payment.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all proprietary information, patient data, and practice operations discussed during our engagement. Violation of confidentiality may result in legal action.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Company is not liable for indirect, incidental, special, or consequential damages. Our total liability does not exceed the amount paid for services in the preceding 12 months.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Company from any claims, damages, or costs arising from your use of our services or violation of these terms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms. Material changes will be announced via email. Continued use of services constitutes acceptance.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Contact</h2>
            <p>
              Questions about these Terms? Contact us at info@thehuman.capital or (813) 761-8268.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
