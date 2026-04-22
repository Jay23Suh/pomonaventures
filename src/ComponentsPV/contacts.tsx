import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
  };
}

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export default function Contacts() {
  const reduced = useReducedMotion();

  return (
    <div className="min-h-screen bg-brand-blue-deep text-white flex flex-col pt-24">
      <section className="flex-1 flex items-center justify-center text-center px-6 py-12 relative overflow-hidden">

        {/* Two offset glows */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-orange/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-brand-blue/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="w-full max-w-2xl flex flex-col items-center justify-center gap-8 relative z-10">

          <motion.div
            className="flex flex-col items-center gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp()}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-brand-orange font-medium">
              Pomona Ventures
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
              Get in Touch
            </h1>
            <div className="h-1.5 w-24 bg-brand-orange rounded-full" />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.15)}
          >
            Pomona Ventures welcomes those who are dedicated to innovation, entrepreneurship, and social impact.
          </motion.p>

          <motion.div
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm w-full"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.28)}
          >
            <p className="text-lg md:text-xl text-slate-400 mb-8">
              Have questions about SageTank, applications, or how to get involved? We'd love to hear from you.
            </p>
            <a
              href="mailto:pomonaventures@gmail.com?subject=Contact%20from%20Website"
              className="inline-block px-10 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-orange/20 cursor-pointer"
            >
              Email Us Directly
            </a>
          </motion.div>

          <motion.div
            className="flex gap-6 mt-2"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.4)}
          >
            <a
              href="https://www.linkedin.com/company/pomona-ventures"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pomona Ventures on LinkedIn"
              className="flex items-center gap-2 text-slate-400 hover:text-brand-orange transition-colors duration-200 font-medium cursor-pointer"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/pomonaventures"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pomona Ventures on Instagram"
              className="flex items-center gap-2 text-slate-400 hover:text-brand-orange transition-colors duration-200 font-medium cursor-pointer"
            >
              <InstagramIcon />
              Instagram
            </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
