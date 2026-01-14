import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lotus Dental Care</h3>
            <p className="text-gray-300 mb-4">
              Providing comprehensive dental care with state-of-the-art technology and a patient-first approach.
              Your smile is our passion, your health is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-blue transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-primary-blue transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-primary-blue transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-primary-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-primary-blue transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-300 hover:text-primary-blue transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-300 hover:text-primary-blue transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-primary-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1">📍</span>
                <span>[Clinic Address]<br />[City, State - PIN]</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+911234567890" className="hover:text-primary-blue transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@lotusdentalcare.com" className="hover:text-primary-blue transition-colors">
                  info@lotusdentalcare.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span>Mon - Sat: 9:00 AM - 8:00 PM<br />Sun: 10:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-300">
              <p className="font-semibold mb-2">Certified & Accredited</p>
              <div className="flex gap-4">
                <span className="bg-white text-primary px-3 py-1 rounded text-xs font-bold">AERB</span>
                <span className="bg-white text-primary px-3 py-1 rounded text-xs font-bold">CEA</span>
                <span className="bg-white text-primary px-3 py-1 rounded text-xs font-bold">Fire Safety</span>
              </div>
            </div>
            <div className="text-sm text-gray-300 text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Lotus Dental Care. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
