import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ContactForm from '@/components/common/ContactForm';

export const metadata: Metadata = {
  title: 'About Dr. Capital VA | Healthcare Virtual Assistant Company',
  description: 'Learn about Dr. Capital VA, a division of The Human Capital. HIPAA-certified VAs for healthcare practices since 2019.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
          <h1 className="font-serif text-5xl lg:text-6xl text-teal-deep mb-6">Built for healthcare. Backed by The Human Capital.</h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            We're not a generic VA agency. We're healthcare specialists who understand the unique pressures of running a modern medical practice.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-8">Why Healthcare Needs Human VAs, Not Chatbots</h2>
          <div className="prose prose-lg max-w-none text-text-secondary space-y-6">
            <p>
              Healthcare is different. Your patients can't be routed through an automated system. Your insurance denials need human judgment. Your multi-provider schedules need real coordination. Your HIPAA compliance can't be delegated to a chatbot.
            </p>
            <p>
              In 2019, Piyoosh Rai founded The Human Capital with a simple insight: businesses were drowning in admin work that pulled focus from their core mission. For healthcare, this problem is acute. Doctors hired to practice medicine spend 20% of their time on paperwork. Dental offices manage 30+ insurance pre-auths per week manually. Mental health practices juggle crisis coordination with patient intake.
            </p>
            <p>
              Dr. Capital VA is The Human Capital's healthcare division. We took what worked for general business VAs and rebuilt it entirely for healthcare: HIPAA training baked into every hire. BAA agreements as standard. Checkr background verification for every VA. EHR-specific expertise. Compliance monitoring that never stops.
            </p>
            <p>
              Your practice doesn't need another tool. It needs another person — a skilled, trustworthy person who handles the admin so your team can focus on patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed">
            To bring operational support and human coordination to healthcare practices drowning in administrative burden — so clinicians can reclaim the time to do what they were trained for: patient care.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-12">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: '2019', title: 'The Human Capital Founded', desc: 'Piyoosh Rai launches The Human Capital — a managed VA agency serving businesses across industries.' },
              { year: '2021', title: 'Healthcare Division Launched', desc: 'Dr. Capital VA becomes our dedicated healthcare vertical after recognizing unique compliance and workflow challenges.' },
              { year: '2023', title: 'HIPAA Certification Program', desc: 'We develop our proprietary HIPAA training curriculum. Every VA completes comprehensive compliance certification.' },
              { year: '2025', title: 'Client Portal Launch', desc: 'March 2025: Launch our HIPAA-compliant portal for task management, document sharing, and performance tracking.' },
            ].map((item) => (
              <div key={item.year} className="flex gap-6 pb-8 border-b border-gray-200 last:border-b-0">
                <div className="font-serif text-3xl text-teal-deep font-bold min-w-20">{item.year}</div>
                <div>
                  <h3 className="font-semibold text-teal-deep mb-2">{item.title}</h3>
                  <p className="text-text-secondary">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Human Capital Connection */}
      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-teal-deep mb-6">Part of The Human Capital</h2>
          <div className="prose prose-lg max-w-none text-text-secondary space-y-6">
            <p>
              Dr. Capital VA is a division of The Human Capital, a managed virtual assistant agency founded in 2019. The Human Capital has supported thousands of businesses with skilled, vetted virtual assistants — from startups to Fortune 500s.
            </p>
            <p>
              What sets us apart: We don't hire contractors and disappear. We hire and manage VAs directly. We train them. We monitor them. We replace them if they don't meet our standards. You get continuity, accountability, and a dedicated Client Manager who knows your practice.
            </p>
            <p>
              Our healthcare division applies this model to medicine. HIPAA training. Compliance audits. EHR expertise. Backup coverage. BAA agreements. Everything a practice needs to trust a remote VA with their operations.
            </p>
            <p>
              <Link href="https://thehuman.capital" target="_blank" className="text-teal-deep hover:text-teal-accent font-semibold">
                Learn more about The Human Capital →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { num: '97%', label: 'Client Retention' },
              { num: '3K+', label: 'Clients Served' },
              { num: '48hr', label: 'VA Match Time' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-4xl text-teal-deep mb-2">{stat.num}</div>
                <div className="text-text-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">Ready to free up your practice?</h2>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Book a 15-minute strategy call. We'll assess your practice's biggest pain points and match you with the right VA.
          </p>
          <Link href="/contact" className="btn-white">
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </main>
  );
}
