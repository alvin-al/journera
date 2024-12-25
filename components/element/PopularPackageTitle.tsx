import React from "react";
import UnderlineButton from "./UnderlineButton";

const PopularPackageTitle = () => {
  return (
    <div>
      <div className='flex flex-col gap-8 items-center'>
        <h2 className='text-4xl md:text-5xl'>
          Paket <span className='text-[orange]'>Terpopuler</span>
        </h2>
        <p className='text-center px-4 text-lg text-gray-500'>
          Cek pilihan teratas kami, disukai lebih dari 10.000+ traveler.
        </p>
        <UnderlineButton href='/tour'>All Destination</UnderlineButton>
      </div>
    </div>
  );
};

export default PopularPackageTitle;
