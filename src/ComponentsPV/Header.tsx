import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img src="/PVWhite.png" alt="Pomona Ventures Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <a href="/" className="text-white hover:text-cyan-200 font-medium">HOME</a>
            <a href="/SageTank" className="text-white hover:text-cyan-200 font-medium">SAGETANK</a>
            <a href="/initiatives" className="text-white hover:text-cyan-200 font-medium">INITIATIVES</a>
            <a href="/Aboutus" className="text-white hover:text-cyan-200 font-medium">ABOUT US</a>
            <a href="/contacts" className="text-white hover:text-cyan-200 font-medium">CONTACT US</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm rounded-lg mt-2">
          <nav className="flex flex-col items-center space-y-4 py-6">
            <a href="/" className="text-white hover:text-cyan-200 text-lg">HOME</a>
            <a href="/SageTank" className="text-white hover:text-cyan-200 text-lg">SAGETANK</a>
            <a href="/initiatives" className="text-white hover:text-cyan-200 text-lg">INITIATIVES</a>
            <a href="/Aboutus" className="text-white hover:text-cyan-200 text-lg">ABOUT US</a>
            <a href="/contacts" className="text-white hover:text-cyan-200 text-lg">CONTACT US</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;