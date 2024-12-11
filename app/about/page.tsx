import React from "react";
import * as styles from "../../components/styles";

const About: React.FC = () => {
  return (
    <div
      className={`flex flex-col lg:flex-row w-full  ${styles.ContainerContentPadding} gap-8 py-4 lg:py-12  lg:h-[90vh] justify-center pt-10`}
    >
      <div className='flex flex-col items-center gap-4'>
        <div className='text-5xl'>About Us</div>
        <p className='text-gray-500'>Lebih jauh mengenal Journera</p>
      </div>
    </div>
  );
};

export default About;
