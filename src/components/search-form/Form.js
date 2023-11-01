"use client";

import { useState } from "react";
import { Button } from "@/components/Button/Button";
import {
  carMakesList,
  favoriteCars,
  // priceRangeCurrentOnly,
  priceRangePer10,
} from "@/filters/filters";
import { Select } from "@/components/Select/Select";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Form = ({ data }) => {
  const { data: fav, isLoading } = useSWR("/api/users/favorite", fetcher);
  const favorite = fav?.favorite;
  const pathname = usePathname();
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const router = useRouter();

  const makes = carMakesList(
    pathname.includes("catalog") ? data : favoriteCars(data, favorite)
  );

  /**  IF ONLY VALID PRICE RANGE NEEDED */
  // const priceRange = !data ? [] : priceRangeCurrentOnly(data);

  const priceRange = !data
    ? []
    : priceRangePer10(
        pathname.includes("catalog") ? data : favoriteCars(data, favorite)
      );

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      `${pathname}?brand=${model}&price=${price}&from=${from}&to=${to}`
    );
  };

  const handleReset = (e) => {
    router.push(`${pathname}`);
    setFrom("");
    setTo("");
    setModel("");
    setPrice("");
    e.currentTarget.parentNode.reset();
  };

  return (
    <form
      className="w-screen flex flex-wrap gap-4 justify-center items-end mb-12"
      onSubmit={handleSubmit}
    >
      <Select
        data={makes}
        setData={setModel}
        label={"Car brand"}
        labelText={"Choose a brand"}
        name={"cars"}
      />

      <Select
        data={priceRange}
        setData={setPrice}
        label={"Price per hour"}
        labelText={"max price"}
        name={"price"}
      />

      <div
        className="text-lg font-medium leading-5 tracking-normal text-[--main-text]
      before:content-['From:'] before:absolute before:translate-x-4 before:translate-y-[39px]
      after:content-['To:'] after:absolute after:-translate-x-[140px] after:translate-y-3.5"
      >
        <legend className="text-3.5 font-medium leading-5 tracking-normal text-[--form-label-text] mb-2">
          Car mileage / km
        </legend>
        <input
          className="text-lg font-medium leading-5 tracking-normal text-[--main-text] 
           bg-[--form-select-bg-color] outline-none 
          rounded-tl-xl rounded-bl-xl border-r-2 border-r-[#8a8a89]
          py-3.5 pr-4.5 pl-[75px]"
          name="from"
          type="number"
          min="0"
          max="999999"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          className="text-lg font-medium leading-5 tracking-normal text-[--main-text] 
          border-none bg-[--form-select-bg-color] outline-none
          rounded-tr-xl rounded-br-xl py-3.5 pr-4.5 pl-[50px]"
          name="to"
          type="number"
          min="0"
          max="999999"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>

      <Button type={"submit"} text={"Search"} />
      <Button type={"button"} text={"Reset"} onClick={handleReset} />
    </form>
  );
};
