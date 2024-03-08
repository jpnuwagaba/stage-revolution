import React from "react";
import FreeFlex from "./FreeFlex";
import { Button } from "@/components/ui/button";

const AboutUsSection = () => {
  return (
    <>
      <div className="pb-12">
        <FreeFlex
          child1={
            <>
              <div className="">
                <p className="text-white uppercase text-sm mb-4">overview</p>
                <h2 className=" text-4xl font-bold leading-none tracking-tight text-bronze sm:text-5xl md:text-6xl lg:text-7xl">
                  About
                </h2>
              </div>
            </>
          }
          child2={
            <>
              <div className="lg:ml-10">
                <p className="text-white text-lg">
                  Stage Revolution is a dynamic music agency dedicated to live
                  entertainment, music education, sound system services,
                  recording facilities, and event lighting solutions. They offer
                  Live Band services for weddings and events, Music Academy for
                  lessons and mentoring, Sound System services for top-quality
                  audio, Recording Studio for professional tracks, and Lights
                  services for captivating designs. Their team of talented
                  musicians, educators, engineers, and specialists aim to create
                  unforgettable musical experiences for clients and audiences.
                </p>
                <Button className="mt-4" variant="default">
                  see full story
                </Button>
              </div>
            </>
          }
        />
      </div>
      <hr className="w-[95%] m-auto" />
    </>
  );
};

export default AboutUsSection;
