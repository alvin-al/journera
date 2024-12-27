import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface DestinationCardProps {
  title: string;
  image: string | StaticImageData;
  price: number;
  link: string;
}

const DestinationCard = ({
  title,
  image,
  price,
  link,
}: DestinationCardProps) => {
  return (
    <Link href={"/tour/" + link}>
      <div className='w-full gap-2 h-fit hover:shadow-md flex flex-col p-4 max-w-[380px]'>
        <div>
          <Image
            src={image}
            width={300}
            height={300}
            alt={title}
            className='object-contain w-full'
            unoptimized
          />
        </div>
        <div>
          <h3 className='uppercase text-xl font-semibold'>{title}</h3>
        </div>
        <div>
          <p className='text-sm text-gray-400'>
            From
            <span className='text-xl text-blue-500 ml-1 font-semibold'>
              Rp {Number(price).toLocaleString("ID")}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
