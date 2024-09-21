import { star } from "../assets/icons";

function PopularProductCard({ name, price, imgURL }) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} width="w-[280px]" height="h-[280px]" />
      <div className="mt-8 flex-col justify-start gap-2.5">
        <div className="flex justify-start items-center gap-1.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">({Math.floor(Math.random() * 5) + 1})</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-medium font-palanquin">{name}</h3>
        <p className="mt-2 font-montserrat text-2xl text-coral-red font-bold leading-normal decoration-slice">{price}</p>
      </div>
    </div>
  );
}

export default PopularProductCard;
