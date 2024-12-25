import React from "react";
import Hero from "../section/Hero";
import PopularPackage from "../section/PopularPackage";
import Testimonials from "../section/Testimonials";


const Homepage = () => {
  return (
    <div>
      <Hero />
      <PopularPackage />
      <Testimonials />
    </div>
  );
};

export default Homepage;
