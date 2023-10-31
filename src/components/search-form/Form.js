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
import styles from "./form.module.css";
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
    <form className={styles.formcontainer} onSubmit={handleSubmit}>
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

      <div className={styles.customlabel}>
        <legend className={styles.labeltext}>Car mileage / km</legend>
        <input
          className={styles.inputtext}
          name="from"
          type="number"
          min="0"
          max="999999"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <input
          className={styles.inputtext}
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
