import { Link } from "react-router-dom";
import Logo from "../../images/logo/logo.png";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(!nav);
  };
  return (
    <nav>
      {/* MOBILE  */}
      <div className="mobile-nav">
        <img src={Logo} alt="logo" />
        <div className="mobile-nav-btn" onClick={openNav}>
          {nav ? <IconX /> : <IconMenu2 />}
        </div>
        <div className={nav ? "mobile-nav-links active" : "mobile-nav-links"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/models">Models</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      {/* DESKTOP */}
      <div>
        <img src={Logo} alt="logo" />
        <div className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/models">Models</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="desktop-nav-btn">
          <Link to="/login">Login</Link>
        </div>
        <div className="desktop-nav-btn">
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
