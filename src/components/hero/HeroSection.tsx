import heroBgDesktop from "../../assets/images/image-hero-desktop.jpg";
import heroBgMobile from "../../assets/images/image-hero-mobile.jpg";
import Navbar from "../navbar/Navbar";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px]">
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBgDesktop})` }}
      />
      {/* Mobile Background */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBgMobile})` }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />
    </section>
  );
};

export default HeroSection;
