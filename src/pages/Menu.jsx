import { useState } from "react";
import Navbar from "../components/Navbar";

/* IMAGE IMPORTS */
import salad1 from "../assets/images/classic_salad.jpeg";
import potato1 from "../assets/images/potato.jpeg";
import poha1 from "../assets/images/poha.jpeg";
import fruit1 from "../assets/images/fruits_salad.jpeg";

/* PRODUCTS */
const products = [
  {
    name: "Classic Protein Salad",
    price: 50,
    image: salad1,
  },
  {
    name: "Sweet Potato",
    price: 50,
    image: potato1,
  },
  {
    name: "Poha & Peanuts Salad",
    price: 50,
    image: poha1,
  },
  {
    name: "Fruit Salad",
    price: 80,
    image: fruit1,
  },
];

const Menu = () => {
  const [selected, setSelected] = useState({});
  const [gymName, setGymName] = useState("");

  /* HANDLE CHECKBOX */
  const toggleProduct = (name) => {
    setSelected((prev) => ({
      ...prev,
      [name]: { qty: 1 },
    }));
  };

  /* HANDLE QUANTITY */
  const changeQty = (name, qty) => {
    setSelected((prev) => ({
      ...prev,
      [name]: { qty },
    }));
  };

  /* WHATSAPP ORDER */
  const placeOrder = () => {
    let message = `Hello GymFuel Kitchen,%0A%0AI want to order:%0A`;

    Object.keys(selected).forEach((item) => {
      message += `• ${item}  x ${selected[item].qty}%0A`;
    });

    message += `%0AGym Location: ${gymName}`;

    window.open(
      `https://wa.me/918588866339?text=${message}`,
      "_blank"
    );
  };

  return (
    <>
      <Navbar />

      <section className="px-6 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Healthy Menu
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow">

              <img
                src={item.image}
                alt={item.name}
                className="h-40 mx-auto object-contain"
              />

              <h3 className="font-bold text-center mt-2">{item.name}</h3>
              <p className="text-center text-green-600">₹{item.price}</p>

              <div className="mt-3 text-center">

                <input
                  type="checkbox"
                  onChange={() => toggleProduct(item.name)}
                />

                {selected[item.name] && (
                  <input
                    type="number"
                    min="1"
                    value={selected[item.name].qty}
                    onChange={(e) =>
                      changeQty(item.name, e.target.value)
                    }
                    className="border ml-2 w-16 text-center"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GYM NAME */}
        <div className="mt-10 text-center">
          <input
            type="text"
            placeholder="Enter Gym Name / Location"
            value={gymName}
            onChange={(e) => setGymName(e.target.value)}
            className="border p-3 rounded w-80"
          />
        </div>

        {/* ORDER BUTTON */}
        <div className="text-center mt-6">
          <button
            onClick={placeOrder}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
          >
            Place Order on WhatsApp
          </button>
        </div>
      </section>
    </>
  );
};

export default Menu;