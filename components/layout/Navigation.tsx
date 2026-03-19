'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { services, specialties, regions, competitors } from '@/lib/healthcare-data';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Desktop/Tablet Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-100 px-8 lg:px-16 py-5 flex items-center justify-between transition-all duration-400 ${
          isScrolled
            ? 'bg-warm-white/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-teal-deep rounded-xl flex items-center justify-center">
            <span className="font-serif text-white text-2xl italic">D</span>
          </div>
          <div className="font-serif text-teal-deep text-xl tracking-tight hidden sm:block">
            Dr. Capital <span className="text-teal-light">VA</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 items-center ml-auto">
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-text-secondary hover:text-teal-deep text-sm font-medium transition-colors">
              Services
            </button>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white rounded-2xl shadow-lg-healthcare p-6 min-w-max">
                <div className="grid grid-cols-3 gap-6">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="text-sm font-semibold text-teal-deep hover:text-teal-accent transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Specialties Dropdown */}
          <div className="relative group">
            <button className="text-text-secondary hover:text-teal-deep text-sm font-medium transition-colors">
              Specialties
            </button>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white rounded-2xl shadow-lg-healthcare p-6 min-w-max">
                <div className="grid grid-cols-2 gap-6">
                  {specialties.map((specialty) => (
                    <Link
                      key={specialty.slug}
                      href={`/specialties/${specialty.slug}`}
                      className="text-sm font-semibold text-teal-deep hover:text-teal-accent transition-colors"
                    >
                      {specialty.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Dropdown */}
          <div className="relative group">
            <button className="text-text-secondary hover:text-teal-deep text-sm font-medium transition-colors">
              Compliance
            </button>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white rounded-2xl shadow-lg-healthcare p-6 min-w-max">
                <Link
                  href="/compliance/hipaa"
                  className="block text-sm font-semibold text-teal-deep hover:text-teal-accent transition-colors mb-3"
                >
                  HIPAA Compliance
                </Link>
                <Link
                  href="/compliance/vetting-process"
                  className="block text-sm font-semibold text-teal-deep hover:text-teal-accent transition-colors mb-3"
                >
                  Vetting Process
                </Link>
                <Link
                  href="/compliance/security"
                  className="block text-sm font-semibold text-teal-deep hover:text-teal-accent transition-colors"
                >
                  Security & Data
                </Link>
              </div>
            </div>
          </div>

          {/* Locations Dropdown */}
          <div className="relative group">
            <button className="text-text-secondary hover:text-teal-deep text-sm font-medium transition-colors">
              Locations
            </button>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white rounded-2xl shadow-lg-healthcare p-6 min-w-max">
                {regions.map((region) => (
                  <Link
                    key={region.slug}
                    href={`/locations/${region.slug}`}
                    className="block text-sm font-semibold text-teal-deep hover:text-teal-accent transition-colors mb-2"
                  >
                    {region.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/pricing" className="text-text-secondary hover:text-teal-deep text-sm font-medium transition-colors">
            Pricing
          </Link>

          <Link
            href="/contact"
            className="px-7 py-3 bg-teal-deep text-white text-sm font-bold tracking-widest uppercase rounded-full transition-all hover:bg-teal-mid hover:-translate-y-0.5"
          >
            Book Strategy Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 ml-auto"
        >
          <div className={`h-0.5 w-6 bg-teal-deep transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`h-0.5 w-6 bg-teal-deep transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <div className={`h-0.5 w-6 bg-teal-deep transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-warm-white z-40 overflow-y-auto pt-4">
          <div className="px-6 pb-20 space-y-1">
            {/* Services */}
            <div>
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className="w-full text-left py-3 font-semibold text-teal-deep flex items-center justify-between"
              >
                Services
                <span className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {activeDropdown === 'services' && (
                <div className="pl-4 space-y-2 pb-3">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={closeMenus}
                      className="block py-2 text-text-secondary hover:text-teal-deep text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Specialties */}
            <div>
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'specialties' ? null : 'specialties')}
                className="w-full text-left py-3 font-semibold text-teal-deep flex items-center justify-between"
              >
                Specialties
                <span className={`transition-transform ${activeDropdown === 'specialties' ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {activeDropdown === 'specialties' && (
                <div className="pl-4 space-y-2 pb-3">
                  {specialties.map((specialty) => (
                    <Link
                      key={specialty.slug}
                      href={`/specialties/${specialty.slug}`}
                      onClick={closeMenus}
                      className="block py-2 text-text-secondary hover:text-teal-deep text-sm"
                    >
                      {specialty.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Compliance */}
            <div>
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'compliance' ? null : 'compliance')}
                className="w-full text-left py-3 font-semibold text-teal-deep flex items-center justify-between"
              >
                Compliance
                <span className={`transition-transform ${activeDropdown === 'compliance' ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {activeDropdown === 'compliance' && (
                <div className="pl-4 space-y-2 pb-3">
                  <Link
                    href="/compliance/hipaa"
                    onClick={closeMenus}
                    className="block py-2 text-text-secondary hover:text-teal-deep text-sm"
                  >
                    HIPAA Compliance
                  </Link>
                  <Link
                    href="/compliance/vetting-process"
                    onClick={closeMenus}
                    className="block py-2 text-text-secondary hover:text-teal-deep text-sm"
                  >
                    Vetting Process
                  </Link>
                  <Link
                    href="/compliance/security"
                    onClick={closeMenus}
                    className="block py-2 text-text-secondary hover:text-teal-deep text-sm"
                  >
                    Security & Data
                  </Link>
                </div>
              )}
            </div>

            {/* Locations */}
            <div>
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'locations' ? null : 'locations')}
                className="w-full text-left py-3 font-semibold text-teal-deep flex items-center justify-between"
              >
                Locations
                <span className={`transition-transform ${activeDropdown === 'locations' ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {activeDropdown === 'locations' && (
                <div className="pl-4 space-y-2 pb-3">
                  {regions.map((region) => (
                    <Link
                      key={region.slug}
                      href={`/locations/${region.slug}`}
                      onClick={closeMenus}
                      className="block py-2 text-text-secondary hover:text-teal-deep text-sm"
                    >
                      {region.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              onClick={closeMenus}
              className="block py-3 font-semibold text-teal-deep"
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              onClick={closeMenus}
              className="block py-4 px-4 bg-teal-deep text-white text-sm font-bold tracking-widest uppercase rounded-full text-center"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
