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
  delay:0.5,
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


















































