import homeBg from "../../images/home/home-bg.png";
import homeCar from "../../images/home/main-car.png";
import bookBg from "../../images/home/book-bg.png";
import SelectCar from "../../images/home/icon1.png";
import Contact from "../../images/home/icon2.png";
import Drive from "../../images/home/icon3.png";
import cross from "../../images/home/icon4.png";
import inclusive from "../../images/home/icon5.png";
import charges from "../../images/home/icon6.png";
import chooseCars from "../../images/home/chooseCars.png";
import harold from "../../images/home/harold.jpg";
import ron from "../../images/home/ron.jpg";
import appstore from "../../images/home/appstore.svg";
import playstore from "../../images/home/playstore.svg";
import { CAR_DATA } from "../../CarData";
import {
  IconCalendarEvent,
  IconCar,
  IconChevronRight,
  IconCircleCheck,
  IconMapPinFilled,
  IconQuote,
  IconChevronDown,
} from "@tabler/icons-react";
import { useState } from "react";
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

      <div className="mt-[180px] flex w-full flex-col gap-6 bg-[#2d2d2d] px-5 py-[70px] text-center text-white">
        <h2 className="text-5xl font-bold">
          Save big with our cheap car rental!
        </h2>
        <p className="text-2xl">
          Top Airports. Local Suppliers.{" "}
          <span className="text-[#ff4d30]">24/7</span> Support.
        </p>
      </div>

      <section className="mt-24 flex w-full flex-col items-center bg-chooseUs  bg-cover bg-c-p bg-no-repeat pb-20">
        <div className="w-full max-w-[1300px]">
          <div className="flex w-full items-center">
            <img src={chooseCars} alt="cars" className="w-full" />
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-14 p-4 text-center md:flex-row md:items-start md:text-start ">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-semibold">Why Choose Us</h2>
              <div className="flex flex-col  text-[2.4rem] font-bold">
                <p>Best valued deals </p>
                <p>you will ever find</p>
              </div>

              <p className="my-5 max-w-[550px] text-[#706f7b]">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <button className="flex w-44  bg-[#ff4d30] px-6 py-4 font-semibold text-white shadow-lg shadow-[#ff4d30] duration-200 hover:bg-[#f5391b]">
                Find Details&nbsp;
                <IconChevronRight />
              </button>
            </div>
            <div className="flex flex-col gap-14">
              <div className="flex flex-col items-center gap-2  sm:flex-row sm:items-start">
                <img className="w-[110px]" src={cross} alt="car" />
                <div className="flex max-w-[350px] flex-col gap-2">
                  <h3 className="text-2xl font-bold">Cross Country Drive</h3>
                  <p className="text-[0.99rem] text-[#706f7b]">
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start">
                <img className="w-[110px]" src={inclusive} alt="car" />
                <div className="flex max-w-[350px] flex-col gap-2">
                  <h3 className="text-2xl font-bold">All Inclusive Pricing</h3>
                  <p className="text-[0.99rem] text-[#706f7b]">
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start ">
                <img className="w-[110px]" src={charges} alt="car" />
                <div className="flex max-w-[350px] flex-col gap-2">
                  <h3 className="text-2xl font-bold">No Hidden Charges</h3>
                  <p className="text-[0.99rem] text-[#706f7b]">
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-10 bg-[#f8f8f8] px-6 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Reviewed by People</h2>
          <h3 className="text-[2.55rem] font-bold">Client's Testimonials</h3>
          <p className="mt-4 max-w-[730px] text-[0.95rem] text-[#706f7b]">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="flex gap-10">
          <div className="max-w-[560px] flex-col bg-white px-8 py-16 shadow-2xl sm:max-h-[340px]">
            <p className="text-xl font-medium">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center justify-center gap-4">
                <img
                  className="h-20 w-20 rounded-full"
                  src={harold}
                  alt="Harold Botter"
                />
                <div className="flex flex-col">
                  <p className="font-bold">Harold Botter</p>
                  <p>Belgrade</p>
                </div>
              </div>

              <IconQuote width={60} height={60} className="text-[#ff4d30]" />
            </div>
          </div>
          <div className="hidden max-h-[340px] max-w-[560px] flex-col bg-white px-8 py-16 shadow-2xl md:block">
            <p className="text-xl font-medium">
              "I've rented a car from this website and had an amazing
              experience! The booking was easy and the rental rates were very
              affordable."
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center justify-center gap-4">
                <img
                  className="h-20 w-20 rounded-full"
                  src={ron}
                  alt="Roni Rizzly"
                />
                <div className="flex flex-col">
                  <p className="font-bold">Roni Rizzly</p>
                  <p>Novi Sad</p>
                </div>
              </div>

              <IconQuote width={60} height={60} className="text-[#ff4d30]" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center gap-20 bg-faqBg bg-auto bg-c-p2 bg-no-repeat px-6  py-28">
        <div className="flex flex-col items-center gap-6 bg-white text-center font-bold">
          <h2 className="text-2xl">FAQ</h2>
          <h3 className="text-4xl">Frequently Asked Questions</h3>
          <p className="max-w-[750px] font-normal text-[#706f7b]">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className="bg-white shadow-xl">
          <div className="relative max-w-[800px] border-[0.5px] border-gray-200">
            <input
              type="checkbox"
              id="input1"
              className="peer absolute opacity-0"
            />
            <label
              htmlFor="input1"
              className="flex items-center justify-between px-14 py-6 text-lg font-medium transition duration-200 peer-checked:bg-[#ff4d30] peer-checked:text-white peer-checked:shadow-xl"
            >
              <span>1. What is special about comparing rental car deals?</span>
              <IconChevronDown />
            </label>
            <div className="max-h-0 overflow-hidden duration-[0.5s] ease-in-out peer-checked:max-h-[400px]">
              <p className="px-14 py-8 text-[0.9rem] text-[#706f7b] duration-[0.5s] peer-checked:opacity-100">
                Comparing rental car deals is important as it helps find the
                best deal that fits your budget and requirements, ensuring you
                get the most value for your money. By comparing various options,
                you can find deals that offer lower prices, additional services,
                or better car models. You can find car rental deals by
                researching online and comparing prices from different rental
                companies.
              </p>
            </div>
          </div>
          <div className="relative max-w-[800px] border-[0.5px] border-gray-200">
            <input
              type="checkbox"
              id="input2"
              className="peer absolute opacity-0"
            />
            <label
              htmlFor="input2"
              className="flex items-center justify-between px-14 py-6 text-lg font-medium transition duration-200 peer-checked:bg-[#ff4d30] peer-checked:text-white peer-checked:shadow-xl"
            >
              <span>2. How do I find the car rental deals?</span>
              <IconChevronDown />
            </label>
            <div className="transition-max-h max-h-0 overflow-hidden duration-[0.5s] ease-in-out peer-checked:max-h-[400px]">
              <p className="transition-max-h  px-14 py-8 text-[0.9rem] text-[#706f7b] duration-[0.5s] peer-checked:opacity-100">
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites such
                as Expedia, Kayak, and Travelocity allow you to compare prices
                and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on
                social media to be informed of any special deals or promotions.
              </p>
            </div>
          </div>
          <div className="relative max-w-[800px] border-[0.5px] border-gray-200">
            <input
              type="checkbox"
              id="input3"
              className="peer absolute opacity-0"
            />
            <label
              htmlFor="input3"
              className="flex items-center justify-between px-14 py-6 text-lg font-medium transition duration-200 peer-checked:bg-[#ff4d30] peer-checked:text-white peer-checked:shadow-xl"
            >
              <span>3. How do I find such low rental car prices?</span>
              <IconChevronDown />
            </label>
            <div className="transition-max-h max-h-0 overflow-hidden duration-[0.5s] ease-in-out peer-checked:max-h-[400px]">
              <p className="transition-max-h px-14 py-8 text-[0.9rem] text-[#706f7b] duration-[0.5s] peer-checked:opacity-100">
                Book in advance: Booking your rental car ahead of time can often
                result in lower prices. Compare prices from multiple companies:
                Use websites like Kayak, Expedia, or Travelocity to compare
                prices from multiple rental car companies. Look for discount
                codes and coupons: Search for discount codes and coupons that
                you can use to lower the rental price. Renting from an
                off-airport location can sometimes result in lower prices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center bg-[#f8f8f8] sm:bg-downloadBg sm:bg-c-p3 px-6 sm:bg-no-repeat">
        <div className="flex w-full max-w-[1300px] flex-col items-center gap-6 py-28 text-center sm:items-start sm:text-start">
          <h2 className="flex max-w-[550px] flex-col gap-3 text-[2.55rem] font-bold ">
            Download our app to get most out of it
          </h2>
          <p className="max-w-[560px] text-[0.9rem] font-medium leading-6 text-[#706f7b]">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <img src={appstore} alt="appstore" />
            <img src={playstore} alt="playstore" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
