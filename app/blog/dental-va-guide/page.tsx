import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Virtual Assistants for Dental Practices: Complete Guide',
  description: 'How dental VAs increase recall rates, manage patient reminders, and handle administrative tasks specific to dental practices.',
};

export default function DentalVAPage() {
  return (
    <main>
      <article>
        <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Dental VA Guide', href: '/blog/dental-va-guide' }]} />
            <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Virtual Assistants for Dental Practices</h1>
            <p className="text-text-secondary">How dental VAs increase recall rates by 40%, manage patient reminders, and handle dental-specific administrative tasks.</p>
          </div>
        </section>

        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Why Dental Practices Need VAs</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Dental practices face unique admin challenges: 6-month recall scheduling, treatment acceptance coordination, insurance pre-authorization, and patient anxiety management. A dedicated VA handles these critical tasks, freeing your team to focus on patient care and increasing production.
            </p>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Key VA Responsibilities in Dental</h2>
            <ul className="space-y-3 text-text-secondary mb-8">
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Recall scheduling and proactive patient outreach (increase recall rate by 30–40%)</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Pre-operative patient education and anxiety management</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Insurance eligibility verification and pre-authorization requests</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Treatment plan explanations and financial coordination</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Post-operative follow-up and care instructions</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Patient billing and collections</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">✓</span><span>Referral management (implants, ortho, specialists)</span></li>
            </ul>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Real Dental Practice Example</h2>
            <p className="text-text-secondary mb-4">
              <strong>General dentistry practice (2 chairs, 50 patients/week):</strong>
            </p>
            <ul className="space-y-2 text-text-secondary mb-8">
              <li>• Recall rate improved from 55% to 85% (30% gain)</li>
              <li>• Treatment acceptance increased 25% (better patient education)</li>
              <li>• Average patient life value increased $1,200+ (better retention)</li>
              <li>• Staff focus improved (less admin stress)</li>
            </ul>

            <div className="bg-teal-deep text-white rounded-lg p-8 text-center mt-12">
              <h2 className="font-serif text-3xl mb-4">Ready to Boost Your Recall Rates?</h2>
              <p className="mb-6 text-lg text-white/80">Get a dental-trained VA who understands your practice workflows and patient management.</p>
              <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Get Dental VA Support
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
