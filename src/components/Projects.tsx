"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import project1 from "../../public/images/project1.jpg";
import project2 from "../../public/images/project2.png";
import project3 from "../../public/images/project3.png";
import project4 from "../../public/images/project4.png";
import project5 from "../../public/images/project5.png";
import project6 from "../../public/images/project6.png";
import project7 from "../../public/images/project7.png";
import project8 from "../../public/images/project8.png";

const projects = [
  {
    src: project1,
    alt: "MANZZARI",
    title: "MANZZARI JEWELLERY WEBSITE",
    description:
      "This jewellery website is built with Next.js and Tailwind CSS. It is a full-stack web application that allows users to view and search for jewellery items. Users can also add items to their cart and view their cart.",
    link: "https://05-class-assignment-next-js-w25p-qtrommcu9.vercel.app/",
  },
  {
    src: project2,
    alt: "Data Fetching API",
    title: "Data Fetching API",
    description:
      "This project is about server-side rendering and client side rendering. It is a simple and modern data fetching API that allows users to view data fetching in Next.js. ",
    link: "https://07-class-assignment-next-js-created-by-yousra-khan.vercel.app/",
  },
  {
    src: project3,
    alt: "Comforty Sofa Website",
    title: "Comforty Sofa Website",
    description:
      "This project is about UI/UX hackathon figma template. A e commerce website that allows users to view and search for furniture items. Users can also add items to their cart and view their cart.",
    link: "https://ui-ux-hackathon-figma-template-93rb-5ibci9us1.vercel.app/",
  },
  {
    src: project4,
    alt: "Pomodoro Timer App",
    title: "Pomodoro Timer App",
    description:
      "This pomodoro timer app is built with Next.js and Tailwind CSS. It is a simple and modern pomodoro timer app that allows users to set a timer and take breaks.",
    link: "https://day-14-of-30-days-of-nextjs-pomodoro-timer-app.vercel.app/",
  },
  {
    src: project5,
    alt: "Institute Website",
    title: "Ddsgnr Institute Website",
    description:
      "This institute website is built with Next.js and Tailwind CSS. It is a simple and modern institute website that allows users to view institute information.",
    link: "https://06-class-assignment-nextjs.vercel.app/",
  },
  {
    src: project6,
    alt: "Random Joke Generator",
    title: "Random Joke Generator",
    description:
      "This random joke generator is built with Next.js and Tailwind CSS. It is a simple and modern random joke generator that allows users to view random jokes.",
    link: "https://day-7-of-30-days-of-nextjs-random-generator-app.vercel.app/",
  },
  {
    src: project7,
    alt: "Resume Builder",
    title: "Resume Builder",
    description:
      "This HTML CSS TypeScript resume builder is built with HTML CSS TYPESCRIPT/JAVASCRIPT. It is a simple and modern HTML CSS TypeScript resume builder that allows users to view my resume.",
    link: "https://resume-builder-html-css-ts.vercel.app/",
  },
  {
    src: project8,
    alt: "Next.js Tailwind Portfolio",
    title: "Next.js Tailwind Portfolio",
    description:
      "This portfolio website is built with Next.js and Tailwind CSS. It is a simple and modern portfolio website that allows users to view my projects and information.",
    link: "https://nextjs-tailwind-portfolio-wine.vercel.app/",
  },
];

const Project = () => {
  return (
    <section className="text-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold text-gray-900 hover:text-pink-600 animate-bounce hover:uppercase">
            <span className="text-white text-5xl cursor-pointer">Projects</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl text-gray-500 font-serif">
            Explore my projects and learn more about my work and skills..!!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="flex flex-col items-center text-center border border-black rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl relative">
                <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg transition-transform transform hover:scale-110">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    className="object-cover w-full h-full"
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity hover:opacity-40"></div>
                </div>
                <div className="w-full p-4 bg-black h-[220px]">
                  <Link href={project.link || "#"}>
                    <h1 className="text-2xl font-serif text-bold text-[#9a5cec] hover:uppercase hover:text-violet-900 transition-colors duration-300 cursor-pointer mb-3">
                      {project.title}
                    </h1>
                  </Link>
                  <p className="mb-4 text-gray-700">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
