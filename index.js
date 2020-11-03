const navLinks = document.querySelectorAll('.nav-link');
const open = document.getElementById('open');
const close = document.getElementById('close');
const nav = document.querySelector('.nav');

// N A V I G A T I O N

let isNavOpen = false;
let isMobile = false;
const breakpoint = 771;

const setIsMobile = function () {
  isMobile = window.innerWidth < breakpoint ? true : false;
  if (isMobile) {
    open.classList.add('show');
    nav.classList.remove('show');
    navLinks.forEach(link => link.addEventListener('click', () => {if(isMobile){closeNav()}}))
  } else {
    nav.classList.add('show');
  }
};

const removeIsMobile = function () {
  isMobile = window.innerWidth < breakpoint ? true : false;
  if (!isMobile) {
    open.classList.remove('show');
    close.classList.remove('show');
    nav.classList.add('show');
  }
};

setIsMobile();

open.addEventListener('click', () => {
  nav.classList.add('show');
  open.classList.remove('show');
  close.classList.add('show');
});

function closeNav(){
  nav.classList.remove('show');
  open.classList.add('show');
  close.classList.remove('show');
}

close.addEventListener('click', () => {
  closeNav()
});

window.addEventListener('resize', () => {
  if (window.innerWidth < breakpoint && !isMobile) {
    setIsMobile();
  }
  if (window.innerWidth >= breakpoint && isMobile) {
    removeIsMobile();
  }
});
