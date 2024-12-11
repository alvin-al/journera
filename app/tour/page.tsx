"use client";
import React, { useState, useEffect } from "react";
import DestinationCard from "@/components/element/DestinationCard";

interface Package {
  id: string;
  name: string;
  featuredImage: string;
  itinerary: object;
  price: string;
  originalPrice: number;
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
    <div>
      <h1>Packages</h1>
      {/* <ul>
        {packages.map((pkg) => (
          <li key={pkg.id}>
            Contoh Packages
            {pkg.name}
            <Image
              src={pkg.featuredImage}
              alt={pkg.name}
              width={1000}
              height={1000}
              unoptimized
            />
          </li>
        ))}
      </ul> */}
      {packages.map((pkg) => {
        return (
          <DestinationCard
            title={pkg.name}
            image={pkg.featuredImage}
            price={pkg.price}
            link={pkg.id}
            key={pkg.id}
          />
        );
      })}
    </div>
  );
};

export default PackagesPage;
