import NavLinks from "../components/NavLinks";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <footer className="container mx-auto text-primary text-xs flex flex-col gap-10 items-center pt-32 pb-20">
      <Logo />
      <NavLinks className="uppercase text-[#565656]" footer />
      <p className="text-sm opacity-70 font-light">
        &copy; All rights reserved by{" "}
        <span className="text-accent font-medium">WordPressRiver</span>
      </p>
    </footer>
  );
};

export default Footer;
