import React from "react";

export default function SageTank() {
  return (
    
    <div className="min-h-screen bg-gradient-to-b text-gray-900 font-sans flex flex-col">
<img src="/ST.gif" alt="funny gif" className="mx-auto h-auto shadow-m" />
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center text-center py-20 px-6">
        <img src="/sagetank.png" alt="sagetank logo" className="mx-24 w-80 h-auto" />
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Based on ABC's Shark Tank, SageTank is a startup pitch competition to win VC funding.
          </h2>
          <p className="text-lg md:text-xl text-white mb-4">
            All you need is an idea. Applications will open in the spring.
          </p>
          <p className="text-white/90 mb-8">
            Students of the 7 Claremont Colleges are invited to introduce their startups to advisors, founders, and venture capitalists. Whether you just have an idea or a fully functioning organization, SageTank welcomes all to compete for cash prizes and network with mentors.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-6  rounded-t-3xl ">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">Check out some highlights from SageTank 2024!</h3>
          
        
        </div>
        <div className="columns-2 md:columns-3 gap-4 p-6">
  <img src="/DSC00270.jpg" alt="gif 1" className="mb-4 w-full rounded-lg" />
  <img src="/DSC00193.jpg" alt="photo 2" className="mb-4 w-full rounded-lg" />
  <img src="/DSC00291.jpg" alt="photo 3" className="mb-4 w-full rounded-lg" />
  <img src="/DSC00176.jpg" alt="photo 4" className="mb-4 w-full rounded-lg" />
  <img src="/DSC00120.jpg" alt="photo 5" className="mb-4 w-full rounded-lg" />
  <img src="/DSC00130.jpg" alt="photo 6" className="mb-4 w-full rounded-lg" />
  <img src="/DSC00154.jpg" alt="photo 7" className="mb-4 w-full rounded-lg" />
  <img src="/DSC00204.jpg" alt="photo 8" className="mb-4 w-full rounded-lg" />
  <img src="/DSC00275.jpg" alt="photo 9" className="mb-4 w-full rounded-lg" />
</div>

      </section>

    </div>
  );
}
