"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-24 mb-10 md:mt-16">
      <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-8">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 w-[4px] top-0 h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type={"Bachelor Of Computer Applications"}
            time={"2021 - 2024"}
            place={"Guru Nanak College (Autonomous), Chennai"}
            info={
              "Relevant courses included Data Structures and Algorithms, C Programming, Java, Web Technology, R Programming and Python"
            }
          />
          <Details
            type={"Higher Secondary School"}
            time={"2020 - 2021"}
            place={"Bharathi Matric Hr Sec School, Chennai"}
            info={
              "Relevant courses included Physics, Chemistry, Mathematics and Computer Science"
            }
          />
          <Details
            type={"Secondary School"}
            time={"2018 - 2019"}
            place={"AVL Matric Hr Sec School, Chennai"}
            info={
              "Relevant courses included Tamil, English, Mathematics, Science and Social Science"
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
