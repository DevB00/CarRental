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
    <nav className="py-5 px-6">
      {/* MOBILE */}
      <div className='flex justify-between  md:hidden'>
        <img className="w-[9rem]" src={Logo} alt="logo"/>
        <div onClick={openNav}>
          <IconMenu2 width={30} height={30} />
        </div>
        <div className={`flex w-full h-screen fixed top-0 left-${nav ? '0' : '[-100%]'} bg-white z-999999 justify-center items-center transition-all duration-500 ease-in-out`}>
        <div className="absolute top-10 right-10" onClick={openNav}>
          <IconX width={30} height={30} />
        </div>
        <div className="flex flex-col gap-8 text-3xl text-center">
        <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/models">Models</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </div>
       
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex justify-between">
        <img className="w-[9rem]" src={Logo} alt="logo" />
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/models">Models</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/team">Team</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex gap-4">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
