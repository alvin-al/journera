import React from "react";
import * as styles from "../styles";
import KotaKota from "./../../public/Journera KotaKota.jpg";
import PopularPackageTitle from "../element/PopularPackageTitle";
import DestinationCard from "../element/DestinationCard";

const PopularPackage: React.FC = () => {
  const dataPaket = [
    {
      title: "Journera KotaKota",
      image: KotaKota,
      price: "500,000",
      link: "/tour/journera-kotakota",
    },
  ];

  return (
    <div
      className={`${styles.ContainerPadding} h-fit flex py-24 justify-start items-center flex-col gap-16`}
    >
      <PopularPackageTitle />
      <div className='md:w-full gap-4 md:grid md:grid-cols-3 xl:max-w-6xl xl:gap-8 md:flex-row'>
        <DestinationCard
          title={dataPaket[0].title}
          image={dataPaket[0].image}
          price={dataPaket[0].price}
          link={dataPaket[0].link}
        />
        <DestinationCard
          title={dataPaket[0].title}
          image={dataPaket[0].image}
          price={dataPaket[0].price}
          link={dataPaket[0].link}
        />
        <DestinationCard
          title={dataPaket[0].title}
          image={dataPaket[0].image}
          price={dataPaket[0].price}
          link={dataPaket[0].link}
        />
        <DestinationCard
          title={dataPaket[0].title}
          image={dataPaket[0].image}
          price={dataPaket[0].price}
          link={dataPaket[0].link}
        />
        <DestinationCard
          title={dataPaket[0].title}
          image={dataPaket[0].image}
          price={dataPaket[0].price}
          link={dataPaket[0].link}
        />
        <DestinationCard
          title={dataPaket[0].title}
          image={dataPaket[0].image}
          price={dataPaket[0].price}
          link={dataPaket[0].link}
        />
      </div>
    </div>
  );
};

export default PopularPackage;
