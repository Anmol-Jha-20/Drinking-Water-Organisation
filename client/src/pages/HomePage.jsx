import React from "react";
import Home from "./Home.jsx";
import Service from "../components/services/WarehouseHero.jsx";
import ProductRange from "../components/services/ProductRange.jsx";
import AboutSection from "../components/About/About.jsx";
import TestimonialCarousel from "../components/Testimonials/Testimonials.jsx";

function HomePage() {
  return (
    <>
      <Home />
      <AboutSection />
      <ProductRange />
      <Service />
      <TestimonialCarousel />
    </>
  );
}

export default HomePage;
