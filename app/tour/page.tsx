"use client";
import React, { useState, useEffect } from "react";
import DestinationCard from "@/components/element/DestinationCard";
import * as styles from "@/components/styles";
import TitlePage from "@/components/section/TitlePage";

interface Package {
  id: string;
  name: string;
  featuredImage: string;
  itinerary: object;
  price: string;
  originalPrice: number;
  link: string;
  slug: string;
}

const PackagesPage = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("/api/packages");
        const data: Package[] = await response.json();
        setPackages(data);
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
    </div>
  );
};

export default PackagesPage;
