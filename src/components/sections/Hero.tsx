export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-primary to-primary-blue mt-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your Smile, Our Passion
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Providing comprehensive dental care with state-of-the-art technology
          and a team of highly qualified professionals
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white text-primary px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-primary transition-colors font-semibold text-lg"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Note: In production, replace this with an actual hero image */}
      <div className="absolute inset-0 bg-[url('/images/hero-placeholder.jpg')] bg-cover bg-center mix-blend-overlay"></div>
    </section>
  );
}
