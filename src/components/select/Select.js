"use client";

import Image from "next/image";
import Arrow from "@/images/arrow.svg";
import styles from "./select.module.css";
import { useEffect, useState } from "react";

export const Select = ({ data, setData, label, labelText, name }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const mouseClick = (e) => {
      if (
        e.target.nodeName !== "SELECT" ||
        e.target.getAttribute("data-name") !== name
      )
        setOpen(false);
    };
    window.addEventListener("click", mouseClick);
    return () => window.removeEventListener("click", mouseClick);
  }, [name]);

  return (
    <div style={{ position: "relative" }}>
      <legend className={styles.labeltext}>{label}</legend>
      <Image
        className={styles.selectimage}
        style={isOpen?{transform:'rotate(180deg)'}:{}}
        alt={"arrow"}
        src={Arrow}
      />
      <select
        className={styles.selecttext}
        data-name={name}
        onChange={(e) => setData(e.target.value)}
        onClick={() => {
          setOpen((p) => !p);
        }}
      >
        <option className={styles.optiontext} value={""}>
          {labelText}
        </option>
        {data?.map((item) => (
          <option className={styles.optiontext} key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
