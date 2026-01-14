import services from "@/data/services.json";

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Dental Services
          </h2>
          <p className="text-xl text-gray-600">
            We are always happy to provide you our best services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Service Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary to-primary-blue overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-50">
                  🦷
                </div>
                {/* In production, replace with actual images */}
                {/* <Image src={service.image} alt={service.title} fill className="object-cover" /> */}
              </div>

              {/* Service Title */}
              <div className="p-4 border-l-4 border-primary-blue">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-blue transition-colors">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block border-2 border-primary-blue text-primary-blue px-8 py-3 rounded-md hover:bg-primary-blue hover:text-white transition-colors font-semibold"
          >
            VIEW ALL
          </a>
        </div>
      </div>
    </section>
  );
}
