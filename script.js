// Smooth scrolling for navigation links
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll animations
const scrollElements = document.querySelectorAll(".animate-on-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// Interactive navigation bar
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".navbar ul li a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

// Image modal popup
const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

const images = document.querySelectorAll(
  ".card img, .personalPhoto img, .aboutPhoto img"
);

images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.classList.add("open");
    const img = document.createElement("img");
    img.src = image.src;
    while (modal.firstChild) {
      modal.removeChild(modal.firstChild);
    }
    modal.appendChild(img);
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("open");
});

// Typewriter effect for intro text
const typewriter = (element, text, speed) => {
  let i = 0;
  const type = () => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };
  type();
};

window.addEventListener("load", () => {
  const introText = document.querySelector(".HomeAbout h1");
  typewriter(introText, introText.textContent, 100);
  introText.textContent = ""; // Clear the text for the effect
});

// Scroll progress bar
const progressBar = document.createElement("div");
progressBar.className = "scroll-progress-bar";
document.body.prepend(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});

// Enhanced Parallax Effect using JavaScript
window.addEventListener("scroll", function () {
  const parallaxBackground = document.querySelector(".parallax-background");
  const scrollPosition = window.pageYOffset;

  // Adjust the background position for the parallax effect
  parallaxBackground.style.transform =
    "translateY(" + scrollPosition * 0.5 + "px)";
});
