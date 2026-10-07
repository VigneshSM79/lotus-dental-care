import testimonials from "@/data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="sec reviews">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">Patient stories</span>
          <h2>What our patients say</h2>
          <a
            className="google-rating"
            href="https://share.google/PMp4Lnaa4TFAwXnye"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="stars">★★★★★</span>
            <b>5.0</b> on Google &middot; 22 reviews &middot; See all reviews
          </a>
        </div>
        <div className="rev-grid">
          {testimonials.map((t) => (
            <div className="rev" key={t.id}>
              <div className="stars">{"★".repeat(t.rating)}</div>
              <p>&ldquo;{t.review}&rdquo;</p>
              <div className="who">
                <b>{t.name}</b>
                {t.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
