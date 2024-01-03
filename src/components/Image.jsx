import React from "react";

const Image = ({ Page }) => {
  return (
    <div className="bg-topImage bg-c-p4 absolute top-0 -z-10  h-[25rem] w-full bg-cover  bg-no-repeat">
      <div className="flex h-full w-full items-center justify-center  bg-[hsla(0,0%,100%,.92)] px-6">
        <div className="flex flex-col gap-4 w-full max-w-[1300px] items-start">
          <h1 className="text-4xl font-bold">{Page}</h1>
          <h2 className="font-semibold">Home / {Page}</h2>
        </div>
      </div>
    </div>
  );
};

export default Image;
