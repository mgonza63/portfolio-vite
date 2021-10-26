import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

gsap.registerPlugin(ScrollTrigger);

gsap.to(".circleText", { rotation: 360, duration: 45, repeat: -1 });

// const showAnim = gsap
//   .from(".header", {
//     yPercent: -160,
//     paused: true,
//     duration: 0.2,
//   })
//   .progress(1);

// ScrollTrigger.create({
//   start: "top top",
//   end: 99999,
//   onUpdate: (self) => {
//     self.direction === -1 ? showAnim.play() : showAnim.reverse();
//   },
// });

const navItem = document.querySelector(".nav-item")

const cursorOuter = document.querySelector(".cursor--large"),
  cursorInner = document.querySelector(".cursor--small");

function updateCursor(e) {
  gsap.to(cursorOuter, {
    x: e.clientX,
    y: e.clientY,
  });
  gsap.set(cursorInner, {
    x: e.clientX,
    y: e.clientY,
  });
}

window.addEventListener("mousemove", (e) => updateCursor(e));

