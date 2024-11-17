import React from "react";

const ItineraryPackage = ({ itinerary }: { itinerary: string[] }) => {
  return (
    <div>
      <div className='scroll-mt-20' id='itinerary'>
        <h3 className='text-3xl mb-4'>Itinerary</h3>
        <ul className='list-disc list-inside flex flex-col gap-2'>
          {itinerary.map((content, index) => (
            <li key={index} className='text-lg text-gray-600'>
              {content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItineraryPackage;
