import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/gallery/clinic-outlook.webp", alt: "Lotus Dental Care clinic building exterior in Ayapakkam, Chennai", width: 1200, height: 821 },
    { src: "/images/gallery/d1.webp", alt: "Lotus Dental reception and waiting area", width: 1200, height: 900 },
    { src: "/images/gallery/dd10.webp", alt: "Lotus Dental waiting lounge with sofa seating", width: 1200, height: 901 },
    { src: "/images/gallery/d2.webp", alt: "Spacious waiting lounge with modern interiors", width: 1200, height: 1600 },
    { src: "/images/gallery/d5.webp", alt: "Child-friendly dental treatment room", width: 1200, height: 1600 },
    { src: "/images/gallery/d6.webp", alt: "Treatment room with calming galaxy ceiling art", width: 1200, height: 1600 },
    { src: "/images/gallery/d7.webp", alt: "Fully equipped dental treatment room", width: 1200, height: 1600 },
    { src: "/images/gallery/d8.webp", alt: "Treatment room with nature-themed ceiling", width: 1200, height: 1600 },
    { src: "/images/gallery/d9.webp", alt: "Modern dental treatment room with advanced equipment", width: 1200, height: 1600 },
    { src: "/images/gallery/d3.webp", alt: "Lotus Dental doctors and specialists board", width: 1200, height: 1600 },
    { src: "/images/gallery/parking.webp", alt: "Dedicated patient car and two-wheeler parking at Lotus Dental Care", width: 1200, height: 900 },
  ];

  return (
    <section className="sec" id="gallery">
      <div className="wrap">
        <div className="head">
          <span className="eyebrow">Our clinic</span>
          <h2>A calm, modern space built for comfort</h2>
          <p>
            Clean, welcoming interiors and fully-equipped treatment rooms designed
            to put you at ease from the moment you arrive.
          </p>
        </div>
        <div className="gal-grid">
          {images.map((image, i) => (
            <div className="cell" key={i}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority={i < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
