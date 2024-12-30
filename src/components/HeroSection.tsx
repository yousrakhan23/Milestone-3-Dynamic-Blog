import React from "react";
import Image from "next/image";
import Blog from "@/app/Blog/page";
export default function HeroSection() {
  return (
    <div >
      <div className="relative  text-white h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute justify-center items-center flex">
          <Image
            src="/images/hero_section_image.svg"
            alt="hero section"
            width={1216}
            height={500}
            className="rounded-[12px] shadow-2xl "
          />
        </div>
       

        {/* Card Section */}
        <div className="relative max-w-6xl mx-auto p-6">
          <div className="z-10 bg-[#181A2A] bg-opacity-70 p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-sm font-medium text-blue-500">
              Technology
            </div>
            <h2 className="text-2xl font-bold leading-tight mb-4">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h2>
            <div className="flex items-center space-x-2 text-sm">
              <Image
                src="../images/content_person1.svg"
                alt="visitor"
                className="w-8 h-8 rounded-full"
                width={32}
                height={32}
              />
              <span>Jason Francisco</span>
              <span>•</span>
              <span>August 20, 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div><Blog /></div>
    </div>
  );
}
