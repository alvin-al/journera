"use client";

import React, { useEffect, useState } from "react";
import * as styles from "../styles";
import PopularPackageTitle from "../element/PopularPackageTitle";
import DestinationCard from "../element/DestinationCard";

interface PopularPackage {
  id: string;
  name: string;
  featuredImage: string;
  itinerary: object;
  price: number;
  originalPrice: number;
  link: string;
  slug: string;
}

const PopularPackage: React.FC = () => {
  const [packages, setPackages] = useState<PopularPackage[]>([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("/api/packages");
        const data: PopularPackage[] = await response.json();
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages : ", error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div
      className={`${styles.ContainerPadding} h-fit flex py-24 justify-start items-center flex-col gap-16`}
    >
      <PopularPackageTitle />
      <div className='md:w-full gap-4 md:grid md:grid-cols-3 xl:max-w-6xl xl:gap-8 md:flex-row'>
        {/* <DestinationCard
          title={dataPaket[0].title}
          image={dataPaket[0].image}
          price={dataPaket[0].price}
          link={dataPaket[0].link}
        /> */}
        {packages.map((pkg) => {
          return (
            <DestinationCard
              title={pkg.name}
              image={pkg.featuredImage}
              price={pkg.originalPrice.toString()}
              link={pkg.slug}
              key={pkg.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopularPackage;
