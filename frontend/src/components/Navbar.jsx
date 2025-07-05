import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Talk", path: "/talk" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="bg-gray-200 navbar shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-600">
          Ibrahim Ezzat
        </Link>
        <ul className="flex navbar-menu gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`font-medium transition-colors duration-200 hover:text-pink-500 ${
                  location.pathname === link.path
                    ? "text-pink-600"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
