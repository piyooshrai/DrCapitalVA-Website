import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Dr. Capital VA | Book a Strategy Call',
  description: 'Contact Dr. Capital VA. Phone: (813) 761-8268. Book a free 15-minute strategy call. We respond within 24 business hours.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Let's talk about your practice.</h1>
          <p className="text-xl text-text-secondary">
            Book a free 15-minute strategy call. We'll assess your practice's biggest pain points and match you with the right VA.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-8">Send us a message</h2>
            <ContactForm
              showName={true}
              showPhone={true}
              showSpecialty={true}
              showMessage={true}
              buttonText="Send Message"
            />
          </div>

          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl text-teal-deep mb-8">Other ways to reach us</h2>

            <div className="mb-12">
              <h3 className="font-semibold text-teal-deep mb-3">Phone</h3>
              <a href="tel:+18137618268" className="text-lg text-teal-deep hover:text-teal-accent font-semibold">
                (813) 761-8268
              </a>
              <p className="text-text-secondary text-sm mt-2">Mon–Fri, 9am–5pm EST</p>
            </div>

            <div className="mb-12">
              <h3 className="font-semibold text-teal-deep mb-3">Email</h3>
              <a href="mailto:info@thehuman.capital" className="text-lg text-teal-deep hover:text-teal-accent font-semibold">
                info@thehuman.capital
              </a>
              <p className="text-text-secondary text-sm mt-2">Response within 24 hours</p>
            </div>

            <div className="mb-12 p-6 bg-warm-cream rounded-2xl">
              <h3 className="font-semibold text-teal-deep mb-3">What to expect</h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>• We call or email within 24 hours</li>
                <li>• 15-minute initial strategy call (no sales pitch)</li>
                <li>• We listen to your practice's biggest challenges</li>
                <li>• 48-hour VA match if we move forward</li>
                <li>• Your information is HIPAA-secure</li>
              </ul>
            </div>

            <div className="p-6 bg-teal-deep/10 rounded-2xl border border-teal-deep/20">
              <p className="text-sm text-text-secondary">
                <span className="font-semibold text-teal-deep">Curious but not ready?</span> Check out our <a href="/how-it-works" className="text-teal-deep hover:underline">How It Works</a> page or <a href="/pricing" className="text-teal-deep hover:underline">Pricing</a> to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'How quickly will we hear back?', a: 'Within 24 business hours via email or phone. We usually respond faster.' },
              { q: 'Is the strategy call really free?', a: 'Yes. No obligations. No sales pitch. We just want to understand your practice.' },
              { q: 'What information should I have ready?', a: 'Your EHR system, number of providers, biggest operational pain points, and any compliance requirements. But we can figure it out from scratch too.' },
              { q: 'Can we schedule a call for a specific time?', a: 'Yes. Include your preferred time in the form, or mention it in your message. We\'re flexible.' },
              { q: 'What if we\'re not in the US?', a: 'We serve UK, Middle East, and Australia/NZ. Email us directly and we\'ll discuss regional support.' },
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-teal-deep mb-2">{item.q}</h3>
                <p className="text-text-secondary">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
