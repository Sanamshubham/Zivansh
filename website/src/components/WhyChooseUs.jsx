const features = [
    "Fresh Daily Preparation",
    "Gym-Focused Nutrition",
    "Ready to Eat Meals",
    "Affordable Pricing",
  ];
  
  const WhyChooseUs = () => {
    return (
      <section className="py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose <span className="text-green-600">Us?</span>
          </h2>
  
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl shadow-sm hover:shadow-md"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;