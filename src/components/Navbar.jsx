function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <h1 className="text-2xl font-bold text-blue-600">
          Naik Analyzer
        </h1>

        {/* Desktop */}

        <div className="hidden md:flex items-center gap-8">

          <a
            href="#features"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            How it Works
          </a>

          <a
            href="#footer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            About
          </a>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;