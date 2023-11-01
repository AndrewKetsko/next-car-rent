import Image from "next/image";
import Heart from "@/images/heart.svg";
import ActiveHeart from "@/images/active.svg";
import { Button } from "../Button/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Card = ({ item, favorite, handleFavorite }) => {
  const pathname = usePathname();

  const {
    img,
    photoLink,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    _id,
    functionalities,
  } = item;

  return (
    <li className="relative w-[290px]">
      <Image
        className="absolute top-3.5 right-3.5 cursor-pointer hover:scale-125"
        alt="heart"
        src={favorite ? ActiveHeart : Heart}
        onClick={() => handleFavorite(_id)}
      />
      <Image
        className="h-52"
        alt={model}
        src={img || photoLink}
        height="200"
        width="290"
      ></Image>

      <p className="text-base font-medium leading-6 tracking-normal mt-3.5 mb-2 flex">
        {make}
        {(make + model + year).length < 25 && (
          <span className="text-[--button-bg-color] ml-1">{model}</span>
        )}
        , {year}
        <span className="inline-block ml-auto">{rentalPrice}</span>
      </p>

      <div className="mb-7 divide-x-2">
        {[
          ...address.split(", ").slice(1),
          rentalCompany,
          type,
          functionalities[0],
        ].map((i) => (
          <span
            className="inline-block text-xs leading-6 tracking-normal text-[--semi-transparent] 
            px-1 first:pl-0 last:pr-0"
            key={i}
          >
            {i}
          </span>
        ))}
      </div>
      <Link href={`${pathname}/${_id}`}>
        <Button type={"button"} text={"Learn more"} longButton />
      </Link>
    </li>
  );
};
