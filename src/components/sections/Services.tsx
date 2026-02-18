import Link from "next/link";
import services from "@/data/services.json";

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Dental Services
          </h2>
          <p className="text-xl text-gray-300">
            We are always happy to provide you our best services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group p-6 flex flex-col items-center text-center"
            >
              {/* Service Icon */}
              <div className="w-20 h-20 rounded-xl overflow-hidden mb-4">
                <img
                  src="/images/tooth-icon.png"
                  alt="Dental Service"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-primary-blue transition-colors">
                {service.title}
              </h3>

              {/* Read More Button */}
              <Link
                href={`/services/${service.slug}`}
                className="border-2 border-primary-blue text-primary-blue px-6 py-2 rounded-md hover:bg-primary-blue hover:text-white transition-colors font-medium text-sm"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-primary transition-colors font-semibold"
          >
            VIEW ALL
          </a>
        </div>
      </div>
    </section>
  );
}
