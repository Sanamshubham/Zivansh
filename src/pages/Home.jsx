import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "../pages/Menu";
import WhyChooseUs from "../components/WhyChooseUs";
// import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu></Menu>
      <WhyChooseUs />
      {/* <Contact/> */}
    </>
  );
};

export default Home;