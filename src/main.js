import './reset.css';
import './style.css';

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
  const step = document.querySelector(".section3__list-item");

}

const init = () => {
  drawHeroimage();
  printingPress();
}
init();