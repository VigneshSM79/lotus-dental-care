import Link from "next/link";

export default function Extraction() {
  return (
    <main className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Extraction
            </h1>
            <p className="text-lg text-gray-200">
              Safe and painless tooth removal performed with precision and care
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-primary-blue border-b-2 border-primary-blue pb-2 mb-6 inline-block">
              Extraction
            </h2>

            {/* Introduction */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Tooth extraction is a relatively quick outpatient procedure performed by a dentist or oral surgeon. While we always aim to save a natural tooth wherever possible, extraction becomes necessary when a tooth is too badly damaged, decayed, or infected to be repaired. The procedure is carried out under appropriate anaesthesia to ensure a comfortable and pain-free experience.
            </p>
            <p className="text-gray-600 leading-relaxed mb-12">
              Removing a visible tooth is classified as a simple extraction, while teeth that are broken below the gum line, impacted, or have complex root structures may require a more involved surgical approach. The type of extraction is determined based on a thorough examination prior to the procedure.
            </p>

            {/* Image */}
            <div className="flex justify-center mb-10">
              <img
                src="/images/services/extraction.jpg"
                alt="Tooth Extraction"
                className="rounded-lg w-full max-w-lg h-auto"
              />
            </div>

            {/* Reasons for Extraction */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Reasons for Tooth Extraction
            </h3>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-10">
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Severe tooth decay that cannot be restored with a filling or crown</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Advanced gum disease causing loosening of the tooth</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Impacted or partially erupted wisdom teeth causing pain or infection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Overcrowding — creating space prior to orthodontic treatment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Broken or cracked teeth that cannot be repaired</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Retained baby teeth blocking permanent teeth from erupting</span>
              </li>
            </ul>

            {/* Simple Extraction */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Simple Extraction
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              A simple extraction is performed on a tooth that is visible above the gum line. Local anaesthesia is administered to numb the area, and the tooth is loosened using a dental instrument called an elevator before being gently removed with forceps. The procedure is quick and straightforward, with minimal discomfort.
            </p>

            {/* Surgical Extraction */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Surgical Extraction
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Surgical extraction is required for teeth that are broken at the gum line, not fully erupted, or deeply impacted in the jawbone. A small incision is made in the gum tissue to access the tooth, which may be divided into sections to facilitate easier removal. Various anaesthesia options are available depending on the complexity of the case and patient comfort.
            </p>

            {/* Aftercare */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Post-Extraction Care
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Proper care after an extraction helps ensure quick and smooth healing. Our team will provide detailed post-procedure instructions, which typically include:
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-12">
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Biting gently on a gauze pad to control bleeding for the first hour</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Avoiding rinsing, spitting, or using a straw for 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Eating soft foods and avoiding the extraction site while chewing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Taking prescribed medications as directed to manage pain and prevent infection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Attending follow-up appointments to monitor healing</span>
              </li>
            </ul>

          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Experiencing Tooth Pain?
              </h3>
              <p className="text-gray-600 mb-6">
                Book an appointment with our team for a thorough evaluation today.
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
