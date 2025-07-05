import { useEffect, useRef, useState } from "react";
import Modal from "../components/Modal";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [step, setStep] = useState(0); // 0: Hello, I'm, 1: Ibrahim Ezzat.
  const [modalOpen, setModalOpen] = useState(false);
  const helloText = "Hello, I'm";
  const nameText = "Ibrahim Ezzat.";
  const typingSpeed = 80;
  const pauseAfterHello = 600;
  const intervalRef = useRef();

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
      className="min-h-screen flex gap-40 justify-center items-center bg-gradient-to-r from-pink-200 via-pink-100 to-blue-100 animate-fadeIn"
    >
      <div className="HomeAbout text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 whitespace-pre-line h-32 border-r-4 border-pink-400 inline-block pr-4 animate-typewriter">
          {displayText}
        </h1>
        <h3 className="text-xl md:text-2xl font-semibold text-pink-600 mt-2">
          Full Stack Web Developer
        </h3>
        <div className="flex gap-36 mt-10">
          {/* ✅ زر تحميل الـ CV */}
          <a
            href="/files/Ibrahim Ezzat.pdf" // حط مسار الملف الصحيح هنا
            download
            className="bg-black text-white font-semibold py-2 px-4 rounded-md border border-white hover:bg-pink-400 hover:text-black transition duration-300 w-36 text-center"
          >
            My CV
          </a>

          {/* ✅ زر الذهاب إلى واتساب */}
          <a
            href="https://wa.me/201123210676" // غيّر الرقم لرقمك الحقيقي
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md border border-white hover:bg-green-500 transition duration-300 w-36 text-center"
          >
            WhatsApp
          </a>
        </div>{" "}
      </div>
      <div className="personalPhoto">
        <img
          src="/images/image.jpg"
          alt="Ibrahim's photo"
          className="rounded-full shadow-lg border-4 border-pink-300 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
          onClick={() => setModalOpen(true)}
          style={{
            width: "300px",
            borderRadius: "50%",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
            animation: "bounceIn 1.5s ease-out",
          }}
        />
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imgSrc="/images/image.jpg"
        alt="Ibrahim's photo"
      />
    </section>
  );
}
