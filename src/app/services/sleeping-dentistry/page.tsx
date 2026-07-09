import Link from "next/link";
import ToothBullet from "@/components/ui/ToothBullet";

export default function SleepingDentistry() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-blue py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Sleeping Dentistry
            </h1>
            <p className="text-lg text-gray-200">
              Comfortable, stress-free dental care for anxious patients and sleep-related conditions
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
              Sleeping Dentistry
            </h2>

            {/* Introduction */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Sleeping dentistry focuses on oral appliance therapy to treat sleep-disordered breathing, including snoring and obstructive sleep apnea (OSA). Our dentists work in close collaboration with sleep physicians to determine the most suitable and effective treatment plan for each patient.
            </p>
            <p className="text-gray-600 leading-relaxed mb-12">
              In addition to sleep-related treatments, sleeping dentistry also refers to sedation dentistry — where patients are placed in a deeply relaxed or sleep-like state during dental procedures. This is particularly beneficial for patients who experience dental anxiety, have a strong gag reflex, or require lengthy treatments to be completed comfortably in a single visit.
            </p>

            {/* Image */}
            <div className="flex justify-center mb-10">
              <img
                src="/images/services/sleeping-dentistry.jpg"
                alt="Sleeping Dentistry"
                className="rounded-lg w-full max-w-lg h-auto"
              />
            </div>

            {/* Sleep Apnea */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Obstructive Sleep Apnea (OSA) & Snoring
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Obstructive sleep apnea is a condition where the airway becomes partially or fully blocked during sleep, causing interruptions in breathing. Snoring is one of its most common symptoms. If left untreated, OSA can lead to serious health concerns including:
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Daytime fatigue and difficulty concentrating</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>High blood pressure and increased risk of heart disease</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Morning headaches and dry mouth</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Disrupted sleep for both the patient and their partner</span>
              </li>
            </ul>

            {/* Oral Appliance Therapy */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Oral Appliance Therapy
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Oral appliances are custom-made dental devices worn during sleep to keep the airway open by gently repositioning the lower jaw and tongue. They are a comfortable, non-invasive alternative to CPAP machines for patients with mild to moderate sleep apnea. Our team works alongside sleep specialists to ensure the appliance is correctly fitted and adjusted for maximum effectiveness.
            </p>

            {/* Sedation Dentistry */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Sedation Dentistry
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              For patients who feel anxious or fearful about dental visits, sedation dentistry offers a calm and pain-free experience. Sedation options allow the dentist to complete procedures efficiently while the patient remains comfortable and relaxed. Sedation is suitable for:
            </p>
            <ul className="text-gray-600 leading-relaxed space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Patients with high dental anxiety or dental phobia</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Patients with a sensitive gag reflex</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Long or complex procedures requiring extended chair time</span>
              </li>
              <li className="flex items-start gap-2">
                <ToothBullet />
                <span>Patients who have difficulty sitting still for prolonged periods</span>
              </li>
            </ul>

            {/* Who Is It For */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Who Can Benefit?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-12">
              Sleeping dentistry is suitable for both adults and children. Whether you are seeking relief from snoring and sleep apnea or looking for a way to make your dental treatment more comfortable, our team is here to guide you through the right approach with care and expertise.
            </p>

          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Anxious About Your Dental Visit?
              </h3>
              <p className="text-gray-600 mb-6">
                Talk to our team about comfortable sedation options tailored for you.
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
