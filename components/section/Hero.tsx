import React from "react";
import * as styles from "../styles";
import RoundedTitle from "../element/RoundedTitle";
import Image from "next/image";
import HeroImage from "./../../public/Hero.png";

const Hero: React.FC = () => {
  return (
    <div
      className={`flex flex-col lg:flex-row w-full  ${styles.ContainerPadding} gap-8 py-4 lg:py-12 h-[90vh] justify-between pt-10 bg-gray-50`}
    >
      {/* Kiri */}
      <div className='flex flex-col gap-4 md:gap-6 lg:w-1/2'>
        <RoundedTitle>Book with us!</RoundedTitle>
        <h1 className='text-5xl leading-snug md:text-6xl xl:text-7xl font-bold md:leading-tight lg:leading-tight xl:leading-tight'>
          Temukan <br />
          Tempat
          <br /> <span className='text-blue-500'>Petualanganmu</span>
        </h1>
        <p className='text-[1.25rem] leading-relaxed'>
          Temukan tempat keren dengan penawaran eksklusif.{" "}
          <br className='hidden xl:block' />
          Makan, belanja, dan eksplor tempat seru di Yogyakarta
        </p>
      </div>
      {/* Kanan */}
      <div className='lg:w-1/2'>
        <div className='w-full bg-yellow-50 h-fit overflow-hidden rounded-xl'>
          <Image
            src={HeroImage}
            width={1000}
            height={400}
            alt='hero'
            className='object-fill'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
