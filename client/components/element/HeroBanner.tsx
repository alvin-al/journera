import Image from "next/image";
import Malioboro from "@/public/image/malioboro.webp";

const HeroBanner = () => {
  return (
    <div className="px-12 flex flex-row h-screen bg-gray-100 ">
      {/* Kiri */}
      <div className="gap-8 flex flex-col w-1/2">
        <div className="py-2 px-4 shadow-xl rounded-2xl w-fit">
          Book with us
        </div>
        <div className="text-7xl font-bold leading-tight">
          Temukan
          <br />
          Tempat
          <br />
          <span className="text-blue-400">Petualanganmu</span>
        </div>
        <p className="text-xl">
          Temukan tempat keren dengan penawaran eksklusif.
          <br />
          Makan, belanja, dan eksplor tempat seru di Yogyakarta
        </p>
      </div>
      {/* Kanan */}
      <div className="w-1/2">
        <div className="w-fit rounded-xl overflow-hidden bg-yellow-50">
          <Image
            src={Malioboro}
            width={600}
            height={400}
            alt="maliboro"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
