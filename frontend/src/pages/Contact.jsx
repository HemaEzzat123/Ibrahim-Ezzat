import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72wutrs",
        "template_0yuo2xs",
        form.current,
        "3iJUme4IECLV8nuo6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setSuccessMsg("🎉 Message sent successfully!");
          setErrorMsg("");

          setTimeout(() => {
            setSuccessMsg("");
          }, 4000);
        },
        (error) => {
          console.log(error.text);
          setErrorMsg("❌ Failed to send message. Please try again.");
          setSuccessMsg("");

          setTimeout(() => {
            setErrorMsg("");
          }, 4000);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-4">
        <h2 className="text-4xl font-bold text-pink-700 mb-4">
          Summon The Wizard
        </h2>
        <p className="w-[1000px] text-center text-black mb-10">
          Step into the circle of enchantment and weave your words into the
          fabric of the cosmos. Whether you seek to conjure collaborations,
          unlock mysteries, or simply share tales of adventure, your messages
          are treasured scrolls within this realm...
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-black bg-opacity-30 p-6 rounded-xl shadow-2xl backdrop-blur-md flex flex-col gap-4 w-full max-w-md"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            required
            className="bg-transparent border border-pink-300 rounded-md px-4 py-2 text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            className="bg-transparent border border-pink-300 rounded-md px-4 py-2 text-white focus:outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="message"
            required
            className="bg-transparent border border-pink-300 rounded-md px-4 py-2 text-white focus:outline-none"
          />

          {/* ✅ Notification */}
          {successMsg && (
            <div className="bg-green-500 text-white text-sm rounded-md px-4 py-2">
              {successMsg}
            </div>
          )}
          {errorMsg && (
            <div className="bg-red-500 text-white text-sm rounded-md px-4 py-2">
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            className="bg-black text-white font-semibold py-2 cursor-pointer rounded-md border border-white hover:bg-pink-400 hover:text-black transition duration-300"
          >
            {sent ? "Message Sent!" : "Cast Your Message!"}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
