import homeBg from "../../images/home/home-bg.png";
import homeCar from "../../images/home/main-car.png";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";
const Home = () => {
  return (
    <main id="home" className="mt-56 flex justify-center">
      <img
        className="absolute right-0 top-0 -z-10 hidden sm:block"
        src={homeBg}
        alt="home-background"
      />
      <section className="relative flex w-full justify-center text-center sm:justify-start sm:text-start md:w-[1300px]">
        <div className="flex flex-col items-center  gap-4 sm:items-start">
          <h2 className="text-2xl font-bold">Plan your trip now</h2>
          <p className="text-5xl font-bold">
            Save <span className="text-[#ff4d30]">big</span> with our{" "}
            <span className="block">car rental</span>
          </p>
          <p className="max-w-[461px] text-gray-600">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="flex gap-6 font-semibold text-white">
            <button className="flex bg-[#ff4d30] px-4 py-4 shadow-md transition duration-200 hover:bg-[#fa3f20] hover:shadow-[#fa3f20]">
              Book Ride &nbsp; <IconCircleCheck />
            </button>
            <button className="flex border-2  border-black bg-black px-4 py-4 shadow-lg transition  duration-200 hover:bg-transparent hover:text-black">
              Learn More &nbsp; <IconChevronRight />
            </button>
          </div>
        </div>
        <div className="absolute right-1 top-[-25px] -z-10 hidden sm:block">
          <img src={homeCar} alt="home-car" />
        </div>
      </section>
    </main>
  );
};

export default Home;
