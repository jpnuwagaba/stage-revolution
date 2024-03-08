import React from "react";
import Flex from "./Flex";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const FeaturedArtists = () => {
  return (
    <>
      <Flex
        child1={
          <>
            <div className="grid grid-cols-1 divide-y pr-16">
              <h2 className="text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl mb-5">
                Featured Artists
              </h2>
              <p className="pt-5">
                Come and see the amazing artists we have showcased - incredibly
                talented, imaginative, and representing a wide range of styles.
                Take a deep dive into their creations and let their art ignite
                your creativity.
              </p>              
            </div>
            <div className="mt-5">
                <Button variant="outline">see all artists</Button>
              </div>
          </>
        }
        child2={
          <>
            <Image
              className="rounded-xl w-full"
              src="/assets/stage.jpg"
              alt="featured artists"
              width={500}
              height={500}
            />
          </>
        }
      />
    </>
  );
};

export default FeaturedArtists;
