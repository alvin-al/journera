import React from "react";

const OrderPackageCard = ({
  price,
  discount,
  name,
}: {
  price: number;
  discount: number;
  name: string;
}) => {
  const link = `https://api.whatsapp.com/send?phone=6282122221698&text=Halo%20Journera%2C%20saya%20ingin%20bertanya%20tentang%20${encodeURIComponent(
    name
  )}`;
  return (
    <div>
      <div className='w-full bg-white border h-56 flex flex-col rounded-md sticky top-28 justify-between overflow-hidden'>
        <div className='px-8 pt-8'>
          <div className='text-white rounded-md px-6 py-2 bg-blue-500 w-fit h-fit text-sm font-medium'>
            Best Deals!
          </div>
        </div>
        <div className='h-fit px-8'>
          <p className='text-3xl font-semibold'>
            Rp {Number(discount).toLocaleString("id-ID")}
          </p>
          <p className='text-lg text-gray-500 line-through font-semibold'>
            Rp {Number(price).toLocaleString("id-ID")}
          </p>
        </div>
        <div className='h-12 w-full'>
          <a href={link} target='_blank'>
            <button className='w-full h-full bg-blue-500 text-white text-lg font-semibold'>
              PESAN SEKARANG
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderPackageCard;
