const menuIconEl = document.querySelector('.menu-icon-container');
const closeIconEl = document.querySelector('.close-icon-container');
const navBgOverLayEl = document.querySelector('.nav-bgoverlay');
const navListWrapperEl = document.querySelector('.nav-list-wrapper');



menuIconEl.addEventListener('click', () => {
    navListWrapperEl.classList.add('open');
    navBgOverLayEl.classList.add('show');
    document.body.style='visibility: visible; height: 100vh; width: 100vw; overflow: hidden';
    
})

closeIconEl.addEventListener('click', () => {
    navListWrapperEl.classList.remove('open');
    navBgOverLayEl.classList.remove('show');
    document.body.style='visibility: visible; height: initial; width: 100%; overflow-x: hidden';
    
})


navBgOverLayEl.addEventListener('click', () => {
    navListWrapperEl.classList.remove('open');
    navBgOverLayEl.classList.remove('show');
    document.body.style='visibility: visible; height: initial; width: 100%; overflow-x: hidden';
    
})


// aos
AOS.init(
    {
      offset: 200,
      delay: 100,
        duration: 400,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorePlacement: 'top-bottom',
       
    }
)
