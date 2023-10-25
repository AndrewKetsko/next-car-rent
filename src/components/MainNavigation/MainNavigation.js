"use client";

import Link from "next/link";
import styled from "./mainnav.module.css";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

export const MainNavigation = () => {
  const pathname = usePathname();
  const session = useSession();

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
        </li>{" "}
        {session?.status === "authenticated" && (
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
        )}
        {session?.status === "authenticated" && (
          <li className={styled.linkbox}>
            <Link
              className={`${styled.link} ${
                pathname === "/profile" ? "active" : ""
              }`}
              href="/profile"
            >
              Profile
            </Link>
          </li>
        )}
        {session?.status === "authenticated" ? (
          <li className={styled.linkbox}>
            <Link
              className={`${styled.link} ${
                pathname === "/api/auth/signout" ? "active" : ""
              }`}
              href="#"
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
            >
              Sign Out
            </Link>
          </li>
        ) : (
          <li className={styled.linkbox}>
            <Link
              className={`${styled.link} ${
                pathname === "/api/auth/signin" ? "active" : ""
              }`}
              href="/api/auth/signin"
            >
              Sign In
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
