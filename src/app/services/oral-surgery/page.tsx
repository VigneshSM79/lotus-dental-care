import Link from "next/link";

export default function OralSurgery() {
  return (
    <main className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Oral Surgery
            </h1>
            <p className="text-lg text-gray-200">
              Expert surgical care for a wide range of oral and maxillofacial conditions
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
              Oral Surgery
            </h2>

            {/* Introduction */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Oral and maxillofacial surgery is the surgical process done to correct a wide range of diseases, injuries and defects in body parts such as the head, neck, face, and jaws, along with the tissues of the oral and maxillofacial region. It is a standard international surgical procedure, usually performed by specialist surgeons with expertise in treating the entire craniomaxillofacial complex — comprising the mouth, jaws, face, skull, and associated structures.
            </p>
            <p className="text-gray-600 leading-relaxed mb-12">
              We understand the complex nature of any type of oral surgery, and that is why we carefully explain the process to our patients so they can understand what to expect during the procedure. We also provide full pre-surgery and post-surgery instructions to ensure our patients are fully prepared at every stage.
            </p>

            {/* Image */}
            <div className="flex justify-center mb-10">
              <img
                src="/images/services/oral-surgery.jpg"
                alt="Oral Surgery"
                className="rounded-lg w-full max-w-lg h-auto"
              />
            </div>

            {/* Common Procedures */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Common Oral Surgery Procedures
            </h3>

            {/* Wisdom Teeth */}
            <h4 className="text-lg font-bold text-gray-800 mb-3">
              Wisdom Teeth
            </h4>
            <p className="text-gray-600 leading-relaxed mb-8">
              Special surgical techniques are followed for the removal of impacted wisdom teeth, tailored appropriately to each individual case. Where a wisdom tooth is fully erupted in a normal position, it can often be managed with proper cleaning during regular check-ups with no further complications. Minor abnormalities related to wisdom tooth eruption can be addressed by your dentist, though removal may sometimes be the best option for long-term health.
            </p>

            {/* Exposures */}
            <h4 className="text-lg font-bold text-gray-800 mb-3">
              Exposures
            </h4>
            <p className="text-gray-600 leading-relaxed mb-8">
              An impacted tooth is one that has not erupted through the bone. Once your orthodontist refers you to us for treatment, we work in close collaboration to enhance the eruption of affected teeth, aiming to save the tooth wherever possible rather than remove it.
            </p>

            {/* Oral Pathology */}
            <h4 className="text-lg font-bold text-gray-800 mb-3">
              Oral Pathology
            </h4>
            <p className="text-gray-600 leading-relaxed mb-8">
              Normally, the inside of the mouth is lined with smooth, pink tissue. If your dentist, physician, or you yourself notice any bumps, lumps, or discoloration in the tissue, our well-trained doctors are able to identify the cause of the symptoms and determine whether a simple tissue biopsy — which can be performed in our clinic — is required for further evaluation.
            </p>

            {/* Bone Grafts */}
            <h4 className="text-lg font-bold text-gray-800 mb-3">
              Bone Grafts
            </h4>
            <p className="text-gray-600 leading-relaxed mb-8">
              Sometimes the jawbone attached to missing teeth may atrophy or decrease in size, which can compromise the placement of dental implants. A bone graft is a surgical procedure involving the replacement of missing bone to repair complex fractures that pose a significant health risk or fail to heal properly on their own. We have the expertise to place implants of proper length and width, restoring both functionality and aesthetic appearance.
            </p>

            {/* Extractions */}
            <h4 className="text-lg font-bold text-gray-800 mb-3">
              Extractions
            </h4>
            <p className="text-gray-600 leading-relaxed mb-6">
              A tooth may be extracted as a whole — known as a routine extraction — or surgically removed in parts to facilitate complete removal. The type of extraction is determined at the time of surgery based on the tooth&apos;s condition and position. We can extract multiple teeth in a single session if the medical condition so demands.
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-12">
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Routine and surgical extractions performed with care</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Multiple extractions possible in a single visit when required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Our surgical team makes every effort to minimise trauma to the jaw and mouth</span>
              </li>
            </ul>

          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Need Oral Surgery Advice?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a consultation with our experienced surgical team today.
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
