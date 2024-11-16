"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/LogoHz_Black.png";
import { usePathname } from "next/navigation";

interface NavProps {
  name: string;
  link: string;
}

const Navigation: React.FC = () => {
  const pathname = usePathname();

  const navList: NavProps[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Tour",
      link: "/tour",
    },
    {
      name: "About Us",
      link: "/about",
    },
  ];

  return (
    <div className='w-full h-32 flex px-12 items-center'>
      <div className='w-40'>
        <Link href='/'>
          <Image src={logo} width={500} height={300} alt='logo' />
        </Link>
      </div>
      <div className='flex flex-1 text-center justify-center'>
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
      <div className='w-40 flex justify-end'>
        <button className='lg:hidden'>
          <div className='flex gap-1 flex-col'>
            <div className='w-8 h-1 bg-black rounded-sm'></div>
            <div className='w-8 h-1 bg-black rounded-sm'></div>
            <div className='w-8 h-1 bg-black rounded-sm'></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
