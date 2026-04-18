export default function Contacts() {
  return (
    <div className="min-h-screen bg-brand-blue-deep text-white flex flex-col pt-24">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center text-center px-6 py-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/5 blur-3xl rounded-full"></div>
        
        <div className="w-full max-w-2xl flex flex-col items-center justify-center gap-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white">
            Get in Touch
          </h1>
          <div className="h-1.5 w-24 bg-brand-orange rounded-full"></div>
          
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Pomona Ventures welcomes those who are dedicated to innovation, entrepreneurship, and social impact.
          </p>
          
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm w-full">
            <p className="text-lg md:text-xl text-slate-400 mb-8">
              Have questions about SageTank, applications, or how to get involved? We'd love to hear from you.
            </p>
            <a
              href="mailto:pomonaventures@gmail.com?subject=Contact%20from%20Website"
              className="inline-block px-10 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-orange/20"
            >
              Email Us Directly
            </a>
          </div>
          
          <div className="flex gap-8 mt-4 text-slate-400">
            <a href="https://www.linkedin.com/company/pomona-ventures" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors font-medium">LinkedIn</a>
            <a href="https://www.instagram.com/pomonaventures" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors font-medium">Instagram</a>
          </div>
        </div>
      </section>
    </div>
  );
}
