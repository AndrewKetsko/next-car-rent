"use client";

import { Button } from "../Button/Button";
import Image from "next/image";

export const CarInfoModal = ({ item }) => {
  const {
    img,
    photoLink,
    make,
    model,
    year,
    fuelConsumption,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
    rentalPrice,
  } = item;

  return (
    <div className="w-[500px] p-12">
      <Image alt={model} src={img || photoLink} width={400} height={400} />

      <p className="text-lg font-medium leading-6 tracking-normal mt-4 mb-1">
        {make}
        <span className="text-[--button-bg-color]"> {model}, </span>
        {year}
      </p>

      <div className="divide-x-2">
        {[
          ...address.split(", ").slice(1),
          rentalCompany,
          `ID: ${id}`,
          `Year: ${year}`,
          `Type: ${type}`,
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

      <div className="divide-x-2">
        {[
          `Fuel Consumption: ${fuelConsumption}`,
          `Engine Size: ${engineSize}`,
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

      <p className="text-sm leading-6 tracking-normal mt-3.5">{description}</p>

      <p className="text-sm fomt-medium leading-6 tracking-normal mt-6 mb-1">
        Accessories and functionalities:
      </p>

      <div className="divide-x-2">
        {[...accessories, ...functionalities].map((i) => (
          <span
            className="inline-block text-xs leading-6 tracking-normal text-[--semi-transparent] 
            px-1 first:pl-0 last:pr-0"
            key={i}
          >
            {i}
          </span>
        ))}
      </div>

      <p className="text-lg font-medium leading-6 tracking-normal mt-4 mb-1">
        Rental Conditions:
      </p>

      <div className="mb-6">
        {rentalConditions.split("\n").map((cond) =>
          !cond.includes(":") ? (
            <p
              className="font-xs leading-6 tracking-normal inline-block
            py-2 px-3.5 bg-[--form-select-bg-color] rounded-full mr-2 mt-2"
              key={cond}
            >
              {cond}
            </p>
          ) : (
            <p
              className="font-xs leading-6 tracking-normal inline-block
            py-2 px-3.5 bg-[--form-select-bg-color] rounded-full mr-2 mt-2"
              key={cond}
            >
              {cond.split(":")[0]} :
              <span className="text-[--button-bg-color] font-semibold">
                {cond.split(":")[1]}
              </span>
            </p>
          )
        )}
        <p
          className="font-xs leading-6 tracking-normal inline-block
            py-2 px-3.5 bg-[--form-select-bg-color] rounded-full mr-2 mt-2"
        >
          Mileage :
          <span className="text-[--button-bg-color] font-semibold">
            {mileage.toString().split("").toSpliced(-3, 0, ",").join("")}
          </span>
        </p>
        <p
          className="font-xs leading-6 tracking-normal inline-block
            py-2 px-3.5 bg-[--form-select-bg-color] rounded-full mr-2 mt-2"
        >
          Price : <span className="text-[--button-bg-color] font-semibold">{rentalPrice.slice(1)}$</span>
        </p>
      </div>

      <Button
        type={"button"}
        text={"Rent a car"}
        onClick={() => window.open("tel:+380730000000", "_self")}
      />
    </div>
  );
};
