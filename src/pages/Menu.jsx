
import { useState, useEffect } from "react";

/* ===== IMAGE IMPORTS ===== */
import salad1 from "../assets/images/classic_salad.jpeg";
import salad2 from "../assets/images/classic_salad2.png";

import potato1 from "../assets/images/potato.jpeg";
import potato2 from "../assets/images/potato2.png";

import poha3 from "../assets/images/bread.png";
import poha2 from "../assets/images/poha2.png";

import fruit3 from "../assets/images/peanuts.png";
import poha1 from "../assets/images/poha.jpeg";

import fruit1 from "../assets/images/fruits_salad.jpeg";
import fruit2 from "../assets/images/fruits_salad2.png";

/* ===== PRODUCTS ===== */
const products = [
  {
    name: "Classic Salad (Post-Workout)",
    price: 50,
    images: [salad2],
  },
  {
    name: "Sweet Potato (Pre-Workout)",
    price: 50,
    images: [potato2],
  },
  {
    name: "Poha,Peanuts & Corn Flakes Salad",
    price: 50,
    images: [poha2],
  },
  {
    name: "Fruit Salad",
    price: 60,
    images: [fruit2],
  },
   {
    name: "Peanuts & Oats Power Bites",
    price: 50,
    images: [poha3],
  },
  {
    name: "Browen Bread with Peanuts Butter (Pre- Workout)",
    price: 70,
    images: [fruit3],
  },
];

/* ===== PRODUCT CARD ===== */
const MenuCard = ({ item, cart, addProduct, removeProduct }) => {

  const [index, setIndex] = useState(0);
  const [preview, setPreview] = useState(null);

  /* IMAGE AUTO CHANGE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % item.images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [item.images.length]);

  return (
    <>
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">

        {/* IMAGE */}
        <img
          src={item.images[index]}
          alt={item.name}
          onClick={() => setPreview(item.images[index])}
          className="w-full h-52 sm:h-56 md:h-60 object-cover cursor-pointer"
        />

        {/* INFO */}
        <div className="p-4 text-center flex flex-col flex-grow">

          <h3 className="text-lg md:text-xl font-bold">
            {item.name}
          </h3>

          <p className="text-green-600 font-semibold mt-1">
            ₹{item.price}
          </p>

          {/* QUANTITY */}
          <div className="flex justify-center items-center gap-4 mt-4">

            <button
              onClick={() => removeProduct(item.name)}
              className="bg-red-500 text-white w-8 h-8 rounded text-lg"
            >
              -
            </button>

            <span className="font-bold text-lg">
              {cart[item.name]?.qty || 0}
            </span>

            <button
              onClick={() => addProduct(item)}
              className="bg-green-600 text-white w-8 h-8 rounded text-lg"
            >
              +
            </button>

          </div>
        </div>
      </div>

      {/* IMAGE POPUP */}
      {preview && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setPreview(null)}
        >
          <img
            src={preview}
            className="max-h-[80%] max-w-[90%] rounded-xl"
            alt="preview"
          />
        </div>
      )}
    </>
  );
};

/* ===== MENU PAGE ===== */
const Menu = () => {

  const [cart, setCart] = useState({});
  const [customerName, setCustomerName] = useState("");
  const [gymName, setGymName] = useState("");

  /* ADD PRODUCT */
  const addProduct = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.name]: {
        ...product,
        qty: prev[product.name] ? prev[product.name].qty + 1 : 1,
      },
    }));
  };

  /* REMOVE PRODUCT */
  const removeProduct = (name) => {
    setCart((prev) => {
      const updated = { ...prev };

      if (!updated[name]) return prev;

      if (updated[name].qty > 1) {
        updated[name].qty -= 1;
      } else {
        delete updated[name];
      }

      return updated;
    });
  };

  /* TOTAL PRICE */
  const total = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  /* WHATSAPP ORDER */

 const placeOrder = () => {

  if (!customerName || !gymName || Object.keys(cart).length === 0) {
    alert("Please fill all details and select items");
    return;
  }

  let message = `Hello Team Zivansh,\n\n`;
  message += `Customer: ${customerName}\n`;
  message += `Gym Location: ${gymName}\n\n`;
  message += `Order Details:\n`;

  Object.values(cart).forEach((item) => {
    message += `- ${item.name} x ${item.qty} = Rs ${item.qty * item.price}\n`;
  });

  message += `\nTotal: Rs ${total}`;

  // ✅ IMPORTANT FIX
  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/918588866339?text=${encodedMessage}`,
    "_blank"
  );
};
  return (
    <section className="px-4 sm:px-6 py-12 bg-gray-50 min-h-screen">

      <h2 className="text-3xl font-bold text-center mb-10">
        Our Healthy Menu
      </h2>

      {/* PRODUCTS */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {products.map((item, index) => (
          <MenuCard
            key={index}
            item={item}
            cart={cart}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        ))}

      </div>

      {/* CUSTOMER DETAILS */}
      <div className="mt-12 max-w-xl mx-auto flex flex-col gap-4">

        <input
          type="text"
          placeholder="Enter Your Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border p-3 rounded w-full"
        />

        <input
          type="text"
          placeholder="Enter Gym Name / Location"
          value={gymName}
          onChange={(e) => setGymName(e.target.value)}
          className="border p-3 rounded w-full"
        />

      </div>

      {/* TOTAL */}
      <h3 className="text-center text-2xl font-bold mt-8">
        Total: ₹{total}
      </h3>

      {/* ORDER BUTTON */}
      <div className="text-center mt-6">

        <button
          onClick={placeOrder}
          className="bg-green-600 text-white px-10 py-3 rounded-lg hover:bg-green-700 text-lg"
        >
          Place Order on WhatsApp
        </button>

      </div>

    </section>
  );
};

export default Menu;