"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

export const MainNavigation = () => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <nav className="fixed z-50 p-2.5 bg-[--form-select-bg-color] top-0 left-0">
      <ul className="flex w-screen">
        <li className="mr-5">
          <Link
            className={`text-4.5 font-semibold leading-5 tracking-normal block py-3.5 px-5 hover:bg-[--button-bg-color-hover] hover:text-white rounded-xl ${
              pathname === "/" ? "active" : ""
            }`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="mr-5">
          <Link
            className={`text-4.5 font-semibold leading-5 tracking-normal block py-3.5 px-5 hover:bg-[--button-bg-color-hover] hover:text-white rounded-xl ${
              pathname === "/catalog" ? "active" : ""
            }`}
            href="/catalog"
          >
            Catalog
          </Link>
        </li>
        {session?.status === "authenticated" && (
          <li className="mr-5">
            <Link
              className={`text-4.5 font-semibold leading-5 tracking-normal block py-3.5 px-5 hover:bg-[--button-bg-color-hover] hover:text-white rounded-xl ${
                pathname === "/favorites" ? "active" : ""
              }`}
              href="/favorites"
            >
              Favorites
            </Link>
          </li>
        )}
        {session?.status === "authenticated" && (
          <li className="mr-5">
            <Link
              className={`text-4.5 font-semibold leading-5 tracking-normal block py-3.5 px-5 hover:bg-[--button-bg-color-hover] hover:text-white rounded-xl ${
                pathname === "/profile" ? "active" : ""
              }`}
              href="/profile"
            >
              Profile
            </Link>
          </li>
        )}
        {session?.status === "authenticated" ? (
          <li className="mr-5">
            <Link
              className={`text-4.5 font-semibold leading-5 tracking-normal block py-3.5 px-5 hover:bg-[--button-bg-color-hover] hover:text-white rounded-xl ${
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
          <li className="mr-5">
            <Link
              className={`text-4.5 font-semibold leading-5 tracking-normal block py-3.5 px-5 hover:bg-[--button-bg-color-hover] hover:text-white rounded-xl ${
                pathname === "/api/auth/signin" ? "active" : ""
              }`}
              href="/api/auth/signin"
            >
              Sign In
            </Link>
          </li>
        )}
        {session?.status !== "authenticated" && (
          <li className="mr-5">
            <Link
              className={`text-4.5 font-semibold leading-5 tracking-normal block py-3.5 px-5 hover:bg-[--button-bg-color-hover] hover:text-white rounded-xl ${
                pathname === "/register" ? "active" : ""
              }`}
              href="/register"
            >
              Register
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
