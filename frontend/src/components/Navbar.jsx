import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Talk", path: "/talk" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-lg sticky top-0 z-50 border-b border-purple-700/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center relative">
        {/* Glowing Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text relative"
        >
          <span className="drop-shadow-glow text-purple-900 animate-pulse">
            Ibrahim Ezzat
          </span>
          {/* Magical sparkle */}
          <svg
            className="w-5 h-5 text-pink-400 animate-spin-slow"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.3"
            />
            <path
              d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Link>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-pink-300 hover:text-pink-500 focus:outline-none relative z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex navbar-menu gap-3 sm:gap-4 md:gap-6 text-base font-semibold relative">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name} className="relative">
                <Link
                  to={link.path}
                  className={`px-2 py-1 transition-all duration-200 rounded-lg focus:outline-none relative z-10 ${
                    isActive
                      ? "text-pink-400 drop-shadow-glow"
                      : "text-gray-200 hover:text-pink-300"
                  }`}
                >
                  {link.name}
                  {/* Animated underline */}
                  <span
                    className={`block h-1 rounded-full mt-1 transition-all duration-300 ${
                      isActive
                        ? "w-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 shadow-lg"
                        : "w-0 bg-transparent"
                    }`}
                  ></span>
                  {/* Comet indicator for active */}
                  {isActive && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <svg
                        width="24"
                        height="12"
                        viewBox="0 0 24 12"
                        fill="none"
                      >
                        <ellipse
                          cx="12"
                          cy="6"
                          rx="10"
                          ry="3"
                          fill="url(#comet)"
                          opacity="0.7"
                        />
                        <defs>
                          <linearGradient
                            id="comet"
                            x1="2"
                            y1="6"
                            x2="22"
                            y2="6"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#ec4899" />
                            <stop offset="0.5" stopColor="#a78bfa" />
                            <stop offset="1" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 shadow-2xl border-b border-purple-700/30 animate-fadeIn z-30">
            <ul className="flex flex-col py-4 gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.name} className="relative">
                    <Link
                      to={link.path}
                      className={`block px-4 py-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none relative z-10 ${
                        isActive
                          ? "text-pink-400 drop-shadow-glow"
                          : "text-gray-200 hover:text-pink-300"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                      {/* Animated underline */}
                      <span
                        className={`block h-1 rounded-full mt-1 transition-all duration-300 ${
                          isActive
                            ? "w-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 shadow-lg"
                            : "w-0 bg-transparent"
                        }`}
                      ></span>
                      {/* Comet indicator for active */}
                      {isActive && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <svg
                            width="24"
                            height="12"
                            viewBox="0 0 24 12"
                            fill="none"
                          >
                            <ellipse
                              cx="12"
                              cy="6"
                              rx="10"
                              ry="3"
                              fill="url(#comet)"
                              opacity="0.7"
                            />
                            <defs>
                              <linearGradient
                                id="comet"
                                x1="2"
                                y1="6"
                                x2="22"
                                y2="6"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#ec4899" />
                                <stop offset="0.5" stopColor="#a78bfa" />
                                <stop offset="1" stopColor="#06b6d4" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
