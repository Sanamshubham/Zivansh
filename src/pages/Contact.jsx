import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="px-6 py-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold">Contact & Order</h2>

        <p className="mt-4 text-gray-600">
          Call or WhatsApp us for fresh gym meals
        </p>

        {/* PHONE */}
        <p className="mt-6 font-bold text-lg">
          📞 +91 9XXXXXXXXX
        </p>

        {/* EMAIL */}
        <p className="mt-2">
          📧 <span className="font-medium">Zivansh22@gmail.com</span>
        </p>

        {/* ADDRESS */}
        <p className="mt-2">
          📍 Near Gym Area
        </p>

        {/* FSSAI */}
        <p className="mt-6 text-sm text-gray-500">
          FSSAI License No: <span className="font-medium">30251126122323503</span>
        </p>

        {/* WHATSAPP BUTTON */}
        <a
            href="https://wa.me/918588866339?text=Hello%20GymFuel%20Kitchen!%20I%20am%20interested%20in%20ordering%20healthy%20gym%20food.%20Please%20share%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700"
        >
          Order on WhatsApp
        </a>
      </section>
    </>
  );
};

export default Contact;