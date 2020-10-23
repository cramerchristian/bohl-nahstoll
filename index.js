const navLinks = document.querySelectorAll('.nav-link');
const open = document.getElementById('open');
const close = document.getElementById('close');
const nav = document.querySelector('.nav');

const intro = document.getElementById('intro');
const product = document.getElementById('product');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

const inputs = document.querySelectorAll('.input_container');

// I N T E R S E C T I O N   O B S E R V E R

const introObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#intro') {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { threshold: 0.1 }
);

const productObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#product') {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { threshold: 0.3 }
);

const aboutObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#about') {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { threshold: [0.25] }
);

const contactObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#contact') {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { threshold: [0.4] }
);

introObs.observe(intro);
productObs.observe(product);
aboutObs.observe(about);
contactObs.observe(contact);

// N A V I G A T I O N

let isNavOpen = false;
let isMobile = false;
const breakpoint = 771;

const setIsMobile = function () {
  isMobile = window.innerWidth < breakpoint ? true : false;
  if (isMobile) {
    open.classList.add('show');
    nav.classList.remove('show');
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

close.addEventListener('click', () => {
  nav.classList.remove('show');
  open.classList.add('show');
  close.classList.remove('show');
});

// F O R M   F I E L D

inputs.forEach((input) => {
  const inputField = input.childNodes[3];
  inputField.addEventListener('focus', () => {
    input.classList.add('active');
  });
  inputField.addEventListener('blur', () => {
    if (inputField.value === '') {
      input.classList.remove('active');
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth < breakpoint && !isMobile) {
    setIsMobile();
  }
  if (window.innerWidth >= breakpoint && isMobile) {
    removeIsMobile();
  }
});

const observeTextarea = function (el, event, handler) {
  el.addEventListener(event, handler);
};

const textAreaInit = () => {
  const textarea = document.getElementById('message');

  function resize() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  function delayedResize() {
    setTimeout(resize, 0);
  }

  observeTextarea(textarea, 'change', resize);
  observeTextarea(textarea, 'cut', delayedResize);
  observeTextarea(textarea, 'paste', delayedResize);
  observeTextarea(textarea, 'drop', delayedResize);
  observeTextarea(textarea, 'keydown', delayedResize);

  resize();
};

textAreaInit();
