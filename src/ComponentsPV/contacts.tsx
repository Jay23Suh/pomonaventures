export default function Contacts() {
  return (
    <div className="min-h-screen text-white font-sans flex flex-col">
      {/* “Get to Know PV” Section */}
      <section className="px-6 py-12 ">
        <div className="max-w-5xl mx-auto text-xl text-center">
          <p>
            Pomona Ventures welcomes those who are dedicated to innovation, entrepreneurship, and social impact.
          </p>
        </div>
      </section>
      {/* Hero Section */}
      <section className="flex flex items-center justify-center text-center px-6 py-8">
        <div className="w-full max-w-md flex flex-col items-center justify-center gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get in Touch with Pomona Ventures
          </h2>
          <p className="text-lg md:text-xl text-white">
            Have questions about SageTank, applications, or how to get involved? Click the button below to email us directly.
          </p>
          <a
            href="mailto:pomonaventures@gmail.com?subject=Contact%20from%20Website"
            className="px-6 py-3 bg-white text-[#4D80C4] font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Email Us
          </a>
        </div>
      </section>

  
    </div>
  );
}
