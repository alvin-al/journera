import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import { TiStarFullOutline } from "react-icons/ti";

interface TestimonialCardProp {
  image: string | StaticImageData;
  name: string;
  city: string;
  desc: string;
}

const TestimonialCard = ({ image, name, city, desc }: TestimonialCardProp) => {
  return (
    <div className=' w-full h-full max-w-96 lg:max-w-80 p-4'>
      <div className='w-24 h-24 relative bg-red-400 rounded-full overflow-hidden'>
        <Image
          src={image}
          width={200}
          height={200}
          alt={name}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex flex-col mt-4 gap-4'>
        <div>
          <p className='text-xl font-medium'>{name}</p>
          <p className='text-gray-500'>{city}</p>
        </div>
        <p className='leading-relaxed text-gray-500'>&quot;{desc}&quot;</p>
        <div className='flex h-12 w-fit'>
          <TiStarFullOutline size='1.5em' />
          <TiStarFullOutline size='1.5em' />
          <TiStarFullOutline size='1.5em' />
          <TiStarFullOutline size='1.5em' />
          <TiStarFullOutline size='1.5em' />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
