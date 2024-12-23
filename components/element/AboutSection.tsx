import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface AboutSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: StaticImageData;
  imageLeft?: boolean;
}

const AboutSection = ({
  icon,
  title,
  description,
  image,
  imageLeft,
}: AboutSectionProps) => {
  return (
    <div className='flex w-full h-full flex-col md:flex-row items-center'>
      <div
        className={`md:w-1/2 overflow-hidden flex justify-center items-center md:p-8 h-[400px] ${
          imageLeft ? "md:order-2" : ""
        }`}
      >
        <Image
          src={image}
          alt='Malioboro'
          className='object-cover w-full h-full rounded-xl'
          width={400}
          height={400}
        />
      </div>
      <div className='md:w-1/2 flex flex-col gap-6 p-8'>
        <div className='text-5xl'>{icon}</div>
        <div className='text-3xl'>{title}</div>
        <div className='text-base text-gray-500'>{description}</div>
      </div>
    </div>
  );
};

export default AboutSection;
