import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const IncludeAndExcludePackage = () => {
  return (
    <div>
      <div className='flex h-fit w-fit flex-col lg:flex-row gap-4 lg:gap-0'>
        <div className='w-48'>
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
        <div className='w-[1px] mx-8 bg-gray-800'></div>
        <div className='w-fit '>
          <div>
            <p className='text-lg font-semibold mb-2'>Biaya tidak termasuk:</p>
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
    </div>
  );
};

export default IncludeAndExcludePackage;
