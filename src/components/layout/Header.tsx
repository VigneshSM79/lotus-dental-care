"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
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
              <a href="tel:+911234567890" className="hover:text-primary-blue">
                📞 +91 123 456 7890
              </a>
              <a
                href="mailto:info@lotusdentalcare.com"
                className="hover:text-primary-blue hidden md:block"
              >
                ✉️ info@lotusdentalcare.com
              </a>
            </div>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary-blue">
                Facebook
              </a>
              <a href="#" className="hover:text-primary-blue">
                Instagram
              </a>
              <a href="#" className="hover:text-primary-blue">
                Twitter
              </a>
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
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-blue transition-colors font-medium"
              >
                {item.name}
              </Link>
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
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-blue transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
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
    </header>
  );
}
