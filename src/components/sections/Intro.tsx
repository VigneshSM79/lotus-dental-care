export default function Intro() {
  return (
    <section className="hero">
      <img
        className="bg"
        src="/images/gallery/d1.png"
        alt="Lotus Dental Care clinic in Ayapakkam, Chennai"
      />
      <div className="scrim"></div>
      <div className="wrap">
        <span className="eyebrow">Multispeciality dental care · Ayapakkam, Chennai</span>
        <h1>A healthier, more confident smile starts here.</h1>
        <p>
          From routine check-ups to root canals, implants and smile makeovers —
          specialist care in one calm, modern clinic with the latest technology
          and a gentle, patient-first team.
        </p>
        <div className="cta">
          <a className="btn btn-gold" href="#contact">
            Book appointment
          </a>
          <a className="btn btn-ghost on-dark" href="#services">
            Explore services
          </a>
        </div>
        <div className="rating">
          <span className="stars">★★★★★</span> Rated 5.0 by our patients on Google
        </div>
      </div>
    </section>
  );
}
