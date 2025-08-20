export default function SageTank() {
  return (
    
    <div className="min-h-screen bg-gradient-to-b text-gray-900 flex flex-col">
<img src="/ST.gif" alt="funny gif" className="mx-auto h-auto shadow-m" />
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center text-center py-20 px-6">
        <img src="/sagetank.png" alt="sagetank logo" className="mx-24 w-80 h-auto" />
        <div className="max-w-3xl font-nunito">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Based on ABC's Shark Tank, SageTank is a startup pitch competition to win VC funding.
          </h2>
          <p className=" ext-lg md:text-xl text-white mb-4">
            All you need is an idea. Applications will open in the spring.
          </p>
          <p className="text-white/90 mb-8">
            Students of the 7 Claremont Colleges are invited to introduce their startups to advisors, founders, and venture capitalists. Whether you just have an idea or a fully functioning organization, SageTank welcomes all to compete for cash prizes and network with mentors.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-6  rounded-t-3xl ">
        <div className="max-w-5xl mx-auto text-center">     </div>
    <h3 className="text-3xl font-sans font-bold mb-12 text-center text-white">Check out our teams and some highlights from SageTank 2024!</h3>
    
    {/* Grid Container */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">

    {/* Card 1: O-Live */}
    <div className="bg-black/40 p-6 rounded-lg border border-[#ea6c55]/70">
        <h4 className="text-xl font-bold mb-2 text-[#2873b3]">O-Live</h4>
        <p className="text-gray-200">
            A discreet health monitoring device designed to support older adults by detecting falls and connecting them to trusted contacts, all while respecting their privacy and autonomy
        </p>
    </div>

    {/* Card 2: MusicDB */}
    <div className="bg-black/40 p-6 rounded-lg border border-[#ea6c55]/70">
        <h4 className="text-xl font-bold mb-2 text-[#2873b3]">MusicDB</h4>
        <p className="text-gray-200">
            A music analytics platform—like PitchBook for A&R—that gives labels and venues the key data they need to discover and book artists, using a freemium SaaS model
        </p>
    </div>

    {/* Card 3: ExploraVist */}
    <div className="bg-black/40 p-6 rounded-lg border border-[#ea6c55]/70">
        <h4 className="text-xl font-bold mb-2 text-[#2873b3]">ExploraVist</h4>
        <p className="text-gray-200">
            An affordable wearable device for the visually impaired that, with the press of a button, accurately describes surroundings and reads text aloud by offloading processing to a smartphone
        </p>
    </div>

    {/* Card 4: Pheratech Systems */}
    <div className="bg-black/40 p-6 rounded-lg border border-[#ea6c55]/70">
        <h4 className="text-xl font-bold mb-2 text-[#2873b3]">Pheratech Systems</h4>
        <p className="text-gray-200">
            The FALCON System uses nature-inspired autonomous robot swarms to support high-risk missions, offering decentralized, adaptive coordination that outperforms traditional systems under pressure
        </p>
    </div>

    {/* Card 5: Pocketly */}
    <div className="bg-black/40 p-6 rounded-lg border border-[#ea6c55]/70">
        <h4 className="text-xl font-bold mb-2 text-[#2873b3]">Pocketly</h4>
        <p className="text-gray-200">
            A web platform that uses AI to guide students through building a college list and instantly estimating real net prices—including aid and scholarships—making the process simpler and clearer
        </p>
    </div>

    {/* Card 6: Yaaro */}
    <div className="bg-black/40 p-6 rounded-lg border border-[#ea6c55]/70">
        <h4 className="text-xl font-bold mb-2 text-[#2873b3]">Yaaro</h4>
        <p className="text-gray-200">
            Helps young adults form real-life friendships by matching like-minded people through a quiz, enabling instant group hangouts with one tap. Backed by key partners and a 300+ user waitlist
        </p>
    </div>

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
