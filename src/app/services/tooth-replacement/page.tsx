import Link from "next/link";
import ToothBullet from "@/components/ui/ToothBullet";

export default function ToothReplacement() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Tooth Replacement
            </h1>
            <p className="text-lg text-gray-200">
              Restore your smile with natural-looking tooth replacement solutions
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
              Tooth Replacement
            </h2>

            {/* Introduction */}
            <p className="text-gray-600 leading-relaxed mb-12">
              Dental implants function as replacement tooth roots, providing a strong and stable foundation for either permanent or removable replacement teeth designed to match your natural ones. Whether you are missing a single tooth or several, we offer a range of tooth replacement solutions tailored to your needs, health, and budget.
            </p>

            {/* Image */}
            <div className="flex justify-center mb-10">
              <img
                src="/images/services/tooth-replacement.jpg"
                alt="Tooth Replacement"
                className="rounded-lg w-full max-w-lg h-auto"
              />
            </div>

            {/* Fixed Bridges */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Fixed Bridges
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              A fixed bridge is a common tooth replacement option that involves modifying the adjacent healthy teeth on either side of the gap to act as anchors (abutments) for the bridge. A false tooth (pontic) is then fused between two crowns and cemented permanently in place.
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Restores the appearance and function of missing teeth</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Cemented permanently — no removal required</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Proper flossing and hygiene are essential to prevent decay under the bridge</span>
              </li>
            </ul>

            {/* Fixed Implants */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Fixed Implants
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              A dental implant is a surgical component that interfaces directly with the jawbone to support dental prosthetics such as crowns, bridges, or dentures. Implants are considered the gold standard for tooth replacement because they closely mimic the structure and function of a natural tooth.
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Fused with the jawbone for a permanent, stable fit</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Preserves jawbone and prevents bone loss</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Does not require modification of adjacent healthy teeth</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Long-lasting solution with proper care and maintenance</span>
              </li>
            </ul>

            {/* Removable RPD */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Removable Partial Denture (RPD)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              A removable partial denture (RPD) is an option for patients who are missing some but not all of their teeth and are unable to receive fixed bridges due to the absence of suitable anchor teeth or budget constraints. RPDs are held in place by clasps that attach to remaining natural teeth.
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Removable for easy cleaning and maintenance</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>A cost-effective alternative when fixed options are not suitable</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Restores chewing function and facial appearance</span>
              </li>
            </ul>

            {/* Removable Complete Dentures */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Removable Complete Dentures (CD)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Complete dentures are used when all teeth in one or both arches are missing. They are made from acrylic and are custom-fitted to rest on the gums. Complete dentures are a well-established solution with several advantages:
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-12">
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Relatively economical and accessible for most patients</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Easy to fabricate, adjust, and repair</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Restores a full smile and improves ability to chew and speak</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Can be relined or replaced as the jaw changes over time</span>
              </li>
            </ul>

          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Missing a Tooth? Let Us Help.
              </h3>
              <p className="text-gray-600 mb-6">
                Book a consultation to find the best tooth replacement option for you.
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
