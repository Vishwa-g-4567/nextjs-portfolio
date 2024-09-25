"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <MotionLink
        href={"/"}
        className="w-16 h-16 text-light flex justify-center items-center rounded-full text-2xl font-bold border-2 border-solid border-transparent dark:border-light"
        style={{ backgroundColor: "#1b1b1b" }}
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        VG
      </MotionLink>
    </div>
  );
};

export default Logo;
