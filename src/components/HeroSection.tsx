import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src="../images/hero_section_image.svg"
          alt="hero section"
          width={1216}
          height={600}
          className="radius-[12px] m-9"
          
        />
      </div>
    </div>
  );
};

export default HeroSection;
