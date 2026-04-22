import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

function Initiatives() {
  const reduced = useReducedMotion();

  const headerV = {
    hidden: { opacity: 0, y: reduced ? 0 : 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  const leftV = {
    hidden: { x: reduced ? 0 : '-65%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.05, ease: EASE, delay: 0.15 } },
  };

  const rightV = {
    hidden: { x: reduced ? 0 : '65%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.05, ease: EASE, delay: 0.15 } },
  };

  const scrollV = {
    hidden: { opacity: 0, y: reduced ? 0 : 48 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  const sageFacts = ['Cash Prizes + VC Funding', 'Spring Apps Open', '6 Finalists in 2025'];
  const sparkFacts = ['6-Month Funding + Mentorship', 'Teams of 4–6', 'Diversity · Design · Impact'];

  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ background: '#08080F' }}>

      {/* ── Page Header ─────────────────────────────────────────────── */}
      <motion.div
        className="text-center pt-20 pb-14 px-6"
        initial="hidden"
        animate="visible"
        variants={headerV}
      >
        <p className="text-xs uppercase tracking-[0.35em] font-medium mb-5" style={{ color: '#F97316' }}>
          Pomona Ventures
        </p>
        <h1 className="font-heading font-bold leading-none">
          <span className="block text-6xl md:text-8xl" style={{ color: '#F97316' }}>What</span>
          <span className="block text-6xl md:text-8xl text-white -mt-2">We Do</span>
        </h1>
        <p className="text-white/40 text-base max-w-sm mx-auto mt-6 leading-relaxed">
          Two flagship programs. One mission — turn ideas into impact.
        </p>
      </motion.div>

      {/* ── Split Hero ───────────────────────────────────────────────── */}
      <section className="flex flex-col md:flex-row overflow-hidden" style={{ minHeight: '82vh' }}>

        {/* SageTank — Left / Orange */}
        <motion.div
          className="relative flex-1 flex items-end p-10 md:p-16 overflow-hidden"
          style={{
            background: 'linear-gradient(148deg, #3B0F06 0%, #9A3412 52%, #F97316 100%)',
            minHeight: '52vh',
          }}
          initial="hidden"
          animate="visible"
          variants={leftV}
        >
          {/* Ambient glow */}
          <div
            className="absolute bottom-0 left-0 w-full h-2/3 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 25% 100%, rgba(249,115,22,0.45) 0%, transparent 65%)' }}
          />

          <div className="relative z-10">
            <p className="text-orange-200/50 uppercase tracking-[0.28em] text-xs font-medium mb-6">
              Pitch Competition
            </p>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-white leading-none mb-3">
              SageTank
            </h2>
            <p className="text-orange-100/75 text-xl md:text-2xl italic font-light mb-6">
              Pitch. Win. Build.
            </p>
            <p className="text-white/55 text-sm md:text-base leading-relaxed mb-9 max-w-xs">
              Students pitch to VCs and founders for cash prizes and VC funding — a launchpad for 5C founders.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {sageFacts.map((f) => (
                <span
                  key={f}
                  className="rounded-full px-3 py-1.5 text-xs text-orange-100"
                  style={{ background: 'rgba(0,0,0,0.22)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  {f}
                </span>
              ))}
            </div>

            <Link
              to="/sagetank"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 hover:gap-4 hover:shadow-lg"
              style={{ background: 'white', color: '#C2410C' }}
            >
              Learn More
              <ArrowRight />
            </Link>
          </div>
        </motion.div>

        {/* Center divider */}
        <div
          className="hidden md:block w-px flex-shrink-0"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 70%, transparent)' }}
        />

        {/* Sparkathon — Right / Purple */}
        <motion.div
          className="relative flex-1 flex items-end justify-end p-10 md:p-16 overflow-hidden"
          style={{
            background: 'linear-gradient(212deg, #0A1628 0%, #1E3A8A 52%, #2563EB 100%)',
            minHeight: '52vh',
          }}
          initial="hidden"
          animate="visible"
          variants={rightV}
        >
          {/* Ambient glow */}
          <div
            className="absolute bottom-0 right-0 w-full h-2/3 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 75% 100%, rgba(37,99,235,0.45) 0%, transparent 65%)' }}
          />

          <div className="relative z-10 text-right">
            <p className="text-blue-200/50 uppercase tracking-[0.28em] text-xs font-medium mb-6">
              Design Thinking Competition
            </p>
            <h2 className="font-heading text-5xl md:text-7xl font-bold text-white leading-none mb-3">
              Sparkathon
            </h2>
            <p className="text-blue-100/75 text-xl md:text-2xl italic font-light mb-6">
              Design. Collaborate. Impact.
            </p>
            <p className="text-white/55 text-sm md:text-base leading-relaxed mb-9 max-w-xs ml-auto">
              Teams of 4–6 solving the world's most pressing challenges. The largest student case competition of the 5Cs.
            </p>

            <div className="flex flex-wrap gap-2 mb-10 justify-end">
              {sparkFacts.map((f) => (
                <span
                  key={f}
                  className="rounded-full px-3 py-1.5 text-xs text-blue-100"
                  style={{ background: 'rgba(0,0,0,0.22)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="flex justify-end">
              <Link
                to="/sparkathon"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 hover:gap-4 hover:shadow-lg"
                style={{ background: 'white', color: '#1D4ED8' }}
              >
                Learn More
                <ArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Closing Manifesto ────────────────────────────────────────── */}
      <motion.section
        className="py-32 px-6 text-center max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={scrollV}
      >
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="h-px flex-1 max-w-[80px]" style={{ background: 'rgba(249,115,22,0.35)' }} />
          <p className="text-white/25 uppercase tracking-[0.3em] text-xs">Built at the 5Cs</p>
          <span className="h-px flex-1 max-w-[80px]" style={{ background: 'rgba(37,99,235,0.35)' }} />
        </div>

        <blockquote className="font-heading text-2xl md:text-4xl font-bold leading-snug text-white/85 mb-6">
          "Anyone with an idea should have the support and resources to pursue it."
        </blockquote>
        <p className="text-white/30 text-xs uppercase tracking-widest">— Pomona Ventures Mission</p>
      </motion.section>

    </div>
  );
}

export default Initiatives;
