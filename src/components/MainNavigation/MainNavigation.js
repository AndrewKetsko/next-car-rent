"use client";

import Link from "next/link";
import styled from "./mainnav.module.css";
import { usePathname } from "next/navigation";

export const MainNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styled.navigation}>
      <ul style={{ display: "flex", width: "100vw" }}>
        <li className={styled.linkbox}>
          <Link
            className={`${styled.link} ${pathname === "/" ? "active" : ""}`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className={styled.linkbox}>
          <Link
            className={`${styled.link} ${
              pathname === "/catalog" ? "active" : ""
            }`}
            href="/catalog"
          >
            Catalog
          </Link>
        </li>
        <li className={styled.linkbox}>
          <Link
            className={`${styled.link} ${
              pathname === "/favorites" ? "active" : ""
            }`}
            href="/favorites"
          >
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};
