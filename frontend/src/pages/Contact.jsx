import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [crystals, setCrystals] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [touched, setTouched] = useState({});
  const [shake, setShake] = useState({});
  const [sparkle, setSparkle] = useState({});
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  // Generate floating crystals
  useEffect(() => {
    const generateCrystals = () => {
      const newCrystals = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        rotation: Math.random() * 360,
        delay: Math.random() * 2,
        color: [
          "from-pink-400",
          "from-purple-400",
          "from-cyan-400",
          "from-blue-400",
        ][Math.floor(Math.random() * 4)],
      }));
      setCrystals(newCrystals);
    };

    generateCrystals();
    const interval = setInterval(generateCrystals, 8000);
    return () => clearInterval(interval);
  }, []);

  // Email validation
  const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  // Field validation
  const validate = (vals) => ({
    name: vals.name.trim().length > 0,
    email: isValidEmail(vals.email),
    message: vals.message.trim().length > 0,
  });

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setShake((s) => ({ ...s, [e.target.name]: false }));
    setSparkle((sp) => ({ ...sp, [e.target.name]: false }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const valid = validate(values);
    let hasError = false;
    let newShake = {},
      newSparkle = {};
    Object.keys(valid).forEach((field) => {
      if (!valid[field]) {
        hasError = true;
        newShake[field] = true;
        newSparkle[field] = true;
      }
    });
    setShake(newShake);
    setSparkle(newSparkle);
    setTouched({ name: true, email: true, message: true });
    if (hasError) return;

    emailjs
      .sendForm(
        "service_72wutrs",
        "template_0yuo2xs",
        form.current,
        "3iJUme4IECLV8nuo6"
      )
      .then(
        (result) => {
          setSent(true);
          setSuccessMsg(
            "✨ Message sent successfully! The crystal ball has delivered your message to the cosmos!"
          );
          setErrorMsg("");
          setValues({ name: "", email: "", message: "" });
          setTimeout(() => {
            setSuccessMsg("");
            setSent(false);
          }, 5000);
        },
        (error) => {
          setErrorMsg(
            "💫 The crystal ball's energy was disrupted. Please try again."
          );
          setSuccessMsg("");
          setTimeout(() => {
            setErrorMsg("");
          }, 5000);
        }
      );
  };

  const getFieldIcon = (fieldName) => {
    const icons = {
      name: "👤",
      email: "📧",
      message: "💭",
    };
    return icons[fieldName] || "✨";
  };

  const valid = validate(values);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Floating crystals */}
      <div className="absolute inset-0 pointer-events-none">
        {crystals.map((crystal) => (
          <motion.div
            key={crystal.id}
            className={`absolute w-${crystal.size} h-${crystal.size} bg-gradient-to-br ${crystal.color} to-transparent rounded-full opacity-20 blur-sm`}
            style={{
              left: `${crystal.x}%`,
              top: `${crystal.y}%`,
              width: `${crystal.size}px`,
              height: `${crystal.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [
                crystal.rotation,
                crystal.rotation + 180,
                crystal.rotation + 360,
              ],
            }}
            transition={{
              duration: 4 + crystal.delay,
              repeat: Infinity,
              ease: "easeInOut",
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

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Crystal Ball Portal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Peer into the mystical realm and channel your thoughts through the
            ancient crystal ball. Your messages traverse the ethereal planes to
            reach their destination...
          </p>
        </motion.div>

        {/* Crystal Ball Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse" />

          {/* Crystal ball form */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/20 shadow-2xl max-w-md w-full">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <form
              ref={form}
              onSubmit={sendEmail}
              className="relative z-10 space-y-6"
            >
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`relative ${shake.name ? "animate-shake" : ""}`}
                onAnimationEnd={() => setShake((s) => ({ ...s, name: false }))}
              >
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg">
                  {getFieldIcon("name")}
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your mystical name"
                  value={values.name}
                  onChange={handleChange}
                  onFocus={() => setActiveField("name")}
                  onBlur={() => setActiveField(null)}
                  className={`w-full bg-transparent border-2 rounded-xl px-12 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                    touched.name && !valid.name
                      ? "border-red-400 shadow-lg shadow-red-400/25"
                      : activeField === "name"
                      ? "border-pink-400 shadow-lg shadow-pink-400/25"
                      : "border-white/30 hover:border-white/50"
                  }`}
                />
                {/* Custom error message */}
                {touched.name && !valid.name && (
                  <div className="text-pink-300 text-xs mt-1 ml-2 animate-fadeIn">
                    ✨ Please enter your mystical name!
                  </div>
                )}
                {/* Sparkle on invalid */}
                {sparkle.name && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5, x: 0 }}
                    animate={{ opacity: 1, scale: 1.2, x: 10 }}
                    exit={{ opacity: 0, scale: 0.5, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-300 text-xl pointer-events-none"
                  >
                    ✨
                  </motion.span>
                )}
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`relative ${shake.email ? "animate-shake" : ""}`}
                onAnimationEnd={() => setShake((s) => ({ ...s, email: false }))}
              >
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg">
                  {getFieldIcon("email")}
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your ethereal address"
                  value={values.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField(null)}
                  className={`w-full bg-transparent border-2 rounded-xl px-12 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                    touched.email && !valid.email
                      ? "border-red-400 shadow-lg shadow-red-400/25"
                      : activeField === "email"
                      ? "border-purple-400 shadow-lg shadow-purple-400/25"
                      : "border-white/30 hover:border-white/50"
                  }`}
                />
                {/* Custom error message */}
                {touched.email && !valid.email && (
                  <div className="text-pink-300 text-xs mt-1 ml-2 animate-fadeIn">
                    ✨ Please enter a valid ethereal address!
                  </div>
                )}
                {/* Sparkle on invalid */}
                {sparkle.email && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5, x: 0 }}
                    animate={{ opacity: 1, scale: 1.2, x: 10 }}
                    exit={{ opacity: 0, scale: 0.5, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-300 text-xl pointer-events-none"
                  >
                    ✨
                  </motion.span>
                )}
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`relative ${shake.message ? "animate-shake" : ""}`}
                onAnimationEnd={() =>
                  setShake((s) => ({ ...s, message: false }))
                }
              >
                <div className="absolute left-3 top-4 text-lg">
                  {getFieldIcon("message")}
                </div>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Channel your thoughts into the crystal..."
                  value={values.message}
                  onChange={handleChange}
                  onFocus={() => setActiveField("message")}
                  onBlur={() => setActiveField(null)}
                  className={`w-full bg-transparent border-2 rounded-xl px-12 py-4 text-white placeholder-gray-400 focus:outline-none resize-none transition-all duration-300 ${
                    touched.message && !valid.message
                      ? "border-red-400 shadow-lg shadow-red-400/25"
                      : activeField === "message"
                      ? "border-cyan-400 shadow-lg shadow-cyan-400/25"
                      : "border-white/30 hover:border-white/50"
                  }`}
                />
                {/* Custom error message */}
                {touched.message && !valid.message && (
                  <div className="text-pink-300 text-xs mt-1 ml-2 animate-fadeIn">
                    ✨ Please channel your thoughts into the crystal!
                  </div>
                )}
                {/* Sparkle on invalid */}
                {sparkle.message && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5, x: 0 }}
                    animate={{ opacity: 1, scale: 1.2, x: 10 }}
                    exit={{ opacity: 0, scale: 0.5, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute right-4 top-6 text-yellow-300 text-xl pointer-events-none"
                  >
                    ✨
                  </motion.span>
                )}
              </motion.div>

              {/* Notifications */}
              <AnimatePresence mode="wait">
                {successMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 text-green-300 text-sm rounded-xl px-4 py-3 backdrop-blur-sm"
                  >
                    {successMsg}
                  </motion.div>
                )}
                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/50 text-red-300 text-sm rounded-xl px-4 py-3 backdrop-blur-sm"
                  >
                    {errorMsg}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold py-4 rounded-xl border-0 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group cursor-pointer"
              >
                {/* Button glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-cyan-400/20 rounded-xl transition-opacity duration-300 ${
                    isHovering ? "opacity-100" : "opacity-0"
                  }`}
                />

                <span className="relative z-10 flex items-center justify-center gap-2">
                  {sent ? "✨ Message Sent!" : "🔮 Cast Your Message!"}
                  {!sent && (
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      ✨
                    </motion.span>
                  )}
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Mystical footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            🌟 Your messages are protected by ancient encryption spells 🌟
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// Tailwind CSS for shake animation:
// .animate-shake {
//   animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
// }
// @keyframes shake {
//   10%, 90% { transform: translateX(-2px); }
//   20%, 80% { transform: translateX(4px); }
//   30%, 50%, 70% { transform: translateX(-8px); }
//   40%, 60% { transform: translateX(8px); }
// }
