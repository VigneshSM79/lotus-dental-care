"use client";

import { useEffect, useRef, useState } from "react";

export default function ClinicTour() {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  // Only fetch the ~11MB clip once the section is near the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Once the source is attached, load + autoplay (muted autoplay is allowed).
  useEffect(() => {
    if (load) ref.current?.load();
  }, [load]);

  return (
    <section className="sec clinic-tour" id="tour">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">Our neighbourhood</span>
          <h2>Right in the heart of Ayapakkam, Chennai</h2>
          <p>
            Easy to reach, with parking on site — take a quick look at where
            you&apos;ll find us.
          </p>
        </div>
        <div className="frame">
          <video
            ref={ref}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/gallery/clinic-tour-poster.jpg"
          >
            {load && <source src="/hero.mp4" type="video/mp4" />}
          </video>
        </div>
      </div>
    </section>
  );
}
