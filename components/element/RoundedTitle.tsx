import React from "react";

interface RoundedTitleProps {
  children: React.ReactNode;
}

const RoundedTitle: React.FC<RoundedTitleProps> = ({ children }) => {
  return (
    <div className='shadow-lg text-gray-600 shadow-gray-300 w-fit py-2 px-4 rounded-2xl font-medium m-0'>
      {children}
    </div>
  );
};

export default RoundedTitle;
