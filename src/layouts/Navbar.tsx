import NavLinks from "../components/NavLinks";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import MenuButtonAnim from "../components/MenuButtonAnimation/MenuButtonAnim";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavIcon = () => {
    setIsOpen((prev: boolean) => !prev);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="hidden sm:flex container mx-auto justify-between py-3 items-center">
        <Logo />
        <NavLinks className="text-primary " />
        <Link to="/contact">
          <button className="bg-[#323232] text-white font-medium px-8 py-3 rounded-2xl btn--hover ">
            Let's talk
          </button>
        </Link>
      </nav>

      {/* mobile navbar */}
      <nav className="sm:hidden container flex py-4 items-center">
        <div className="z-30 flex justify-between w-full items-center">
          <Logo />
          <MenuButtonAnim isOpen={isOpen} toggleOpen={toggleNavIcon} />
        </div>
      </nav>
      <div
        className={`bg-[#0f0f0f] absolute  w-full left-0 ${
          isOpen ? "translate-y-0" : "-translate-y-80"
        } transition duration-500 ease-in-out z-20 pt-8 pb-8`}
      >
        <NavLinks className="text-primary" />
      </div>
    </>
  );
};

export default Navbar;
