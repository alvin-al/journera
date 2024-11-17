import React from "react";
import * as styles from "./../styles";
import logo from "../../public/LogoHz_White.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className={`h-[70%] lg:h-80 bg-slate-800 text-white ${styles.ContainerPadding} py-8 md:py-12 flex flex-col gap-8 lg:gap-0 lg:flex-row `}
    >
      <div className="mb-4 lg:w-1/4">
        <div className="">
          <Image src={logo} width={200} height={100} alt="logo" />
        </div>
      </div>
      <div className="lg:w-1/4">
        <h4 className="text-3xl mb-8">Contact</h4>
        <div className="flex gap-2 flex-col">
          <p>
            Whatsapp :{" "}
            <span>
              <Link href="/" className="text-gray-400 hover:text-white">
                0858-2020-2020
              </Link>
            </span>
          </p>
          <p>
            Email :{" "}
            <span>
              <Link href="/" className="text-gray-400 hover:text-white">
                journera@gmail.com
              </Link>
            </span>
          </p>
          <p>
            Instagram :{" "}
            <span>
              <Link href="/" className="text-gray-400 hover:text-white">
                @journera.id
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="lg:w-1/4">
        <h4 className="text-3xl mb-8">Paket Journera</h4>
        <div className="flex gap-2 flex-col">
          <p>
            <Link href="/" className="text-gray-400 hover:text-white">
              Journera KotaKota
            </Link>
          </p>
          <p>
            <Link href="/" className="text-gray-400 hover:text-white">
              Journera Utara
            </Link>
          </p>
          <p>
            <Link href="/" className="text-gray-400 hover:text-white">
              Journera Timur
            </Link>
          </p>
          <p>
            <Link href="/" className="text-gray-400 hover:text-white">
              Journera Barat
            </Link>
          </p>
        </div>
      </div>
      <div className="lg:w-1/4"></div>
    </div>
  );
};

export default Footer;
