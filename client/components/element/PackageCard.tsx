import Image from "next/image";

type PackageCard = {
  title: string;
  price: number;
  duration: number;
  maxPeople: number;
  image: string;
};

const PackageCard = ({
  title,
  price,
  duration,
  maxPeople,
  image,
}: PackageCard) => {
  return (
    <div className="w-72 bg-gray-200 flex flex-col gap-2 h-full">
      <div className="w-full h-48 overlay-hidden bg-yellow-200">
        <Image src={image} width={300} height={200} alt={title} />
      </div>
      <p className="text-xl font-semibold">{title}</p>
      <p className="text-lg flex flex-row gap-2">
        <span className="text-gray-600">from </span>Rp. {price}
      </p>
      <div>
        <p>{duration} Hari</p>
        <p>{maxPeople} Orang</p>
      </div>
    </div>
  );
};

export default PackageCard;
