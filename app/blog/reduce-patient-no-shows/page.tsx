import { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Patient Scheduling Best Practices: How VAs Reduce No-Shows by 40%',
  description: 'Proven strategies to reduce patient no-shows using virtual assistant support. Scheduling optimization, reminders, and retention techniques.',
};

export default function ReduceNoShowsPage() {
  return (
    <main>
      <article>
        <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Reduce No-Shows', href: '/blog/reduce-patient-no-shows' }]} />
            <h1 className="font-serif text-4xl lg:text-5xl text-teal-deep mb-6">Patient Scheduling Best Practices: How VAs Reduce No-Shows by 40%</h1>
            <p className="text-text-secondary">Data-backed strategies to eliminate appointment waste and increase practice revenue.</p>
          </div>
        </section>

        <section className="py-20 px-8 lg:px-16">
          <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
            <p className="text-text-secondary leading-relaxed mb-6">
              Average no-show rate in healthcare: 23%. For a practice generating $1M in revenue, this translates to $230K in lost revenue annually. A dedicated scheduling VA can reduce no-shows by 30–40%, recovering $69K–$92K per year.
            </p>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Why Patient No-Shows Happen</h2>
            <ul className="space-y-3 text-text-secondary mb-8">
              <li className="flex gap-3"><span className="text-coral-accent font-bold">•</span><span><strong>Forgotten appointments</strong> (40%): Patient simply forgets the appointment</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">•</span><span><strong>Lack of reminders</strong> (25%): No follow-up communication from practice</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">•</span><span><strong>Transportation issues</strong> (15%): Patient can't get to the appointment</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">•</span><span><strong>Scheduling conflict</strong> (12%): Patient schedule changed after booking</span></li>
              <li className="flex gap-3"><span className="text-coral-accent font-bold">•</span><span><strong>Other</strong> (8%): Job loss, illness, family emergency</span></li>
            </ul>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">The VA Scheduling Method: 8 Steps to 40% No-Show Reduction</h2>

            <div className="space-y-6 mb-12">
              <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent">
                <h3 className="font-bold text-teal-deep mb-3">Step 1: Smart Scheduling (Reduce Gaps)</h3>
                <p className="text-text-secondary text-sm">Your VA books appointments strategically to minimize gaps while respecting provider preferences. This means knowing which time slots have historically high no-show rates and filling them with waitlist patients.</p>
              </div>

              <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent">
                <h3 className="font-bold text-teal-deep mb-3">Step 2: Day-Before Reminder Call/Text</h3>
                <p className="text-text-secondary text-sm">Your VA calls or texts every patient the day before their appointment: "Your appointment is tomorrow at 2pm with Dr. Smith. Please confirm or let us know if you need to reschedule." This single step reduces no-shows by 15–20%.</p>
              </div>

              <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent">
                <h3 className="font-bold text-teal-deep mb-3">Step 3: Transport Coordination</h3>
                <p className="text-text-secondary text-sm">For high-risk patients (elderly, low-income), your VA proactively arranges transportation through rideshare partnerships, community services, or family coordination.</p>
              </div>

              <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent">
                <h3 className="font-bold text-teal-deep mb-3">Step 4: Waitlist Management</h3>
                <p className="text-text-secondary text-sm">Your VA maintains an active waitlist of patients who can reschedule on short notice. If an appointment is cancelled, your VA immediately contacts waitlist patients to fill the slot.</p>
              </div>

              <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent">
                <h3 className="font-bold text-teal-deep mb-3">Step 5: Automated Confirmation (EHR Integration)</h3>
                <p className="text-text-secondary text-sm">Your VA sets up automated appointment confirmations through your patient portal or SMS. Patients confirm online or via text, reducing manual follow-up work.</p>
              </div>

              <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent">
                <h3 className="font-bold text-teal-deep mb-3">Step 6: Morning Call (15–30 Min Before)</h3>
                <p className="text-text-secondary text-sm">For high-value appointments (surgeries, consultations), your VA calls the patient 15–30 minutes before to confirm arrival. This catches last-minute cancellations and allows time to fill the slot.</p>
              </div>

              <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent">
                <h3 className="font-bold text-teal-deep mb-3">Step 7: Post-Cancellation Rescheduling</h3>
                <p className="text-text-secondary text-sm">When a patient cancels, your VA immediately offers alternative times and follows up proactively to ensure the patient reschedules (not just cancels permanently).</p>
              </div>

              <div className="bg-warm-cream rounded-lg p-6 border-l-4 border-coral-accent">
                <h3 className="font-bold text-teal-deep mb-3">Step 8: Analytics & Optimization</h3>
                <p className="text-text-secondary text-sm">Your VA tracks no-show rates by provider, time slot, and patient type, identifying patterns and continuously improving strategies.</p>
              </div>
            </div>

            <h2 className="font-serif text-3xl text-teal-deep mb-6 mt-12">Real-World Impact</h2>
            <p className="text-text-secondary mb-6">
              <strong>Scenario:</strong> Dental practice with 50 appointments/week, 20% no-show rate.
            </p>
            <ul className="space-y-2 text-text-secondary mb-8">
              <li className="flex gap-3"><span className="font-bold flex-shrink-0">Before VA:</span><span>10 no-shows/week, $500 lost revenue per appointment = $5,000/week waste</span></li>
              <li className="flex gap-3"><span className="font-bold flex-shrink-0">With VA (40% reduction):</span><span>6 no-shows/week = $3,000/week waste (recovery: $2,000/week)</span></li>
              <li className="flex gap-3"><span className="font-bold flex-shrink-0">Annual impact:</span><span>$2,000/week × 52 weeks = $104,000/year recovered</span></li>
              <li className="flex gap-3"><span className="font-bold flex-shrink-0">VA cost:</span><span>$1,300/month × 12 = $15,600/year</span></li>
              <li className="flex gap-3"><span className="font-bold flex-shrink-0">Net ROI:</span><span>($104K – $15.6K) ÷ $15.6K = 567% ROI</span></li>
            </ul>

            <div className="bg-teal-deep text-white rounded-lg p-8 text-center mt-12">
              <h2 className="font-serif text-3xl mb-4">Ready to Cut No-Shows in Half?</h2>
              <p className="mb-6 text-lg text-white/80">Get a scheduling VA who specializes in reducing appointment waste and filling your schedule.</p>
              <a href="/contact" className="inline-block bg-coral-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Get Scheduling Support
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
