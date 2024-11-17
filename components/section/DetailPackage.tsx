import React from "react";

const DetailPackage = ({
  description,
  id,
}: {
  description: string;
  id: string;
}) => {
  return (
    <div className='scroll-mt-20' id={id}>
      <div>
        <h3 className='text-3xl mb-4'>Detail</h3>
        <p className='text-lg leading-relaxed text-gray-600'>{description}</p>
      </div>
    </div>
  );
};

export default DetailPackage;
