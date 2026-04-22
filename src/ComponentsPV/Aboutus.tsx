import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
  };
}

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
  { name: 'Jack Christy', src: '/Terr.png', linkedin: 'https://www.linkedin.com/in/terrywu28/' },
];

function AboutUs() {
  const reduced = useReducedMotion();

  return (
    <main className="text-white bg-brand-blue-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* ── Page Header ───────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp()}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-brand-orange font-medium mb-6">
            Pomona Ventures
          </p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-3">
            Who we are:
          </h1>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-orange">
            A community of thinkers, doers, and dreamers
          </h2>
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-2xl mb-12 border-2 border-white/10"
          initial={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.2 }}
        >
          <img src="/DSC00221.jpg" alt="Pomona Ventures Team" className="w-full h-auto" />
        </motion.div>

        <motion.p
          className="max-w-4xl mx-auto text-lg md:text-xl text-blue-100 mb-24 leading-relaxed text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.35)}
        >
          Pomona Ventures is a student-run organization at the Claremont Colleges dedicated to fostering innovation and empowering the next generation of entrepreneurs. Our vision is simple: anyone with an idea should have the support and resources to pursue it. We provide a vibrant community, hands-on workshops, and direct access to a network of experienced mentors and alumni to help turn bold ideas into impactful realities.
        </motion.p>

        {/* ── Meet the Team ─────────────────────────────────────────── */}
        <section>
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp()}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Meet the Team</h2>
            <div className="h-1.5 w-24 bg-brand-orange mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.a
                key={member.name}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block rounded-xl overflow-hidden shadow-lg aspect-square border border-white/5 cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp(i * 0.06)}
                whileHover={{ y: reduced ? 0 : -4 }}
                transition={{ duration: 0.22 }}
              >
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-orange/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-center">
                  <p className="text-white text-lg font-bold mb-2">{member.name}</p>
                  <p className="text-white/80 text-sm">View LinkedIn</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

export default AboutUs;
