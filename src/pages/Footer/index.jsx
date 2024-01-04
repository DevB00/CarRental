import { IconMail, IconPhoneCall } from "@tabler/icons-react";
const Footer = () => {
  return (
    <footer className="flex w-full justify-center px-6 py-28">
      <div className="grid max-w-[1300px] text-center grid-cols-1 gap-16 sm:text-start sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">
            CAR <span className="font-light">Rental</span>
          </h1>
          <p className="text-[#706f7b]">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <div className="mt-3 flex flex-col gap-4 items-center sm:items-start">
            <a
              className="flex font-semibold transition duration-150 hover:text-[#ff4d30]"
              href="tel:123456789"
            >
              <IconPhoneCall />&nbsp;(123) -456-789
            </a>
            <a
              className="flex font-semibold transition duration-150 hover:text-[#ff4d30]"
              href="mailto:carrental@gmail.com"
            >
              <IconMail />&nbsp;carrental@gmail.com
            </a>
            <a
              target="_blank"
              href="https://xpeedstudio.com/"
              className="text-sm transition duration-150 hover:text-[#ff4d30]"
            >
              Design by XpeedStudio
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">COMPANY</h1>
          <ul className="flex flex-col gap-2">
            <li className="transition duration-150 hover:text-[#ff4d30]">
              <button>New York</button>
            </li>
            <li className="transition duration-150 hover:text-[#ff4d30]">
              <button>Careers</button>
            </li>
            <li className="transition duration-150 hover:text-[#ff4d30]">
              <button>Mobile</button>
            </li>
            <li className="transition duration-150 hover:text-[#ff4d30]">
              <button>Blog</button>
            </li>
            <li className="transition duration-150 hover:text-[#ff4d30]">
              <button>How we work</button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">WORKING HOURS</h1>
          <p className="flex flex-col gap-2">
            <span>Mon - Fri: 9:00AM - 9:00PM </span>
            <span>Sat: 9:00AM - 19:00PM</span>
            <span>Sun: Closed</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">SUBSCRIPTION</h1>
          <h2>Subscribe your Email address for latest news & updates.</h2>
          <div className="flex flex-col gap-4">
            <input
              id="email"
              type="text"
              className="border-transparent bg-[#ececec] py-4 px-16 text-sm outline-none"
              placeholder="Enter Email Address"
            />
            <button className="bg-[#ff4d30] py-3 font-medium text-white shadow-lg transition duration-300 hover:bg-[#fa3f30]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
