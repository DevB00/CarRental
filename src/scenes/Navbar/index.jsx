import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";
import Logo from "../../images/logo/logo.png";
function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const closeNav = () => {
      setNav(false);
    };

    document.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    return () => {
      document.querySelectorAll(".mobile-nav-link").forEach((link) => {
        link.removeEventListener("click", closeNav);
      });
    };
  }, []);

  return (
    <nav className="flex justify-center">
      {/* MOBILE */}
      <div className="flex w-full items-center justify-between md:hidden">
        <img className="w-[9rem]" src={Logo} alt="logo" />
        <button onClick={openNav}>
          <IconMenu2
            className="transition duration-300 hover:text-[#ff4d30]"
            width={30}
            height={30}
          />
        </button>
      </div>

      <div
        className={twMerge(
          `fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-white transition-all duration-500 ease-in-out md:hidden`,
          `${nav ? "left-0" : "left-[-100%]"}`,
        )}
      >
        <button className="absolute right-10 top-10" onClick={openNav}>
          <IconX
            className="transition duration-300 hover:text-[#ff4d30]"
            width={30}
            height={30}
          />
        </button>
        <div className="flex flex-col gap-8 text-center text-2xl font-medium">
          <Link
            to="/"
            className="mobile-nav-link transition-colors duration-200 hover:text-[#ff4d30]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mobile-nav-link transition-colors duration-200 hover:text-[#ff4d30]"
          >
            About
          </Link>
          <Link
            to="/models"
            className="mobile-nav-link transition-colors duration-200 hover:text-[#ff4d30]"
          >
            Models
          </Link>
          <Link
            to="/testimonials"
            className="mobile-nav-link transition-colors duration-200 hover:text-[#ff4d30]"
          >
            Testimonials
          </Link>
          <Link
            to="/team"
            className="mobile-nav-link transition-colors duration-200 hover:text-[#ff4d30]"
          >
            Our Team
          </Link>
          <Link
            to="/contact"
            className="mobile-nav-link transition-colors duration-200 hover:text-[#ff4d30]"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden w-[1300px] items-center justify-between md:flex">
        <img className="w-[9rem]" src={Logo} alt="logo" />
        <div className="flex gap-6 font-semibold">
          <Link to="/" className="duration-200 hover:text-[#ff4d30]">
            Home
          </Link>
          <Link
            to="/about"
            className="transition-colors duration-200 hover:text-[#ff4d30]"
          >
            About
          </Link>
          <Link to="/models" className="duration-200 hover:text-[#ff4d30]">
            Models
          </Link>
          <Link
            to="/testimonials"
            className="duration-200 hover:text-[#ff4d30]"
          >
            Testimonials
          </Link>
          <Link to="/team" className="duration-200 hover:text-[#ff4d30]">
            Our Team
          </Link>
          <Link to="/contact" className="duration-200 hover:text-[#ff4d30]">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4 font-semibold">
          <Link
            to="/"
            className="transition-colors duration-200 hover:text-[#ff4d30]"
          >
            Sign in
          </Link>
          <button className="bg-[#ff4d30] px-6 py-4 text-white shadow-lg shadow-[#ff4d30] duration-200 hover:bg-[#f5391b]">
            <Link to="/">Register</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
