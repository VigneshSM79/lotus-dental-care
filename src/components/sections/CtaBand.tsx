export default function CtaBand() {
  return (
    <section className="ctaband">
      <div className="wrap">
        <h2>Ready to care for your smile?</h2>
        <p>
          Book an appointment in seconds — call us, message on WhatsApp, or request
          a time online.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn btn-navy" href="https://wa.me/917200849216" target="_blank" rel="noopener noreferrer">
            Book via WhatsApp
          </a>
          <a className="btn btn-ghost on-dark" href="tel:+917200849216">
            Call 7200849216
          </a>
        </div>
      </div>
    </section>
  );
}
