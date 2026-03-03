import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

/* PRODUCTS */
const products = [
  {
    name: "Classic Protein Salad",
    price: 50,
    desc: "Ingredients  Corn, kabuli chana, rajma, sprouts, cucumber, beetroot, capcicum, and fresh paneer.",
    images: ["src/images/classic_salad.jpeg", "src/images/classic_salad2.jpeg"],
  },
  {
    name: "Sweet Potato",
    price: 50,
    desc: "Best pre-workout energy food. Rich in fiber and complex carbs for sustained workout energy.",
    images: ["src/images/potato.jpeg", "src/images/potato2.jpeg"],
  },
  {
    name: "Poha & Peanuts Salad.",
    price: 50,
    desc: "Low-oil, light meal ideal for gym diet.Light & energy boosting Healthy flattened rice with balanced nutrition.",
    images: ["src/images/poha.jpeg", "src/images/poha2.jpeg"],
  },
  {
    name: "Fruit Salad",
    price: 80,
    desc: "(Including Dragon Fruit & Kiwi Regularly)Seasonal fruits with dragon fruit and kiwi.",
    images: ["src/images/fruits_salad.jpeg", "src/images/fruits_salad2.jpeg"],
  },
];

/* CARD */
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

      {/* IMAGE AREA */}
      <div className="bg-white p-3 rounded-2xl">
  <img
    src={item.images[index]}
    alt={item.name}
    className="max-h-56 mx-auto object-contain rounded-xl transition-all duration-500"
  />

        {/* PRICE */}
        {/* <span className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 text-sm font-bold rounded-full">
          ₹{item.price}
        </span> */}
      </div>

      {/* CONTENT */}
      <div className="p-4 text-center">
        <h3 className="font-bold text-lg">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>

        <a
  href={`https://wa.me/918588866339?text=${encodeURIComponent(
    `Hi GymFuel Kitchen, I want to order ${item.name}`
  )}`}
  className="inline-block mt-4 bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-700"
  target="_blank"
  rel="noopener noreferrer"
>
  Order Now
</a>
      </div>
    </div>
  );
};

/* PAGE */
const Menu = () => {
  return (
    <>
      <Navbar />

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