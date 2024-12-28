"use client";
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import Link from "next/link";

export default function Services() {
  return (
    <>
      <section className="text-white body-font py-24 ">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold  transition duration-300 ease-in-out hover:uppercase">
              <span className="text-white font-serif">Services</span>
            </h1>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center" data-aos="fade-up" data-aos-duration="1000">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-black text-white mb-5 flex-shrink-0 shadow-2xl transform transition-transform hover:rotate-12 hover:scale-110">
                <FaCode size={40} />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-xl title-font mb-3 font-semibold">
                  Web Development
                </h2>
                <p className="leading-relaxed text-base text-black">
                Transform your ideas into dynamic, responsive websites! With expertise in HTML, CSS, JavaScript, React, and Next.js, I create modern, high-quality web solutions tailored to meet your business needs. Lets bring your vision to life..!!
                </p>
              </div>
            </div>
            
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center" data-aos="fade-up" data-aos-duration="1200">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-black text-white mb-5 flex-shrink-0 shadow-2xl transform transition-transform hover:rotate-12 hover:scale-110">
                <FaPaintBrush size={40} />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-xl title-font mb-3 font-semibold">
                  Web Design
                </h2>
                <p className="leading-relaxed text-base text-black">
                Elevate your online presence with stunning, user-friendly designs! I specialize in creating visually captivating, responsive websites that engage and inspire. Lets design a digital experience that makes a lasting impression..!!
                </p>
              </div>
            </div>
            
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center" data-aos="fade-up" data-aos-duration="1400">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-black text-white mb-5 flex-shrink-0 shadow-2xl transform transition-transform hover:rotate-12 hover:scale-110">
                <FaMobileAlt size={40} />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-xl title-font mb-3 font-semibold">
                  Responsive Web Design
                </h2>
                <p className="leading-relaxed text-base text-black">
                Unlock the power of responsive design! I create seamless, adaptive websites that look and function beautifully on any device. Lets make your digital presence accessible, engaging, and ready for every screen size..!!
                </p>
              </div>
            </div>
          </div>
          <Link href="../Contact">
            <button className="flex mx-auto mt-16 text-white bg-[#F2AE66] border-0 py-2 px-8 focus:outline-none hover:bg-gradient-to-r hover:from-purple-900 rounded-lg text-lg transform transition-transform hover:scale-110 shadow-2xl">
              Contact me
            </button>
          </Link>
        </div>
      </section>

      
    </>
  );
}