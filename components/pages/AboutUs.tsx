import React from "react";
import * as styles from "../../components/styles";
import AboutSection from "@/components/element/AboutSection";
import malioboro from "@/public/Hero.png";
import Footer from "../section/Footer";
import { PiAirplaneTilt } from "react-icons/pi";

const aboutData = [
  {
    icon: <PiAirplaneTilt />,
    title: "Jelajahi Jogjakarta",
    description:
      "Journera membantu kamu menjelajahi Jogjakarta dengan mudah. Temukan destinasi impian di berbagai tempat. Buat perjalanan tak terlupakan bersama kami.",
    image: malioboro,
  },
  {
    icon: <PiAirplaneTilt />,
    title: "Kolaborasi Global",
    description:
      "Kami bekerja sama dengan mitra di seluruh dunia untuk memberikan pengalaman perjalanan terbaik. Nikmati keragaman budaya dan koneksi global.",
    image: malioboro,
    imageLeft: true,
  },
  {
    icon: <PiAirplaneTilt />,
    title: "Pengalaman Istimewa",
    description:
      "Journera menciptakan perjalanan yang tak terlupakan. Dapatkan rekomendasi personalized dan layanan premium untuk pengalaman tak terlupakan.",
    image: malioboro,
  },
];

const AboutUs: React.FC = () => {
  return (
    <div>
      <div
        className={` flex flex-col ${styles.ContainerContentPadding} h-full mb-40`}
      >
        <div
          className={`flex flex-col items-center gap-4 w-full justify-center py-12 mb-12`}
        >
          <div className='text-5xl'>About Us</div>
          <div>
            <p className='text-gray-500'>Lebih jauh mengenal Journera</p>
          </div>
        </div>
        <div className='flex flex-col gap-12'>
          {aboutData.map((data, index) => {
            return (
              <AboutSection
                key={index}
                icon={data.icon}
                title={data.title}
                description={data.description}
                image={data.image}
                imageLeft={data.imageLeft}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
