"use client";

import { Card } from "../Card/Card";
import { favoriteCars, filteredCars } from "@/filters/filters";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import useSWR, { mutate } from "swr";
import { fetcher } from "@/fetch/fetch";

export const Catalog = ({ filter, data }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: fav, isLoading } = useSWR("/api/users/favorite", fetcher);
  const favorite = fav?.favorite;

  const filteredData = filteredCars(data, filter);

  const favoriteData = pathname.includes("catalog")
    ? filteredData
    : favoriteCars(filteredData, favorite);

  // const pages = Math.ceil(favoriteData?.length / 8);
  // const renderData = favoriteData?.slice(0, currentPage * 8);

  const handleFavorite = async (id) => {
    await fetch("/api/users/favorite", {
      method: "PATCH",
      body: JSON.stringify({ id }),
      "content-type": "application/json",
    });
    mutate("/api/users/favorite");
    router.refresh();
  };

  // const handleMore = (e) => {
  //   setCurrentPage((prev) => prev + 1);
  // };

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      {favoriteData?.length === 0 ? (
        <div className="text-center">
          <div>
            Your favorite list is empty or current search returns nothing.
            Select some favorite cars from
          </div>
          <div>
            <Link
              className="inline-block my-2.5 py-3 px-24 rounded-xl 
              bg-[--form-select-bg-color] text-[--button-bg-color] 
              hover:text-[--button-bg-color-hover] hover:underline"
              href={"/catalog"}
            >
              CATALOG
            </Link>
          </div>
          <div>or change your search parameters.</div>
        </div>
      ) : (
            <ul className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        justify-items-center gap-y-8'>
          {favoriteData?.map((item) => (
            <Card
              key={item._id}
              item={item}
              favorite={favorite?.includes(item._id)}
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
