// code for splash screen
document.addEventListener('DOMContentLoaded', ()=>{
    let splashScreen = document.querySelector('.splash-screen');
    let logo = document.querySelector('.logo');
    let splashText = document.querySelector('#splash-text');
    const languages = ["Hello", "Hola", "안녕하세요", "Bonjour", "こんにちは","नमस्ते"];
  
    logo.classList.add('active');
    splashText.classList.add('active');
  
    let languageIndex = 0;
    let textInterval = setInterval(()=>{
      splashText.innerText = languages[languageIndex];
      languageIndex = (languageIndex + 1) % languages.length;
    }, 299)
  
    setTimeout(()=>{
      clearInterval(textInterval);
      logo.classList.remove('active');
      logo.classList.add('fade');
      splashText.classList.remove('active');
      splashText.classList.add('fade');
      splashScreen.classList.add('swipe-up'); 
      setTimeout(()=>{
        splashScreen.style.opacity = 0;
        setTimeout(()=>{
          splashScreen.style.display = 'none';
        }, 1000)
      }, 1000)
    }, 1909) 


    var main_box = document.querySelector("#main-content");
    var cursor = document.querySelector(".custcursor");
    
    main_box.addEventListener("mousemove", function(points){
      gsap.to(cursor,{
        x:points.x,
        y:points.y,
        duration:1,
        ease: "back.out(1.2)"
      })
    })
    


  });
  
// applying animation to logo

var tl = gsap.timeline()

tl.from(".sakshi_logo",{
  y:-30,
  opacity:0,
  delay:2.7,
  duration:0.7
})

tl.from(".menu li",{
  y:-30,
  opacity:0,
  delay:0.1,
  duration:1,
  stagger:0.3

})


let countingClick = 0;

        function toggleText(){
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


document.addEventListener('DOMContentLoaded', () => {
  const resume = document.querySelector('.resume');

  resume.addEventListener('mousemove', (e) => {
      const rect = resume.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      resume.style.setProperty('--xPos', `${x}px`);
      resume.style.setProperty('--yPos', `${y}px`);
  });
});


const navbar = document.querySelector('.navbar');
  const toggleButton = document.querySelector('.toggle-button');
  const menu = document.querySelector('.menu');

  toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });

  document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && navbar.classList.contains('open')) {
      navbar.classList.remove('open');
    }
  });

const home = document.querySelector(".upper-txt")
home.addEventListener("mouseenter",function(){
  home.addEventListener("mousemove",function(e){
    
    var moving_val = home.getAttribute("data-value"); 
    var x=(e.clientX*moving_val)/50;
    var y=(e.clientY*moving_val)/50;
    gsap.to(home,{
      x:x,
      y:y,
      duration:0.5,
      ease:"power3.out"
    })
    // home.style.transform="translateX(" + x + "px) translateY(" + y + "px)"
})
})

// resting the position
home.addEventListener("mouseleave", function(){
  gsap.to(home,{
    x:0,
    y:0,
    duration:0.5,
    ease:"power3.out"
  })
})

// smooth scrolling effect---------------->
// function init(){
//   gsap.registerPlugin(ScrollTrigger);
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main-content"),
//   smooth: true
// });
// locoScroll.on("scroll", ScrollTrigger.update);
// ScrollTrigger.scrollerProxy("#main-content", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, 
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   pinType: document.querySelector("#main-content").style.transform ? "transform" : "fixed"
// });
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();
// }
// init()

// var tl2 = gsap.timeline({
//   scrollTrigger:{
//       trigger:".left .txtbx-btn",
//       scroller:"#main-content",
//       start:"top -120%",
//       end:"top -130%",
//       scrub:3
//   },
// })

// tl2.to(".about",{
//   backgroundColor:"white"
// })
gsap.to(".about", {
  scrollTrigger: {
    trigger: ".left .txtbx-btn",
    scroller: "#main-content",
    start: "top 40%",
    end: "top 90%",     
    scrub: 2,
    
  },
  backgroundColor: "  rgb(237, 237, 237)",
  ease:"expoScale",
  delay:10
});

gsap.to(".text-3",{
  scrollTrigger:{
    trigger:".lower-txt",
    scroller:"#main-content",
    start:"top 80%",
    end:"top 90%",
    scrub:3
  },
  fontWeight:700,
  backgroundPosition: "200% center", 
  textDecoration: "underline",
  ease:"back.out"
})

































