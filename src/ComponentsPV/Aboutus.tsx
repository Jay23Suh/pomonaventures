function AboutUs() {
    const teamMembers = [
    { name: 'Jayhyun Suh', src: '/PVLinkedInImages/PV_Jay.jpeg', linkedin: 'https://www.linkedin.com/in/jayhyunsuh/' },
    { name: 'Ochiro Tugsbilguun', src: '/PVLinkedInImages/PV_Ochiro.jpeg', linkedin: 'https://www.linkedin.com/in/ochirgardi-tugsbilguun/' },
    { name: 'Norah Shipley', src: '/PVLinkedInImages/PV_Norah.jpeg', linkedin: 'https://www.linkedin.com/in/norah-shipley-3288301b0/' },
    { name: 'Amber Feng', src: '/PVLinkedInImages/PV_Amber.jpeg', linkedin: 'https://www.linkedin.com/in/amber-feng-6a567827b/' },
    { name: 'Terry Wu', src: '/PVLinkedInImages/PV_Terry.jpeg', linkedin: 'https://www.linkedin.com/in/terrywu28/' },
    { name: 'Will Bennett', src: '/PVLinkedInImages/PV_Will.jpeg', linkedin: 'https://www.linkedin.com/in/will-bennett28/' },
        { name: 'Lateef Wakil', src: '/PVLinkedInImages/PV_Lateef.jpeg', linkedin: 'https://www.linkedin.com/in/lateef-wakil-250a81282/' },
     { name: 'Olivia Ma', src: '/Olivia.jpeg', linkedin: 'https://www.linkedin.com/in/olivia-kaiyi-ma/' },
    { name: 'Pranav Singhvi', src: '/PVLinkedInImages/PV_Pranav.jpeg', linkedin: 'https://www.linkedin.com/in/psinghvi05/' }, 
    { name: 'Hadley Griffin-Schmidt', src: '/PVLinkedInImages/PV_Hadley.jpeg', linkedin: 'https://www.linkedin.com/in/hadley-griffin-schmidt/' },
     { name: 'Jack Christy', src: '/Terr.png', linkedin: 'https://www.linkedin.com/in/terrywu28/' }
  ];
  return (
    <main className="text-white bg-brand-blue-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Top Paragraph Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Who we are: 
          </h1>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-brand-orange">   
                A community of thinkers, doers, and dreamers
          </h1>
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 border-2 border-white/10">
            <img src="/DSC00221.jpg" alt="Pomona Ventures Team" className="w-full h-auto" />
          </div>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-blue-100 mb-24 leading-relaxed">
            Pomona Ventures is a student-run organization at the Claremont Colleges dedicated to fostering innovation and empowering the next generation of entrepreneurs. Our vision is simple: anyone with an idea should have the support and resources to pursue it. We provide a vibrant community, hands-on workshops, and direct access to a network of experienced mentors and alumni to help turn bold ideas into impactful realities.
          </p>
        </div>
         <section className="mt-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-4">
            Meet the Team
          </h2>
          <div className="h-1.5 w-24 bg-brand-orange mx-auto rounded-full mb-16"></div>
          {/* This is the new interactive grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <a 
                key={member.name}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block rounded-xl overflow-hidden shadow-lg aspect-square border border-white/5"
              >
                {/* The Image */}
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* The Hover Overlay */}
                <div className="absolute inset-0 bg-brand-orange/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-center">
                  <p className="text-white text-lg font-bold mb-2">{member.name}</p>
                  <p className="text-white/80 text-sm">View LinkedIn</p>
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