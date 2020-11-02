const intro = document.getElementById('intro');
const product = document.getElementById('product');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

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
  { threshold: 0.1 }
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
