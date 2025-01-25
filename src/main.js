import './reset.css';
import './style.css';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Sortable from 'sortablejs';
import Swiper from 'swiper';

const $nav = document.querySelector('.nav');
const $navButton = document.querySelector('.nav__button');
const $navList = document.querySelector('.nav__list');
const $iconLink = document.querySelector('#iconlink');
const listItems = $navList.querySelectorAll("li a");
const middle = document.querySelector(".nav__middle");
const tickets = document.querySelector(".nav__tickets");

const openNavigation = () => {
  $navButton.setAttribute("aria-expanded", "true");
  $iconLink.setAttribute("xlink:href", "#close");
  $navList.classList.remove("hidden");
  $nav.classList.add('nav--fixed');
  tickets.classList.add("hidden");
  middle.classList.add("hidden");
}

const closeNavigation = () => {
  $navButton.setAttribute("aria-expanded", "false");
  $iconLink.setAttribute("xlink:href", "#navicon");
  $navList.classList.add("hidden");
  $nav.classList.remove('nav--fixed');
  tickets.classList.remove("hidden");
  middle.classList.remove("hidden");
}

const toggleNavigation = () => {
  const open = $navButton.getAttribute("aria-expanded");
  open === "false" ? openNavigation() : closeNavigation();
}


const handleBlur = () => {
  //if (!event.relatedTarget || !$navList.contains(event.relatedTarget)) {
  closeNavigation();
  //}
}

const drawHamburgerMenu = () => {
  $navButton.classList.remove('hidden');
  $navList.classList.add("hidden");

  $navButton.addEventListener("click", toggleNavigation);
  // add event to the last item in the nav list to trigger the disclosure to close if the user tabs out of the disclosure
  listItems[listItems.length - 1].addEventListener("blur", handleBlur);
  // Close the disclosure if a user presses the escape key
  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      $navButton.focus();
      closeNavigation();
    }
  });
}


const drawHeroimage = () => {
  // gsap.to(".heroimg__photo2", {
  //   x: -270,
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: "body",
  //     pin: "main",
  //     start: "top top",
  //     end: "10% top",
  //     // markers: true,
  //     scrub: true,
  //     toggleActions: "play pause resume reset",
  //   },
  // });
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
  gsap.set(".section5__word1", { x: -350 });
  gsap.to(".section5__word1", {
    x: 0,
    scrollTrigger: {
      trigger: "#section5",
      start: "top bottom",
      end: "center center",
      // markers: true,
      scrub: true,
      toggleActions: "play pause resume reset",
    },
  });

  gsap.set(".section5__word2", { opacity: 0 });
  gsap.to(".section5__word2", {
    opacity: 0.2,
    scrollTrigger: {
      trigger: "#section5",
      start: "top bottom",
      end: "center center",
      // markers: true,
      scrub: true,
      toggleActions: "play pause resume reset",
    },
  });

  gsap.set(".section5__word3", { x: 300 });
  gsap.to(".section5__word3", {
    x: 0,
    scrollTrigger: {
      trigger: "#section5",
      start: "top bottom",
      end: "center center",
      // markers: true,
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
  const swiper = new Swiper(".mySwiper", {});
};


const init = () => {
  drawHamburgerMenu();
  drawHeroimage();
  printingPress();
  religiousUnrest();
  passerObjects();
  rippingMoney();
  swipeGenerations();
}
init();