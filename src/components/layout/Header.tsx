"use client";

import { useState } from "react";
import Link from "next/link";
import AboutUsModal from "../sections/AboutUsModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#", isModal: true },
    { name: "Services", href: "#services" },
    { name: "Our Team", href: "#team" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-6">
              <a href="tel:+917200849216" className="flex items-center gap-1 text-black hover:text-primary-blue">
                <svg className="w-4 h-4 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                7200849216
              </a>
              <a
                href="mailto:info@lotusdentalcare.com"
                className="inline-flex items-center gap-2 text-black hover:text-primary-blue hidden md:inline-flex"
              >
                <svg className="w-4 h-4 text-primary-blue inline" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                info@lotusdentalcare.com
              </a>
              <span className="flex items-center gap-2 text-black hidden lg:flex">
                <svg className="w-4 h-4 text-primary-blue" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9"/>
                  <path strokeLinecap="round" d="M12 7v5l3.5 2"/>
                </svg>
                10.00 am to 1.00 pm | 5.00 pm to 9.00 pm
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              <span className="text-primary">LOTUS</span>{" "}
              <span className="text-primary-blue">DENTAL CARE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.isModal ? (
                <button
                  key={item.name}
                  onClick={() => setAboutModalOpen(true)}
                  className="text-gray-700 hover:text-primary-blue transition-colors font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-blue transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Book Appointment Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-accent transition-colors font-medium"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                item.isModal ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setAboutModalOpen(true);
                    }}
                    className="text-gray-700 hover:text-primary-blue transition-colors font-medium text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-blue transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <a
                href="#contact"
                className="bg-primary-blue text-white px-6 py-2 rounded-md hover:bg-accent transition-colors font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* About Us Modal */}
      <AboutUsModal isOpen={aboutModalOpen} onClose={() => setAboutModalOpen(false)} />
    </header>
  );
}
