import Link from "next/link";
import ToothBullet from "@/components/ui/ToothBullet";

export default function Periodontics() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Periodontics
            </h1>
            <p className="text-lg text-gray-200">
              Specialist care for healthy gums and the structures that support your teeth
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
              Periodontics
            </h2>

            {/* Introduction */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Periodontics is the dental specialty focusing exclusively on the inflammatory diseases that destroy the gums and other supporting structures around the teeth. Periodontists undergo three additional years of education beyond dental school, specialising in the prevention, diagnosis, and treatment of periodontal disease, dental implant placement, and cosmetic periodontal procedures.
            </p>
            <p className="text-gray-600 leading-relaxed mb-12">
              Gum disease, if left untreated, can lead to tooth loss and has been linked to broader health concerns such as heart disease and diabetes. Early detection and treatment are key to preserving your teeth and overall health.
            </p>

            {/* Image */}
            <div className="flex justify-center mb-10">
              <img
                src="/images/services/periodontics.jpg"
                alt="Periodontics"
                className="rounded-lg w-full max-w-lg h-auto"
              />
            </div>

            {/* Signs of Gum Disease */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Signs of Periodontal Disease
            </h3>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-10">
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Red, swollen, or tender gums</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Bleeding while brushing or flossing</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Receding gums or teeth appearing longer than usual</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Persistent bad breath or bad taste in the mouth</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Loose or shifting teeth</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Pus between teeth and gums</span>
              </li>
            </ul>

            {/* Scaling & Root Planing */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Scaling and Root Planing
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Scaling and root planing is a deep-cleaning, non-surgical procedure used to treat gum disease. Scaling removes plaque and tartar deposits from above and below the gum line, while root planing smooths the root surfaces to help the gum tissue reattach and heal. This is often the first line of treatment for moderate to severe gum disease.
            </p>

            {/* Gum Surgery */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Periodontal Surgery
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              When non-surgical treatments are not sufficient to control gum disease, periodontal surgery may be recommended. Surgical procedures help to:
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Reduce pocket depth between the teeth and gums</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Regenerate lost bone and tissue support</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Reshape the gum line for improved function and aesthetics</span>
              </li>
            </ul>

            {/* Maintenance */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Periodontal Maintenance
            </h3>
            <p className="text-gray-600 leading-relaxed mb-12">
              After active periodontal treatment, regular maintenance visits are essential to keep gum disease from returning. These visits typically include professional cleaning, monitoring of pocket depths, and assessment of the overall health of your gums and supporting bone. Consistent maintenance is the key to long-term oral health.
            </p>

          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Concerned About Your Gum Health?
              </h3>
              <p className="text-gray-600 mb-6">
                Book an appointment with our team for a thorough periodontal evaluation.
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
