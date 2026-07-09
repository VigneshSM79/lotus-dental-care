export default function WhyChooseUs() {
  const features = [
    {
      title: "Specialist team",
      description:
        "Skilled, highly-qualified doctors keeping pace with contemporary dentistry across every speciality.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Modern & painless",
      description:
        "Laser dentistry and the latest equipment make treatment quick, comfortable and stress-free.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
    },
    {
      title: "Patient-first comfort",
      description:
        "Clear explanations, strict hygiene and a calm ambience that puts even anxious patients at ease.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="sec panel why">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">Why patients choose us</span>
          <h2>Dentistry that feels calm and careful</h2>
        </div>
        <div className="grid">
          {features.map((f) => (
            <div className="item" key={f.title}>
              <div className="ic">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
