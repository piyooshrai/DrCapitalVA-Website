import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { services, specialties } from '@/lib/healthcare-data';

export const metadata: Metadata = {
  title: 'Dr. Capital VA | Healthcare Virtual Assistants — HIPAA Compliant',
  description: 'HIPAA-trained virtual assistants for healthcare practices. Patient scheduling, medical billing, follow-ups, and admin support — starting at $700/month.',
  openGraph: {
    title: 'Dr. Capital VA',
    description: 'Healthcare Virtual Assistant Services',
  },
};

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 lg:px-16 relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute -top-20 -right-10 w-96 h-96 bg-gradient-to-br from-teal-accent/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-gradient-to-br from-coral-accent/6 to-transparent rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-deep/6 rounded-full mb-8">
              <div className="w-2 h-2 bg-teal-accent rounded-full animate-pulse-dot" />
              <span className="text-xs font-bold tracking-widest uppercase text-teal-deep">HIPAA Compliant Virtual Assistants</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-teal-deep leading-tight mb-6 tracking-tight">
              Your practice deserves better than <em className="italic text-coral-accent">burnout.</em>
            </h1>

            <p className="text-lg text-text-secondary leading-relaxed mb-8 max-w-xl">
              Dedicated, HIPAA-trained virtual assistants who handle patient scheduling, billing, follow-ups, and admin — so your clinical team can focus on what they were trained for: patient care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Book a Strategy Call
              </Link>
              <Link href="/how-it-works" className="btn-outline text-center">
                See How It Works
              </Link>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative hidden lg:block">
            <div className="bg-white rounded-3xl p-12 shadow-md-healthcare relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-deep via-teal-accent to-coral-accent" />

              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-light to-teal-accent rounded-2xl flex items-center justify-center">
                  <span className="font-serif text-white text-2xl italic">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-deep">Maria S.</h4>
                  <p className="text-sm text-text-muted">Healthcare VA — Cardiology Clinic</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-warm-white rounded-xl p-4">
                  <div className="font-serif text-3xl text-teal-deep">247</div>
                  <div className="text-xs text-text-muted font-medium mt-1">Appointments This Month</div>
                </div>
                <div className="bg-warm-white rounded-xl p-4">
                  <div className="font-serif text-3xl text-teal-deep">98%</div>
                  <div className="text-xs text-text-muted font-medium mt-1">Follow-Up Rate</div>
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-warm-white rounded-lg p-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                  <span className="text-sm text-text-secondary">Patient intake — completed</span>
                </div>
                <div className="flex items-center gap-3 bg-warm-white rounded-lg p-3">
                  <div className="w-2 h-2 bg-teal-accent rounded-full flex-shrink-0" />
                  <span className="text-sm text-text-secondary">Insurance verification — in progress</span>
                </div>
                <div className="flex items-center gap-3 bg-warm-white rounded-lg p-3">
                  <div className="w-2 h-2 bg-coral-accent rounded-full flex-shrink-0" />
                  <span className="text-sm text-text-secondary">Follow-up calls — 12 remaining</span>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-sm-healthcare animate-float">
              <div className="flex items-center gap-2 text-sm font-semibold text-teal-deep">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                HIPAA Verified
              </div>
            </div>
            <div className="absolute -bottom-8 -left-4 bg-white rounded-xl p-3 shadow-sm-healthcare animate-float" style={{ animationDelay: '3s' }}>
              <div className="flex items-center gap-2 text-sm font-semibold text-coral-accent">
                48hr VA Match
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-teal-deep py-7 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 sm:gap-12 text-sm text-white/70 font-medium">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-accent rounded-full" />
            HIPAA Trained & Certified
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-accent rounded-full" />
            NDA-Protected Engagements
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-accent rounded-full" />
            Checkr Background Verified
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-accent rounded-full" />
            Encrypted Communication
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-teal-accent rounded-full" />
            Dedicated Client Manager
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="section-label">Healthcare VA Services</div>
          <h2 className="section-title">Everything your front desk<br className="hidden sm:block" /> handles — and more.</h2>
          <p className="section-sub">Our VAs integrate directly into your practice management systems. They don't just answer phones — they become the operational backbone of your clinic.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <div className="bg-white rounded-2xl p-8 border border-black/4 hover:shadow-lg-healthcare transition-all duration-300 group cursor-pointer h-full">
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center text-white font-serif text-xl italic" style={{
                  background: idx === 0 ? 'linear-gradient(135deg, #0C3B3B, #2A8A8A)' :
                            idx === 1 ? 'linear-gradient(135deg, #D4856A, #E8A08A)' :
                            idx === 2 ? 'linear-gradient(135deg, #2A6B8A, #4A9AB8)' :
                            idx === 3 ? 'linear-gradient(135deg, #1A5C5C, #3DB5AD)' :
                            idx === 4 ? 'linear-gradient(135deg, #6B5B8A, #9B8AB8)' :
                            'linear-gradient(135deg, #8A6B5B, #B89A8A)',
                }}>
                  {String.fromCharCode(65 + idx)}
                </div>

                <h3 className="text-xl font-bold text-teal-deep mb-2">{service.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{service.shortDesc}</p>

                <div className="inline-flex items-center gap-1 text-xs font-bold text-teal-light uppercase tracking-wide transition-all group-hover:gap-3">
                  Learn more <span>→</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-deep to-teal-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-b-2xl" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-teal-accent/15 to-transparent rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <div className="section-label text-teal-accent">Security & Compliance</div>
              <h2 className="text-4xl lg:text-5xl font-serif leading-tight mb-6">HIPAA isn't a checkbox.<br /> It's how we operate.</h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">Every VA assigned to a healthcare client is trained, verified, and monitored for compliance — before they access a single patient record.</p>

              <div className="space-y-6">
                {[
                  { num: '1', title: 'HIPAA Training & Certification', desc: 'Every healthcare VA completes comprehensive HIPAA training before any client assignment. Annual recertification required.' },
                  { num: '2', title: 'Business Associate Agreements', desc: 'Signed BAAs for every healthcare engagement. Legally binding compliance with PHI handling requirements.' },
                  { num: '3', title: 'Encrypted Communication', desc: 'All patient data transmitted through encrypted channels. No PHI in email, no exceptions.' },
                  { num: '4', title: 'Background Verification', desc: 'Checkr-verified identity, criminal history, and professional background for every VA. Non-negotiable.' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-teal-accent/15 flex items-center justify-center flex-shrink-0 font-serif text-teal-accent text-lg italic">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Stats Cards */}
            <div className="grid grid-cols-2 gap-4 h-fit lg:sticky lg:top-24">
              <div className="bg-white/6 backdrop-blur border border-white/8 rounded-2xl p-6 text-center">
                <div className="text-4xl font-serif text-teal-accent">100%</div>
                <div className="text-xs text-white/50 mt-2 font-medium">HIPAA Compliance Rate</div>
              </div>
              <div className="bg-white/6 backdrop-blur border border-white/8 rounded-2xl p-6 text-center lg:row-span-2 flex flex-col justify-center">
                <div className="text-5xl font-serif text-teal-accent">0</div>
                <div className="text-xs text-white/50 mt-2 font-medium">Data Breaches Since 2019</div>
              </div>
              <div className="bg-white/6 backdrop-blur border border-white/8 rounded-2xl p-6 text-center">
                <div className="text-4xl font-serif text-teal-accent">3+K</div>
                <div className="text-xs text-white/50 mt-2 font-medium">Clinics Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 px-8 lg:px-16 bg-warm-cream">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="section-label">Practice Specialties</div>
          <h2 className="section-title">VAs trained for your specialty.</h2>
          <p className="section-sub">Not generic admin. VAs who understand your specific clinical workflows, terminology, and compliance requirements.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {specialties.map((specialty, idx) => (
            <Link key={specialty.slug} href={`/specialties/${specialty.slug}`}>
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-sm-healthcare transition-all duration-300 border border-black/4 cursor-pointer h-full">
                <div className="text-lg font-bold text-teal-deep font-serif mb-3">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="font-bold text-teal-deep mb-2">{specialty.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-8 lg:px-16 bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="section-label justify-center">By the Numbers</div>
            <h2 className="section-title">Built for healthcare since 2019.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { num: '97%', label: 'Client Retention Rate' },
              { num: '48hr', label: 'Average VA Match Time' },
              { num: '3%', label: 'Top Applicants Hired' },
              { num: '$700', label: 'Starting Monthly Rate' },
            ].map((metric) => (
              <div key={metric.label}>
                <div className="font-serif text-5xl text-teal-deep mb-3">{metric.num}</div>
                <div className="text-sm text-text-muted font-medium mb-4">{metric.label}</div>
                <div className="h-0.5 bg-teal-accent w-10 mx-auto rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-8 lg:px-16 bg-gradient-to-b from-warm-cream to-warm-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative mb-8">
            <div className="text-6xl text-teal-accent/30 font-serif mb-2">"</div>
            <p className="font-serif text-2xl sm:text-3xl text-teal-deep leading-relaxed italic mb-8">
              Our doctors focus on patients now. The admin that was pulling them away from care is handled by professionals who understand healthcare workflows and compliance.
            </p>
          </div>
          <p className="font-semibold text-teal-deep">Multi-Specialty Clinic Administrator</p>
          <p className="text-sm text-text-muted">3+ Clinics Supported by Dr. Capital VA</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 lg:px-16 bg-teal-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-accent/10 to-transparent" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight mb-6">Your patients need your attention. Not your paperwork.</h2>
          <p className="text-lg text-white/70 mb-8 leading-relaxed">Book a free 15-minute strategy call. We'll assess your practice's needs and match you with a HIPAA-trained VA within 48 hours.</p>
          <Link href="/contact" className="btn-white">
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
