function Header() {
  return (
    <header className="my-6 text-white-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center h-6">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src="/PVWhite.png" alt="small 3" className="w-30 h-auto rounded-lg" />
          </div>

          {/* Navigation Links - Spread across full width */}
          <nav className="flex flex-1 justify-evenly items-center ml-8">
            <a
              href="/"
              className="text-white hover:text-cyan-200 font-medium transition-colors duration-200"
            >
              HOME
            </a>
            <a
              href="/SageTank"
              className="text-white hover:text-cyan-200 font-medium transition-colors duration-200"
            >
              SAGETANK
            </a>
            <a
              href="/initiatives"
              className="text-white hover:text-cyan-200 font-medium transition-colors duration-200"
            >
              INITIATIVES
            </a>
            <a
              href="/Aboutus"
              className="text-white hover:text-cyan-200 font-medium transition-colors duration-200"
            >
              ABOUT US
            </a>
            <a
              href="/contacts"
              className="text-white hover:text-cyan-200 font-medium transition-colors duration-200"
            >
              CONTACT US
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;