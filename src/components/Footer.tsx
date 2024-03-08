import React from "react";
import Image from "next/image";
import SocialMediaBar from "./SocialMediaBar";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-8 py-12 md:py-36">
        <div>
          <h1 className="text-3xl font-bold tracking-tight capitalize mb-4">
            stage revolution
          </h1>
          <SocialMediaBar />
        </div>
        <div className="flex flex-col items-start space-y-4">
          <div className="text-sm font-bold">
            Quick links
          </div>
          <Link className="text-sm" href={""}>
            Home
          </Link>
          <Link className="text-sm" href={""}>
            About us
          </Link>
          <Link className="text-sm" href={""}>
            Sservices
          </Link>
          <Link className="text-sm" href={""}>
            Portfolio
          </Link>
          <Link className="text-sm" href={""}>
            News
          </Link>
          <Link className="text-sm" href={""}>
            Testimonials
          </Link>
          <Link className="text-sm" href={""}>
            Contact us
          </Link>
          <Link className="text-sm" href={""}>
            Blog
          </Link>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <div className="text-sm font-bold">
            Contact Information
          </div>
          <div className="text-sm">Address: Makerere</div>
          <div className="text-sm">Phone: Makerere</div>
          <div className="text-sm">Email: Makerere</div>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <div className="text-sm font-bold">
            Legal
          </div>
          <Link className="text-sm" href={""}>
            Terms of Service
          </Link>
          <Link className="text-sm" href={""}>
            Privacy Policy
          </Link>
          <Link className="text-sm" href={""}>
            Copyright &copy; 2024 Stage Revolution All Rights Reserved
          </Link> 
        </div>
      </div>
    </>
  );
};

export default Footer;
