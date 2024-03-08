import AboutUsSection from "@/components/AboutUsSection";
import CallToLiveCall from "@/components/CallToLiveCall";
import FeaturedArtists from "@/components/FeaturedArtists";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 gap-12 md:gap-36">
        <div id="hero-section">
          <HeroSection />
        </div>
        <div id="about-us-section">
          <AboutUsSection />
        </div>
        <div id="services-section">
          <Services />
        </div>
        {/* <div id="featured-artists-section">
          <FeaturedArtists />
        </div> */}
        <div id="call-to-live-call-section">
          <CallToLiveCall />
        </div>
        {/* <div id="portfolio-section">
          <Portfolio />
        </div> */}
      </div>
    </>
  );
}
