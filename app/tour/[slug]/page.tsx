"use client";
import { usePathname } from "next/navigation";
import TourDetailPage from "@/components/pages/TourDetailPage";
import { PackageProps } from "@/types/packages";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

export default function Page() {
  const router = usePathname();
  const slug = router.replace("/tour/", "");

  const [data, setData] = useState<PackageProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) {
      // Handle missing slug (e.g., redirect to error page)
      return;
    }

    const fetchPackage = async () => {
      try {
        const res = await fetch(`/api/packages/${slug}`);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, [slug]);

  if (loading) {
    return (
      <div
        className='w-full h-screen bg-yellow-300 flex justify-center items-center'
        style={{ height: "90vh", margin: 0 }}
      >
        <PuffLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>An error occurred while fetching package data.</p>
      </div>
    );
  }

  if (!data) {
    return <div>No package found.</div>;
  }

  return (
    <div>
      <TourDetailPage
        description={data?.description}
        name={data?.name}
        featuredImage={data?.featuredImage}
        itinerary={data?.itinerary}
        price={data?.price}
        originalPrice={data?.originalPrice}
        id={data?.id}
        slug={data?.slug}
      />
    </div>
  );
}
