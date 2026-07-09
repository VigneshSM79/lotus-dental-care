import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <span className="name">
              LOTUS <b>DENTAL CARE</b>
            </span>
            <div style={{ letterSpacing: "0.2em", textTransform: "uppercase", fontSize: 10, margin: "6px 0 14px", color: "#8c9bb5" }}>
              Multispeciality
            </div>
            <p style={{ maxWidth: "34ch" }}>
              LIG Phase I &amp; II, Plot No:1853 TNHB, Ayapakkam, Chennai 600077
            </p>
            <div className="badges">
              <span className="badge">AERB</span>
              <span className="badge">CEA</span>
              <span className="badge">Fire Safety</span>
            </div>
          </div>

          <div>
            <h4>Visit</h4>
            <a href="tel:+917200849216">7200849216</a>
            <a href="mailto:lotusdentists@gmail.com">lotusdentists@gmail.com</a>
            <span style={{ display: "block", padding: "4px 0" }}>Mon–Sat · 10–1 &amp; 5–9</span>
          </div>

          <div>
            <h4>Care</h4>
            <Link href="/services/root-canal-treatment">Root canal</Link>
            <Link href="/services/orthodontics">Orthodontics</Link>
            <Link href="/services/tooth-replacement">Implants &amp; replacement</Link>
            <Link href="/services/cosmetic-dentistry">Smile makeover</Link>
          </div>
        </div>

        <div className="bottom">
          <span>&copy; {new Date().getFullYear()} Lotus Dental Care. All rights reserved.</span>
          <span>Ayapakkam, Chennai · Multispeciality Dental Clinic</span>
        </div>
      </div>
    </footer>
  );
}
