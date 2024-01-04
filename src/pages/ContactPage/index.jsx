import Image from "../../components/Image";
import BookACar from "../../components/BookACar";
import {
  IconLocation,
  IconMail,
  IconMailOpened,
  IconPhoneCall,
} from "@tabler/icons-react";
const Contact = () => {
  return (
    <>
      <Image Page="Contact" />
      <main className="mt-[17.5rem] mb-24 px-6 flex justify-center">
        <div className="flex w-full max-w-[1300px] gap-10 flex-col justify-between  bg-contactBg bg-c-p4 bg-no-repeat py-20 md:flex-row">
          <div className="flex flex-col items-center gap-10 text-center md:items-start md:text-start">
            <h3 className="flex flex-col gap-3 text-4xl font-bold sm:text-[2.8rem]">
              Need additional <span className="block">informaiton?</span>
            </h3>
            <p className="max-w-[420px] text-[0.98rem]  leading-6 text-[#706f7b]">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <div className="mt-3 flex flex-col items-center gap-4 md:items-start">
              <a
                className="flex font-medium transition duration-150 hover:text-[#ff4d30]"
                href="tel:123456789"
              >
                <IconPhoneCall />
                &nbsp;(123) -456-789
              </a>
              <a
                className="flex font-medium transition duration-150 hover:text-[#ff4d30]"
                href="mailto:carrental@gmail.com"
              >
                <IconMail />
                &nbsp;carrental@gmail.com
              </a>
              <a
                href=""
                className="flex font-medium transition duration-150 hover:text-[#ff4d30]"
              >
                <IconLocation /> &nbsp; Ankara, Turkey
              </a>
            </div>
          </div>
          <div>
            <form
              action=""
              className="flex flex-col gap-6 text-center font-semibold md:text-start"
            >
              <label htmlFor="name">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                className="border-transparent bg-[#f2f2f2] px-12 py-4 font-normal outline-none"
                placeholder='E.g: "Joe Shome"'
                type="text"
                id="name"
              />
              <label htmlFor="email">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                className="border-transparent bg-[#f2f2f2] px-12 py-4 font-normal outline-none"
                type="text"
                id="email"
                placeholder="youremail@example.com"
              />
              <label htmlFor="about">
                Tell us about it <span className="text-red-600">*</span>
              </label>
              <textarea
                className="border-transparent bg-[#f2f2f2] px-12 py-4 font-light outline-none"
                placeholder="Write here .."
                id="about"
                cols="60"
                rows="7"
              ></textarea>
              <button
                className="flex items-center justify-center bg-[#ff4d30] py-6 text-lg font-semibold text-white shadow-xl transition duration-300 hover:bg-[#fa3f30]"
                type="submit"
              >
                <IconMailOpened />
                &nbsp; Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <BookACar />
    </>
  );
};

export default Contact;
