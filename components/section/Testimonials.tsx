import React from "react";
import * as styles from "./../styles";
import TestimonialCard from "../element/TestimonialCard";
import face1 from "./../../public/face1.png";
import face2 from "./../../public/face2.png";
import face3 from "./../../public/face3.png";

const testimonials = [
  {
    id: 1,
    text: "Tour Journera di Jogja bener-bener seru abis! Destinasinya keren-keren, dan guidenya asik banget.",
    name: "Chelsea Islan",
    city: "Jakarta",
    image: face1,
  },
  {
    id: 2,
    text: "Gak nyesel pilih Journera buat explore Jogja. Pelayanannya top banget, dan tempat-tempat yang dikunjungin bikin puas.",
    name: "Samantha Lee",
    city: "Temanggung",
    image: face2,
  },
  {
    id: 3,
    text: "Sebagai pemilik bisnis kecil, tour Journera di Jogja ini bener-bener worth it buat refreshing. Produktivitas langsung naik!",
    name: "Michael Chen",
    city: "Kalimantan",
    image: face3,
  },
];

const Testimonials = () => {
  return (
    <div
      className={`${styles.ContainerPadding}  h-fit md:mb-24 flex py-24 justify-start items-center flex-col gap-16`}
    >
      <div>
        <h2 className='text-4xl md:text-5xl text-center'>
          Apa kata customer
          <br />
          kami?
        </h2>
      </div>
      <div className='flex flex-col gap-8 md:flex-row'>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            image={testimonial.image}
            name={testimonial.name}
            city={testimonial.city}
            desc={testimonial.text}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
