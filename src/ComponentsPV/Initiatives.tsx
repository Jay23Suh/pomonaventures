function Initiatives() {
  return (
    <main className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Paragraph Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4">
            What we do: 
          </h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">   
                Initiatives to foster entrepreneurship and empower entrepreneurs
          </h1>
        </div>
            <section className="flex flex-col md:flex-row items-center gap-6">
          
          {/* Left Column: Paragraph */}
          <div className="md:w-1/2">
              <img src="/ST2.png" alt="small 1" className="w-96 mb-2 h-auto rounded-lg" />
            <p className="text-lg text-gray-200 leading-relaxed">
              Sparkathon is a one-of-a-kind design-thinking challenge which enables students to solve some of the world's most pressing challenges. Winners are awarded with cash prizes, exclusive access to recruiters, and an opportunity to implement their solutions in a target country. At its peak, the event scaled to 5+ cities! 
          </p>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 justify-center">
          <img src="/DSC00271.jpg" alt="small 1" className="w-auto mb-2 h-auto rounded-lg" />
          </div>

        </section>
         <section className="flex flex-col md:flex-row items-center gap-12 mt-24">
          
          {/* Left Column: Paragraph */}
          {/* Right Column: Image */}
          <div className="md:w-1/2">
          <img src="/DSC00835.jpg" alt="small 1" className="w-auto mb-2 h-auto rounded-lg" />
          </div>
                    <div className="md:w-1/2">
              <h1 className="text-6xl text-bold text-center my-8"> Sparkathon </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Our flagship event, SageTank, provides a platform for students across the 5Cs to pitch their innovative ideas to a panel of experienced judges, including alumni, faculty, and industry leaders. Participants receive invaluable feedback, mentorship, and the chance to win seed funding to help bring their entrepreneurial visions to life. It's more than a competition; it's a launchpad for our own founders.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}

export default Initiatives;