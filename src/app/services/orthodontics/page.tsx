import Link from "next/link";
import ToothBullet from "@/components/ui/ToothBullet";

export default function Orthodontics() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Orthodontics
            </h1>
            <p className="text-lg text-gray-200">
              Straighten your teeth and improve your bite with expert orthodontic care
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
              Orthodontics
            </h2>

            {/* Introduction */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Orthodontics is the specialty of dentistry that deals with the diagnosis, prevention, and correction of malpositioned teeth and jaws. It also addresses facial growth modification through dentofacial orthopedics. Studies show that approximately 30% of the population has misalignment severe enough to warrant orthodontic treatment.
            </p>
            <p className="text-gray-600 leading-relaxed mb-12">
              Treatment duration varies from several months to years depending on the complexity of the case. Orthodontic treatment is most effective when started during childhood or adolescence, as younger patients&apos; bones respond more readily to repositioning. However, adults can also benefit greatly from orthodontic care.
            </p>

            {/* Image */}
            <div className="flex justify-center mb-10">
              <img
                src="/images/services/orthodontics.jpg"
                alt="Orthodontics"
                className="rounded-lg w-full max-w-lg h-auto"
              />
            </div>

            {/* Conditions Treated */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Conditions We Treat
            </h3>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-10">
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Overcrowded or crooked teeth</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Overbite — upper front teeth overlapping the lower front teeth excessively</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Underbite — lower teeth protruding beyond the upper front teeth</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Crossbite — upper and lower jaws misaligned laterally</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Open bite — space between the upper and lower teeth when biting</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Gaps and spacing between teeth</span>
              </li>
            </ul>

            {/* Dental Braces */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Dental Braces
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Dental braces are the most common orthodontic appliance used to gradually reposition teeth and jaws over time. Braces apply consistent, gentle pressure to shift teeth into their correct positions. They are available in several types including traditional metal braces, ceramic tooth-coloured braces, and lingual braces that are placed on the inner surface of the teeth for a more discreet appearance.
            </p>

            {/* Clear Aligners */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Clear Aligners
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Clear aligners are a modern, virtually invisible alternative to traditional braces. A series of custom-made, removable plastic trays gradually move teeth into alignment. They are comfortable to wear, easy to clean, and allow patients to eat and drink without restriction. Clear aligners are a popular choice for adults and older teenagers seeking a discreet treatment option.
            </p>

            {/* Surgical Orthodontics */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Surgical Orthodontics
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              In severe cases where teeth and jaw misalignment cannot be corrected by braces alone, surgical orthodontic treatment (orthognathic surgery) may be required. This involves repositioning the jawbones to correct significant bite problems and improve facial symmetry. Surgery is typically performed in combination with braces for optimal results.
            </p>

            {/* Retainers */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Retainers
            </h3>
            <p className="text-gray-600 leading-relaxed mb-12">
              After active orthodontic treatment is complete, retainers are prescribed to maintain the new position of the teeth and prevent them from shifting back. Retainers may be removable or fixed, and wearing them as directed is essential to preserving the results of your treatment long-term.
            </p>

          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready for a Straighter Smile?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a consultation with our team to explore the best orthodontic option for you.
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
