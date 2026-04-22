import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } },
  };
}

function Home() {
  const reduced = useReducedMotion();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/DSC00130.jpg"
            alt="Pomona Ventures Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-brand-blue-deep/85 to-brand-blue-deep/95" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 blur-[120px] rounded-full -mr-64 -mt-64" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.img
            src="/PVWhite.png"
            alt="Pomona Ventures"
            className="w-24 h-auto mx-auto mb-8 drop-shadow-2xl"
            initial={{ opacity: 0, scale: reduced ? 1 : 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE }}
          />

          <motion.p
            className="font-heading text-brand-orange font-bold tracking-widest uppercase mb-4 drop-shadow-md"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.15)}
          >
            The Hub for Entrepreneurship at the Claremont Colleges
          </motion.p>

          <motion.h1
            className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.28)}
          >
            Empowering the Next Generation of{' '}
            <span className="text-brand-orange drop-shadow-sm">Founders</span>.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white font-medium mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.42)}
          >
            Our vision is simple: anyone with an idea should have the support and resources to pursue it. Join our community of innovators and builders.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.55)}
          >
            <a
              href="https://forms.gle/kF1UPSViXLwqrKyE8"
              className="px-10 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-black rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-brand-orange/30 uppercase tracking-wide"
            >
              Apply Now
            </a>
            <a
              href="/contacts"
              className="px-10 py-4 border-2 border-white text-white font-black rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white hover:text-brand-blue-deep uppercase tracking-wide"
            >
              Support Us
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator — gentle float instead of bounce */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-8 h-8 text-brand-orange" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-4 bg-white/50 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 blur-3xl rounded-full -mr-48 -mt-24" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 blur-3xl rounded-full -ml-48 -mb-24" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp()}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-blue-deep mb-6">What We Do</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-12 bg-brand-blue rounded-full" />
              <div className="h-2 w-24 bg-brand-orange rounded-full" />
              <div className="h-2 w-12 bg-brand-blue rounded-full" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Resources */}
            <motion.div
              className="group p-10 bg-blue-50/80 rounded-3xl border-2 border-brand-blue/20 hover:border-brand-orange transition-all duration-500 shadow-xl hover:shadow-brand-orange/10 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp(0)}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full -mr-16 -mt-16 group-hover:bg-brand-orange/20 transition-colors" />
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-deep to-brand-blue text-black rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-blue-deep/20 group-hover:from-brand-orange group-hover:to-brand-orange-hover group-hover:rotate-6 transition-all duration-300">
                <svg className="w-10 h-10" fill="none" stroke="black" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue-deep mb-4 group-hover:text-brand-orange transition-colors">Resources</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Access mentorship, funding opportunities, and technical tools needed to bring your vision to life.
              </p>
              <div className="h-2 w-16 bg-brand-orange mt-8 rounded-full" />
            </motion.div>

            {/* Community */}
            <motion.div
              className="group p-10 bg-orange-50/80 rounded-3xl border-2 border-brand-orange/20 hover:border-brand-blue transition-all duration-500 shadow-xl hover:shadow-brand-blue/10 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp(0.12)}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full -mr-16 -mt-16 group-hover:bg-brand-blue/20 transition-colors" />
              <div className="w-16 h-16 bg-gradient-to-br from-brand-orange to-brand-orange-hover text-black rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-orange/30 group-hover:from-brand-blue group-hover:to-brand-blue-deep group-hover:-rotate-6 transition-all duration-300">
                <svg className="w-10 h-10" fill="none" stroke="black" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue-deep mb-4 group-hover:text-brand-blue transition-colors">Community</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Connect with a diverse network of students, alumni, and professionals passionate about innovation.
              </p>
              <div className="h-2 w-16 bg-brand-blue mt-8 rounded-full" />
            </motion.div>

            {/* Initiatives — now links to /Initiatives */}
            <motion.a
              href="/Initiatives"
              className="group p-10 bg-blue-50/80 rounded-3xl border-2 border-brand-blue/20 hover:border-brand-orange transition-all duration-500 shadow-xl hover:shadow-brand-orange/10 relative overflow-hidden cursor-pointer block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp(0.24)}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full -mr-16 -mt-16 group-hover:bg-brand-orange/20 transition-colors" />
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-deep to-brand-blue text-black rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-blue-deep/20 group-hover:from-brand-orange group-hover:to-brand-orange-hover group-hover:rotate-6 transition-all duration-300">
                <svg className="w-10 h-10" fill="none" stroke="black" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue-deep mb-4 group-hover:text-brand-orange transition-colors">Initiatives</h3>
              <p className="text-slate-700 text-lg leading-relaxed">
                Participate in flagship programs like SageTank and Sparkathon to pitch and build your ideas.
              </p>
              <div className="h-2 w-16 bg-brand-orange mt-8 rounded-full" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-32 px-4 bg-brand-blue-deep relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/20 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-orange/10 blur-[100px] rounded-full opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp()}
          >
            <div className="max-w-2xl bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/20 shadow-2xl">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-black mb-6">Our Community in Action</h2>
              <div className="h-2 w-24 bg-brand-orange rounded-full mb-8 shadow-lg shadow-brand-orange/20" />
              <p className="text-black text-xl md:text-2xl leading-relaxed font-medium">
                Glimpses into our events, workshops, and the vibrant culture that makes Pomona Ventures unique.
              </p>
            </div>

            <a href="/Aboutus" className="group flex items-center gap-3 bg-brand-orange px-10 py-5 rounded-full text-black font-black hover:bg-white transition-all duration-300 shadow-2xl shadow-brand-orange/20 uppercase tracking-widest text-sm">
              Meet the Team
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="black" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp(0.1)}
          >
            <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-[2rem] group relative shadow-2xl border-4 border-white/10">
              <img src="/DSC00221.jpg" alt="Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-deep to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end p-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-brand-orange font-bold tracking-widest uppercase mb-2">Networking</p>
                  <h4 className="text-white text-3xl font-bold">Collaborative Workshops</h4>
                </div>
              </div>
            </div>
            <div className="md:row-span-1 overflow-hidden rounded-[2rem] group relative shadow-xl border-4 border-white/10">
              <img src="/IMG_7550.JPG" alt="Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="md:row-span-2 overflow-hidden rounded-[2rem] group relative shadow-xl border-4 border-white/10">
              <img src="/IMG_7797.JPG" alt="Student" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="md:row-span-1 overflow-hidden rounded-[2rem] group relative shadow-xl border-4 border-white/10">
              <img src="/DSC00228.jpg" alt="Presentation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="md:col-span-1 overflow-hidden rounded-[2rem] group relative shadow-xl border-4 border-white/10">
              <img src="/DSC00872.jpg" alt="Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="md:col-span-1 overflow-hidden rounded-[2rem] group relative shadow-xl border-4 border-white/10">
              <img src="/DSC00653.jpg" alt="Networking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-white/70 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
          <div className="grid grid-cols-6 gap-4 rotate-12 scale-150">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-full aspect-square border-2 border-brand-orange rounded-full" />
            ))}
          </div>
        </div>

        <motion.div
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp()}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-blue-deep mb-8 leading-tight">Ready to start your journey?</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Whether you're looking for support for your startup or want to join our organizing team, we'd love to hear from you.
          </p>
          <a
            href="https://forms.gle/kF1UPSViXLwqrKyE8"
            className="inline-block px-12 py-5 bg-brand-orange text-black font-black rounded-full hover:bg-brand-blue-deep hover:text-white transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-brand-orange/30 uppercase tracking-widest"
          >
            Join Pomona Ventures
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
