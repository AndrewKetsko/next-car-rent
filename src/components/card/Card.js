// 'use client'

import styles from "./card.module.css";
import Image from "next/image";
import Heart from "@/images/heart.svg";
import ActiveHeart from "@/images/active.svg";
import { Button } from "../Button/Button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
// import { Modal } from "../modal/Modal";

export const Card = ({ item, favorite, handleFavorite }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const router = useRouter();
  const pathname = usePathname();
  // const openModal = () => setIsOpen(true);

  // const closeModal = (e) => {
  //   if (
  //     e?.target?.alt !== "X" &&
  //     e?.target?.className !== e?.currentTarget?.className
  //   )
  //     return;
  //   setIsOpen(false);
  // };

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
    id,
    functionalities,
  } = item;

  return (
    <li className={styles.styledli}>
      <Image className={styles.icon}
        alt="heart"
        src={favorite?.includes(id) ? ActiveHeart : Heart}
        onClick={() => handleFavorite(id)}
      />

      <Image alt="auto" src={img || photoLink} height="200" width="274"></Image>

      <p className={styles.header}>
        {make}
        {(make + model + year).length < 25 && (
          <span style={{ color: "#3470FF", marginLeft: "5px" }}>{model}</span>
        )}
        , {year}
        <span style={{ display: "inline-block", marginLeft: "auto" }}>
          {rentalPrice}
        </span>
      </p>

      <div style={{ marginBottom: "28px" }}>
        {[
          ...address.split(", ").slice(1),
          rentalCompany,
          type,
          functionalities[0],
        ].map((i) => (
          <span className={styles.semitransparent} key={i}>
            {i}
          </span>
        ))}
      </div>
      <Link href={`${pathname}/${id}`}>
        <Button
          type={"button"}
          text={"Learn more"}
          // onClick={router.push(`${pathname}/${id}`)}
          longButton
        />
      </Link>
      {/* {isOpen && <Modal onClose={closeModal} item={item} />} */}
    </li>
  );
};
