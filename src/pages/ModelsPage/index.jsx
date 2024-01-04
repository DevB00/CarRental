import Image from "../../components/Image";
import BookACar from "../../components/BookACar";
import Golf6 from "../../images/cars/golf6-box.png";
import AudiA1 from "../../images/cars/audi-box.png";
import Toyota from "../../images/cars/toyota-box.png";
import Bmw320 from "../../images/cars/bmw-box.png";
import Benz from "../../images/cars/benz-box.png";
import Passat from "../../images/cars/passat-box.png";
import { IconCar, IconStar } from "@tabler/icons-react";

const CAR_DATA = [
  {
    name: "Audi A1",
    price: "45",
    img: AudiA1,
    model: "Audi",
    mark: "A1",
    year: "2012",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Gasoline",
  },

  {
    name: "Golf 6",
    price: "37",
    img: Golf6,
    model: "Golf 6",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },

  {
    name: "Toyota",
    price: "30",
    img: Toyota,
    model: "Camry",
    mark: "Toyota",
    year: "2006",
    doors: "4/5",
    air: "Yes",
    transmission: "Automatic",
    fuel: "Hybrid",
  },

  {
    name: "BMW 320",
    price: "35",
    img: Bmw320,
    model: "320",
    mark: "BMW",
    year: "2012",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },

  {
    name: "Mercedes",
    price: "50",
    img: Benz,
    model: "Benz GLK",
    mark: "Mercedes",
    year: "2006",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
  },

  {
    name: "VW Passat",
    price: "25",
    img: Passat,
    model: "Passat CC",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    air: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
  },
];

const CarModel = ({ car }) => {
  return (
    <div className="flex flex-col items-center shadow-xl">
      <img className="h-[240px] w-[350px]" src={car.img} alt={car.name} />
      <div className="flex w-full flex-col items-center gap-6 px-8 py-6">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">{car.name}</p>
            <div className="flex gap-1">
              <IconStar size={16} />
              <IconStar size={16} />
              <IconStar size={16} />
              <IconStar size={16} />
              <IconStar size={16} />
            </div>
          </div>
          <div className="flex flex-col text-end">
            <p className="text-2xl font-bold">${car.price}</p>
            <p className="text-sm text-[#]">per day</p>
          </div>
        </div>
        <div className="flex h-full w-full flex-col gap-3 text-lg font-medium text-[#777]">
          <div className="flex w-full justify-between">
            <div className="flex gap-2">
              <IconCar /> {car.model}
            </div>
            <div>{car.doors}</div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex gap-2">
              <IconCar /> {car.transmission}
            </div>
            <div>{car.fuel}</div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-200"></div>
        <a className="h-full w-full" href="/">
          {" "}
          <button className="w-full rounded-lg bg-[#ff4d30] py-4 text-lg font-bold text-white shadow-lg shadow-[#f76d57] transition duration-300 hover:bg-[#f53314] hover:shadow-[#f55036]">
            Book Ride
          </button>
        </a>
      </div>
    </div>
  );
};

const Models = () => {
  return (
    <>
      <Image Page="Vehicle Models" />
      <main className="mt-[17.5rem] flex items-center justify-center">
        <div className="bg-gray grid grid-cols-1 items-center justify-center gap-12 px-4 pb-32 pt-20 sm:grid-cols-2 md:grid-cols-3">
          {CAR_DATA.map((car) => (
            <CarModel key={car.name} car={car} />
          ))}
        </div>
      </main>
      <BookACar />
    </>
  );
};

export default Models;
