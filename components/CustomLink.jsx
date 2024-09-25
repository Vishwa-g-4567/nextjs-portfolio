"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  );
};

export default CustomLink;
