import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative flex justify-center">
      {/* First Image */}
      <Image
        src="../images/hero_section_image.svg"
        alt="hero section"
        width={1216}
        height={500}
        className="rounded-[12px] m-9"
      />

      {/* Second Image */}
      <div className="absolute top-1/2 transform -translate-y-1/2 mt-[14rem] mr-[25rem] ">
        <Image
          src="../images/hero_sec_content.svg"
          alt="hero section content"
          width={598}
          height={304}
          className="shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
