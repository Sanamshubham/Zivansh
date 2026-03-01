import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

// ✅ IMPORT IMAGES (VERY IMPORTANT FOR LIVE SERVER)
import classic1 from "../images/classic_salad.jpeg";
import classic2 from "../images/classic_salad2.jpeg";

import potato1 from "../images/potato.jpeg";
import potato2 from "../images/potato2.jpeg";

import poha1 from "../images/poha.jpeg";
import poha2 from "../images/poha2.jpeg";

import fruit1 from "../images/fruits_salad.jpeg";
import fruit2 from "../images/fruits_salad2.jpeg";

// ✅ PRODUCT DATA
const products = [
  {
    name: "Classic Protein Salad",
    price: 50,
    desc: "High-protein mix of corn, chana, rajma, sprouts & paneer.",
    images: [classic1, classic2],
  },
  {
    name: "Sweet Potato",
    price: 50,
    desc: "Naturally rich in carbs & fiber. Best pre-workout energy food.",
    images: [potato1, potato2],
  },
  {
    name: "Poha Salad",
    price: 50,
    desc: "Light, easy to digest & energy-boosting meal.",
    images: [poha1, poha2],
  },
  {
    name: "Fruit Salad",
    price: 80,
    desc: "Fresh seasonal fruits packed with vitamins & antioxidants.",
    images: [fruit1, fruit2],
  },
];

// ✅ CARD COMPONENT
const MenuCard = ({ item }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % item.images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [item.images.length]);

  return (
    <div className="border rounded-2xl shadow hover:shadow-xl transition overflow-hidden bg-white">
      
      {/* IMAGE AREA */}
      <div className="flex items-center justify-center h-56 bg-gray-100">
        <img
          src={item.images[index]}
          alt={item.name}
          className="h-48 w-auto object-contain rounded-xl transition-all duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>

        <p className="text-xl font-bold text-green-600 mt-3">
          ₹{item.price}
        </p>

        <a
          href={`https://wa.me/918588866339?text=I%20want%20to%20order%20${encodeURIComponent(
            item.name
          )}`}
          target="_blank"
          className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-700"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

// ✅ MAIN MENU PAGE
const Menu = () => {
  return (
    <>
      <Navbar />

      <section className="px-6 py-14 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Healthy Menu
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <MenuCard key={index} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;