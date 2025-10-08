import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-gray-200 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg font-semibold">MyApp</div>

        <nav className="flex gap-4">
          <Link to="/" className="text-sm hover:text-white transition-colors">
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
