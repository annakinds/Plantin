import './reset.css';
import './style.css';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Sortable from 'sortablejs';
import Swiper from 'swiper';

const drawHeroimage = () => {
  gsap.to(".heroimg__photo2", {
    x: -270,
    willChange: "transform",
    scrollTrigger: {
      trigger: ".heroimg__photo2",
      pin: "main",
      start: "top center",
      end: "10% top",
      // markers: true,
      scrub: true,
      toggleActions: "play pause resume reset",
    },
  });
}

const step = document.getElementById("section3__list");

const feedbackPrintingPress = () => {
  const correctOrder = [
    "letters kiezen",
    "tekst vormen",
    "tekst vast zetten",
    "inkt op tekst",
    "tekst op machine plaatsen",
    "persen met machine"
  ];

  correctOrder.forEach((text, index) => {
    if (step.children[index].textContent.trim() === text) {
      step.children[index].classList.remove('wrong'); 
      step.children[index].classList.add('right'); 
    } else {
      step.children[index].classList.remove('right'); 
      step.children[index].classList.add('wrong'); 
    }
  });
};

const printingPress = () => {
  Sortable.create(step, {
    group: 'section3__list',
    animation: 150,
    onEnd: () => {
      feedbackPrintingPress(); 
    },
  });
}

const religiousUnrest = () => {
  // const protestants = document.querySelector(".section5__word1");
  // const versus = document.querySelector(".section5__word2");
  // const catholics = document.querySelector(".section5__word3");

  gsap.set(".section5__word1",{x:-350});
  gsap.set(".section5__word2", { opacity: 0 });
  gsap.set(".section5__word3", { x: 300 });

  gsap.to(".section5__word1", {
    x: 0,
    scrollTrigger: {
      trigger: "#section5",
      start: "top bottom",
      end: "top top",
      markers: true,
      scrub: true,
      toggleActions: "play pause resume reset",
    },
  });

  gsap.to(".section5__word2", {
    opacity: 0.2,
    scrollTrigger: {
      trigger: "#section5",
      start: "top bottom",
      end: "top top",
      markers: true,
      scrub: true,
      toggleActions: "play pause resume reset",
    },
  });

  gsap.to(".section5__word3", {
    x: 0,
    scrollTrigger: {
      trigger: "#section5",
      start: "top bottom",
      end: "top top",
      markers: true,
      scrub: true,
      toggleActions: "play pause resume reset",
    },
  });
}

const passerObjects = () => {
  const images = document.querySelectorAll('.section6__img img:not(.passer');

  images.forEach(image => {
    image.addEventListener('click', () => {
      image.classList.add('hidden'); 
    });
  });
}

const rippingMoney = () => {
  gsap.to(".section8__photo2", {
    y: +200,
    scrollTrigger: {
      trigger: ".section8__photo1",
      start: "start bottom",
      end: "bottom center",
      // markers: true,
      scrub: true,
      toggleActions: "play pause resume reset",
    },
  });
  gsap.to(".section8__photo1", {
    y: -50,
    scrollTrigger: {
      trigger: ".section8__photo1",
      start: "start bottom",
      end: "bottom center",
      // markers: true,
      scrub: true,
      toggleActions: "play pause resume reset",
    },
  });
}

const swipeGenerations = () => {
  const title = document.querySelector(".section9__title").textContent;
  const beforeEl = document.querySelector(".section9__info");

  if (title === "nieuwe generatie") {
    beforeEl.classList.add('new');
  }

  console.log(title);
  const swiper = new Swiper(".mySwiper", {});
};


const init = () => {
  drawHeroimage();
  printingPress();
  religiousUnrest();
  passerObjects();
  rippingMoney();
  swipeGenerations();
}
init();