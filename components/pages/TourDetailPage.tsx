import React from "react";
import SecondNavigation from "../element/SecondNavigation";
import * as styles from "./../styles";
import Image from "next/image";
import FAQ from "../section/FAQ";
import DetailPackage from "../section/DetailPackage";
import ItineraryPackage from "../section/ItineraryPackage";
import IncludeAndExcludePackage from "../section/IncludeAndExcludePackage";
import OrderPackageCard from "../section/OrderPackageCard";
import { PackageProps } from "@/types/packages";

const TourDetailPage = ({
  name,
  description,
  featuredImage,
  itinerary,
  price,
  originalPrice,
}: PackageProps & { itinerary: string[] }) => {
  return (
    <div>
      <SecondNavigation />
      {/* Content Container */}
      <div
        className={`${styles.ContainerContentPadding} flex flex-col lg:flex-row mb-24 `}
      >
        {/* Kiri */}
        <div className='lg:w-2/3 lg:pr-8 flex flex-col gap-8 '>
          {/* Title */}
          <h1 className={`text-4xl pt-8 md:text-5xl text-gray-800 `}>{name}</h1>
          {/* Image */}
          <div className='w-full py-4 h-fit overflow-hidden relative'>
            <Image
              src={featuredImage}
              alt={featuredImage}
              width={500}
              height={500}
              className='object-contain w-full h-full rounded-lg max-w-[700px]'
              priority={true}
            />
          </div>
          <DetailPackage description={description} id='detail' />
          <ItineraryPackage itinerary={itinerary} />
          <IncludeAndExcludePackage />
          <div
            className='py-8 scroll-mt-12 transition-all duration-100'
            id='faq'
          >
            <FAQ />
          </div>
        </div>
        {/* Kanan */}
        <div className='lg:w-1/3 lg:pl-4 lg:pt-48 w-full'>
          <div className='sticky top-28'>
            <OrderPackageCard
              price={originalPrice}
              discount={price}
              name={name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;
