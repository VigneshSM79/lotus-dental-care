"use client";

import { useState } from "react";
import Link from "next/link";
import AboutUsModal from "../sections/AboutUsModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#", isModal: true },
    { name: "Services", href: "#services" },
    { name: "Smile Gallery", href: "#smile" },
    { name: "Our Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Main header */}
      <header className="site-header">
        <div className="wrap">
          <Link className="brand" href="/">
            <img className="logo" src="/images/logo.jpg" alt="Lotus Dental Care logo" />
            <span className="name">
              LOTUS <b>DENTAL CARE</b>
              <small>Multispeciality</small>
            </span>
          </Link>

          <nav className="main">
            {navItems.map((item) =>
              item.isModal ? (
                <button key={item.name} onClick={() => setAboutModalOpen(true)}>
                  {item.name}
                </button>
              ) : (
                <Link key={item.name} href={item.href}>
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="header-right">
            <a className="ph" href="tel:+917200849216">
              7200849216
              <small>Call us today</small>
            </a>
            <a className="btn btn-gold" href="#contact">
              Book appointment
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="menu-btn"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="wrap">
              {navItems.map((item) =>
                item.isModal ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setAboutModalOpen(true);
                    }}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                )
              )}
              <a className="btn btn-gold" href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ justifyContent: "center" }}>
                Book appointment
              </a>
            </div>
          </div>
        )}
      </header>

      <AboutUsModal isOpen={aboutModalOpen} onClose={() => setAboutModalOpen(false)} />
    </>
  );
}
