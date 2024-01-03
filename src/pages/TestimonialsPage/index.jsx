import Image from "../../components/Image";
import BookACar from "../../components/BookACar";
import harold from "../../images/home/harold.jpg";
import ron from "../../images/home/ron.jpg";
import { IconQuote } from "@tabler/icons-react";
const Testimonials = () => {
  return (
    <>
      <Image Page="Testimonials" />
      <main className="mb-10 mt-[17.5rem]">
        <section className="flex flex-col items-center justify-center gap-10 bg-[#f8f8f8] px-6 py-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Reviewed by People</h2>
            <h3 className="text-[2.55rem] font-bold">Client's Testimonials</h3>
            <p className="mt-4 max-w-[730px] text-[0.95rem] text-[#706f7b]">
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>
          <div className="flex gap-10">
            <div className="max-w-[560px] flex-col bg-white px-8 py-16 shadow-2xl sm:max-h-[340px]">
              <p className="text-xl font-medium">
                "We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were very
                affordable. "
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
      </main>
      <BookACar />
    </>
  );
};

export default Testimonials;
