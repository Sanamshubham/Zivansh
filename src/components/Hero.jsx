import heroImage from "../assets/images/hero_food.png";

const Hero = () => {
  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fuel Your Workout with{" "}
            <span className="text-green-600">Healthy Food</span>
          </h1>

          <p className="text-gray-600 mt-4">
            Fresh pre-workout & post-workout meals designed specially for gym lovers.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="#"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700"
            >
              View Menu
            </a>

            <a
              href="https://wa.me/918588866339"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Healthy Gym Food"
            className="rounded-2xl shadow-lg w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;