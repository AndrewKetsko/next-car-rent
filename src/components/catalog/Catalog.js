'use client'

import styles from "./catalog.module.css";

import { Card } from "../card/Card";
import { useEffect, useState } from "react";
import { favoriteCars, filteredCars } from "@/filters/filters";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Catalog = ({ filter, data }) => {
  const pathname = usePathname();
  const favorite = [];
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [pathname]);

  const filteredData = filteredCars(data, filter);

  const favoriteData = pathname.includes("catalog")
    ? filteredData
    : favoriteCars(filteredData, favorite);

  const pages = Math.ceil(favoriteData?.length / 8);
  const renderData = favoriteData?.slice(0, currentPage * 8);

  const handleFavorite = (id) => {
    dispatch(favorite.includes(id) ? delFavorite(id) : setFavorite(id));
  };

  const handleMore = (e) => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      {renderData?.length === 0 ? (
        <div>
          <div className={styles.flexdiv}>
            Your favorite list is empty or current search returns nothing.
            Select some favorite cars from
          </div>
          <div className={styles.flexdiv}>
            <Link className={styles.link} href={"/catalog"}>CATALOG</Link>
          </div>{" "}
          <div className={styles.flexdiv}>
            or change your search parameters.
          </div>
        </div>
      ) : (
        <ul className={styles.container}>
          {renderData?.map((item) => (
            <Card
              key={item.id}
              item={item}
              favorite={favorite}
              handleFavorite={handleFavorite}
            />
          ))}
        </ul>
      )}

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
      )}
    </>
  );
};
