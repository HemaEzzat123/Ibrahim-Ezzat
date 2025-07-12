import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Modal from "../components/Modal";

export default function Projects() {
  const projects = [
    {
      id: "1",
      img: "/images/project4.png",
      title: "Learning English",
      live: "https://hemaezzat123.github.io/Learning-English-Letters/",
      source: "https://github.com/HemaEzzat123/Learning-English-Letters",
      category: "education",
      difficulty: "beginner",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Interactive English learning platform",
    },
    {
      id: "2",
      img: "/images/project12.png",
      title: "Social-media",
      source: "https://github.com/HemaEzzat123/Social-media",
      category: "social",
      difficulty: "advanced",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Socket.io",
        "multer",
        "TailwindCss",
      ],
      description: "Full-stack social media application",
    },
    {
      id: "3",
      img: "/images/project11.png",
      title: "Dictionary web app",
      live: "https://dictionary-web-app-dun-xi.vercel.app/",
      source: "https://github.com/HemaEzzat123/Dictionary-web-app",
      category: "utility",
      difficulty: "intermediate",
      tech: ["React", "API", "TailwindCSS"],
      description: "Comprehensive dictionary application",
    },
    {
      id: "4",
      img: "/images/project13.png",
      title: "Github Finder App",
      live: "https://git-hub-finder-gold.vercel.app/",
      source: "https://github.com/HemaEzzat123/GitHub-Finder",
      category: "developer",
      difficulty: "intermediate",
      tech: ["React", "GitHub API", "TailwindCSS"],
      description: "GitHub user search and profile viewer",
    },
    {
      id: "5",
      img: "/images/project15.png",
      title: "Event Book System",
      source: "https://github.com/HemaEzzat123/Event-Booking-System",
      category: "business",
      difficulty: "advanced",
      tech: ["React", "Node.js", "MongoDB", "multer", "TailwindCSS"],
      description: "Complete event booking management system",
    },
    {
      id: "6",
      img: "/images/project17.png",
      title: "house market place",
      live: "https://house-market-place-teal-beta.vercel.app/",
      source: "https://github.com/HemaEzzat123/house-market-place",
      category: "marketplace",
      difficulty: "advanced",
      tech: ["React", "Firebase", "TailwindCSS"],
      description: "Real estate marketplace platform",
    },
    {
      id: "7",
      img: "/images/project16.jpg",
      title: "Queueing Models",
      live: "https://queueing-models-calculations.vercel.app/",
      source: "https://github.com/HemaEzzat123/Queueing-Models-Calculations",
      category: "mathematics",
      difficulty: "intermediate",
      tech: ["React", "Math.js", "Chart.js", "TailwindCSS"],
      description: "Mathematical queueing model calculator",
    },
    {
      id: "8",
      img: "/images/project6.png",
      title: "Advice Generator",
      live: "https://hemaezzat123.github.io/advice-generator-app-main/",
      source: "https://github.com/HemaEzzat123/advice-generator-app-main",
      category: "entertainment",
      difficulty: "beginner",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Random advice generator with API integration",
    },
    {
      id: "9",
      img: "/images/project3.png",
      title: "Twitter Clone",
      live: "https://hemaezzat123.github.io/TwitterClone/",
      source: "https://github.com/HemaEzzat123/TwitterClone",
      category: "social",
      difficulty: "intermediate",
      tech: ["HTML", "TailwindCSS", "LocalStorage"],
      description: "Twitter-like social media clone",
    },
    {
      id: "10",
      img: "/images/project7.png",
      title: "Bank System",
      source: "https://github.com/HemaEzzat123/Bank-System",
      category: "finance",
      difficulty: "advanced",
      tech: ["Java", "Swing", "GUI"],
      description: "Complete banking system simulation",
    },
    {
      id: "11",
      img: "/images/project8.jpg",
      title: "Note App",
      source: "https://github.com/HemaEzzat123/Note-App",
      category: "productivity",
      difficulty: "advanced",
      tech: ["Java", "Swing", "file storage", "GUI"],
      description: "Personal note-taking application",
    },
    {
      id: "12",
      img: "/images/project1.png",
      title: "FeedBack-UI",
      source: "https://github.com/HemaEzzat123/FeedBack-UI",
      category: "ui",
      difficulty: "intermediate",
      tech: ["React", "CSS"],
      description: "Interactive feedback user interface",
    },
    {
      id: "13",
      img: "/images/project5.png",
      title: "Animated Form",
      live: "https://hemaezzat123.github.io/Animated-Form/",
      source: "https://github.com/HemaEzzat123/Animated-Form",
      category: "ui",
      difficulty: "beginner",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Beautiful animated form design",
    },
    {
      id: "14",
      img: "/images/project2.png",
      title: "Gallery Slide Show",
      source: "https://github.com/HemaEzzat123/galleria-slideshow-site",
      category: "media",
      difficulty: "intermediate",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Interactive image gallery slideshow",
    },
    {
      id: "15",
      img: "/images/project10.jpg",
      title: "Tip Calculator",
      live: "https://hemaezzat123.github.io/tip-calculator-app-main/tipCalculator/index.html",
      source: "https://github.com/HemaEzzat123/tip-calculator-app-main",
      category: "utility",
      difficulty: "beginner",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "Smart tip calculation application",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(projects[0].img);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  const categories = [
    "all",
    "education",
    "social",
    "utility",
    "developer",
    "business",
    "marketplace",
    "mathematics",
    "entertainment",
    "finance",
    "productivity",
    "ui",
    "media",
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Particle system effect
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.3,
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: "bg-green-500",
      intermediate: "bg-yellow-500",
      advanced: "bg-red-500",
    };
    return colors[difficulty] || "bg-gray-500";
  };

  const handleImageClick = (imgSrc) => {
    setModalImg(imgSrc);
    setModalOpen(true);
  };

  const handleLiveDemoClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSourceClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -100],
              opacity: [particle.opacity, 0],
            }}
            transition={{
              duration: 3 + particle.speed * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Magical orbs */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-xl opacity-40"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Digital Garden
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my projects as floating islands in a magical digital realm
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                className="group relative"
              >
                {/* Floating Island Card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 overflow-hidden">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Project Image */}
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-xl cursor-pointer hover:scale-110 transition-transform duration-300"
                      onClick={() => handleImageClick(project.img)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white group-hover:text-pink-300 transition-colors">
                        {project.title}
                      </h3>
                      <div
                        className={`w-3 h-3 rounded-full ${getDifficultyColor(
                          project.difficulty
                        )}`}
                      />
                    </div>

                    <p className="text-sm text-gray-300 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-white/10 rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-white/10 rounded-full text-gray-300">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2 relative z-10">
                      {project.live && (
                        <button
                          onClick={() => handleLiveDemoClick(project.live)}
                          className="flex-1 px-3 py-2 text-sm bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg text-center hover:from-pink-600 hover:to-purple-600 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 relative z-20"
                        >
                          Live Demo
                        </button>
                      )}
                      {project.source && (
                        <button
                          onClick={() => handleSourceClick(project.source)}
                          className="flex-1 px-3 py-2 text-sm bg-white/10 text-white rounded-lg text-center hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 relative z-20"
                        >
                          Source
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60 pointer-events-none"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4">
            <div>
              <div className="text-2xl font-bold text-white">
                {filteredProjects.length}
              </div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <div className="text-2xl font-bold text-white">
                {projects.length}
              </div>
              <div className="text-sm text-gray-400">Total</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <div className="text-2xl font-bold text-white">
                {categories.length - 1}
              </div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
          </div>
        </motion.div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imgSrc={modalImg}
        alt="Project"
      />
    </section>
  );
}
