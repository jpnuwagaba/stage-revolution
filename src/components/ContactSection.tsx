import React from "react";
import Flex from "./Flex";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <>
      <Flex
        child1={
          <>
            <h2 className=" text-4xl font-bold leading-none tracking-tight text-bronze sm:text-5xl md:text-6xl lg:text-7xl mb-4">
              Let&apos;s have a coversation
            </h2>
          </>
        }
        child2={
          <>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Input className="text-lg" id="full-name" placeholder="Full Name" />
              </div>
              <div className="space-y-2">
                <Input className="text-lg" id="email" placeholder="Email" type="email" />
              </div>
              <div className="space-y-2">
                <Textarea
                  className="min-h-[100px] text-lg"
                  id="message"
                  placeholder="Message"
                />
              </div>
              <div className="space-y-2">
              <Button className="ml-auto">Submit</Button>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default ContactSection;
