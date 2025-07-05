import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../components/Modal";

export default function Projects() {
  const projects = [
    {
      id: "1",
      img: "/images/project4.png",
      title: "Learning English",
      live: "https://hemaezzat123.github.io/Learning-English-Letters/",
      source: "https://github.com/HemaEzzat123/Learning-English-Letters",
    },
    {
      id: "2",
      img: "/images/project12.png",
      title: "Social-media",
      source: "https://github.com/HemaEzzat123/Social-media",
    },
    {
      id: "3",
      img: "/images/project11.png",
      title: "Dictionary web app",
      live: "https://dictionary-web-app-dun-xi.vercel.app/",
      source: "https://github.com/HemaEzzat123/Dictionary-web-app",
    },
    {
      id: "4",
      img: "/images/project13.png",
      title: "Github Finder App",
      live: "https://git-hub-finder-gold.vercel.app/",
      source: "https://github.com/HemaEzzat123/GitHub-Finder",
    },
    {
      id: "5",
      img: "/images/project15.png",
      title: "Event Book System",
      source: "https://github.com/HemaEzzat123/Event-Booking-System",
    },
    {
      id: "6",
      img: "/images/project17.png",
      title: "house market place",
      live: "https://house-market-place-teal-beta.vercel.app/",
      source: "https://github.com/HemaEzzat123/house-market-place",
    },
    {
      id: "7",
      img: "/images/project16.jpg",
      title: "Queueing Models",
      live: "https://queueing-models-calculations.vercel.app/",
      source: "https://github.com/HemaEzzat123/Queueing-Models-Calculations",
    },
    {
      id: "8",
      img: "/images/project6.png",
      title: "Advice Generator",
      live: "https://hemaezzat123.github.io/advice-generator-app-main/",
      source: "https://github.com/HemaEzzat123/advice-generator-app-main",
    },

    {
      id: "9",
      img: "/images/project3.png",
      title: "Twitter Clone",
      live: "https://hemaezzat123.github.io/TwitterClone/",
      source: "https://github.com/HemaEzzat123/TwitterClone",
    },
    {
      id: "10",
      img: "/images/project7.png",
      title: "Bank System",
      source: "https://github.com/HemaEzzat123/Bank-System",
    },
    {
      id: "11",
      img: "/images/project8.jpg",
      title: "Note App",
      source: "https://github.com/HemaEzzat123/Note-App",
    },
    {
      id: "12",
      img: "/images/project1.png",
      title: "FeedBack-UI",
      source: "https://github.com/HemaEzzat123/FeedBack-UI",
    },
    {
      id: "13",
      img: "/images/project5.png",
      title: "Animated Form",
      live: "https://hemaezzat123.github.io/Animated-Form/",
      source: "https://github.com/HemaEzzat123/Animated-Form",
    },
    {
      id: "14",
      img: "/images/project2.png",
      title: "Gallery Slide Show",
      source: "https://github.com/HemaEzzat123/galleria-slideshow-site",
    },
    {
      id: "15",
      img: "/images/project10.jpg",
      title: "Tip Calculator",
      live: "https://hemaezzat123.github.io/tip-calculator-app-main/tipCalculator/index.html",
      source: "https://github.com/HemaEzzat123/tip-calculator-app-main",
    },
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(projects[0].img);

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold mb-6 text-pink-600"
      >
        My Projects
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card bg-white rounded-lg shadow p-4 w-64 flex flex-col items-center"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-32 object-cover rounded mb-4 cursor-pointer"
                onClick={() => {
                  setModalImg(project.img);
                  setModalOpen(true);
                }}
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:underline mb-1"
                >
                  Live Server
                </a>
              )}
              {project.source && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:underline"
                >
                  Source Code
                </a>
              )}
            </div>
          ))}
          <Modal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            imgSrc={modalImg}
            alt="Project"
          />
        </div>
      </motion.div>
    </section>
  );
}
