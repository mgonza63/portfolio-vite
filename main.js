import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

gsap.registerPlugin(ScrollTrigger);

gsap.to(".circleText", {
  rotation: 360,
  duration: 15,
  repeat: -1,
  ease: "none",
});

const cursorOuter = document.querySelector(".cursor--large"),
  cursorInner = document.querySelector(".cursor--small");

function updateCursor(e) {
  gsap.to(cursorOuter, {
    x: e.clientX,
    y: e.clientY,
    ease: "back",
  });
  gsap.set(cursorInner, {
    x: e.clientX,
    y: e.clientY,
  });
}
const isMobile = window.matchMedia("only screen and (max-width: 48em)").matches;
if (!isMobile) {
  window.addEventListener("mousemove", (e) => updateCursor(e));
}

// const containerImage = document.querySelector(".container__image");

// containerImage.addEventListener("mouseover", () => {
//   console.log("mouse over");
//   containerImage.style.cssText = "border:red solid 1px;";
// });
// containerImage.addEventListener("mouseout", () => {
//   containerImage.style.cssText = "border:none;";
// });

// const projectsIcon = document.querySelector(".projects-button--icon");
// const projectsFeature = document.querySelector(".container__feature");

// let iconHover = gsap.to(projectsIcon, {
//   rotation: 360,
//   duration: 5,
// });

// projectsFeature.addEventListener("mouseover", () => {
//   console.log("hovered")
//   iconHover.play()
// });
// projectsFeature.addEventListener("mouseout", () => {
//   iconHover.reverse()
// });
