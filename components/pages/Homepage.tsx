import React from "react";

import Hero from "../section/Hero";
import PopularPackage from "../section/PopularPackage";
import Testimonials from "../section/Testimonials";
import Footer from "../section/Footer";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <PopularPackage />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
