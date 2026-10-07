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
          <article className="doc team-photo">
            <div className="team-photo-img">
              <Image
                src="/images/team/doctors-together.jpg"
                alt="Dr. R. Ragunathan and Dr. C. Pushya Mithra at Lotus Dental Care"
                width={1536}
                height={1024}
              />
            </div>
            <div className="doc-info duo">
              {doctors.map((doctor) => (
                <div className="person" key={doctor.id}>
                  <h3>{doctor.name}</h3>
                  <div className="role">{doctor.designation}</div>
                  <div className="q">{doctor.qualifications}</div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
