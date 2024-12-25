"use client";

import HeroSection from "../../../components/HeroSection";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 h-screen w-full">
      {/* Background Image with Mirroring */}
      <div
        className="absolute -z-10 inset-0 bg-cover bg-center bg-no-repeat 
        after:content-[''] after:absolute after:h-full after:w-full after:bg-[linear-gradient(0deg,_transparent_0,_transparent_50%,_#000)] after:opacity-80"
        style={{
          backgroundImage: "url('/images/landingPageBackground.png')",
          transform: "scaleX(-1)",
        }}
      ></div>
      {/* Blue Overlay */}
      <div className="absolute -z-10   inset-0 bg-[#0083B1B2] opacity-90"></div>
    <main className="z-20 ">
      {/* <Nav/> */}
       <HeroSection />
      {/* <AboutSection />
      <FeaturesSection />
      <CTASection />
      <Footer /> */}
    </main>
  </div>
  );
}
