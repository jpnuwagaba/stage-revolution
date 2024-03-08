import React from "react";
import SocialMediaBar from "./SocialMediaBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { rocksalt } from "@/lib/fonts";

const HeroSection = () => {
  return (
    <>
      <div className="container pt-36 flex flex-col items-center relative text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
        <Image
          className="absolute top-0 left-0 z-5"
          src={"/assets/hero.jpg"}
          alt="alt"
          layout="fill"
          objectFit="cover"
        />
        <div className="z-10">
          <h1
            className={`${rocksalt.className} text-bronze text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8`}
          >
            Welcome 2
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-8">
            Stage Revolution!
          </h1>
          <div className="flex flex-col md:flex-row items-center md:divide-x max-w-[900px] m-auto mb-8 md:mb-16">
            <div className="flex flex-col items-center px-5 py-3 bg-bronze rounded-lg md:mr-10 text-black">
              <p className="uppercase text-sm">Established</p>
              <p className="text-3xl font-bold">2020</p>
            </div>
            <div className="px-5 py-3 flex flex-col items-start">
              <p className="text-center md:text-left mb-5">
                Experience the magic of live music with us. Unleash the power of
                live entertainment with Stage Revolution. Join us in creating
                unforgettable events and performances. Discover the difference
                with Stage Revolution. Let's make your event truly special.
              </p>
              <div className="m-auto md:m-0">
              <div className="flex flex-row gap-4 items-center">
                <SocialMediaBar />
                <Button variant="default">book us</Button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
