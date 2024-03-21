AOS.init(); 

// main intro
import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/Z8x8fJKiotyuVcjr/scene.splinecode');


// horizontal scroll
const horizontal = document.querySelector("#horizontal"); 
const sections = gsap.utils.toArray("#horizontal > section");

gsap.to(sections, {
xPercent: -100 * (sections.length -1),
ease: "none",
scrollTrigger: {
    trigger: horizontal,
    start: "top top",
    end: () => "+=" + (horizontal.offsetWidth - innerWidth),
    pin: true,
    scrub: 1,
    // snap: {
    //   snapTo: 1/(sections.length -1),
    //   inertia: false,
    //   duration: {min: 0.1, max: 0.1},
    // },
    invalidateOnRefresh: true,
    anticipatePin: 1
  }
});

//
// window.addEventListener('scroll', function(){
//   console.log(window.scrollY)
//   $('.orange').css({'right':250});
// });

// gsap.to(".orange", {x: 100, duration: 1});
