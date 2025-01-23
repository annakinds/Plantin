import './reset.css';
import './style.css';
import Sortable from 'sortablejs';

const drawHeroimage = () => {
  gsap.to(".heroimg__photo2", {
    x: -270,
    willChange: "transform",
    scrollTrigger: {
      trigger: "body",
      pin: "body",
      start: "top top",
      end: "10% top",
      // markers: true,
      scrub: true,
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
      trigger: ".section8__photo2",
      start: "start bottom",
      end: "bottom center",
      markers: true,
      scrub: true,
    },
  });
}

const init = () => {
  drawHeroimage();
  printingPress();
  passerObjects();
  rippingMoney();
}
init();