import Image from "next/image";
import doctors from "@/data/doctors.json";

export default function Team() {
  return (
    <section className="sec panel" id="team">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">Meet your dentists</span>
          <h2>Experienced hands you can trust</h2>
        </div>
        <div className="team">
          <div className="grid">
            {doctors.map((doctor) => (
              <article className="doc" key={doctor.id}>
                <div className="doc-photo">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name}, ${doctor.designation}`}
                    width={800}
                    height={1000}
                  />
                </div>
                <div className="doc-info">
                  <h3>{doctor.name}</h3>
                  <div className="role">{doctor.designation}</div>
                  <div className="q">{doctor.qualifications}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
