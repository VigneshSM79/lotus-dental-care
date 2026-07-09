"use client";

interface AboutUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutUsModal({ isOpen, onClose }: AboutUsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal Content - 90% of page */}
      <div className="relative bg-white w-[95%] lg:w-[75%] max-h-[90%] rounded-lg shadow-2xl overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 lg:top-8 lg:right-8 text-gray-500 hover:text-primary-blue z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Main Content */}
          <div className="flex-1 p-8 lg:p-16 lg:pr-8">
            {/* About Us */}
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue border-b-2 border-accent pb-2 mb-6 inline-block">
              About Us
            </h2>
            <p className="text-gray-700 mb-12 leading-relaxed text-base lg:text-lg max-w-3xl">
              We at Lotus Dental Care are committed to providing world-class dental treatment of highest quality of standard at affordable rates. The clinic aims at offering multidisciplinary & comprehensive approach to all dental problems all under one roof.
            </p>

            {/* Mission */}
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-blue mb-4">
              Mission
            </h3>
            <p className="text-gray-700 mb-12 leading-relaxed text-base lg:text-lg max-w-3xl">
              Being instrumental in treating, imparting & spreading the right knowledge and care about oral health among people contributing to their overall health.
            </p>

            {/* Vision */}
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-blue mb-4">
              Vision
            </h3>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg max-w-3xl">
              To become the most established dental centre providing the highest standard of dental care using world-class technology following the right ethical and treatment protocols.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 bg-gray-50 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-gray-200">
            {/* Opening Hours */}
            <div className="mb-8">
              <h4 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
                <svg className="w-5 h-5 text-primary-blue" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" d="M12 7v5l3.5 2" />
                </svg>
                Opening Hours
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-dashed border-gray-300 pb-2">
                  <span className="text-gray-600">Mon - Sat (Morning)</span>
                  <span className="text-gray-800 font-medium">10:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-gray-300 pb-2">
                  <span className="text-gray-600">Mon - Sat (Evening)</span>
                  <span className="text-gray-800 font-medium">5:00 PM - 9:00 PM</span>
                </div>

              </div>
            </div>

            {/* Need Help */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-2">
                <svg className="w-5 h-5 text-primary-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Need Help?
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Just make an appointment to get help from our experts
              </p>
              <a
                href="#contact"
                onClick={onClose}
                className="block text-center bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-accent transition-colors font-medium"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
