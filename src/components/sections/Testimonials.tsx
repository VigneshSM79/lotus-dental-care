import testimonials from "@/data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="sec reviews">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">Patient stories</span>
          <h2>What our patients say</h2>
        </div>
        <div className="rev-grid">
          {testimonials.map((t) => (
            <div className="rev" key={t.id}>
              <div className="stars">{"★".repeat(t.rating)}</div>
              <p>&ldquo;{t.review}&rdquo;</p>
              <div className="who">
                <b>{t.occupation}</b>
                Verified patient
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
