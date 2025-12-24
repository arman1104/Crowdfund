import React from "react";

import heroBg from "../../assets/images/image-hero-desktop.jpg";
import Navbar from "../navbar/Navbar";
// import HeroCard from "./HeroCard";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[380px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />
      {/* <HeroCard /> */}
    </section>
  );
};

export default HeroSection;
