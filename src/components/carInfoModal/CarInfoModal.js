"use client";

import { Button } from "../Button/Button";
import styled from "./carInfoModal.module.css";
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
    <div className={styled.container}>

      <Image
        alt={model}
        src={img || photoLink}
        width={400}
        height={270}
      />

      <p className={styled.header}>
        {make}
        <span style={{ color: "#3470FF" }}> {model}, </span>
        {year}
      </p>

      <div>
        {[
          ...address.split(", ").slice(1),
          rentalCompany,
          `ID: ${id}`,
          `Year: ${year}`,
          `Type: ${type}`,
        ].map((i) => (
          <span className={styled.semitransparent} key={i}>
            {i}
          </span>
        ))}
      </div>

      <div>
        {[
          `Fuel Consumption: ${fuelConsumption}`,
          `Engine Size: ${engineSize}`,
        ].map((i) => (
          <span className={styled.semitransparent} key={i}>
            {i}
          </span>
        ))}
      </div>

      <p className={styled.text}>{description}</p>

      <p className={styled.semiheader}>Accessories and functionalities:</p>

      {[...accessories, ...functionalities].map((i) => (
        <span className={styled.semitransparent} key={i}>
          {i}
        </span>
      ))}

      <p className={styled.semiheader}>Rental Conditions: </p>

      <div style={{ marginBottom: "24px" }}>
        {rentalConditions.split("\n").map((cond) =>
          !cond.includes(":") ? (
            <p className={styled.textbg} key={cond}>
              {cond}
            </p>
          ) : (
            <p className={styled.textbg} key={cond}>
              {cond.split(":")[0]} :
              <span className={styled.spanbg}>{cond.split(":")[1]}</span>
            </p>
          )
        )}
        <p className={styled.textbg}>
          Mileage :
          <span className={styled.spanbg}>
            {mileage.toString().split("").toSpliced(-3, 0, ",").join("")}
          </span>
        </p>
        <p className={styled.textbg}>
          Price : <span className={styled.spanbg}>{rentalPrice.slice(1)}$</span>
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
