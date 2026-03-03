import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

/* ===== IMAGE IMPORTS ===== */
import salad1 from "../assets/images/classic_salad.jpeg";
import salad2 from "../assets/images/classic_salad2.jpeg";

import potato1 from "../assets/images/potato.jpeg";
import potato2 from "../assets/images/potato2.jpeg";

import poha1 from "../assets/images/poha.jpeg";
import poha2 from "../assets/images/poha2.jpeg";

import fruit1 from "../assets/images/fruits_salad.jpeg";
import fruit2 from "../assets/images/fruits_salad2.jpeg";

/* ===== PRODUCTS ===== */
const products = [
  {
    name: "Classic Protein Salad",
    price: 50,
    desc: "Corn, kabuli chana, rajma, sprouts, cucumber, beetroot, capsicum & paneer.",
    images: [salad1, salad2],
  },
  {
    name: "Sweet Potato",
    price: 50,
    desc: "Best pre-workout food. Rich in fiber & complex carbs.",
    images: [potato1, potato2],
  },
  {
    name: "Poha & Peanuts Salad",
    price: 50,
    desc: "Light, healthy & energy-boosting gym diet meal.",
    images: [poha1, poha2],
  },
  {
    name: "Fruit Salad",
    price: 80,
    desc: "Seasonal fruits including dragon fruit & kiwi.",
    images: [fruit1, fruit2],
  },
];

/* ===== CARD ===== */
const MenuCard = ({ item }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % item.images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [item.images.length]);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition">
      <div className="p-3">
        <img
          src={item.images[index]}
          alt={item.name}
          className="h-56 mx-auto object-contain rounded-xl"
        />
      </div>

      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>

        <a
          href={`https://wa.me/918588866339?text=${encodeURIComponent(
            `Hi GymFuel Kitchen, I want to order ${item.name}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-700"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

/* ===== PAGE ===== */
const Menu = () => {
  return (
    <>
    

      <section className="px-6 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Healthy Menu
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item, index) => (
            <MenuCard key={index} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;