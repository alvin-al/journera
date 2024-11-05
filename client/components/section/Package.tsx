import PackageCard from "../element/PackageCard";

const packageExample = {
  title : "Journera Adventure 3",
  price : 900000,
  duration : 12,
  maxPeople: 6,
  image: "/image/malioboro.webp",
}

const Package = () => {
  return (
    <div className="flex justify-center w-full h-screen flex-col gap-24 mx-12">
      {/* Title */}
      <div className="flex flex-col items-center gap-8">
        <div className="mt-12 text-5xl">
          Paket <span className="text-blue-400">Terpopuler</span>
        </div>
        <div>
          Cek pilihan teratas kami, disukai lebih dari 10.000+ traveler.
        </div>
      </div>
      {/* Card */}
      <div className="">
        <PackageCard title={packageExample.title} price={packageExample.price} duration={packageExample.duration} maxPeople={packageExample.maxPeople} image={packageExample.image} />
      </div>
    </div>
  );
};

export default Package;
