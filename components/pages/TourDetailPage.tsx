import React from "react";
import SecondNavigation from "../element/SecondNavigation";
import journerakonten from "./../../template-content/journera-kotakota.json";
import * as styles from "./../styles";
import Image from "next/image";
import journerathumbnail from "./../../public/Journera KotaKota.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import Footer from "../section/Footer";

const TourDetailPage = () => {
  return (
    <div>
      <SecondNavigation />
      {/* Content Container */}
      <div
        className={`${styles.ContainerContentPadding} flex flex-col lg:flex-row mb-24`}
      >
        {/* Kiri */}
        <div className='lg:w-2/3'>
          {/* Title */}
          <h1 className={`text-4xl py-8 md:text-5xl text-gray-800 `}>
            {journerakonten.name}
          </h1>
          {/* Image */}
          <div className='w-full py-4 h-fit overflow-hidden relative'>
            <Image
              src={journerathumbnail}
              alt='featured_image'
              width={500}
              height={500}
              className='object-contain w-full h-full rounded-lg max-w-[700px]'
            />
          </div>
          {/* Description */}
          <div className='py-8'>
            <h3 className='text-3xl mb-4' id='#detail'>
              Detail
            </h3>
            <p className='text-lg leading-relaxed text-gray-600'>
              {journerakonten.description}
            </p>
          </div>
          {/* Itinerary */}
          <div className='py-8'>
            <h3 className='text-3xl mb-4' id='#itenary'>
              Itenary
            </h3>
            <ul className='list-disc list-inside flex flex-col gap-2'>
              {journerakonten.itinerary.map((itinerary, index) => (
                <li key={index} className='text-lg text-gray-600'>
                  {itinerary}
                </li>
              ))}
            </ul>
          </div>
          {/* Include  & Exclude */}
          <div className='py-8'>
            <div>
              <p className='text-lg font-semibold mb-2'>Biaya termasuk:</p>
              <ul className='flex flex-col gap-2'>
                <li className='flex gap-3 items-center text-lg text-gray-600'>
                  <FaCheckCircle color='green' />
                  Sewa Mobil
                </li>
                <li className='flex gap-3 items-center text-lg text-gray-600'>
                  <FaCheckCircle color='green' />
                  Driver
                </li>
                <li className='flex gap-3 items-center text-lg text-gray-600'>
                  <FaCheckCircle color='green' />
                  BBM
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <p className='text-lg font-semibold mb-2'>
                Biaya tidak termasuk:
              </p>
              <ul className='flex flex-col gap-2'>
                <li className='flex gap-3 items-center text-lg text-gray-600'>
                  <FaCircleXmark color='red' />
                  Tiket masuk
                </li>
                <li className='flex gap-3 items-center text-lg text-gray-600'>
                  <FaCircleXmark color='red' />
                  Biaya wahana
                </li>
                <li className='flex gap-3 items-center text-lg text-gray-600'>
                  <FaCircleXmark color='red' />
                  Makan
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Kanan */}
        <div className='lg:w-1/3 pl-4 pt-48 w-full'>
          <div className='w-full bg-white border h-56 flex flex-col rounded-md sticky top-28 justify-between overflow-hidden'>
            <div className='px-8 pt-8'>
              <div className='text-white rounded-md px-6 py-2 bg-blue-500 w-fit h-fit text-sm font-medium'>
                Best Deals!
              </div>
            </div>
            <div className='h-fit px-8'>
              <p className='text-3xl font-semibold'>Rp 500.000</p>
              <p className='text-lg text-gray-500 line-through font-semibold'>
                Rp 600.000
              </p>
            </div>
            <div className='h-12'>
              <button className='w-full h-full bg-blue-500 text-white text-lg font-semibold'>
                PESAN SEKARANG
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TourDetailPage;
