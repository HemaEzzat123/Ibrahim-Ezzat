import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [step, setStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const helloText = "Hello, I'm";
  const nameText = "Ibrahim Ezzat.";
  const typingSpeed = 80;
  const pauseAfterHello = 600;
  const intervalRef = useRef();

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.6 + 0.2,
        color: ["bg-pink-400", "bg-purple-400", "bg-cyan-400", "bg-blue-400"][
          Math.floor(Math.random() * 4)
        ],
      }));
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    if (step === 0) {
      intervalRef.current = setInterval(() => {
        setDisplayText(helloText.slice(0, i + 1));
        i++;
        if (i === helloText.length) {
          clearInterval(intervalRef.current);
          setTimeout(() => setStep(1), pauseAfterHello);
        }
      }, typingSpeed);
    } else if (step === 1) {
      setDisplayText(helloText + "\n");
      let j = 0;
      intervalRef.current = setInterval(() => {
        setDisplayText(helloText + "\n" + nameText.slice(0, j + 1));
        j++;
        if (j === nameText.length) {
          clearInterval(intervalRef.current);
        }
      }, typingSpeed);
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [step]);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute w-1 h-1 ${particle.color} rounded-full`}
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
        className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row gap-8 lg:gap-40 justify-center items-center px-4 sm:px-6 lg:px-8">
        {/* Content Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Title */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 whitespace-pre-line h-24 sm:h-28 md:h-32 border-r-4 border-pink-400 inline-block pr-2 sm:pr-4 animate-pulse">
              {displayText}
            </h1>
            {/* Glowing effect behind text */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 blur-xl -z-10" />
          </motion.div>

          {/* Role Title */}
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Digital Realm Architect
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting digital experiences that bridge the gap between imagination
            and reality. Transforming ideas into interactive portals that
            connect worlds.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-36 mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* CV Button */}
            <motion.a
              href="/files/Ibrahim Ezzat.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-xl border-0 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-40 text-center group"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0  bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex flex-col items-center justify-center gap-2">
                📄 My Scroll
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  ✨
                </motion.span>
              </span>
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/201123210676"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 px-6 rounded-xl border-0 hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-40 text-center group"
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative  z-10 flex items-center justify-center gap-2">
                💬 Summon Me
                <motion.span
                  animate={{ bounce: [0, -5, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  📱
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          className="personalPhoto relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse" />

          {/* Floating elements around image */}
          <motion.div
            className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60"
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
          <motion.div
            className="absolute -bottom-4 -left-4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-60"
            animate={{
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Profile Image */}
          <motion.img
            src="/images/image.jpg"
            alt="Ibrahim's photo"
            className="relative z-10 rounded-full shadow-2xl border-4 border-white/20 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 backdrop-blur-sm"
            onClick={() => setModalOpen(true)}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
              borderRadius: "50%",
              animation: "bounceIn 1.5s ease-out",
            }}
          />

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 rounded-full blur-xl"
            animate={{
              opacity: isHovering ? 0.8 : 0,
              scale: isHovering ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imgSrc="/images/image.jpg"
        alt="Ibrahim's photo"
      />
    </section>
  );
}
