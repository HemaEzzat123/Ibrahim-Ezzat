export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0 flex flex-col gap-1">
          <span>
            &copy; {new Date().getFullYear()} Ibrahim Ezzat. All rights
            reserved.
          </span>
          <span>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:eng.ibrahim.ezzat.03@gmail.com"
              className="text-blue-400 hover:underline"
            >
              eng.ibrahim.ezzat.03@gmail.com
            </a>
          </span>
          <span>
            <span className="font-semibold">Mobile:</span>{" "}
            <a
              href="tel:+201123210676"
              className="text-blue-400 hover:underline"
            >
              +201123210676
            </a>
          </span>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/hema.ezzat.96/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors text-2xl"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://github.com/HemaEzzat123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ibrahim-ezzat-4b21a8234/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
