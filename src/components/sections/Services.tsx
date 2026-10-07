import Link from "next/link";
import services from "@/data/services.json";

export default function Services() {
  return (
    <section className="sec" id="services" style={{ background: "#fff" }}>
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">What we do</span>
          <h2>Comprehensive care, under one roof</h2>
          <p>
            Every speciality your family needs — delivered with modern equipment
            and a gentle approach.
          </p>
        </div>

        <div className="grid-svc">
          {services.map((service) => (
            <article className="card" key={service.id}>
              <div className="ph">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="b">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link className="more" href={`/services/${service.slug}`}>
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
