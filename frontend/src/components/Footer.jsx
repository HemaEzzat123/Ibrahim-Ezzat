export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-gray-200 py-8 sm:py-10 overflow-hidden border-t border-purple-700/30">
      {/* Starfield background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="mb-4 md:mb-0 flex flex-col gap-1 text-sm sm:text-base text-center md:text-left">
          <span className="flex items-center gap-2 animate-pulse">
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              className="text-pink-400 animate-spin-slow"
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
            &copy; {new Date().getFullYear()} Ibrahim Ezzat. All rights
            reserved.
          </span>
          <span className="flex items-center gap-2 twinkle">
            <span className="font-semibold">Email:</span>
            <a
              href="mailto:eng.ibrahim.ezzat.03@gmail.com"
              className="text-cyan-400 hover:underline transition-colors"
            >
              eng.ibrahim.ezzat.03@gmail.com
            </a>
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              className="text-cyan-400 animate-pulse ml-1"
            >
              <path
                d="M2 6l10 7 10-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="2"
                y="6"
                width="20"
                height="12"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>
          <span className="flex items-center gap-2 twinkle">
            <span className="font-semibold">Mobile:</span>
            <a
              href="tel:+201123210676"
              className="text-cyan-400 hover:underline transition-colors"
            >
              +201123210676
            </a>
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              className="text-cyan-400 animate-pulse ml-1"
            >
              <rect
                x="6"
                y="2"
                width="12"
                height="20"
                rx="3"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="12" cy="18" r="1" fill="currentColor" />
            </svg>
          </span>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0 justify-center md:justify-start relative">
          {/* Constellation line */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-0"
            width="120"
            height="30"
            viewBox="0 0 120 30"
            fill="none"
          >
            <polyline
              points="10,20 40,10 70,25 110,8"
              stroke="#a78bfa"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.5"
            />
          </svg>
          {/* Socials as glowing SVGs */}
          <a
            href="https://www.facebook.com/hema.ezzat.96/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors text-2xl relative z-10"
          >
            <svg
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="drop-shadow-glow"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>
          <a
            href="https://github.com/HemaEzzat123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors text-2xl relative z-10"
          >
            <svg
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="drop-shadow-glow"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ibrahim-ezzat-4b21a8234/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors text-2xl relative z-10"
          >
            <svg
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="drop-shadow-glow"
            >
              <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zm-11 19H5V9h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967V19h-3V9h2.885v1.367h.041c.402-.762 1.384-1.563 2.848-1.563 3.045 0 3.607 2.005 3.607 4.614V19z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
