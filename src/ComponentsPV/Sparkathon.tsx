import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
  };
}

const pillars = [
  {
    title: 'Diversity & Collaboration',
    body: 'We maximize inclusion across diverse backgrounds and disciplines, bringing unique perspectives to every challenge.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    accent: '#F97316',
    num: '01',
  },
  {
    title: 'Human-Centered Design',
    body: 'Empathy → define → ideate → prototype → implement. We build for people, first and foremost.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    accent: '#2563EB',
    num: '02',
  },
  {
    title: 'Impact & Implementation',
    body: 'Teams design solutions with real-world feasibility and measurable outcomes — great ideas that lead to tangible change.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    accent: '#F97316',
    num: '03',
  },
];

function Sparkathon() {
  const reduced = useReducedMotion();

  return (
    <div className="min-h-screen bg-brand-blue-deep text-white">

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        style={{ backgroundImage: "url('/DSCF9243.JPG')" }}
      >
        {/* lighter overlay — let the photo breathe */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-brand-blue-deep/50 to-brand-blue-deep" />

        <div className="relative z-10">
          <motion.div
            className="h-px w-16 bg-brand-orange mx-auto mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE }}
          />
          <motion.h1
            className="text-6xl md:text-9xl font-heading font-bold tracking-tighter mb-5"
            initial={{ opacity: 0, y: reduced ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            SPARKATHON
          </motion.h1>
          <motion.div
            className="h-1.5 w-32 bg-brand-orange mx-auto rounded-full mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
          />
          <motion.p
            className="text-xl md:text-3xl font-light text-brand-orange tracking-wide uppercase"
            initial={{ opacity: 0, y: reduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.45 }}
          >
            Innovative. Impact-driven. Interdisciplinary.
          </motion.p>
        </div>
      </section>

      {/* ── Mission & About ──────────────────────────────────────────── */}
      <section className="py-28 px-4">
        <div className="max-w-4xl mx-auto space-y-20">

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp()}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand-orange font-medium mb-5">Our Mission</p>
            <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed font-light italic">
              "To build a community of capable and compassionate students who are committed to solving real-world challenges through human-centered design."
            </p>
          </motion.div>

          <motion.div
            className="bg-white/5 p-10 md:p-14 rounded-3xl border border-white/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp(0.1)}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white">About the Competition</h2>
            <div className="space-y-5 text-lg text-slate-400 leading-relaxed">
              <p>
                Sparkathon is an innovative, impact-driven design thinking competition that challenges teams of 4–6 students to collaboratively solve some of the most pressing societal problems.
              </p>
              <p>
                As the largest student case competition of the Claremont Colleges (5Cs), Sparkathon attracts students from across California. More than just a one-day event, Sparkathon supports winning teams over a six-month period with generous funding, mentorship, and prototyping labs to implement their solutions in target communities.
              </p>
            </div>
            <a
              href="https://www.sparkathon.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-brand-orange hover:text-orange-400 font-bold transition-colors group cursor-pointer"
            >
              Visit sparkathon.org
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Core Pillars ─────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp()}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand-orange font-medium mb-4">Framework</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Core Pillars</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="group relative p-8 rounded-3xl border border-white/8 overflow-hidden cursor-default"
                style={{ background: 'rgba(255,255,255,0.04)' }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp(i * 0.12)}
                whileHover={{ y: reduced ? 0 : -6 }}
                transition={{ duration: 0.25 }}
              >
                {/* Large number watermark */}
                <span
                  className="absolute top-4 right-6 font-heading font-bold text-7xl leading-none select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-20"
                  style={{ color: p.accent }}
                >
                  {p.num}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${p.accent}22`, color: p.accent }}
                >
                  {p.icon}
                </div>

                <h3 className="text-xl font-heading font-bold mb-3 text-white">{p.title}</h3>
                <p className="text-blue-100/60 leading-relaxed text-sm">{p.body}</p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: p.accent }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp()}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">The Sparkathon Experience</h2>
            <div className="h-1.5 w-24 bg-brand-orange mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-6">
            <motion.div
              className="w-full h-[60vh] overflow-hidden rounded-3xl shadow-2xl border border-white/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp()}
            >
              <img
                src="/DSCF9374.JPG"
                alt="Sparkathon participants collaborating"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp(0.1)}
            >
              <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl shadow-xl border border-white/5">
                <img src="/DSCF8824.JPG" alt="Teams at Sparkathon" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-3xl shadow-xl border border-white/5">
                <img src="/DSCF9146.JPG" alt="Sparkathon workshop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-3xl shadow-xl border border-white/5">
                <img src="/DSCF9303.JPG" alt="Student presentation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-3xl shadow-xl border border-white/5">
                <img src="/DSCF9408.JPG" alt="Sparkathon event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="md:col-span-1 md:row-span-1 overflow-hidden rounded-3xl shadow-xl border border-white/5">
                <img src="/DSC00653.jpg" alt="Pomona Ventures community" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Sparkathon;
