"use client";

import React from "react";
import Image from "next/image";
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "/assets/group.jpg", width: 1200, height: 800 },
  { src: "/assets/group2.jpg", width: 1600, height: 900 },
  { src: "/assets/group3.jpg", width: 1400, height: 1000 },
  { src: "/assets/mastery.jpg", width: 800, height: 600 },
  { src: "/assets/stage2.jpg", width: 1100, height: 700 },
  { src: "/assets/stage3.jpg", width: 1300, height: 900 },
  { src: "/assets/pic1.jpg", width: 1000, height: 800 },
  { src: "/assets/stage4.jpg", width: 1500, height: 1000 },
  { src: "/assets/stage5.jpg", width: 1200, height: 900 },
  { src: "/assets/stage6.jpg", width: 1400, height: 800 },
  { src: "/assets/pic2.jpg", width: 900, height: 600 },
  { src: "/assets/group4.jpg", width: 1700, height: 1000 },
  { src: "/assets/hero.jpg", width: 800, height: 600 },
  { src: "/assets/pic3.jpg", width: 1100, height: 700 },
  { src: "/assets/hero1.jpg", width: 1200, height: 800 },
  { src: "/assets/pic4.jpg", width: 1300, height: 900 },
  { src: "/assets/jesse.jpg", width: 1400, height: 1000 },
  { src: "/assets/stage7.jpg", width: 1000, height: 700 },
  { src: "/assets/sr color names.jpg", width: 1500, height: 800 },
  { src: "/assets/jesse1.jpg", width: 1600, height: 900 },
  { src: "/assets/kelvin.jpg", width: 1100, height: 600 },
  { src: "/assets/stage8.jpg", width: 1300, height: 800 },
  { src: "/assets/whatwedo.jpg", width: 1400, height: 900 },
  { src: "/assets/sr-color-palette.jpg", width: 900, height: 600 },
  { src: "/assets/stage.jpg", width: 1700, height: 1000 },
  { src: "/assets/stage1.jpg", width: 800, height: 600 },
  { src: "/assets/kelvin2.jpg", width: 1200, height: 800 },
];

// const sliced = src.slice(0, 10);

// const colSpans = [1, 2, 3];

const Portfolio = () => {
  return (
    <>
      {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 bg-white gap-2">
        {sliced.map((image, index) => {
          // Randomly pick a col-span value from colSpans array
          const randomIndex = Math.floor(Math.random() * colSpans.length);
          const colSpan = colSpans[randomIndex];

          return (
            <div key={index} className={`col-span-${colSpan}`}>
              <Image
                className="w-full"
                src={image}
                alt="alt"
                width={600}
                height={600}
              />
            </div>
          );
        })}
      </div> */}
      <PhotoAlbum layout="rows" photos={photos} />
    </>
  );
};

export default Portfolio;
