import Link from "next/link";

export default function GeneralDentistry() {
  const services = [
    {
      title: "Tooth Filling",
      image: "/images/services/general-dentistry/filling.jpg",
      description:
        "During filling procedures, dentists clean away the decay inside the cavity, usually with a drill, before filling it in. Removing the decay prevents further damage, but it doesn't fix the damage to the tooth that already occurred. That's where fillings come in.",
    },
    {
      title: "Tooth Scaling",
      image: "/images/services/general-dentistry/scaling.jpg",
      description:
        "Dental scaling is routinely performed to help patients with gum disease and excessive plaque buildup. While a standard cleaning will address the surface of the tooth, scaling goes much deeper. If your dentist suggests dental scaling and root planing for your teeth, it's helpful to know what this means so you can prepare for what's ahead. Scaling is a common dental procedure for patients with gum disease. This is a type of dental cleaning that reaches below the gumline to remove plaque buildup. The process of scaling and root planing the teeth is often referred to as a deep cleaning.",
    },
    {
      title: "Polishing",
      image: "/images/services/general-dentistry/polishing.jpg",
      description:
        "Tooth polishing is done to smooth the surfaces of teeth and restorations. The purpose of polishing is to remove extrinsic stains, remove dental plaque accumulation, increase aesthetics and to reduce corrosion of metallic restorations. Tooth polishing has little therapeutic value and is usually done as a cosmetic procedure after debridement and before fluoride application.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              General Dentistry
            </h1>
            <p className="text-lg text-gray-200">
              Comprehensive dental care for your everyday oral health needs
            </p>
          </div>
        </div>
      </section>


      {/* Services Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Intro Image */}
            <div className="flex justify-center mb-12">
              <img
                src="/images/services/general-dentistry.jpg"
                alt="General Dentistry at Lotus Dental Care"
                className="rounded-lg w-full max-w-lg h-auto"
              />
            </div>

            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col md:flex-row gap-8 mb-16 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg w-full h-64 md:h-80 object-cover"
                    />
                  ) : (
                    <div className="bg-gradient-to-br from-primary to-primary-blue rounded-lg h-64 md:h-80 flex items-center justify-center">
                      <div className="text-center text-white">
                        <svg
                          className="w-16 h-16 mx-auto mb-2 opacity-50"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.7 2.8 1.8 3.7-.3.2-.5.4-.8.6-1.1.8-1.8 2-2.2 3.3-.4 1.5-.3 3 .3 4.4.5 1.2 1.4 2.2 2.5 2.9 1 .6 2.2.9 3.4.9s2.4-.3 3.4-.9c1.1-.7 2-1.7 2.5-2.9.6-1.4.7-2.9.3-4.4-.4-1.3-1.1-2.5-2.2-3.3-.3-.2-.5-.4-.8-.6 1.1-.9 1.8-2.2 1.8-3.7C16.5 4 14.5 2 12 2z" />
                        </svg>
                        <p className="text-sm opacity-75">Image coming soon</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="md:w-1/2 flex flex-col justify-start">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Take Care of Your Dental Health?
              </h3>
              <p className="text-gray-600 mb-6">
                Book an appointment with our experienced dental team today.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-primary-blue text-white px-8 py-3 rounded-md hover:bg-accent transition-colors font-semibold"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Back to Services */}
          <div className="max-w-4xl mx-auto text-center mt-8">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-primary-blue hover:underline font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
