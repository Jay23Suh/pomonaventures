import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Main content */}
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center text-center">
          {/* Hero Image */}
              <img src="/PV.png" alt="small 1" className="w-m h-auto rounded-lg" />
          {/* Hero Content */}
          <div className="relative max-w-2xl">
              <p className="font-nunito text-lg md:text-xl text-white">
              Want to be a part of the biggest entrepreneurship club at the Claremont Colleges?
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-6 mb-16">
              <a
                href="/contacts"
                className="px-6 py-3 bg-[#2975b3] text-white font-semibold rounded-lg hover:bg-blue-700"
              >
                Support Us
              </a>
              <a
                href="/apply"
                className="px-6 py-3 bg-[#2975b3] text-white font-semibold rounded-lg hover:bg-blue-50"
              >
                Apply
              </a>
            </div>
            <h1 className="font-nata text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Pomona Ventures.
            </h1>
            <p className="font-nunito text-lg md:text-xl text-white mb-8">
              Our vision is simple: anyone with an idea should have the support and resources to pursue it.
            </p>
            
          </div>



        </section>

          <div className="grid grid-cols-3 gap-4 p-6">
  <div className="col-span-2 row-span-2">
    <img src="/PVWhite.png" alt="big gif" className=" rounded-lg" />
  </div>
  <img src="/IMG_7550.JPG" alt="small 1" className="w-full h-auto rounded-lg" />
  <img src="/IMG_7797.JPG" alt="small 2" className="w-full h-auto rounded-lg" />
  <img src="/DSC00228.jpg" alt="small 3" className="w-full h-auto rounded-lg" />
  <img src="/DSC00872.jpg" alt="small 3" className="w-full h-auto rounded-lg" />
  <img src="/DSC00653.jpg" alt="small 3" className="w-full h-auto rounded-lg" />
</div>
    </div>
  );
}

export default Home;