import React from "react";

interface TitlePageProps {
  title: string;
  description: string;
}

const TitlePage = ({ title, description }: TitlePageProps) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 w-full justify-center py-12 mb-12`}
    >
      <div className='text-5xl'>{title}</div>
      <div>
        <p className='text-gray-500'>{description}</p>
      </div>
    </div>
  );
};

export default TitlePage;
