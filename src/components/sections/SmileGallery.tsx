"use client";

import { useState } from "react";

export default function SmileGallery() {
  const [value, setValue] = useState(50);

  const features = [
    "Digital smile preview before treatment starts",
    "Tooth-coloured, natural-looking results",
    "Whitening · veneers · alignment · makeovers",
  ];

  return (
    <section className="sec" id="smile" style={{ background: "#fff" }}>
      <div className="wrap">
        <div className="ba">
          <div className="copy">
            <span className="eyebrow">Smile gallery</span>
            <h2 style={{ fontSize: "clamp(28px,3.4vw,42px)", marginTop: 12 }}>
              See the difference, before you decide
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 14 }}>
              Drag the slider to reveal real smile transformations — from whitening
              and veneers to full smile makeovers, planned and previewed before we begin.
            </p>
            <div className="feat">
              {features.map((f) => (
                <div key={f}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m5 12 5 5 9-11" />
                  </svg>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 26 }}>
              <a className="btn btn-gold" href="#contact">
                Book a smile consult
              </a>
            </div>
          </div>

          <div>
            <div className="slider">
              <img
                className="before"
                src="/images/smile/before.webp"
                alt="Patient's smile before treatment — gapped and uneven teeth"
              />
              <img
                className="after"
                src="/images/smile/after.webp"
                alt="Patient's smile after treatment — even, natural white teeth"
                style={{ clipPath: `inset(0 0 0 ${value}%)` }}
              />
              <span className="lbl b">Before</span>
              <span className="lbl a">After</span>
              <div className="divider" style={{ left: `${value}%` }}></div>
              <div className="knob" style={{ left: `${value}%` }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
                </svg>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                aria-label="Reveal after image"
              />
            </div>
            <p className="note">
              A real smile transformation at Lotus Dental Care — drag the slider to compare.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
