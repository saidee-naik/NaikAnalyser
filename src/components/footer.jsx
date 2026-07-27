function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-900 text-gray-300 mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}

          <div>

            <h2 className="text-2xl font-bold text-white">
              Naik Analyzer
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              AI-powered resume analysis that helps you improve
              your ATS score with personalized feedback,
              strengths, weaknesses, and practical suggestions.
            </p>

          </div>

          {/* Features */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Features
            </h3>

            <ul className="mt-4 space-y-3">

              <li>✓ ATS Score</li>

              <li>✓ Resume Feedback</li>

              <li>✓ AI Suggestions</li>

              <li>✓ Skills Detection</li>

            </ul>

          </div>

          {/* Trust */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Why Choose Us
            </h3>

            <ul className="mt-4 space-y-3">

              <li>🔒 Privacy First</li>

              <li>🚀 No Login Required</li>

              <li>💯 100% Free</li>

              <li>🤖 Powered by Google Gemini AI</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Naik Analyzer. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <a
              href="#"
              className="hover:text-white transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Terms
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;