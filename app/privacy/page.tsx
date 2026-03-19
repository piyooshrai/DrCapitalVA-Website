import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dr. Capital VA',
  description: 'Privacy policy for drcapitalva.com. How we handle your data and respect your privacy.',
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Privacy', href: '/privacy' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Privacy Policy</h1>
          <p className="text-text-secondary">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto prose prose-lg max-w-none text-text-secondary space-y-8">
          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Introduction</h2>
            <p>
              Dr. Capital VA ("we", "us", "our", or "Company") operates the drcapitalva.com website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal Data: Name, email address, phone number, practice information</li>
              <li>Usage Data: Browser type, pages visited, time and date of visit, IP address</li>
              <li>Cookies and Tracking: We use cookies to track usage and improve experience</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">HIPAA Compliance</h2>
            <p>
              If you submit patient information or protected health information (PHI) through our website, we treat that data with strict HIPAA compliance: encrypted transmission, encrypted storage, limited access, audit logs, and breach notification procedures.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Contact Form Information</h2>
            <p>
              When you submit the contact form, your information is sent to info@thehuman.capital via Resend (our email service provider). Resend complies with privacy regulations. We use your information solely to respond to your inquiry and discuss our services.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Third-Party Services</h2>
            <p>
              We use third-party services including Google Analytics (for usage tracking), Vercel (for hosting), and Resend (for email). Each has its own privacy policy. We recommend reviewing their policies.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Security</h2>
            <p>
              Security of your data is important to us. We use encryption (TLS), secure connections (HTTPS), and access controls. However, no transmission method is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy. We'll notify you of any changes by updating the "Last updated" date. Continued use of the Service constitutes acceptance of changes.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at info@thehuman.capital or call (813) 761-8268.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
