import doctors from "@/data/doctors.json";

export default function Team() {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            Experienced professionals dedicated to your dental health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Doctor Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-primary to-primary-blue">
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                  👨‍⚕️
                </div>
                {/* In production, replace with actual doctor images */}
                {/* <Image src={doctor.image} alt={doctor.name} fill className="object-cover" /> */}
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {doctor.name}
                </h3>
                <p className="text-primary-blue font-semibold mb-2">
                  {doctor.designation}
                </p>
                <p className="text-sm text-gray-600">
                  {doctor.qualifications}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
