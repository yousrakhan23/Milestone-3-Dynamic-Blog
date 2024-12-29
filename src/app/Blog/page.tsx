import React from "react";
import Image from "next/image";
import blog_img from "../../../public/images/blog_img.jpg";
import Link from "next/link";
import { Rubik_Vinyl } from "next/font/google";

const rubikVinyl = Rubik_Vinyl({
  weight: "400",
  subsets: ["latin"],
});

const Card = () => {
  const cards = [
    {
      id: 1,
      image: "../images/post1.svg",
      title: "Future Trends in Meta Technology",
      description:"As Meta continues to redefine the digital landscape, what does the future hold? This article explores emerging trends like AI-driven metaverse development, integration of AR/VR in daily life, and innovations in blockchain for secure transactions. It provides insights into Meta’s roadmap for maintaining its leadership in the tech industry.",
    },
    {
      id: 2,
      image: "../images/post2.svg",
      title: "Exploring the World",
      description: "Traveling is more than just moving from one place to another—it’s an experience that enriches the soul, broadens horizons, and creates memories that last a lifetime. Whether you're a casual tourist, an adventurous backpacker, or a luxury traveler, the essence of travel lies in discovering the world and understanding its diverse cultures, landscapes, and people.In this blog, we dive into the art of traveling, exploring its history, significance, types, benefits, challenges, and tips for making every journey unforgettable.",
    },
    {
      id: 3,
      image: "../images/post3.svg",
      title: "Shopping",
      description: "Shopping, an activity rooted in human history, has evolved from basic bartering to an intricate global economy driven by technology and consumer behavior. It is not just about purchasing goods or services; shopping reflects cultural trends, economic conditions, and technological advancements. This blog explores the evolution, psychology, trends, and future of shopping, providing a comprehensive view of this essential activity.",
    },
    {
      id: 4,
      image: "/images/post4.svg",
      title: "Peaceful Environment",
      description: " peaceful environment is not just the absence of chaos but a harmonious blend of natural elements, human activities, and inner tranquility that promotes well-being and fosters positivity. In a world increasingly filled with noise, stress, and the relentless demands of daily life, the value of a peaceful environment cannot be overstated. It begins with nature, where the soft rustling of leaves, the gentle flow of water.",
    },
    {
      id: 5,
      image: "../images/post5.svg",
      title: "Metaverse: The Future of Virtual Reality",
      description: "The metaverse is a collective virtual shared space created by the convergence of virtually enhanced physical reality and the Internet. This blog explores Meta’s vision for the metaverse, how platforms like Horizon Worlds and AR/VR devices like Quest are shaping this immersive digital environment, and its potential impact on communication, work, and entertainment.",
    },
    {
      id: 6,
      image: "../images/post6.svg",
      title: "The Fascinating World of Cars",
      description: "Cars have been more than a means of transportation—they represent freedom, innovation, and a constantly evolving aspect of human ingenuity. From their invention in the late 19th century to the modern era of autonomous vehicles, cars have profoundly influenced society, economics, and technology. This blog takes a comprehensive look at the history, types, impact, and future of cars.",
    },
    {
      id: 7,
      image: "../images/post7.svg",
      title: "Transforming the World",
      description: "Mobile technologies have revolutionized the way we live, work, and communicate. From the early days of basic cellular phones to today’s cutting-edge smartphones and wearables, mobile innovations have continuously pushed the boundaries of what’s possible. This blog dives deep into the history, advancements, and impact of mobile technologies on society and industries worldwide.",
    },
    {
      id: 8,
      image: "../images/post8.svg",
      title: "Natures Serenity",
      description: "Water has always been a source of peace and inspiration, captivating humans with its gentle flow, rhythmic sounds, and boundless beauty. From tranquil lakes nestled in mountain valleys to serene beaches and flowing rivers, water places provide a unique escape from the chaos of modern life. This blog explores the charm, benefits, and best practices for visiting these serene locations.",
    },
    {
      id: 9,
      image: "../images/post9.svg",
      title: "The Evolution and Impact of Gaming",
      description: "Gaming has come a long way since the pixelated days of Pong and Pac-Man. What was once considered a niche hobby has now evolved into a multi-billion-dollar industry influencing technology, culture, and society. From hyper-realistic graphics to immersive virtual worlds, gaming technology continues to break boundaries and redefine entertainment. Lets dive into the innovations shaping the gaming landscape today",
    },
  ];
  return (
    <section className="py-16 ">
      <div className="justify-center items-center flex  mx-auto mb-8 ">
        <Image
          src={blog_img}
          alt="blog image"
          width={500}
          height={500}
          className="border border-[#F2AE66] h-[40%] w-[60%]"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
          {cards.map((card) => (
            <div
              key={card.id}
              className="shadow-md overflow-hidden border border-[#F2AE66] rounded-lg"
            >
              <Image
                src={card.image}
                alt={card.title}
                className=" h-50 w-full object-cover"
                width={500}
                height={500}
              />

              <div className="h-full p-4 bg-transparent">
                <h2
                  className={`${rubikVinyl.className} text-2xl font-semibold text-[#F2AE66] uppercase text-center`}
                >
                  {card.title}
                </h2>
                <p className=" my-2 mx-9 text-[20px] text-white text-justify" >
                  {card.description}
                </p>
                <div className="flex justify-end">
                  <Link
                    href={`Blog/${card.id}`}
                    className="mr-4 inline-block text-sm font-semibold  text-white hover:text-black py-1 px-2 rounded bg-[#F2AE66] hover:bg-gradient-to-r hover:from-purple-900 hover:to-[#F2AE66] transition duration-300 ease-in-out"
                  >
                    see more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
