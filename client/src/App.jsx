import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Service from "./components/services/WarehouseHero.jsx";
import ProductRange from "./components/services/ProductRange";
import Footer from "./components/footer/Footer";
import AboutSection from "./components/About/About";
import TestimonialCarousel from "./components/Testimonials/Testimonials";
// import HomePage from "./pages/HomeOne";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      {/* <HomePage /> */}
      <AboutSection />
      <ProductRange />
      <Service />
      <TestimonialCarousel />
      <Footer />
    </>
  );
}

export default App;
