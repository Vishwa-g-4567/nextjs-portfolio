"use client";
import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 md:bg-transparent md:dark:bg-transparent md:text-dark md:dark:text-light md:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div>
      <h2 className="font-bold text-8xl mt-24 w-full text-center md:text-6xl md:mt-16">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name={"HTML"} x={"-5vw"} y={"-8vw"} />
        <Skill name={"CSS"} x={"5vw"} y={"8vw"} />
        <Skill name={"JavaScript"} x={"15vw"} y={"-3vw"} />
        <Skill name={"Bootstrap"} x={"-14vw"} y={"3vw"} />
        <Skill name={"Tailwind CSS"} x={"10vw"} y={"-12vw"} />
        <Skill name={"ReactJS"} x={"-10vw"} y={"10vw"} />
        <Skill name={"Redux"} x={"-20vw"} y={"-5vw"} />
        <Skill name={"NextJS"} x={"20vw"} y={"7.5vw"} />
        <Skill name={"TypeScript"} x={"-15vw"} y={"-16vw"} />
        <Skill name={"NodeJS"} x={"-25vw"} y={"8vw"} />
        <Skill name={"ExpressJS"} x={"-2.5vw"} y={"20vw"} />
        <Skill name={"MongoDB"} x={"25vw"} y={"-8vw"} />
        <Skill name={"SQL"} x={"15vw"} y={"15vw"} />
        <Skill name={"Web Design"} x={"3vw"} y={"-20vw"} />
        <Skill name={"Framer Motion"} x={"-22.5vw"} y={"16vw"} />
        <Skill name={"Responsive Design"} x={"-36vw"} y={"-1vw"} />
        <Skill name={"GitHub"} x={"30vw"} y={"12.5vw"} />
        <Skill name={"Git"} x={"22vw"} y={"-18vw"} />
        <Skill name={"UI/UX Design"} x={"-32.5vw"} y={"-10vw"} />
        <Skill name={"Problem Solving"} x={"35vw"} y={"1vw"} />
      </div>
    </div>
  );
};

export default Skills;
