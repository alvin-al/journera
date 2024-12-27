"use client";
import React, { useEffect, useState } from "react";
import * as styles from "../styles";
import PopularPackageTitle from "../element/PopularPackageTitle";
import DestinationCard from "../element/DestinationCard";
import { PackageProps } from "@/types/packages";
import { PuffLoader } from "react-spinners";

const PopularPackage: React.FC = () => {
  const [packages, setPackages] = useState<PackageProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("/api/packages");
        const data: PackageProps[] = await response.json();
        setPackages(data.slice(0, 3));
        setLoading(false);
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
      {loading ? (
        <div className='md:w-full gap-4 xl:max-w-6xl xl:min-h-[55vh] flex justify-center items-center'>
          <PuffLoader />
        </div>
      ) : (
        <div className='md:w-full gap-4 md:grid md:grid-cols-3 xl:max-w-6xl xl:min-h-[55vh] xl:gap-8 md:flex-row'>
          {packages.map((pkg) => {
            return (
              <DestinationCard
                title={pkg.name}
                image={pkg.featuredImage}
                price={pkg.originalPrice}
                link={pkg.slug}
                key={pkg.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PopularPackage;
