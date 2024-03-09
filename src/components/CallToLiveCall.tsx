import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { rocksalt } from "@/lib/fonts";

const CallToLiveCall = () => {
  return (
    <>
      <div className="container py-12 md:py-36 flex flex-col items-center relative text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-black/65 z-10"></div>
        <Image
          className="absolute top-0 left-0 z-5"
          src={"/assets/mastery1.jpg"}
          alt="alt"
          layout="fill"
          objectFit="cover"
        />
        <div className="z-10 text-center">
          <h4 className={`${rocksalt.className} font-bold text-3xl md:text-6xl mb-5`}>
            wanna learn an instrument!
          </h4>
          <h3 className="font-bold text-2xl md:text-4xl uppercase">
            book a <span className="text-bronze">live call</span> with kelvin kyle
          </h3>
          <Button className="mt-4" variant="default">
            book live call
          </Button>
        </div>
      </div>
    </>
  );
};

export default CallToLiveCall;
