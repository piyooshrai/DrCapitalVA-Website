'use client';

import Link from 'next/link';
import { services, specialties, regions, competitors } from '@/lib/healthcare-data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal-deep rounded-lg flex items-center justify-center">
                <span className="font-serif text-white text-xl italic">D</span>
              </div>
              <h3 className="font-serif text-lg text-white">Dr. Capital VA</h3>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              HIPAA-compliant virtual assistants for healthcare practices. A division of The Human Capital — dedicated VA services since 2019.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/50">
                Part of <a href="https://thehuman.capital" target="_blank" rel="noopener noreferrer" className="text-teal-accent hover:underline">The Human Capital</a>
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white/30 mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 hover:text-teal-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties Column */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white/30 mb-4">Specialties</h4>
            <ul className="space-y-3">
              {specialties.slice(0, 6).map((specialty) => (
                <li key={specialty.slug}>
                  <Link
                    href={`/specialties/${specialty.slug}`}
                    className="text-sm text-white/60 hover:text-teal-accent transition-colors"
                  >
                    {specialty.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white/30 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/pricing" className="text-sm text-white/60 hover:text-teal-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/60 hover:text-teal-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-white/60 hover:text-teal-accent transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/60 hover:text-teal-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/60 hover:text-teal-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/hipaa-checklist" className="text-sm text-white/60 hover:text-teal-accent transition-colors">
                  HIPAA Checklist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="mb-12 pb-12 border-t border-white/10">
          <h4 className="text-xs font-bold tracking-wider uppercase text-white/30 mb-6">Locations</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
              <div key={region.slug}>
                <Link
                  href={`/locations/${region.slug}`}
                  className="text-sm font-semibold text-white hover:text-teal-accent transition-colors block mb-3"
                >
                  {region.name}
                </Link>
                <ul className="space-y-2">
                  {region.cities.slice(0, 3).map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/locations/${region.slug}/${city.slug}`}
                        className="text-xs text-white/50 hover:text-teal-accent transition-colors"
                      >
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Links */}
        <div className="mb-12 pb-12 border-t border-white/10">
          <h4 className="text-xs font-bold tracking-wider uppercase text-white/30 mb-4">Compliance</h4>
          <div className="flex flex-wrap gap-6">
            <Link href="/compliance/hipaa" className="text-sm text-white/60 hover:text-teal-accent transition-colors">
              HIPAA Compliance
            </Link>
            <Link href="/compliance/vetting-process" className="text-sm text-white/60 hover:text-teal-accent transition-colors">
              Vetting Process
            </Link>
            <Link href="/compliance/security" className="text-sm text-white/60 hover:text-teal-accent transition-colors">
              Security & Data Protection
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>&copy; {currentYear} Dr. Capital VA. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
