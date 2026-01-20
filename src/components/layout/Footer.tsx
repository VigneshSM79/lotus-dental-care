export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-3">Lotus Dental Care</h3>
            <p className="text-gray-300 text-sm">
              Providing comprehensive dental care with state-of-the-art technology and a patient-first approach.
              Your smile is our passion, your health is our priority.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>LIG Phase I & II, Plot No:1853 TNHB, Ayapakkam, Chennai - 600077</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+917200849216" className="hover:text-primary-blue transition-colors">
                  7200849216
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:info@lotusdentalcare.com" className="hover:text-primary-blue transition-colors">
                  info@lotusdentalcare.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Mon - Sat: 10:00 AM - 1:00 PM | 5:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-xs text-gray-300">
              <div className="flex gap-3">
                <span className="bg-white text-primary px-2 py-0.5 rounded text-xs font-bold">AERB</span>
                <span className="bg-white text-primary px-2 py-0.5 rounded text-xs font-bold">CEA</span>
                <span className="bg-white text-primary px-2 py-0.5 rounded text-xs font-bold">Fire Safety</span>
              </div>
            </div>
            <div className="text-xs text-gray-300 text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Lotus Dental Care. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
