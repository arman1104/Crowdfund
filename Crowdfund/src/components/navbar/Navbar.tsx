import NavIcon from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-14 py-8">
        <img src={NavIcon} alt="Logo" className="h-4" />

        <ul className="flex gap-8 text-white text-sm">
          <li className="cursor-pointer hover:opacity-80">About</li>
          <li className="cursor-pointer hover:opacity-80">Discover</li>
          <li className="cursor-pointer hover:opacity-80">Get Started</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
