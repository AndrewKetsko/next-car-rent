"use client";

import styles from "./catalog.module.css";

import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
import { favoriteCars, filteredCars } from "@/filters/filters";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export const Catalog = ({ filter, data, favorite=[] }) => {
  const pathname = usePathname();
  const router = useRouter();
  // const { data: session } = useSession();
  // const [favorite, setFavorite] = useState([]);



  // const favorite = JSON.parse(localStorage.getItem("favorite")) || [];
  // const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [pathname]);

  const filteredData = filteredCars(data, filter);

  const favoriteData = pathname.includes("catalog")
    ? filteredData
    : favoriteCars(filteredData, favorite);

  const pages = Math.ceil(favoriteData?.length / 8);
  // const renderData = favoriteData?.slice(0, currentPage * 8);

  const handleFavorite = async (id) => {
    const res = await fetch("/api/users/favorite", {
      method: "PATCH",
      body: JSON.stringify({ id }),
      "content-type": "application/json",
    });
    // localStorage.setItem("favorite", JSON.stringify(favorite));
    router.refresh();
  };

  // const handleMore = (e) => {
  //   setCurrentPage((prev) => prev + 1);
  // };

  return (
    <>
      {favoriteData?.length === 0 ? (
        <div>
          <div className={styles.flexdiv}>
            Your favorite list is empty or current search returns nothing.
            Select some favorite cars from
          </div>
          <div className={styles.flexdiv}>
            <Link className={styles.link} href={"/catalog"}>
              CATALOG
            </Link>
          </div>{" "}
          <div className={styles.flexdiv}>
            or change your search parameters.
          </div>
        </div>
      ) : (
        <ul className={styles.container}>
          {favoriteData?.map((item) => (
            <Card
              key={item.id}
              item={item}
              favorite={favorite}
              handleFavorite={handleFavorite}
            />
          ))}
        </ul>
      )}
      {/* 
      {pages > currentPage && (
        <div className={styles.flexdiv}>
          <button
            className={styles.styledbutton}
            type="button"
            onClick={handleMore}
          >
            Load more
          </button>
        </div>
      )} */}
    </>
  );
};
