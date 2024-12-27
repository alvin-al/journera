"use client";
import React, { useState, useEffect } from "react";
import DestinationCard from "@/components/element/DestinationCard";
import * as styles from "@/components/styles";
import TitlePage from "@/components/section/TitlePage";
import { PuffLoader } from "react-spinners";
import { PackageProps } from "@/types/packages";

const Tour = () => {
  const [packages, setPackages] = useState<PackageProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("/api/packages");
        const data: PackageProps[] = await response.json();
        setPackages(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  return (
    <div
      className={`flex flex-col ${styles.ContainerContentPadding} h-full mb-40`}
    >
      <TitlePage
        title='Paket Wisata'
        description='Jelajahi Jogjakarta bersama Journera'
      />
      {loading ? (
        <div className='w-full h-[40vh] flex justify-center items-center'>
          <PuffLoader color='#ff6600' />
        </div>
      ) : (
        <div className='md:w-full gap-4 md:grid md:grid-cols-3 xl:max-w-6xl xl:gap-8 md:flex-row'>
          {packages.map((pkg) => {
            return (
              <DestinationCard
                title={pkg.name}
                image={pkg.featuredImage}
                price={pkg.price}
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

export default Tour;
