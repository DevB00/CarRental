import Image from "../../components/Image";
import BookACar from "../../components/BookACar";
import SelectCar from "../../images/home/icon1.png";
import Contact from "../../images/home/icon2.png";
import Drive from "../../images/home/icon3.png";
import CarTypes from "../../images/about/icon1.png";
import RentalOutlets from "../../images/about/icon2.png";
import RepairShop from "../../images/about/icon3.png";
import aboutImage from "../../images/about/aboutImage.jpg";
const About = () => {
  return (
    <>
      <Image Page="About" />
      <main className="mt-[17.5rem] pt-16 pb-28 px-6 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-between gap-20 py-8 md:flex-row">
          <img src={aboutImage} className="max-h-[26rem] -max-w-[25rem]" alt="people" />{" "}
          <div>
            <div className="flex flex-col gap-4 text-center md:text-start">
              <h3 className="text-2xl font-semibold">About Company</h3>
              <h3 className="text-[2.5em] font-bold">
                You start the engine{" "}
                <span className="block">and your adventure</span> begins
              </h3>
              <div className="text-[#706f7b]">
                <p className="max-w-[500px] text-[0.99rem]">
                  Certain but she but shyness why cottage. Guy the put
                  instrument sir entreaties affronting. Pretended exquisite see
                  cordially the you. Weeks quiet do vexed or whose. Motionless
                  if no to affronting imprudence no precaution. My indulged as
                  disposal strongly attended.
                </p>
              </div>
              <div className="mt-8 flex flex-col justify-between items-center gap-10 sm:flex-row">
                <div className="flex flex-col gap-6">
                  <img className="h-[40px] w-[70px]" src={CarTypes} alt="car" />{" "}
                  <div className="flex gap-4">
                    <h4 className="text-5xl font-bold">20</h4>
                    <p className="text-[#706f7b]">
                      Car <span className="block">Types</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <img
                    className="h-[40px] w-[70px]"
                    src={RentalOutlets}
                    alt="rental"
                  />
                  <div className="flex gap-4">
                    <h4 className="text-5xl font-bold">85</h4>
                    <p className="text-[#706f7b]">
                      Rental <span className="block">Outlets</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <img
                    className="h-[40px] w-[46px]"
                    src={RepairShop}
                    alt="shop"
                  />
                  <div className="flex gap-4">
                    <h4 className="text-5xl font-bold">75</h4>
                    <p className="text-[#706f7b]">
                      Repair <span className="block">Shop</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-36 flex w-full max-w-[1300px] flex-col items-center gap-6 text-center">
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
        </div>
      </main>
      <BookACar />
    </>
  );
};

export default About;
