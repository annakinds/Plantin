import './reset.css';
import './style.css';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Sortable from 'sortablejs';
import Swiper from 'swiper';

let mm = gsap.matchMedia();

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
  closeNavigation();
}

const drawHamburgerMenu = () => {
  $navButton.classList.remove('hidden');
  $navList.classList.add("hidden");

  $navButton.addEventListener("click", toggleNavigation);
  listItems[listItems.length - 1].addEventListener("blur", handleBlur);
  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      $navButton.focus();
      closeNavigation();
    }
  });
}

const drawSubtitle = () => {
  gsap.to(".nav__middle", {
    innerHTML: '        <img class="nav__logo" src="./src/assets/img/png/logo_small.png" alt="logo">',
    scrollTrigger: {
      trigger: "#heroimg",
      scrub: 0.2,
      start: "top bottom",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "play pause resume reset",
    },
  });
  gsap.to(".nav__middle", {
    textContent: "een man met een missie",
    scrollTrigger: {
      trigger: "#section1",
      scrub: 0.2,
      start: "top bottom",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "play pause resume reset",
    },
  });
  gsap.to(".nav__middle", {
    textContent: "een visionair met lef",
    scrollTrigger: {
      trigger: "#section2",
      scrub: 0.2,
      start: "top bottom",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "play pause resume reset",
    },
  });
  gsap.to(".nav__middle", {
    textContent: "een inkijk in de drukpers",
    scrollTrigger: {
      trigger: "#section3",
      scrub: 0.2,
      start: "top bottom",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "play pause resume reset",
    },
  });
  gsap.to(".nav__middle", {
    textContent: "een pionier in educatie en familieambitie",
    scrollTrigger: {
      trigger: "#section4",
      scrub: 0.2,
      start: "top bottom",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "play pause resume reset",
    },
  });
  gsap.to(".nav__middle", {
    textContent: "een man die kracht maakte van uitdagingen",
    scrollTrigger: {
      trigger: "#section5",
      scrub: 0.2,
      start: "top bottom",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "play pause resume reset",
    },
  });
  gsap.to(".nav__middle", {
    textContent: "een leven in balans en beweging",
    scrollTrigger: {
      trigger: "#section6",
      scrub: 0.2,
      start: "top bottom",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "play pause resume reset",
    },
  });
  gsap.to(".nav__middle", {
    textContent: "een visionair meesterwerk voor de wereld",
    scrollTrigger: {
      trigger: "#section7",
      scrub: 0.2,
      start: "top bottom",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "play pause resume reset",
    },
  });
  gsap.to(".nav__middle", {
    textContent: "een meester in samenwerking en strategie",
    scrollTrigger: {
      trigger: "#section8",
      scrub: 0.2,
      start: "top bottom",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "play pause resume reset",
    },
  });
  gsap.to(".nav__middle", {
    textContent: "een nalatenschap van innovatie en vakmanschap",
    scrollTrigger: {
      trigger: "#section9",
      scrub: 0.2,
      start: "top bottom",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "play pause resume reset",
    },
  });
  gsap.to(".nav__middle", {
    innerHTML: '<img class="nav__logo" src="./src/assets/img/png/logo_small.png" alt="logo">',
    scrollTrigger: {
      trigger: "footer",
      scrub: 0.2,
      start: "top bottom",
      end: "bottom bottom",
      // markers: true,
      toggleActions: "play pause resume reset",
    },
  });
}

const drawHeroimage = () => {
  mm.add("(min-width: 320px)", () => {
    gsap.to(".heroimg__photo2", {
      x: -240,
      duration: 1,
    });
  });
  mm.add("(min-width: 768px)", () => {
    gsap.to(".heroimg__photo2", {
      x: -350,
      duration: 1,
    });
  });
  mm.add("(min-width: 1440px)", () => {
    gsap.to(".heroimg__photo2", {
      x: -800,
      duration: 1,
    });
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
  mm.add("(min-width: 319px)", () => {
    Sortable.create(step, {
      group: 'section3__list',
      animation: 150,
      onEnd: () => {
        feedbackPrintingPress();
      },
    });
  });

  mm.add("(min-width: 1440px)", () => {

  });
}

const religiousUnrest = () => {
  mm.add("(min-width: 320px)", () => {
    gsap.set(".section5__word1", { x: "-100%" });
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

    gsap.set(".section5__word3", { x: "100%" });
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
  });
  mm.add("(min-width: 1440px)", () => {
    gsap.set(".section5__word1", { x: "100%" });
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

    gsap.set(".section5__word3", { x: "100%" });
    gsap.to(".section5__word3", {
      x: 0,
      scrollTrigger: {
        trigger: "#section5",
        start: "top center",
        end: "bottom center",
        // markers: true,
        scrub: true,
        toggleActions: "play pause resume reset",
      },
    });
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
  mm.add("(min-width: 320px)", () => {
    gsap.to(".section8__photo2", {
      y: +200,
      scrollTrigger: {
        trigger: ".section8__photos",
        start: "start bottom",
        end: "center center",
        // markers: true,
        scrub: true,
        toggleActions: "play pause resume reset",
      },
    });
    gsap.to(".section8__photo1", {
      y: -50,
      scrollTrigger: {
        trigger: ".section8__photos",
        start: "start bottom",
        end: "center center",
        // markers: true,
        scrub: true,
        toggleActions: "play pause resume reset",
      },
    });
  });
  mm.add("(min-width: 1440px)", () => {
    gsap.to(".section8__photo2", {
      y: +200,
      scrollTrigger: {
        trigger: ".section8__photos",
        start: "start center",
        end: "center center",
        // markers: true,
        scrub: true,
        toggleActions: "play pause resume reset",
      },
    });
    gsap.to(".section8__photo1", {
      y: -50,
      scrollTrigger: {
        trigger: ".section8__photos",
        start: "start center",
        end: "center center",
        // markers: true,
        scrub: true,
        toggleActions: "play pause resume reset",
      },
    });
  });
}

const swipeGenerations = () => {
  const title = document.querySelector(".section9__title").textContent;
  const beforeEl = document.querySelector(".section9__info");

  if (title === "nieuwe generatie") {
    beforeEl.classList.add('new');
  }
  const swiper = new Swiper(".mySwiper", {});
}

const init = () => {
  drawHamburgerMenu();
  drawSubtitle();
  drawHeroimage();
  printingPress();
  religiousUnrest();
  passerObjects();
  rippingMoney();
  swipeGenerations();
}
init();