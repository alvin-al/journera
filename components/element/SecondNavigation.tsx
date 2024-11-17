import React from "react";
import * as styles from "../styles";
import Link from "next/link";

const SecondNavigation = () => {
  const secondHeaderStyle =
    "hidden md:block h-full w-full px-8 font-medium text-gray-500 hover:text-black transition duration-300 ease-in-out hover:border-blue-500 border-b-4 border-transparent";

  return (
    <div className='sticky top-0 bg-white z-10'>
      <div
        className={`hidden h-16 border-b md:flex ${styles.ContainerContentPadding} items-center`}
      >
        <ul className='flex w-fit h-full'>
          <li className='w-full h-full'>
            <Link href='#detail'>
              <button className={`${secondHeaderStyle}`}>Detail</button>
            </Link>
          </li>
          <li className='w-full h-full'>
            <Link href='#itinerary'>
              <button className={`${secondHeaderStyle}`}>Itinerary</button>
            </Link>
          </li>
          <li className='w-full h-full'>
            <Link href='#faq'>
              <button className={`${secondHeaderStyle}`}>FAQ </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecondNavigation;
