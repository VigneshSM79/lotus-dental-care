export default function Hero() {
  return (
    <div>
      {/* Top: Full-width sharp image */}
      <div className="pt-24">
        <div className="w-full h-[65vh] overflow-hidden">
          <img
            src="/images/hero-bg.jpg"
            alt="Lotus Dental Care Clinic"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Bottom: Headline + CTA */}
      <div className="py-14">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Smile, Our Passion
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Providing comprehensive dental care with state-of-the-art technology
            and a team of highly qualified professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-primary-blue px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-primary-blue transition-colors font-semibold text-lg"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
