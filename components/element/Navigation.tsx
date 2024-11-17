"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/LogoHz_Black.png";
import { usePathname } from "next/navigation";
import * as styles from "../styles";
import { IoClose } from "react-icons/io5";

interface NavProps {
  name: string;
  link: string;
}

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [showOverlay, setShowOverlay] = React.useState(false);

  // Hide and show overflow
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showOverlay]);

  const navList: NavProps[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Tour",
      link: "/tour/journera-kotakota", // or any default slug value you want to use
    },
    {
      name: "About Us",
      link: "/about",
    },
  ];

  const navigationOverlay = (
    <>
      <div
        className={`h-dvh p-4 w-svw top-0 left-0 z-20 absolute bg-blue-600 text-white ${styles.ContainerPadding} flex-col flex items-center justify-between`}
      >
        <div className={`h-12 px-4 flex w-full justify-end`}>
          <button onClick={() => setShowOverlay(!showOverlay)}>
            <IoClose size='2em' />
          </button>
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
          <ul className='flex flex-col font-medium text-center w-full'>
            {navList.map((nav, index) => (
              <li key={index} className=' w-full py-6 h-full text-2xl'>
                <Link
                  href={nav.link}
                  className={`transition duration-300 ease-in-out  ${
                    pathname === nav.link ? "text-white" : "text-gray-400"
                  }`}
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link href='/' className=''>
            <Image
              src={logo}
              width={500}
              height={300}
              alt='logo'
              className='object-contain w-40 lg:w-full'
            />
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div
      className={`w-full h-20 flex items-center ${styles.ContainerPadding} xl:h-32`}
    >
      {showOverlay && navigationOverlay}
      <div className='w-1/2 h-fit md:w-40 '>
        <div>
          <Link href='/' className=''>
            <Image
              src={logo}
              width={500}
              height={300}
              alt='logo'
              className='object-contain w-40 lg:w-full'
            />
          </Link>
        </div>
      </div>
      <div className='hidden md:flex flex-1 text-center justify-center'>
        <ul className='hidden lg:flex gap-8 font-medium'>
          {navList.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.link}
                className={`hover:text-black transition duration-300 ease-in-out ${
                  pathname === nav.link ? "text-black" : "text-gray-400"
                }`}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='w-1/2 h-full md:w-40 flex justify-end'>
        <button
          className='lg:hidden'
          onClick={() => setShowOverlay(!showOverlay)}
        >
          <div className='flex gap-1 flex-col'>
            <div className='w-7 h-1 bg-black rounded-sm'></div>
            <div className='w-7 h-1 bg-black rounded-sm'></div>
            <div className='w-7 h-1 bg-black rounded-sm'></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
