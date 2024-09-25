import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import FeaturedProject from "@/components/FeaturedProject";
import TransitionEffect from "@/components/TransitionEffect";
import CaptionProject from "@/public/images/projects/epic-caption.png";
import BudgetingProject from "@/public/images/projects/budgeting-app.png";
import WeatherProject from "@/public/images/projects/react-weather-app.png";
import CurrencyProject from "@/public/images/projects/currency-converter.png";
import PasswordProject from "@/public/images/projects/password-generator.png";
import BmiProject from "@/public/images/projects/bmi-calculator.png";
import QrProject from "@/public/images/projects/qr_code.png";

export const metadata = {
  title: "Vishwa | Projects",
  description:
    "Explore my latest portfolio built with Next.js, showcasing innovative web development projects, interactive UIs, and responsive design techniques. See how I leverage modern technologies like React, Next.js, and CSS to create dynamic, performance-optimized websites.",
};

const Projects = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center dark:text-light mb-10">
        <Layout className="pt-8">
          <AnimatedText
            text={"Imagination Trumps Knowledge!"}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type={"Featured Project"}
                title={"Caption Generator"}
                summary={
                  "Developed a video accessibility solution using Next.js, AWS Transcribe, and React.js, achieving 98% caption accuracy and increasing global reach by 40%. Automated workflows cut captioning time by 50%, improving efficiency for content creators. Tech stack: Next.js, AWS Transcribe, React.js."
                }
                img={CaptionProject}
                link={"https://epic-captions-vishwa-g-4567.vercel.app/"}
                github={"https://github.com/Vishwa-g-4567/epic-captions"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type={"Featured Project"}
                title={"Budgeting App"}
                summary={
                  "Built a budgeting app using React.js, React Router, CSS, and Local Storage, helping over 200 users manage their finances. Features include expense categorization, real-time budget tracking, and data visualization, boosting financial insights by 40%. Tech stack: React.js, React Router, CSS, Local Storage."
                }
                img={BudgetingProject}
                link={"https://budgeting-app-vishwa-g-4567.vercel.app/"}
                github={"https://github.com/Vishwa-g-4567/budgeting-app"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type={"Featured Project"}
                title={"React Weather App"}
                summary={
                  "Developed a weather app using React, providing real-time, location-based forecasts with 95% accuracy. Features include multi-day weather predictions and a responsive design, boosting user satisfaction by 20% and engagement by 25%. Tech stack: React, Tailwind CSS, API."
                }
                img={WeatherProject}
                link={"https://react-weather-app-vishwa-g-4567.vercel.app/"}
                github={"https://github.com/Vishwa-g-4567/react-weather-app"}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type={"Featured Project"}
                title={"Currency Converter"}
                summary={
                  "Created a Currency Converter app using React, offering real-time currency conversions with up-to-date exchange rates. Features a responsive design for seamless use across devices. Tech stack: React, Tailwind CSS."
                }
                img={CurrencyProject}
                link={"https://currency-converter-vishwa-g-4567.vercel.app/"}
                github={
                  "https://github.com/Vishwa-g-4567/learn-react/tree/main/Tutor%20Joes%20React/currency-converter-app"
                }
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type={"Featured Project"}
                title={"Password Generator"}
                summary={
                  "Created a Currency Converter app using React, offering real-time currency conversions with up-to-date exchange rates. Features a responsive design for seamless use across devices. Tech stack: React, Tailwind CSS."
                }
                img={PasswordProject}
                link={"https://password-generator-vishwa-g-4567.vercel.app/"}
                github={
                  "https://github.com/Vishwa-g-4567/learn-react/tree/main/Tutor%20Joes%20React/password-generator"
                }
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type={"Featured Project"}
                title={"BMI Calculator"}
                summary={
                  "Developed a BMI Calculator using React, featuring a user-friendly interface and responsive design for seamless use across devices. The app provides instant BMI calculations with a modern layout. Tech stack: React, Tailwind CSS."
                }
                img={BmiProject}
                link={"https://bmi-calculator-vishwa-g-4567.vercel.app/"}
                github={
                  "https://github.com/Vishwa-g-4567/learn-react/tree/main/Tutor%20Joes%20React/bmi-calculator"
                }
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type={"Featured Project"}
                title={"Qr Code Generator"}
                summary={
                  "A QR Code Generator web app built with React and Tailwind CSS, allowing users to create and download customizable QR codes. Features include a responsive design, customizable data input, and various download formats. Tech stack: React, Tailwind CSS, API."
                }
                img={QrProject}
                link={"https://qr-generator-vishwa-g-4567.vercel.app/"}
                github={
                  "https://github.com/Vishwa-g-4567/learn-react/tree/main/Tutor%20Joes%20React/qr-generator"
                }
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
