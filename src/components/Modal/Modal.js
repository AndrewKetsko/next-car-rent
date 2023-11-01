"use client";

import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import X from "@/images/x.svg";
import Image from "next/image";

export default function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  return (
    <div
      ref={overlay}
      className="fixed top-0 left-0 z-20 w-screen h-screen bg-[--overlay-color]"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto bg-white rounded-2xl overflow-hidden"
      >
        <Image
          className="absolute top-4 right-4 w-6 h-6 hover:scale-125 cursor-pointer"
          alt="X"
          src={X}
          onClick={() => router.back()}
        />
        {children}
      </div>
    </div>
  );
}
