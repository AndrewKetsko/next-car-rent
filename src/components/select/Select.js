"use client";

import Image from "next/image";
import Arrow from "@/images/arrow.svg";
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
    <div className="relative">
      <legend className="text-3.5 font-medium leading-5 tracking-normal text-[--form-label-text] mb-2">
        {label}
      </legend>
      <Image
        className={`${
          isOpen ? "rotate-180" : ""
        } absolute right-[13px] bottom-[13px] pointer-events-none`}
        alt={"arrow"}
        src={Arrow}
      />
      <select
        className="text-lg font-medium leading-5 tracking-normal text-[--main-text]
        pr-12 pl-4 border-none rounded-xl bg-[--form-select-bg-color] h-12 m-0 appearance-none outline-none"
        data-name={name}
        onChange={(e) => setData(e.target.value)}
        onClick={() => {
          setOpen((p) => !p);
        }}
      >
        <option
          className="text-base font-medium leading-5 tracking-normal text-[--near-full-transparent]"
          value={""}
        >
          {labelText}
        </option>
        {data?.map((item) => (
          <option
            className="text-base font-medium leading-5 tracking-normal text-[--near-full-transparent]"
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
