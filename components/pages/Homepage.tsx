import React from "react";
import Navbar from "../section/Navbar";
import Hero from "../section/Hero";
import PopularPackage from "../section/PopularPackage";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <PopularPackage />
    </div>
  );
};

export default Homepage;
