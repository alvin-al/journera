import React from "react";
import Navbar from "../section/Navbar";
import Hero from "../section/Hero";
import PopularPackage from "../section/PopularPackage";
import Testimonials from "../section/Testimonials";
import Footer from "../section/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularPackage />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
