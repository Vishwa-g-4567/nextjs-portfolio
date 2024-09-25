"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}
        </h3>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="mt-24 md:mt-16">
      <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-8">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 w-[4px] top-0 h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"Software Developer Intern"}
            company={"Team Everest NGO"}
            companyLink={"https://www.teameverest.ngo/"}
            time={"Jul 2024 - Dec 2024"}
            address={"Chennai, Tamil Nadu, IN"}
            work={
              "I worked closely with the development team on coding and debugging tasks, actively contributing to the improvement of project workflows during team meetings by offering ideas and suggestions. Throughout this experience, I developed strong analytical abilities through consistent debugging and troubleshooting efforts. Additionally, I strengthened my collaboration and communication skills by effectively working within a team environment."
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
