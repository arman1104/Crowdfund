import { useState, useEffect } from "react";
import NavIcon from "../../assets/images/logo.svg";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import closeMenuIcon from "../../assets/images/icon-close-menu.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-14 py-6 md:py-8">
        <img src={NavIcon} alt="Logo" className="h-4" />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-white text-sm">
          <li className="cursor-pointer hover:opacity-80">About</li>
          <li className="cursor-pointer hover:opacity-80">Discover</li>
          <li className="cursor-pointer hover:opacity-80">Get Started</li>
        </ul>

        {/* Mobile Hamburger Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <img
            src={isMenuOpen ? closeMenuIcon : hamburgerIcon}
            alt={isMenuOpen ? "Close menu" : "Open menu"}
            className="h-4 w-4"
          />
        </button>
      </div>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu */}
          <div className="absolute top-16 left-6 right-6 z-40 bg-white rounded-lg shadow-lg md:hidden">
            <ul className="py-6">
              <li
                className="px-6 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 text-gray-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </li>
              <li
                className="px-6 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 text-gray-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Discover
              </li>
              <li
                className="px-6 py-4 cursor-pointer hover:bg-gray-50 text-gray-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
