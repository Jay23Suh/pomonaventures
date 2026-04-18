function Sparkathon() {
  return (
    <div className="min-h-screen bg-brand-blue-deep text-white pt-24">
      {/* HERO BANNER */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('/DSCF9243.JPG')" }}
      >
        <div className="absolute inset-0 bg-brand-blue-deep/70 backdrop-blur-[2px]"></div>
        <div className="relative z-10 animate-fade-in">
          <h1 className="text-6xl md:text-9xl font-heading font-bold tracking-tighter mb-4">SPARKATHON</h1>
          <div className="h-1.5 w-32 bg-brand-orange mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-3xl font-light text-brand-orange tracking-wide uppercase">
            Innovative. Impact-driven. Interdisciplinary.
          </p>
        </div>
      </section>

      {/* Mission & About */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-24">
          <div className="text-center animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Mission</h2>
            <p className="text-xl text-blue-100 leading-relaxed italic">
              "To build a community of capable and compassionate students who are committed to solving real-world challenges through human-centered design."
            </p>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 animate-slide-up delay-100">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">About the Competition</h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                Sparkathon is an innovative, impact-driven design thinking competition that challenges teams of 4 - 6 students to collaboratively solve some of the most pressing societal problems. 
              </p>
              <p>
                As the largest student case competition of the Claremont Colleges (5Cs), Sparkathon attracts students from across California. More than just a one-day event, Sparkathon supports winning teams over a six-month period with generous funding, mentorship, and prototyping labs to implement their solutions in target communities.
              </p>
              <a 
                href="https://www.sparkathon.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-orange hover:text-orange-400 font-bold transition-colors group"
              >
                Visit sparkathon.org
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-brand-blue-deep rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-all duration-300">
            <h3 className="text-2xl font-heading font-bold mb-4 text-brand-orange">Diversity & Collaboration</h3>
            <p className="text-blue-100/70 leading-relaxed">
              We maximize inclusion and collaboration across diverse backgrounds and disciplines, bringing unique perspectives to every challenge.
            </p>
          </div>

          <div className="p-8 bg-brand-blue-deep rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-all duration-300">
            <h3 className="text-2xl font-heading font-bold mb-4 text-brand-orange">Human-Centered Design</h3>
            <p className="text-blue-100/70 leading-relaxed">
              The Sparkathon framework: empathy → define → ideate → prototype → implement. We build for people, first and foremost.
            </p>
          </div>

          <div className="p-8 bg-brand-blue-deep rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-all duration-300">
            <h3 className="text-2xl font-heading font-bold mb-4 text-brand-orange">Impact & Implementation</h3>
            <p className="text-blue-100/70 leading-relaxed">
              Teams design solutions with real-world feasibility and measurable outcomes, ensuring that great ideas lead to tangible change.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">The Sparkathon Experience</h2>
            <div className="h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {/* Hero big image */}
            <div className="w-full h-[60vh] overflow-hidden rounded-3xl shadow-2xl border border-white/5">
              <img src="/DSCF9374.JPG" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>

            {/* Collage */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
              <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl shadow-xl border border-white/5">
                <img src="/DSCF8824.JPG" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-3xl shadow-xl border border-white/5">
                <img src="/DSCF9146.JPG" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-3xl shadow-xl border border-white/5">
                <img src="/DSCF9303.JPG" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-3xl shadow-xl border border-white/5">
                <img src="/DSCF9408.JPG" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-3xl shadow-xl border border-white/5">
                <img src="/DSC00653.jpg" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sparkathon;