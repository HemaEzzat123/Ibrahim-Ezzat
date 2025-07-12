import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";

const certificates = [
  {
    src: "/images/depi.png",
    alt: "Depi Certificate",
    title: "React Web Developer",
    category: "Full Stack",
    glow: "from-pink-400 to-purple-500",
  },
  {
    src: "/images/depiii.png",
    alt: "Depi Certificate",
    title: "Business English",
    category: "Certification",
    glow: "from-blue-400 to-cyan-500",
  },
  {
    src: "/images/depi.jpeg",
    alt: "Depi Certificate",
    title: "Certificate of Completion",
    category: "Certification",
    glow: "from-green-400 to-emerald-500",
  },
  {
    src: "/images/we.jpeg",
    alt: "Web Dev Certificate",
    title: "Web Developer",
    category: "Full Stack",
    glow: "from-yellow-400 to-orange-500",
  },
  {
    src: "/images/msp.jpg",
    alt: "MSP Certificate",
    title: "MSP Certificate",
    category: "Leadership",
    glow: "from-indigo-400 to-purple-500",
  },
  {
    src: "/images/best.jpg",
    alt: "MSP Certificate",
    title: "Frontend Award",
    category: "Frontend",
    glow: "from-red-400 to-pink-500",
  },
  {
    src: "/images/msp certificate.jpg",
    alt: "MSP Certificate",
    title: "Professional Mastery",
    category: "Frontend",
    glow: "from-teal-400 to-blue-500",
  },
  {
    src: "/images/az.jpeg",
    alt: "Az Certificate",
    title: "College certificate",
    category: "Certification",
    glow: "from-violet-400 to-purple-500",
  },
  {
    src: "/images/az1.jpeg",
    alt: "Az Certificate",
    title: "Certificate from the department",
    category: "Certification",
    glow: "from-rose-400 to-pink-500",
  },
  {
    src: "/images/az2.jpeg",
    alt: "Az Certificate",
    title: "First Place Award",
    category: "Certification",
    glow: "from-amber-400 to-yellow-500",
  },
  {
    src: "/images/az3.jpeg",
    alt: "Az Certificate",
    title: "First Place Award",
    category: "Certification",
    glow: "from-emerald-400 to-green-500",
  },
];

export default function Talk() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(certificates[0]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOrbiting, setIsOrbiting] = useState(false);

  const categories = [
    "All",
    ...new Set(certificates.map((cert) => cert.category)),
  ];
  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  // Floating animation for certificates
  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="talk"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-6xl  font-bold text-white mb-6 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text ">
            🏆 Achievement Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Embark on a journey through my magical realm of certifications and
            achievements
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-36"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Orbital Display */}
        <div className="relative h-96 flex items-center justify-center">
          {isOrbiting ? (
            <motion.div
              className="relative w-80 h-80"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {filteredCertificates.map((cert, index) => {
                const angle = (index / filteredCertificates.length) * 360;
                const radius = 120;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={cert.src}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                  >
                    <motion.div
                      className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-2xl cursor-pointer bg-gradient-to-r ${cert.glow}`}
                      variants={floatingVariants}
                      animate="float"
                      custom={index}
                      onClick={() => {
                        setModalImg(cert);
                        setModalOpen(true);
                      }}
                    >
                      <img
                        src={cert.src}
                        alt={cert.alt}
                        className="w-full h-full object-cover"
                      />
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xs font-bold text-center p-2"
                        >
                          {cert.title}
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* Grid Display */
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              <AnimatePresence>
                {filteredCertificates.map((cert, index) => (
                  <motion.div
                    key={cert.src}
                    layout
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r ${cert.glow} p-1`}
                    onClick={() => {
                      setModalImg(cert);
                      setModalOpen(true);
                    }}
                  >
                    <div className="relative w-full h-48 rounded-xl overflow-hidden">
                      <img
                        src={cert.src}
                        alt={cert.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-bold text-sm">{cert.title}</h3>
                          <p className="text-xs opacity-90">{cert.category}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Toggle Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOrbiting(!isOrbiting)}
            className="px-8 py-4 z-10 mt-26 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isOrbiting
              ? "🌌 Switch to Grid View"
              : "🪐 Switch to Orbital View"}
          </motion.button>
        </motion.div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imgSrc={modalImg.src}
        alt={modalImg.alt}
      />
    </section>
  );
}
