export default function WhyChooseUs() {
  const features = [
    {
      icon: "👥",
      title: "OUR TEAM",
      description:
        "Lotus Dental Care is led by experienced dental professionals with a dedicated team of young, skilled and highly-qualified doctors, keeping pace with contemporary dentistry using the latest equipment and technology.",
    },
    {
      icon: "💙",
      title: "OUR MOTTO",
      quote: "Your Smile, Our Passion, Your Life",
    },
    {
      icon: "🌟",
      title: "QUALITY CARE",
      description:
        "We provide world-class dental care with a focus on patient comfort, safety, and satisfaction. Our modern facility is equipped with advanced technology to ensure the best treatment outcomes.",
    },
  ];

  return (
    <section className="text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-200">
            You have a number of reasons to choose us!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 tracking-wider">
                {feature.title}
              </h3>
              {feature.quote ? (
                <p className="text-lg italic text-gray-200">
                  &ldquo;{feature.quote}&rdquo;
                </p>
              ) : (
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
