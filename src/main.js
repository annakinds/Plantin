import './reset.css';
import './style.css';
import Sortable from 'sortablejs';

const drawHeroimage = () => {
  gsap.to(".heroimg__photo2", {
    x: -220,
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

const printingPress = () => {
  const step = document.getElementById("section3__list");
  Sortable.create(step, {
    group: 'section3__list',
    animation: 150,
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

const init = () => {
  drawHeroimage();
  printingPress();
  passerObjects();
}
init();