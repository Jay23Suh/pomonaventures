export default function SageTank() {
  return (
    <div className="min-h-screen bg-brand-blue-deep text-white flex flex-col pt-24">
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img src="/ST.gif" alt="SageTank event gif" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left py-12 px-4 md:py-20 md:px-6 max-w-7xl mx-auto">
        <img src="/sagetank.png" alt="sagetank logo" className="w-48 md:w-80 h-auto mb-8 md:mb-0 md:mr-16 flex-shrink-0" />
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
            The Premier Startup Pitch Competition at the Claremont Colleges.
          </h1>
          <p className="text-lg md:text-xl text-brand-orange font-semibold mb-6">
            Win VC funding. Turn your idea into reality.
          </p>
          <p className="text-lg text-blue-100 leading-relaxed mb-8">
            Students of the 7 Claremont Colleges are invited to introduce their startups to advisors, founders, and venture capitalists. Whether you just have an idea or a fully functioning organization, SageTank welcomes all to compete for cash prizes and network with mentors.
          </p>
          <div className="inline-block px-6 py-2 bg-white/10 border border-white/20 rounded-full text-blue-100 font-medium">
            Applications open Spring 2026
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">SageTank 2025 Finalists</h2>
            <div className="h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          </div>
      
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {/* Card 1: O-Live */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-all duration-300 shadow-xl group">
                  <h4 className="text-xl font-bold mb-3 text-brand-orange group-hover:text-orange-400 transition-colors">O-Live</h4>
                  <p className="text-blue-100/70 leading-relaxed">
                      A discreet health monitoring device designed to support older adults by detecting falls and connecting them to trusted contacts, all while respecting their privacy and autonomy.
                  </p>
              </div>

              {/* Card 2: MusicDB */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-all duration-300 shadow-xl group">
                  <h4 className="text-xl font-bold mb-3 text-brand-orange group-hover:text-orange-400 transition-colors">MusicDB</h4>
                  <p className="text-blue-100/70 leading-relaxed">
                      A music analytics platform—like PitchBook for A&R—that gives labels and venues the key data they need to discover and book artists, using a freemium SaaS model.
                  </p>
              </div>

              {/* Card 3: ExploraVist */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-all duration-300 shadow-xl group">
                  <h4 className="text-xl font-bold mb-3 text-brand-orange group-hover:text-orange-400 transition-colors">ExploraVist</h4>
                  <p className="text-blue-100/70 leading-relaxed">
                      An affordable wearable device for the visually impaired that, with the press of a button, accurately describes surroundings and reads text aloud by offloading processing to a smartphone.
                  </p>
              </div>

              {/* Card 4: Pheratech Systems */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-all duration-300 shadow-xl group">
                  <h4 className="text-xl font-bold mb-3 text-brand-orange group-hover:text-orange-400 transition-colors">Pheratech Systems</h4>
                  <p className="text-blue-100/70 leading-relaxed">
                      The FALCON System uses nature-inspired autonomous robot swarms to support high-risk missions, offering decentralized, adaptive coordination that outperforms traditional systems under pressure.
                  </p>
              </div>

              {/* Card 5: Pocketly */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-all duration-300 shadow-xl group">
                  <h4 className="text-xl font-bold mb-3 text-brand-orange group-hover:text-orange-400 transition-colors">Pocketly</h4>
                  <p className="text-blue-100/70 leading-relaxed">
                      A web platform that uses AI to guide students through building a college list and instantly estimating real net prices—including aid and scholarships—making the process simpler and clearer.
                  </p>
              </div>

              {/* Card 6: Yaaro */}
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-brand-orange/50 transition-all duration-300 shadow-xl group">
                  <h4 className="text-xl font-bold mb-3 text-brand-orange group-hover:text-orange-400 transition-colors">Yaaro</h4>
                  <p className="text-blue-100/70 leading-relaxed">
                      Helps young adults form real-life friendships by matching like-minded people through a quiz, enabling instant group hangouts with one tap. Backed by key partners and a 300+ user waitlist.
                  </p>
              </div>
          </div>
   
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">Event Highlights</h2>
            <div className="h-1.5 w-24 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <img src="/DSC00270.jpg" alt="SageTank highlight" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-white/5" />
            <img src="/DSC00193.jpg" alt="SageTank highlight" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-white/5" />
            <img src="/DSC00291.jpg" alt="SageTank highlight" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-white/5" />
            <img src="/DSC00176.jpg" alt="SageTank highlight" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-white/5" />
            <img src="/DSC00120.jpg" alt="SageTank highlight" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-white/5" />
            <img src="/DSC00130.jpg" alt="SageTank highlight" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-white/5" />
            <img src="/DSC00154.jpg" alt="SageTank highlight" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-white/5" />
            <img src="/DSC00204.jpg" alt="SageTank highlight" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-white/5" />
            <img src="/DSC00275.jpg" alt="SageTank highlight" className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-white/5" />
          </div>
        </div>
      </section>
    </div>
  );
}