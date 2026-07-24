import Link from "next/link";
import ToothBullet from "@/components/ui/ToothBullet";
import ServiceVideo from "@/components/ui/ServiceVideo";

export default function ChildDentistry() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Child Dentistry
            </h1>
            <p className="text-lg text-gray-200">
              Gentle, friendly dental care designed especially for children
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-primary-blue border-b-2 border-accent pb-2 mb-6 inline-block">
              Child Dentistry
            </h2>

            {/* Introduction */}
            <p className="text-gray-600 leading-relaxed mb-12">
              Child dentistry, also known as pediatric dentistry, is the branch of dentistry dealing with children from birth through adolescence. It focuses on the oral health of young patients and addresses the unique dental needs that arise during childhood and teenage years. Studies show that approximately 30% of the population has teeth misalignment severe enough to warrant orthodontic intervention, making early dental care essential for a healthy smile throughout life.
            </p>

            {/* Image */}
            <div className="flex justify-center mb-10">
              <img
                src="/images/services/child-dentistry.jpg"
                alt="Child Dentistry"
                className="rounded-lg w-full max-w-lg h-auto"
              />
            </div>

            {/* Procedure Video */}
            <ServiceVideo
              src="/videos/child-dentistry.mp4"
              title="Child Dentistry"
              vertical
            />

            {/* Orthodontic Treatment */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Orthodontic Treatment
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Orthodontic treatment involves the use of dental braces and appliances to gradually reposition teeth and jaws over a period of several months to years. In more severe cases, jaw surgery may be required. Treatment is most effective when started before adulthood, as children&apos;s bones are still developing and respond more readily to repositioning forces. Early intervention can prevent more complex problems later in life.
            </p>

            {/* Pulpotomy / Stainless Steel Crowns */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Pulpotomy / Stainless Steel Crowns
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              A pulpotomy is the removal of a portion of the pulp, including the diseased aspect, with the intent of maintaining the vitality of the remaining pulpal tissue. This procedure is commonly performed on primary (baby) teeth to relieve pain and save the tooth until it naturally falls out. Following a pulpotomy, a stainless steel crown is often placed to protect the treated tooth, restoring its function and preventing further damage.
            </p>

            {/* Space Maintainers */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Space Maintainers
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              When a child loses a primary tooth early due to decay or injury, neighboring teeth can shift into the empty space. Space maintainers are dental appliances used to keep that space open so that the permanent tooth can erupt in the correct position. They help:
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Prevent crowding by keeping surrounding teeth in place</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Ensure permanent teeth have enough room to grow in properly</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Reduce the need for more extensive orthodontic treatment later</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Maintain the natural alignment of the dental arch</span>
              </li>
            </ul>

            {/* Habit Braces */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Habit Braces
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Habit braces are used to correct habits such as thumb sucking or tongue thrusting that can affect the development of teeth and jaws. They work by discouraging the habit and helping guide natural teeth into proper alignment. It is important to note that:
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-12">
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Proper maintenance and hygiene are essential during treatment</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Food debris can accumulate around braces and cause cavities or discoloration</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Regular dental check-ups are necessary throughout the course of treatment</span>
              </li>
            </ul>

          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Looking After Your Child&apos;s Smile?
              </h3>
              <p className="text-gray-600 mb-6">
                Book an appointment with our friendly dental team today.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-primary-blue text-white px-8 py-3 rounded-md hover:bg-accent transition-colors font-semibold"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Back to Services */}
          <div className="max-w-4xl mx-auto text-center mt-8">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-primary-blue hover:underline font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
