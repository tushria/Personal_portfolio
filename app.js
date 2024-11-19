var scoll=new LocomotiveScroll({
  el:document.querySelector("body"),
  smooth:true,
  lerp:0.9
})

// Splash screen animation when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    let splashScreen = document.querySelector('.splash-screen');
    let logo = document.querySelector('.logo');
    let splashText = document.querySelector('#splash-text');
    const languages = ["Hello", "Hola", "안녕하세요", "Bonjour", "こんにちは","नमस्ते"];

    // Activate splash logo and text
    logo.classList.add('active');
    splashText.classList.add('active');

    let languageIndex = 0;
    // Changing splash text every 300ms in different languages
    let textInterval = setInterval(() => {
      splashText.innerText = languages[languageIndex];
      languageIndex = (languageIndex + 1) % languages.length;
    }, 299)

    // Handle splash screen fade-out after timeout
    setTimeout(() => {
      clearInterval(textInterval); // Stop language cycling
      logo.classList.remove('active');
      logo.classList.add('fade');
      splashText.classList.remove('active');
      splashText.classList.add('fade');
      splashScreen.classList.add('swipe-up'); 

      // Hide splash screen after animation
      setTimeout(() => {
        splashScreen.style.opacity = 0;
        setTimeout(() => {
          splashScreen.style.display = 'none'; // Fully hide splash screen
        }, 1000)
      }, 1000)
    }, 1909);

    // Custom cursor effect on mouse movement over main content
    var main_box = document.querySelector("#main-content");
    var cursor = document.querySelector(".custcursor");

    main_box.addEventListener("mousemove", function(points){
      gsap.to(cursor, {
        x: points.x,
        y: points.y,
        duration: 1,
        ease: "back.out(1.2)" // Smooth cursor effect
      })
    });
});



// Animation for logo and menu elements using GSAP timeline
var tl = gsap.timeline()

// Logo animation: move from top and fade in after delay
tl.from(".sakshi_logo", {
  y: -30,
  opacity: 0,
  delay: 2.7,
  duration: 0.7
});

// Menu item animation: animate from top with stagger effect
tl.from(".menu li", {
  y: -30,
  opacity: 0,
  delay: 0.1,
  duration: 1,
  stagger: 0.3
});



// Toggle text visibility on click for slide-in effect
let countingClick = 0;
function toggleText() {
    const slideInElement = document.querySelector('.slide-in');
    countingClick++;

    if (countingClick % 2 === 1) {
        slideInElement.classList.add('active');
        slideInElement.classList.remove('reverse');
    } else {
        slideInElement.classList.add('reverse');
        slideInElement.classList.remove('active');
    }
}



// Mousemove effect for the 'resume' section
document.addEventListener('DOMContentLoaded', () => {
  const resume = document.querySelector('.resume');

  resume.addEventListener('mousemove', (e) => {
      const rect = resume.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Set custom CSS variables for x and y position
      resume.style.setProperty('--xPos', `${x}px`);
      resume.style.setProperty('--yPos', `${y}px`);
  });
});


// Navbar toggle menu visibility on click
const navbar = document.querySelector('.navbar');
const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');

// Toggle menu open/close on button click
toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

// Close menu if clicked outside the navbar
document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && navbar.classList.contains('open')) {
    navbar.classList.remove('open');
  }
});


// Animation for 'upper-txt' section with mouse movement
const home = document.querySelector(".upper-txt");

home.addEventListener("mouseenter", function () {
  home.addEventListener("mousemove", function (e) {
    var moving_val = home.getAttribute("data-value"); 
    var x = (e.clientX * moving_val) / 50;
    var y = (e.clientY * moving_val) / 50;

    // GSAP animation for mousemove
    gsap.to(home, {
      x: x,
      y: y,
      duration: 0.5,
      ease: "power3.out"
    });
  });
});

// Reset position on mouse leave
home.addEventListener("mouseleave", function () {
  gsap.to(home, {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: "power3.out"
  });
});


// Smooth scrolling effect using LocomotiveScroll (commented out, can be enabled if needed)
// function init(){
//   gsap.registerPlugin(ScrollTrigger);
//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main-content"),
//     smooth: true
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);
//   ScrollTrigger.scrollerProxy("#main-content", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, 
//     getBoundingClientRect() {
//       return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     pinType: document.querySelector("#main-content").style.transform ? "transform" : "fixed"
//   });
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//   ScrollTrigger.refresh();
// }
// init();

// Animation for '.about' section with scroll effect
gsap.to(".about", {
  scrollTrigger: {
    trigger: ".left .txtbx-btn",
    scroller: "#main-content",
    start: "top 40%",
    end: "top 90%",     
    scrub: 2, // Smooth scroll scrubbing
  },
  backgroundColor: "rgb(237, 237, 237)", // Background color change on scroll
  ease: "expoScale",
  delay: 10
});


// document.addEventListener("DOMContentLoaded", function() {
//   const scroll = new LocomotiveScroll({
//       el: document.querySelector('.box1'), 
//       smooth: true,
//       direction: 'horizontal',  
//   });
// });

// Animation for '.text-3' with scroll trigger and text underline effect
gsap.to(".text-3", {
  scrollTrigger: {
    trigger: ".lower-txt",
    scroller: "#main-content",
    start: "top 80%",
    end: "top 90%",
    scrub: 3 // Smooth scroll scrubbing
  },
  fontWeight: 700, // Font weight change
  backgroundPosition: "200% center", 
  textDecoration: "underline", // Text underline effect
  ease: "back.out"
});
