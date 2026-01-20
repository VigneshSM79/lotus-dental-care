import Link from "next/link";
import services from "@/data/services.json";

export default function Services() {
  return (
    <section id="services" className="py-16 bg-primary">
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
              <div className="w-20 h-20 bg-primary-blue rounded-xl flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.7 2.8 1.8 3.7-.3.2-.5.4-.8.6-1.1.8-1.8 2-2.2 3.3-.4 1.5-.3 3 .3 4.4.5 1.2 1.4 2.2 2.5 2.9 1 .6 2.2.9 3.4.9s2.4-.3 3.4-.9c1.1-.7 2-1.7 2.5-2.9.6-1.4.7-2.9.3-4.4-.4-1.3-1.1-2.5-2.2-3.3-.3-.2-.5-.4-.8-.6 1.1-.9 1.8-2.2 1.8-3.7C16.5 4 14.5 2 12 2zm0 2c1.4 0 2.5 1.1 2.5 2.5S13.4 9 12 9s-2.5-1.1-2.5-2.5S10.6 4 12 4z"/>
                  <circle cx="9" cy="6" r="1" fill="white" opacity="0.5"/>
                </svg>
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
