// const Navbar = () => {
//     return (
//       <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-green-600">
//           GymFuel<span className="text-black">Kitchen</span>
//         </h1>
  
//         <ul className="hidden md:flex gap-6 font-medium">
//           <li className="hover:text-green-600 cursor-pointer">Home</li>
//           <li className="hover:text-green-600 cursor-pointer">Menu</li>
//           <li className="hover:text-green-600 cursor-pointer">Nutrition</li>
//           <li className="hover:text-green-600 cursor-pointer">Contact</li>
//         </ul>
  
//         <a
//           href="https://wa.me/91XXXXXXXXXX"
//           className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
//         >
//           Order Now
//         </a>
//       </nav>
//     );
//   };
  
//   export default Navbar;
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../images/logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="GymFuel Kitchen Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-green-600">
            GymFuel Kitchen
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/menu" className="hover:text-green-600">Menu</Link>
          <Link to="/" className="hover:text-green-600">Nutrition</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </div>

        {/* DESKTOP ORDER */}
        <a
          href="https://wa.me/918588866339?text=Hello%20GymFuel%20Kitchen!%20I%20am%20interested%20in%20ordering%20healthy%20gym%20food."
          className="hidden md:block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          target="_blank"
        >
          Order
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 font-medium">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setOpen(false)}>Menu</Link>
          <Link to="/" onClick={() => setOpen(false)}>Nutrition</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

          <a
            href="https://wa.me/918588866339?text=Hello%20GymFuel%20Kitchen!%20I%20am%20interested%20in%20ordering%20healthy%20gym%20food."
            className="bg-green-600 text-white px-4 py-2 rounded text-center"
            target="_blank"
          >
            Order
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;