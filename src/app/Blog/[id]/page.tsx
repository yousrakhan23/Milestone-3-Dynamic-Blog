"use client";
import { useParams } from "next/navigation";
import { cards } from "@/app/cards";
import Image from "next/image";
import { Rubik_Vinyl } from "next/font/google";
import { Felipa } from "next/font/google";
import CommentSection from "@/components/CommentSection";

const rubikVinyl = Rubik_Vinyl({
  weight: "400",
  subsets: ["latin"],
});
const felipa = Felipa({
  weight: "400",
  subsets: ["latin"],
});

const CardDetails = () => {
  const { id } = useParams();
  const CardDetailedPage = cards.find((item) => item.id === id);

  if (!CardDetailedPage) {
    return <p>Card not found!</p>;
  }
  return (
    <div className="overflow-x-hidden">
      <div
        className={`${rubikVinyl.className} text-[#F2AE66] justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-10`}
      >
        {CardDetailedPage.heading}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Image
          src={CardDetailedPage.image}
          alt={CardDetailedPage.title}
          width={500}
          height={500}
          className="border border-[#F2AE66] rounded-2xl h-[40%] w-[50%]"
        />
      </div>
      <div className="container mx-auto px-4 pt-2">
      <p className={`${felipa.className} mb-4 text-pretty text-xl text-slate-200 justify-center items-center lg:text-3xl md:text-left sm:text-sm md:text-base  pt-1 leading-6 sm:leading-7 md:leading-8 `}>
        {CardDetailedPage.description}
      </p>
      </div>
      <div><CommentSection /></div>
    </div>
  );
};

export default CardDetails;
