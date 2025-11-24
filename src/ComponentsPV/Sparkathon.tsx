function Sparkathon() {
  return (
    <>
      <div className="text-white">

        {/* HERO BANNER */}
        <section
          className="h-160 bg-cover bg-center flex flex-col items-center justify-center"
          style={{ backgroundImage: "url('/DSCF9243.JPG')" }}
        >
          <h1 className="text-6xl md:text-8xl font-bold drop-shadow-lg">SPARKATHON</h1>
          <p className="mt-4 text-xl md:text-2xl drop-shadow-lg">
            Innovative. Impact-driven. Interdisciplinary.
          </p>
        </section>

        {/* Mission */}
        <section className="text-black mx-auto px-4 py-12 text-center space-y-6 max-w-4xl">
          <h2 className="text-4xl font-semibold">MISSION</h2>
          <p className="text-lg">
            To build a community of capable and compassionate students who are committed to solving real-world challenges through human-centered design. 
            We aspire to cultivate an open and nurturing environment for all communities.
          </p>
        </section>

        {/* White separator */}
        <div className="border-t-4 border-white/60 w-full my-12"></div>

        {/* About */}
        <section className="text-black py-12 max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-4xl font-semibold">ABOUT</h2>
          <p className="text-lg">
            Sparkathon is an innovative, impact-driven design thinking competition that challenges teams of 4 - 6 students to collaboratively solve some of the most pressing societal problems. As the largest student case competition of the Claremont Colleges (5Cs), Sparkathon attracts students from across California. More than just a one-day event, Sparkathon supports winning teams over a six-month period with generous funding, mentorship, and prototyping labs to implement their solutions in target communities.
          </p>
          <p className="text-lg leading-relaxed">
            Learn more  
            <a href="https://www.sparkathon.org/" className="hover:underline text-blue-500"> here</a>.
          </p>
        </section>

        {/* White separator */}
        <div className="border-t-4 border-white/60 w-full my-12"></div>

<section className="text-black max-w-5xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center 
                    md:divide-x md:divide-white/60">

  <div className="space-y-4 px-4">
    <h3 className="text-2xl font-semibold">Diversity & Collaboration</h3>
    <p className="text-gray-200 md:text-black">
      We maximize inclusion and collaboration across diverse backgrounds and disciplines.
    </p>
  </div>

  <div className="space-y-4 px-4">
    <h3 className="text-2xl font-semibold">Human-Centered Design</h3>
    <p className="text-gray-200 md:text-black">
      The Sparkathon framework: empathy → define → ideate → prototype → implement.
    </p>
  </div>

  <div className="space-y-4 px-4">
    <h3 className="text-2xl font-semibold">Impact & Implementation</h3>
    <p className="text-gray-200 md:text-black">
      Teams design solutions with real-world feasibility and measurable outcomes.
    </p>
  </div>

</section>


      </div>

      {/* White separator */}
      <div className="border-t-4 border-white/60 w-full my-12"></div>

      {/* Gallery */}
      <section className="py-12">
        <div className="p-6 space-y-6 max-w-6xl mx-auto">

          {/* Hero big image */}
          <div className="w-full">
            <img src="/DSCF9374.JPG" className="w-full h-128 object-cover rounded-xl shadow-md" />
          </div>

          {/* Collage */}
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <img src="/DSCF8824.JPG" className="w-full h-full object-cover rounded-xl shadow-md" />
            </div>

            <img src="/DSCF9146.JPG" className="rounded-xl shadow-md" />
            <img src="/DSCF9303.JPG" className="rounded-xl shadow-md" />
            <img src="/DSCF9408.JPG" className="rounded-xl shadow-md" />
            <img src="/DSC00653.jpg" className="rounded-xl shadow-md" />
          </div>
        </div>
      </section>

      {/* Final separator if needed */}
      {/* <div className="border-t border-white/40 w-full my-12"></div> */}

    </>
  );
}

export default Sparkathon;
