import { IconPhoneCall } from "@tabler/icons-react";

const BookACar = () => {
  return (
    <div className="w-full bg-bookingBg">
      <div className="flex h-full w-full flex-wrap items-center py-[4.5rem] justify-center gap-14 bg-[#2d2d2d] bg-opacity-[89%]">
        <h1 className="text-[2rem] text-center sm:text-start font-bold text-white">
          Book a car by getting in touch with us
        </h1>
        <h2 className="flex text-3xl font-bold text-[#ff4d30]">
          <IconPhoneCall size={40} /> <span>(123) -456-789</span>
        </h2>
      </div>
    </div>
  );
};

export default BookACar;
