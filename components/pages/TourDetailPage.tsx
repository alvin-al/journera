import React from "react";
import SecondNavigation from "../element/SecondNavigation";
import journerakonten from "./../../template-content/journera-kotakota.json";
import * as styles from "./../styles";
import Image from "next/image";
import journerathumbnail from "./../../public/Journera KotaKota.jpg";
import Footer from "../section/Footer";
import FAQ from "../section/FAQ";
import DetailPackage from "../section/DetailPackage";
import ItineraryPackage from "../section/ItineraryPackage";
import IncludeAndExcludePackage from "../section/IncludeAndExcludePackage";
import OrderPackageCard from "../section/OrderPackageCard";

const TourDetailPage = () => {
  return (
    <div>
      <SecondNavigation />
      {/* Content Container */}
      <div
        className={`${styles.ContainerContentPadding} flex flex-col lg:flex-row mb-24 `}
      >
        {/* Kiri */}
        <div className='lg:w-2/3 lg:pr-8 lg:flex lg:flex-col lg:gap-8'>
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
          <DetailPackage description={journerakonten.description} id='detail' />
          <ItineraryPackage itinerary={journerakonten.itinerary} />
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
              price={journerakonten.price.original}
              discount={journerakonten.price.discounted}
              name={journerakonten.name}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TourDetailPage;
