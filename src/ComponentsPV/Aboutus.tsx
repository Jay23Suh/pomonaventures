function AboutUs() {
    const teamMembers = [
    { name: 'Jayhyun Suh', src: '/jay.jpg', linkedin: 'https://www.linkedin.com/in/jayhyunsuh/' },
    { name: 'Ochiro Tugsbilguun', src: '/photo2.png', linkedin: 'https://www.linkedin.com/in/ochirgardi-tugsbilguun/' },
    { name: 'Amber Feng', src: '/photo3.png', linkedin: 'https://www.linkedin.com/in/amber-feng-6a567827b/' },
    { name: 'Terry Wu', src: '/photo4.png', linkedin: 'https://www.linkedin.com/in/terrywu28/' },
    { name: 'Norah Shipley', src: '/photo5.png', linkedin: 'https://www.linkedin.com/in/norah-shipley-3288301b0/' },
     { name: 'Olivia Ma', src: '/photo6.png', linkedin: 'https://www.linkedin.com/in/olivia-kaiyi-ma/' },
    { name: 'Pranav Singhvi', src: '/photo6.png', linkedin: 'https://www.linkedin.com/in/psinghvi05/' }, 
      { name: 'Will Bennett', src: '/photo6.png', linkedin: 'https://www.linkedin.com/in/will-bennett28/' }
  ];
  return (
    <main className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Paragraph Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-sans font-bold mb-4">
            Who we are: 
          </h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-8">   
                A community of thinkers, doers, and dreamers
          </h1>
          <img src="/DSC00221.jpg" alt="small 1" className="w-full h-auto rounded-lg" />
          <p className="mt-4 max-w-4xl mx-auto text-l text-gray-200 mb-24">
            Pomona Ventures is a student-run organization at the Claremont Colleges dedicated to fostering innovation and empowering the next generation of entrepreneurs. Our vision is simple: anyone with an idea should have the support and resources to pursue it. We provide a vibrant community, hands-on workshops, and direct access to a network of experienced mentors and alumni to help turn bold ideas into impactful realities.
          </p>
        </div>
         <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet the Team
          </h2>
          {/* This is the new interactive grid */}
          <div className="grid grid-cols-4 md:grid-cols-4 gap-4 p-6">
            {teamMembers.map((member) => (
              <a 
                key={member.name}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block rounded-lg overflow-hidden shadow-lg"
              >
                {/* The Image */}
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                {/* The Hover Overlay */}
                <div className="absolute inset-0 bg-[#2873b3] bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-400">
                  <p className="text-white text-lg font-semibold">{member.name}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
     
    </main>
  );
}

export default AboutUs;