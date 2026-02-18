export default function Gallery() {
  const images = [
    {
      src: "/images/gallery/gallery1.jpg",
      caption: "Patient Waiting Lounge",
      description: "A comfortable, welcoming space for our patients",
    },
    {
      src: "/images/gallery/gallery2.jpg",
      caption: "Treatment Room 1",
      description: "Fully equipped with modern dental technology",
    },
    {
      src: "/images/gallery/gallery3.jpg",
      caption: "Treatment Room 2",
      description: "State-of-the-art equipment for precise care",
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Take a Look Inside Our Clinic
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A clean, modern and welcoming environment designed with your comfort in mind
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-400 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-1">
                  {image.caption}
                </h3>
                <p className="text-blue-100 text-sm">
                  {image.description}
                </p>
              </div>

              {/* Always-visible caption bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-primary/80 group-hover:opacity-0 transition-opacity duration-300 px-4 py-3">
                <p className="text-white text-sm font-semibold text-center">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
