import React from "react";
import { FaXTwitter, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

const SocialMediaBar = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-4">
        <div className="cursor-pointer hover:text-bronze transition duration-300 ease-in-out">
          <FaXTwitter size={'30px'}/>
        </div>
        <div className="cursor-pointer hover:text-bronze transition duration-300 ease-in-out">
          <FaFacebookF size={'30px'}/>
        </div>
        <div className="cursor-pointer hover:text-bronze transition duration-300 ease-in-out">
          <FaInstagram size={'30px'}/>
        </div>
        <div className="cursor-pointer hover:text-bronze transition duration-300 ease-in-out">
          <FaTiktok size={'30px'}/>
        </div>
      </div>
    </>
  );
};

export default SocialMediaBar;
