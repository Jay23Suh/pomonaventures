const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">Pomona Ventures</h3>
          <p className="text-sm">Empowering student entrepreneurs at the 5Cs.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/sagetank" className="hover:text-white">
                SageTank
              </a>
            </li>
            <li>
              <a href="/initiatives" className="hover:text-white">
                Initiatives
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <p className="text-sm">Email: pomonaventures@gmail.com</p>
          <p className="text-sm">
  Instagram: <a href="https://instagram.com/pomonaventures" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
    @pomonaventures
  </a>
    LinkedIn: <a href="https://www.linkedin.com/company/pomonaventures" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
    Pomona Ventures
  </a>
</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
