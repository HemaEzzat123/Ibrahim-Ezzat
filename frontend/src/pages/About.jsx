import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activeSection, setActiveSection] = useState("story");
  const [isTyping, setIsTyping] = useState(false);

  const sections = [
    { id: "story", label: "My Story", icon: "📖" },
    { id: "stats", label: "Stats", icon: "📊" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "github", label: "GitHub", icon: "🐙" },
  ];

  const stats = [
    {
      label: "Happy Clients",
      value: "10+",
      icon: "😊",
      color: "from-pink-400 to-purple-500",
    },
    {
      label: "Years Experience",
      value: "3+",
      icon: "⏰",
      color: "from-blue-400 to-cyan-500",
    },
    {
      label: "Students Taught",
      value: "50+",
      icon: "👨‍🎓",
      color: "from-green-400 to-emerald-500",
    },
    {
      label: "Projects Completed",
      value: "20+",
      icon: "🚀",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => setIsTyping(false), 2000);
    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
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
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text">
            🧙‍♂️ Architect of Enchantment
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto px-4">
            Crafting digital realms with mystical tools and ancient wisdom
          </p>
        </motion.div>

        {/* Section Navigation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {sections.map((section) => (
            <motion.button
              key={section.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              <span>{section.icon}</span>
              {section.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {activeSection === "story" && (
              <motion.div
                key="story"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
              >
                <motion.h2
                  className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3"
                  animate={isTyping ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  🏰 The Tale of a Digital Sorcerer
                </motion.h2>
                <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    My journey in web development is powered by an array of
                    mystical tools and languages, with JavaScript casting the
                    core of my enchantments. I wield frameworks like React.js
                    and Express.js with precision, crafting seamless portals
                    (websites) that connect realms (users) across the digital
                    universe.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    The ancient arts of the Jamstack empower me to create fast,
                    secure, and dynamic experiences, while my design skills
                    ensure every creation is not only functional but visually
                    captivating. Join me as I continue to explore new spells and
                    technologies to shape the future of the web.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    I'm an experienced Full Stack Developer specializing in the
                    MERN stack with 3+ years of hands-on development experience.
                    Proven track record in building scalable web applications,
                    teaching technical skills to 50+ students, and collaborating
                    on innovative digital solutions. Proficient in modern
                    development tools including Full Stack Development, with a
                    passion for continuous learning and contributing to
                    high-impact projects in collaborative, high-performing
                    teams.
                  </motion.p>
                </div>
              </motion.div>
            )}

            {activeSection === "stats" && (
              <motion.div
                key="stats"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 text-center`}
                  >
                    <div className="text-3xl sm:text-4xl mb-2">{stat.icon}</div>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-200 text-xs sm:text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeSection === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  ⚡ My Magical Arsenal
                </h3>
                <div className="w-full">
                  <img
                    className="w-full h-auto rounded-lg"
                    src="https://skillicons.dev/icons?i=babel,bootstrap,css,figma,firebase,git,github,html,js,jquery,mongodb,netlify,nodejs,npm,react,redux,tailwind,threejs,vercel,vite,vscode,java,discord,docker,linux,python,express,mysql,postgresql,typescript"
                    alt="Skills"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            )}

            {activeSection === "github" && (
              <motion.div
                key="github"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">
                    📊 GitHub Analytics
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white/5 rounded-xl p-3 sm:p-4">
                      <img
                        className="w-full h-auto rounded-lg"
                        src="https://github-readme-stats.vercel.app/api?username=HemaEzzat123&theme=dark&hide_border=true&title_color=pink&text_color=white&icon_color=pink&text_bold=true"
                        alt="GitHub Stats"
                        loading="lazy"
                      />
                    </div>
                    <div className="bg-white/5 rounded-xl p-3 sm:p-4">
                      <img
                        className="w-full h-auto rounded-lg"
                        src="https://github-readme-stats.vercel.app/api/top-langs?username=HemaEzzat123&theme=dark&hide_border=true&title_color=pink&text_color=white&icon_color=pink&text_bold=true"
                        alt="Top Languages"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10">
                    <img
                      className="w-full h-auto rounded-lg"
                      src="https://github-readme-streak-stats.herokuapp.com/?user=HemaEzzat123&theme=dark&hide_border=true&type=svg&background=transparent&ring=pink&currStreakLabel=pink"
                      alt="GitHub Streak"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10">
                    <a
                      href="https://github.com/HemaEzzat123/Social-Media"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        className="w-full h-auto rounded-lg"
                        src="https://github-readme-stats.vercel.app/api/pin/?username=HemaEzzat123&repo=Social-Media&theme=dark&hide_border=true&title_color=pink&text_color=white&icon_color=pink&text_bold=true&description_lines_count=2"
                        alt="Featured Repository"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;
