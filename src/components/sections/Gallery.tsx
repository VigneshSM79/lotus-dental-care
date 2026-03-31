import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/gallery/d1.webp", alt: "Lotus Dental reception and waiting area", width: 1200, height: 900 },
    { src: "/images/gallery/d2.webp", alt: "Spacious waiting lounge with modern interiors", width: 1200, height: 1600 },
    { src: "/images/gallery/d3.webp", alt: "Lotus Dental doctors and specialists board", width: 1200, height: 1600 },
    { src: "/images/gallery/d5.webp", alt: "Child-friendly dental treatment room", width: 1200, height: 1600 },
    { src: "/images/gallery/d6.webp", alt: "Treatment room with calming galaxy ceiling art", width: 1200, height: 1600 },
    { src: "/images/gallery/d7.webp", alt: "Fully equipped dental treatment room", width: 1200, height: 1600 },
    { src: "/images/gallery/d8.webp", alt: "Treatment room with nature-themed ceiling", width: 1200, height: 1600 },
    { src: "/images/gallery/d9.webp", alt: "Modern dental treatment room with advanced equipment", width: 1200, height: 1600 },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Take a Look Inside Our Clinic
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A clean, modern and welcoming environment designed with your comfort in mind
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-4">
          {[0, 2, 4, 6].map((startIndex) => (
            <div key={startIndex} className="grid grid-cols-2 gap-4">
              {images.slice(startIndex, startIndex + 2).map((image, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-[250px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                    priority={startIndex === 0}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
