import homeBg from "../../images/home/home-bg.png";
import homeCar from "../../images/home/main-car.png";
import bookBg from "../../images/home/book-bg.png";
import {
  IconCalendarEvent,
  IconCar,
  IconChevronRight,
  IconCircleCheck,
  IconMapPinFilled,
} from "@tabler/icons-react";

const Home = () => {
  return (
    <main id="home" className="mt-56 flex flex-col items-center">
      <img
        className="absolute right-0 top-0 -z-10 hidden sm:block"
        src={homeBg}
        alt="home-background"
      />
      <section className="relative flex w-full max-w-[1300px] justify-center text-center sm:justify-start sm:text-start">
        <div className="flex flex-col items-center  gap-4 sm:items-start">
          <h2 className="text-2xl font-bold">Plan your trip now</h2>
          <p className="text-5xl font-bold">
            Save <span className="text-[#ff4d30]">big</span> with our{" "}
            <span className="block">car rental</span>
          </p>
          <p className="max-w-[461px] text-gray-400">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="flex gap-6 font-semibold text-white">
            <button className="flex bg-[#ff4d30] px-4 py-4 shadow-md transition duration-300 hover:bg-[#fa3f20] hover:shadow-[#fa3f20]">
              Book Ride &nbsp; <IconCircleCheck />
            </button>
            <button className="flex border-2  border-black bg-black px-4 py-4 shadow-lg transition  duration-300 hover:bg-transparent hover:text-black">
              Learn More &nbsp; <IconChevronRight />
            </button>
          </div>
        </div>
        <div
          className="absolute right-1 top-[-35px] -z-10 hidden w-[65%]
          sm:block"
        >
          <img src={homeCar} alt="home-car" />
        </div>
      </section>

      <section
        className="mt-56 flex w-full max-w-[1300px] flex-col gap-8 bg-white p-12 shadow-2xl sm:mt-80"
        style={{
          backgroundImage: `url(${bookBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h2 className="text-2xl font-bold">Book a car</h2>
        <form
          id="book-car"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          <div className="flex flex-col gap-3 text-sm">
            <label className="text-lg font-medium" htmlFor="car-type">
              <IconCar className="inline" /> Select Your Car Type{" "}
              <span className="font-semibold text-red-500">*</span>
            </label>
            <select className="border-2 px-3 py-3 text-gray-400">
              <option>Select your car type</option>
              <option value="Audi A1 S-Line">Audi A1 S-Line</option>
              <option value="VW Golf 6">VW Golf 6</option>
              <option value="Toyota Camry">Toyota Camry</option>
              <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
              <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
              <option value="VW Passat CC">VW Passat CC</option>
            </select>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <label className="text-lg font-medium" htmlFor="pick-up-lo">
              <IconMapPinFilled className="inline" /> Pick-up{" "}
              <span className="font-semibold text-red-500">*</span>
            </label>
            <select className="border-2 px-3 py-3 text-gray-400">
              <option>Select pick up location</option>
              <option>New York City, NY</option>
              <option>Los Angeles, CA</option>
              <option>Chicago, IL</option>
              <option>Miami, FL</option>
              <option>San Francisco, CA</option>
            </select>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <label className="text-lg font-medium" htmlFor="drop-off-lo">
              <IconMapPinFilled className="inline" /> Drop-off
              <span className="font-semibold text-red-500">*</span>
            </label>
            <select className="border-2 px-3 py-3 text-gray-400">
              <option>Select drop off location</option>
              <option>Los Angeles, CA</option>
              <option>New York City, NY</option>
              <option>Chicago, IL</option>
              <option>Miami, FL</option>
              <option>San Francisco, CA</option>
            </select>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <label className="text-lg font-medium" htmlFor="pick-up-date">
              <IconCalendarEvent className="inline" /> Pick-up{" "}
              <span className="font-semibold text-red-500">*</span>
            </label>
            <input
              className="border-2 px-3 py-3 text-gray-400"
              type="date"
              id="pick-up-date"
            />
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <label className="text-lg font-medium" htmlFor="drop-off-date">
              <IconCalendarEvent className="inline" /> Drop-of{" "}
              <span className="font-semibold text-red-500">*</span>
            </label>
            <input
              className="border-2 px-3 py-3 text-gray-400"
              type="date"
              id="drop-off-date"
            />
          </div>
          <div className="flex justify-center sm:mb-1 sm:mt-10">
            <button
              className="w-full bg-[#ff4d30]
            py-3 text-lg font-semibold text-white shadow-lg shadow-[#ff4d30] transition duration-300 hover:bg-[#fa3f20] hover:shadow-[#fa3f20] "
            >
              Search
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Home;
