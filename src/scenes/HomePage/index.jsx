import homeBg from "../../images/home/home-bg.png";
import homeCar from "../../images/home/main-car.png";
import bookBg from "../../images/home/book-bg.png";
import SelectCar from "../../images/home/icon1.png";
import Contact from "../../images/home/icon2.png";
import Drive from "../../images/home/icon3.png";
import homeBg2 from "../../images/home/bg.png";
import { CAR_DATA } from "../../CarData";
import {
  IconCalendarEvent,
  IconCar,
  IconChevronRight,
  IconCircleCheck,
  IconMapPinFilled,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
const Home = () => {
  const [selectedCar, setSelectedCar] = useState("Audi A1 S-Line");
  const [carData, setCarData] = useState(CAR_DATA.flat()[0]);
  const carsList = [
    "Audi A1 S-Line",
    "VW Golf 6",
    "Toyota Camry",
    "BMW 320 ModernLine",
    "Mercedes-Benz GLK",
    "VW Passat CC",
  ];

  return (
    <main>
      <div id="home" className="mt-56 flex flex-col items-center px-6 py-8">
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
            <p className="max-w-[461px] text-gray-500">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="flex h-16 gap-6 font-semibold  text-white">
              <button className="flex bg-[#ff4d30] px-4 py-4 shadow-md transition duration-300 hover:bg-[#fa3f20] hover:shadow-[#fa3f20]">
                Book Ride&nbsp;
                <IconCircleCheck />
              </button>
              <button className="flex border-2  border-black bg-black px-4 py-4 shadow-lg transition  duration-300 hover:bg-transparent hover:text-black">
                Learn More&nbsp;
                <IconChevronRight />
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
          className="mt-80 flex w-full max-w-[1300px] flex-col gap-8 rounded-lg bg-white p-12 shadow-2xl"
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

        <section className="mt-36 flex w-full max-w-[1300px] flex-col items-center gap-6 text-center">
          <h2 className="text-2xl font-semibold">Plan your trip now</h2>

          <h3 className="text-[2.5rem] font-bold">Quick & easy car rental</h3>

          <div className="grid grid-cols-1 gap-x-32 gap-y-14 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center  gap-4">
              <img className="h-[170px] w-[168px]" src={SelectCar} alt="icon" />

              <h4 className="text-2xl font-bold">Select Car</h4>

              <p className="max-w-[18rem] text-sm text-gray-500">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="flex flex-col items-center  gap-4">
              <img className="h-[170px] w-[168px]" src={Contact} alt="icon" />

              <h4 className="text-2xl font-bold">Contact Operator</h4>

              <p className="max-w-[18rem] text-sm text-gray-500">
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <img className="h-[170px] w-[168px]" src={Drive} alt="icon" />

              <h4 className="text-2xl font-bold">Let's Drive</h4>

              <p className="max-w-[18rem] text-sm text-gray-500">
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-36 flex w-full max-w-[1300px] flex-col items-center  gap-6 text-center">
          <h2 className="text-2xl font-semibold">Vehicle Models</h2>
          <h3 className="text-[2.5rem] font-bold">Our rental Fleet</h3>
          <p className="max-w-[34rem] text-gray-500">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
          <div className="mt-5 flex min-h-[25rem]  w-full flex-wrap items-center justify-center gap-4 sm:justify-between">
            <div className="flex w-full flex-col gap-3 md:w-auto">
              {carsList.map((carName, index) => (
                <div key={carName}>
                  <button
                    className={twMerge(
                      `w-full p-3.5 text-left text-xl font-semibold transition-all duration-200 hover:bg-[#ff4d30] hover:text-white`,
                      `${
                        selectedCar === carName
                          ? "bg-[#ff4d30] text-white"
                          : "bg-[#e9e9e9]"
                      }`,
                    )}
                    onClick={() => {
                      setSelectedCar(carName);
                      setCarData(CAR_DATA.flat()[index]);
                    }}
                  >
                    {carName}
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <img className="w-[460px]" src={carData.img} alt="car" />
            </div>
            <div className="flex min-h-full justify-center md:w-min">
              <div className="w-[250px]">
                <h4 className="bg-[#ff4d30] p-1 text-lg text-white">
                  <span className="text-2xl font-bold">${carData.price}</span> /
                  rent per day
                </h4>
                <div className="flex flex-col border-2 border-black">
                  <p className="py-1 text-lg">Model | {carData.model}</p>
                  <p className="py-1 text-lg">Mark | {carData.mark}</p>
                  <p className="py-1 text-lg">Year | {carData.year}</p>
                  <p className="py-1 text-lg">Doors | {carData.doors}</p>
                  <p className="py-1 text-lg">AC | {carData.air}</p>
                  <p className="py-1 text-lg">
                    Transmission | {carData.transmission}
                  </p>
                  <p className="py-1 text-lg">Fuel | {carData.fuel}</p>
                </div>

                <button className="mt-2 w-full bg-[#ff4d30] px-4 py-4 text-xl  font-semibold text-white shadow-xl transition duration-300 hover:bg-[#fa3f20]">
                  RESERVE NOW
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="my-[180px] flex w-full flex-col gap-6 bg-[#2d2d2d] py-[70px] text-center text-white">
        <h2 className="text-5xl font-bold">
          Save big with our cheap car rental!
        </h2>
        <p className="text-2xl">
          Top Airports. Local Suppliers.{" "}
          <span className="text-[#ff4d30]">24/7</span> Support.
        </p>
      </div>
      <div className="mt-56 flex flex-col items-center px-6 py-8">
        <section className="bg-chooseUs bg-white"></section>
      </div>
    </main>
  );
};

export default Home;
