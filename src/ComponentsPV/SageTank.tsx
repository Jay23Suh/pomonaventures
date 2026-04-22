import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
  };
}

const finalists = [
  {
    name: 'O-Live',
    desc: 'A discreet health monitoring device designed to support older adults by detecting falls and connecting them to trusted contacts, all while respecting their privacy and autonomy.',
  },
  {
    name: 'MusicDB',
    desc: 'A music analytics platform—like PitchBook for A&R—that gives labels and venues the key data they need to discover and book artists, using a freemium SaaS model.',
  },
  {
    name: 'ExploraVist',
    desc: 'An affordable wearable device for the visually impaired that, with the press of a button, accurately describes surroundings and reads text aloud by offloading processing to a smartphone.',
  },
  {
    name: 'Pheratech Systems',
    desc: 'The FALCON System uses nature-inspired autonomous robot swarms to support high-risk missions, offering decentralized, adaptive coordination that outperforms traditional systems under pressure.',
  },
  {
    name: 'Pocketly',
    desc: 'A web platform that uses AI to guide students through building a college list and instantly estimating real net prices—including aid and scholarships—making the process simpler and clearer.',
  },
  {
    name: 'Yaaro',
    desc: 'Helps young adults form real-life friendships by matching like-minded people through a quiz, enabling instant group hangouts with one tap. Backed by key partners and a 300+ user waitlist.',
  },
];

const photos = [
  '/DSC00270.jpg', '/DSC00193.jpg', '/DSC00291.jpg',
  '/DSC00176.jpg', '/DSC00120.jpg', '/DSC00130.jpg',
  '/DSC00154.jpg', '/DSC00204.jpg', '/DSC00275.jpg',
];

export default function SageTank() {
  const reduced = useReducedMotion();

  return (
    <div className="min-h-screen bg-brand-blue-deep text-white flex flex-col pt-24">

      {/* ── GIF Hero ─────────────────────────────────────────────────── */}
      <div className="relative w-full h-[65vh] overflow-hidden">
        <img src="/ST.gif" alt="SageTank event" className="w-full h-full object-cover" />
        {/* taller gradient so content overlaps cleanly */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep via-brand-blue-deep/40 to-transparent" />
      </div>

      {/* ── Hero Content — pulled up into the gradient ────────────────── */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left py-12 px-4 md:py-16 md:px-6 max-w-7xl mx-auto w-full">
        <motion.img
          src="/sagetank.png"
          alt="SageTank logo"
          className="w-48 md:w-80 h-auto mb-8 md:mb-0 md:mr-16 flex-shrink-0 drop-shadow-2xl"
          initial={{ opacity: 0, scale: reduced ? 1 : 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, ease: EASE }}
        />
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.2)}
        >
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
        </motion.div>
      </section>

      {/* ── Finalists ────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp()}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand-orange font-medium mb-4">Class of 2025</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">SageTank Finalists</h2>
            <div className="h-1.5 w-24 bg-brand-orange mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {finalists.map((f, i) => (
              <motion.div
                key={f.name}
                className="group relative p-8 rounded-2xl border border-white/10 overflow-hidden cursor-default"
                style={{ background: 'rgba(255,255,255,0.05)' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp(i * 0.08)}
                whileHover={{ y: reduced ? 0 : -5 }}
                transition={{ duration: 0.22 }}
              >
                {/* watermark number */}
                <span className="absolute top-3 right-5 font-heading font-bold text-6xl leading-none select-none pointer-events-none text-brand-orange/15 group-hover:text-brand-orange/25 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h4 className="text-xl font-bold mb-3 text-brand-orange group-hover:text-orange-400 transition-colors relative z-10">
                  {f.name}
                </h4>
                <p className="text-blue-100/70 leading-relaxed text-sm relative z-10">{f.desc}</p>

                {/* bottom sweep */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full bg-brand-orange" />
              </motion.div>
            ))}
          </div>

          {/* ── Event Highlights ─────────────────────────────────────── */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp()}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">Event Highlights</h2>
            <div className="h-1.5 w-24 bg-brand-orange mx-auto rounded-full" />
          </motion.div>

          <motion.div
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp(0.1)}
          >
            {photos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`SageTank 2025 highlight ${i + 1}`}
                className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 border border-white/5"
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
