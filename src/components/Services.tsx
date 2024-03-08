import React from "react";
import Service from "./Service";
import { Drum, Book } from "lucide-react";
import { Disc } from "lucide-react";
import { Guitar } from "lucide-react";
import { Mic } from "lucide-react";
import { Cone } from "lucide-react";
import FreeFlex from "./FreeFlex";
import { Button } from "@/components/ui/button";

const services = [
  {
    service: "Live Band",
    url: "",
    icon: <Drum size={"40px"} />,
    summary:
      "Exciting live music performances tailored for weddings, corporate events, birthdays, and special occasions.",
  },
  {
    service: "Academy",
    url: "",
    icon: <Book size={"40px"} />,
    summary:
      "Comprehensive music lessons including piano, guitar, drums, vocals, band mentoring, and more.",
  },
  {
    service: "Sound",
    url: "",
    icon: <Disc size={"40px"} />,
    summary:
      "Professional sound system services for weddings, corporate events, and other special occasions.",
  },
  {
    service: "Recording",
    url: "",
    icon: <Mic size={"40px"} />,
    summary:
      "State-of-the-art recording studio sessions for artists and musicians to produce high-quality tracks.",
  },
  {
    service: "Lights",
    url: "/lights",
    icon: <Cone className="-rotate-12" size={"40px"} />,
    summary:
      "Mesmerizing lighting designs to elevate the ambiance and mood of events and performances.",
  },
];

const Services = () => {
  return (
    <>
      <div className="">
        <FreeFlex
          child1={
            <>
              <div className="">
                <div className="mb-8">
                  <p className="text-white uppercase text-sm mb-4">services</p>
                  <h2 className=" text-4xl font-bold leading-none tracking-tight text-bronze sm:text-5xl md:text-6xl lg:text-7xl">
                    What We Do
                  </h2>
                  <p className="text-white text-lg mt-4">
                    Experience our diverse range: Live Band, Music Academy,
                    Sound System, Recording, and Lights services.
                  </p>
                  <Button className="mt-4" variant="default">
                    learn more
                  </Button>
                </div>
              </div>
            </>
          }
          child2={
            <>
              <div className="lg:ml-10 grid grid-cols-1 md:grid-cols-2 items-start gap-8">
                {services.map((service) => (
                  <Service
                    key={service.service}
                    service={service.service}
                    url={service.url}
                    summary={service.summary}
                    icon={service.icon}
                  />
                ))}
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default Services;
