import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'Dr. Capital VA vs ScribeEMR: Complete Comparison',
  description: 'Compare Dr. Capital VA and ScribeEMR. Medical scribing, HIPAA compliance, cost analysis, and which is right for your practice.',
};

export default function CompareScribeEMRPage() {
  return (
    <main>
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Compare', href: '#' }, { label: 'vs ScribeEMR', href: '/compare/scribeemr' }]} />
          <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Dr. Capital VA vs ScribeEMR</h1>
          <p className="text-xl text-text-secondary">Medical scribing vs administrative virtual assistant support. Which solution fits your workflow?</p>
        </div>
      </section>

      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-teal-deep mb-8">What's the Difference?</h2>
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-warm-cream rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep text-lg mb-4">Dr. Capital VA</h3>
              <p className="text-text-secondary text-sm mb-4">Administrative virtual assistant — handles the non-clinical back-office work that takes doctors away from patients.</p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Patient scheduling</li>
                <li>• Medical billing & claims</li>
                <li>• Insurance verification</li>
                <li>• Patient follow-up</li>
                <li>• Intake & referral management</li>
                <li>• Telehealth support</li>
                <li>• Does NOT document clinical notes</li>
              </ul>
            </div>
            <div className="bg-warm-cream rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep text-lg mb-4">ScribeEMR</h3>
              <p className="text-text-secondary text-sm mb-4">Medical scribe — documents patient encounters in real-time during clinical visits. Requires clinical knowledge.</p>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Sits with provider during appointments</li>
                <li>• Writes clinical documentation</li>
                <li>• Enters chief complaints, vitals, assessment</li>
                <li>• Requires medical training</li>
                <li>• Does NOT handle scheduling/billing</li>
                <li>• In-person or remote shadow</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Direct Comparison</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-teal-deep text-white">
                  <th className="border border-gray-300 p-4 text-left">Feature</th>
                  <th className="border border-gray-300 p-4 text-left">Dr. Capital VA</th>
                  <th className="border border-gray-300 p-4 text-left">ScribeEMR</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Cost (per month)</strong></td>
                  <td className="border border-gray-300 p-4">$700–$1,300</td>
                  <td className="border border-gray-300 p-4">$1,500–$3,000+ (varies by model)</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Role</strong></td>
                  <td className="border border-gray-300 p-4">Administrative support</td>
                  <td className="border border-gray-300 p-4">Clinical documentation</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Requires clinical training</strong></td>
                  <td className="border border-gray-300 p-4">No</td>
                  <td className="border border-gray-300 p-4">Yes (extensive)</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>In-person?</strong></td>
                  <td className="border border-gray-300 p-4">No (100% remote)</td>
                  <td className="border border-gray-300 p-4">Yes (or remote shadow)</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Works during patient visits</strong></td>
                  <td className="border border-gray-300 p-4">No</td>
                  <td className="border border-gray-300 p-4">Yes</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Handles scheduling</strong></td>
                  <td className="border border-gray-300 p-4">✓ Yes</td>
                  <td className="border border-gray-300 p-4">✗ No</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50">
                  <td className="border border-gray-300 p-4"><strong>Manages medical billing</strong></td>
                  <td className="border border-gray-300 p-4">✓ Yes</td>
                  <td className="border border-gray-300 p-4">✗ No</td>
                </tr>
                <tr className="bg-warm-cream">
                  <td className="border border-gray-300 p-4"><strong>Patient follow-up</strong></td>
                  <td className="border border-gray-300 p-4">✓ Yes</td>
                  <td className="border border-gray-300 p-4">✗ No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">When Each Makes Sense</h2>
          <div className="space-y-8 mb-12">
            <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent">
              <h3 className="font-bold text-teal-deep mb-3">Use Dr. Capital VA if:</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>✓ Your bottleneck is <strong>scheduling, billing, patient follow-up</strong> (admin tasks)</li>
                <li>✓ You want <strong>more time with patients</strong> but your admin workload is too high</li>
                <li>✓ You struggle with <strong>insurance verification, claims management, billing cycles</strong></li>
                <li>✓ You have a <strong>high no-show rate</strong> and need better follow-up</li>
                <li>✓ You want a <strong>remote, month-to-month, risk-free</strong> solution</li>
                <li>✓ Cost matters — <strong>$700–$1,300</strong> is budget-friendly</li>
                <li>✓ You need <strong>HIPAA compliance built-in</strong> (healthcare-trained VA)</li>
              </ul>
            </div>
            <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-teal-deep">
              <h3 className="font-bold text-teal-deep mb-3">Use ScribeEMR if:</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>△ Your bottleneck is <strong>clinical documentation</strong> (note-writing during visits)</li>
                <li>△ You spend <strong>excessive time</strong> on charting <strong>after hours</strong></li>
                <li>△ You want <strong>in-the-room support</strong> during patient encounters</li>
                <li>△ Your specialty requires <strong>detailed, complex clinical notes</strong> (surgery, cardiology)</li>
                <li>△ You have <strong>budget for $1,500+/month</strong></li>
                <li>△ You can manage <strong>in-person or remote shadow setup</strong></li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Real-World Example: Multi-Specialty Clinic</h2>
          <div className="bg-white rounded-lg p-8 border-l-4 border-coral-accent mb-12">
            <p className="text-text-secondary mb-4">
              <strong>Scenario:</strong> A 3-provider primary care clinic is drowning in admin work. Providers are staying 2 hours late each day doing charting and handling calls about prescriptions, appointment changes, and insurance issues.
            </p>
            <p className="text-text-secondary mb-6">
              <strong>Solution 1 (Dr. Capital VA):</strong> Hire a full-time VA ($1,300/month) to handle scheduling, patient callbacks, insurance verification, and billing. Providers can focus on charting during the appointment — no in-room scribe needed. Result: Providers go home on time, admin workload drops 60%, revenue cycle improves (faster claims).
            </p>
            <p className="text-text-secondary">
              <strong>Solution 2 (ScribeEMR):</strong> Hire a medical scribe ($2,000/month) to sit with each provider and write clinical notes in real-time. Providers talk; scribe documents. Result: Providers charting time drops significantly, but scheduling/billing/insurance work is still piling up. A second person (VA or front desk staff) is still needed.
            </p>
            <p className="text-text-secondary mt-6 font-semibold">
              <strong>Best practice:</strong> Many clinics use BOTH — a scribe for in-room documentation + a VA for back-office admin. But if you have to choose one, identify your biggest pain point first.
            </p>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">The ROI Breakdown</h2>
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-4">Dr. Capital VA ROI</h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li><strong>Cost:</strong> $1,300/month ($15,600/year)</li>
                <li><strong>Time saved per week:</strong> 8–12 hours (admin)</li>
                <li><strong>Revenue impact:</strong> More scheduled patients (fewer no-shows), faster billing collections</li>
                <li><strong>Breakeven:</strong> 1–2 months (at average billing)</li>
                <li><strong>Annual ROI:</strong> 200%+ (typical)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-4">ScribeEMR ROI</h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li><strong>Cost:</strong> $2,000–$3,000/month ($24,000–$36,000/year)</li>
                <li><strong>Time saved per week:</strong> 10–15 hours (charting)</li>
                <li><strong>Revenue impact:</strong> Indirect (provider productivity, patient satisfaction)</li>
                <li><strong>Breakeven:</strong> 3–6 months</li>
                <li><strong>Annual ROI:</strong> 150%+ (if charting is your bottleneck)</li>
              </ul>
            </div>
          </div>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">HIPAA & Compliance</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Both solutions handle patient data and require HIPAA compliance. Dr. Capital VA comes HIPAA-certified with BAA agreements already in place. ScribeEMR services vary — you need to verify their compliance claims with each vendor, as not all scribing platforms are equally transparent about HIPAA.
          </p>
          <p className="text-text-secondary leading-relaxed">
            With a Dr. Capital VA, compliance is built-in. Your VA is trained, verified, and covered by our zero-breach record. With a scribe service, you're trusting their platform and their vetting — due diligence is essential.
          </p>

          <h2 className="font-serif text-3xl text-teal-deep mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Can a VA do what a scribe does?</h3>
              <p className="text-text-secondary text-sm">No. A VA is administrative support. A scribe documents clinical encounters in real-time, which requires medical knowledge and in-person/shadow work. They're different roles serving different needs.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Can I have both a VA and a scribe?</h3>
              <p className="text-text-secondary text-sm">Yes, and many practices do. A scribe handles charting; a VA handles scheduling, billing, and admin. Combined, they free up significant provider time. Cost is higher (~$3,500/month), but for high-volume practices, the ROI is strong.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Which will save me more time?</h3>
              <p className="text-text-secondary text-sm">Depends on your bottleneck. If you're drowning in charting → scribe. If you're drowning in scheduling, billing, and patient calls → VA. Identify where you're losing the most time and start there.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-teal-deep mb-2">Is ScribeEMR worth the extra cost?</h3>
              <p className="text-text-secondary text-sm">If your charting takes 2+ hours after hours each day, yes — a scribe will pay for itself in time savings alone. If your main issue is scheduling and billing, a VA is the better investment.</p>
            </div>
          </div>

          <div className="bg-teal-deep text-white rounded-lg p-8 text-center">
            <h2 className="font-serif text-3xl mb-4">Which Is Right for Your Practice?</h2>
            <p className="mb-6 text-lg text-white/80">Let's analyze your specific workflow and help you choose the solution that will actually save you the most time and money.</p>
            <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
