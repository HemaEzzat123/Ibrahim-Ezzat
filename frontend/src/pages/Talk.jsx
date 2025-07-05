import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal";

const images = [
  { src: "/images/depi.png", alt: "Depi Certificate" },
  { src: "/images/depiii.png", alt: "Depi Certificate" },
  { src: "/images/depi.jpeg", alt: "Depi Certificate" },

  { src: "/images/we.jpeg", alt: "Web Dev Certificate" },

  { src: "/images/msp.jpg", alt: "MSP Certificate" },
  { src: "/images/best.jpg", alt: "MSP Certificate" },
  { src: "/images/msp certificate.jpg", alt: "MSP Certificate" },

  { src: "/images/az.jpeg", alt: "Az Certificate" },
  { src: "/images/az1.jpeg", alt: "Az Certificate" },
  { src: "/images/az2.jpeg", alt: "Az Certificate" },
  { src: "/images/az3.jpeg", alt: "Az Certificate" },
];

export default function Talk() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(images[0]);

  return (
    <section
      id="talk"
      className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-20 px-4 md:px-16 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mb-10"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Certified Web Developer
        </h2>
        <p className="text-lg text-gray-600">
          I am also a certified professional in the course of Web Development.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {images.map((img) => (
          <motion.img
            key={img.src}
            src={img.src}
            alt={img.alt}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-2xl shadow-xl w-40 h-40 md:w-52 md:h-52 object-cover cursor-pointer transition duration-300"
            onClick={() => {
              setModalImg(img);
              setModalOpen(true);
            }}
          />
        ))}
      </motion.div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imgSrc={modalImg.src}
        alt={modalImg.alt}
      />
    </section>
  );
}
