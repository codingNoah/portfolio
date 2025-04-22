import { NavLink } from "react-router-dom";

interface Props {
  className?: string;
  footer?: boolean;
}

const transition = "hover:text-white transition duration-200 ease-in-out";

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? "white" : "",
  fontWeight: isActive ? 500 : "",
});

const NavLinks = ({ className, footer }: Props) => {
  return (
    <div
      className={`${
        footer ? "flex" : "flex flex-col sm:flex-row"
      } text-center sm:text-left gap-6 sm:gap-11 ${className}`}
    >
      <NavLink style={navLinkStyle} className={transition} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyle} className={transition} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyle} className={transition} to="/works">
        Works
      </NavLink>
      <NavLink style={navLinkStyle} className={transition} to="/contact">
        Contact
      </NavLink>
    </div>
  );
};

export default NavLinks;
