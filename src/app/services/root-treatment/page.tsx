import Link from "next/link";

export default function RootTreatment() {
  return (
    <main className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Root Treatment
            </h1>
            <p className="text-lg text-gray-200">
              Advanced endodontic care to save and restore your teeth
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
              Root Canal Treatment
            </h2>

            {/* Introduction */}
            <p className="text-gray-600 leading-relaxed mb-12">
              The root canal treatment is the procedure used for repairing and saving a tooth that is badly decayed or becomes infected. The root canal procedure involves the removal of the nerve and pulp and then the inner part of the tooth is cleaned and sealed. If the treatment is not done, the tissue surrounding the tooth will become infected and abscesses may come up.
            </p>

            {/* Symptoms Section */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Symptoms of tooth pulp damage or disease
            </h3>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Spontaneous pain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Feeling sensitive to hot and cold drinks and foods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Pain while biting and chewing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Facial swelling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Loss of teeth</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Swelling of the gum near the affected tooth</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue">❤</span>
                <span>Oozing of pus surrounding the affected teeth</span>
              </li>
            </ul>

            {/* Why Remove Pulp */}
            <h4 className="text-lg font-bold text-gray-800 mb-3">
              Why does tooth pulp need to be removed?
            </h4>
            <p className="text-gray-600 leading-relaxed mb-8">
              When pulp is damaged, it breaks down and bacteria begin to spread inside the pulp chamber. The bacteria and other dead pulp remains can cause an infection or abscessed tooth. The abscess is a pus-filled pocket that is formed at the end of a tooth's root.
            </p>

            {/* Image */}
            <div className="flex justify-center mb-8">
              <img
                src="/images/services/root-canal-treatment.jpg"
                alt="Root Canal Treatment"
                className="rounded-lg w-full max-w-lg h-auto"
              />
            </div>

            {/* Success Rate */}
            <h4 className="text-lg font-bold text-gray-800 mb-3">
              How successful are root canals?
            </h4>
            <p className="text-gray-600 leading-relaxed mb-8">
              Root canal treatment is a highly successful procedure with more than 95% success rate. Most of the teeth attached to the root canal can last for a lifetime. The final step of the root canal procedure involves the application of a restoration such as crown or filling, it will not be visible to onlookers that a root canal was performed.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Laser root canal treatment saves the teeth from being extracted completely. Although the pulp has been removed, the tooth is still anchored in the bone and can still perform biting and chewing. Laser dental treatment makes the procedure quick, easy and painless.
            </p>

            {/* Procedure */}
            <h4 className="text-lg font-bold text-gray-800 mb-3">
              Root Canal Procedure
            </h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Root Canal Procedure has four main aims:
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-12">
              <li className="flex items-start gap-2">
                <span className="text-primary-blue font-bold">1.</span>
                <span>Removal of active Decay and Infection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue font-bold">2.</span>
                <span>Shaping the canals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue font-bold">3.</span>
                <span>Filling the canals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-blue font-bold">4.</span>
                <span>Making the tooth functional again</span>
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
                Book an appointment with our experienced dental team today.
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
