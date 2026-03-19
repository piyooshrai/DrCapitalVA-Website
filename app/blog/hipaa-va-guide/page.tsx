import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'HIPAA-Compliant Virtual Assistants: The Complete Guide',
  description: 'What healthcare practices need to know about hiring HIPAA-compliant virtual assistants. Training, compliance, BAAs, and security requirements explained.',
};

export default function HipaaVAGuidePage() {
  return (
    <main>
      <article>
        <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'HIPAA Compliance', href: '/blog/hipaa-va-guide' }]} />
            <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">HIPAA-Compliant Virtual Assistants: The Complete Guide</h1>
            <p className="text-xl text-text-secondary mb-4">Last updated: March 2025</p>
            <p className="text-lg text-text-secondary">What healthcare practices need to know about hiring, training, and managing HIPAA-compliant VAs. Everything from Business Associate Agreements to encryption standards.</p>
          </div>
        </section>

        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">What Is HIPAA and Why Does It Matter for VAs?</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              HIPAA (Health Insurance Portability and Accountability Act) is a federal law that protects patient health information (PHI). If your virtual assistant has access to patient data — names, medical records, appointment details, insurance info — you are legally required to ensure HIPAA compliance. Failure to do so can result in fines of $100–$50,000 per patient record exposed, plus legal liability.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              Many practices hire generic VAs without realizing the compliance implications. A VA without HIPAA training is a compliance liability, not an asset.
            </p>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">The 5 Requirements for HIPAA-Compliant VA Support</h2>

            <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent mb-8">
              <h3 className="font-bold text-teal-deep mb-4">1. Business Associate Agreement (BAA)</h3>
              <p className="text-text-secondary mb-4">
                A BAA is a legal contract between your practice and the VA company. It outlines how patient data will be protected, accessed, and stored. It specifies breach notification procedures, liability, and compliance obligations. Without a signed BAA, you have no legal protection if a breach occurs.
              </p>
              <p className="text-text-secondary font-semibold">Required for: Any VA with access to patient data.</p>
            </div>

            <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent mb-8">
              <h3 className="font-bold text-teal-deep mb-4">2. HIPAA Training & Certification</h3>
              <p className="text-text-secondary mb-4">
                Your VA must complete formal HIPAA training covering privacy rules, security standards, and breach notification. This should be annual, documented, and verifiable. Generic "online HIPAA course" training is not sufficient — healthcare-specific HIPAA training is essential.
              </p>
              <p className="text-text-secondary font-semibold">Required for: All VAs with PHI access.</p>
            </div>

            <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent mb-8">
              <h3 className="font-bold text-teal-deep mb-4">3. Background Verification (Checkr)</h3>
              <p className="text-text-secondary mb-4">
                VAs should undergo professional background checks covering criminal history, identity verification, and professional licenses (if applicable). Checkr is a standard background verification service. This protects your practice from hiring someone with a history of data theft or fraud.
              </p>
              <p className="text-text-secondary font-semibold">Recommended for: All healthcare VAs.</p>
            </div>

            <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent mb-8">
              <h3 className="font-bold text-teal-deep mb-4">4. NDA (Non-Disclosure Agreement)</h3>
              <p className="text-text-secondary mb-4">
                Your VA must sign a strict NDA prohibiting disclosure of patient information, practice operations, financial data, or any confidential information. This is separate from the BAA and creates personal legal liability for the VA.
              </p>
              <p className="text-text-secondary font-semibold">Required for: All VAs with practice access.</p>
            </div>

            <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent mb-8">
              <h3 className="font-bold text-teal-deep mb-4">5. Technical Security Controls</h3>
              <p className="text-text-secondary mb-4">
                HIPAA requires encryption of data in transit and at rest, secure authentication (MFA), access logs, and restricted access based on job function. VAs should use encrypted VPN, avoid public WiFi, and access systems only through secure channels.
              </p>
              <p className="text-text-secondary font-semibold">Required for: All systems handling PHI.</p>
            </div>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Common HIPAA Mistakes When Hiring VAs</h2>
            <ul className="space-y-4 text-text-secondary mb-8">
              <li className="flex gap-3">
                <span className="text-coral-accent font-bold flex-shrink-0">✗</span>
                <span><strong>No BAA:</strong> Hiring a VA without a signed BAA is illegal. You have zero legal protection if a breach occurs.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-coral-accent font-bold flex-shrink-0">✗</span>
                <span><strong>Generic VA companies:</strong> Agencies like Belay, Fancy Hands, and others don't guarantee HIPAA compliance. You're taking on the compliance risk yourself.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-coral-accent font-bold flex-shrink-0">✗</span>
                <span><strong>No NDA:</strong> An NDA isn't "optional" — it's essential for protecting sensitive practice information.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-coral-accent font-bold flex-shrink-0">✗</span>
                <span><strong>Unsecured communication:</strong> Sharing patient data via email, Slack, WhatsApp, or other unsecured channels violates HIPAA. Use encrypted channels only.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-coral-accent font-bold flex-shrink-0">✗</span>
                <span><strong>No background check:</strong> Hiring a VA without background verification is risky. You don't know who has access to your patient data.</span>
              </li>
            </ul>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">What to Look for in a HIPAA-Compliant VA Service</h2>
            <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
              <ul className="space-y-3 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-coral-accent font-bold">✓</span>
                  <span>Signed BAA provided automatically (not as an extra fee)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-coral-accent font-bold">✓</span>
                  <span>All VAs HIPAA-certified and background verified</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-coral-accent font-bold">✓</span>
                  <span>Transparent security practices (encryption, VPN, access logs)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-coral-accent font-bold">✓</span>
                  <span>Zero breaches track record (ask for documentation)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-coral-accent font-bold">✓</span>
                  <span>Regular compliance audits and annual recertification</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-coral-accent font-bold">✓</span>
                  <span>Healthcare-specific expertise (not generic VAs claiming HIPAA)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-coral-accent font-bold">✓</span>
                  <span>Dedicated support and compliance oversight</span>
                </li>
              </ul>
            </div>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">The Bottom Line</h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              HIPAA compliance isn't negotiable when hiring a VA. Your patient data is your responsibility. If a VA lacks HIPAA training, a BAA, or background verification, don't hire them. The cost of a breach — legal fees, fines, reputation damage — far exceeds the cost of hiring a properly certified VA.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Dr. Capital VA comes with full HIPAA compliance built-in: BAA included, all VAs certified, background verified, zero breaches since 2019. You can focus on patient care knowing your data is protected.
            </p>

            <div className="bg-teal-deep text-white rounded-lg p-8 text-center mt-12">
              <h2 className="font-serif text-3xl mb-4">Want a HIPAA-Compliant VA Without the Compliance Headaches?</h2>
              <p className="mb-6 text-lg text-white/80">Learn how Dr. Capital VA handles all HIPAA requirements so you don't have to.</p>
              <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Get HIPAA-Compliant VA Support
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
