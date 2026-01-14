"use client";

import { useState } from "react";
import testimonials from "@/data/testimonials.json";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative bg-primary text-white py-16">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-blue opacity-95"></div>

      <div className="relative container mx-auto px-4 z-10">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-wider">
          PATIENT TESTIMONIALS
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Content */}
          <div className="text-center mb-8">
            <div className="mb-6">
              <span className="text-6xl text-primary-blue">&ldquo;</span>
            </div>
            <p className="text-lg md:text-xl leading-relaxed mb-8 italic px-4">
              {currentTestimonial.review}
            </p>
            <div className="flex justify-center mb-2">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">
                  ★
                </span>
              ))}
            </div>
            <p className="text-lg font-semibold tracking-wider">
              {currentTestimonial.name.toUpperCase()}
            </p>
            <p className="text-sm text-gray-300">
              ({currentTestimonial.occupation})
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={prevTestimonial}
              className="text-white hover:text-primary-blue transition-colors text-3xl"
              aria-label="Previous testimonial"
            >
              ‹
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-white w-8"
                      : "bg-gray-400 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="text-white hover:text-primary-blue transition-colors text-3xl"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
