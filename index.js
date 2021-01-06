const navLinks = document.querySelectorAll('.nav-link');
const open = document.getElementById('open');
const close = document.getElementById('close');
const nav = document.querySelector('.nav');

// N A V I G A T I O N

let isNavOpen = false;
let isMobile = false;
const breakpoint = 950;

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

/// Quotes

const quotes = Array.from(document.querySelectorAll(".quote_container"))
const quoteData = [
  [
    {
      quote: "Durch die Zusammenarbeit haben wir uns erhofft, Standardprozesse, wie sie unter Piloten im alltäglichen Berufsleben angewendet werden, zu definieren und in der Kommunikation der Video-Assistenten mit den Schiedsrichtern zu implementieren.",
      cite: "Deutscher Fussball Bund",
      span: "Projekt Video-Assistant"
    },
    {
      quote: "Patrick und Christoph haben uns geholfen, eine klare, bestimmte aber einfache Struktur in unterschiedlichen Stressituationen im Funk mit mehreren Personen zu entwickeln.",
      cite: "Christian Dingert",
      span:"Bundesligaschiedsrichter"
    },
    {
      quote: "Die klare und präzise Kommunikation in einer komplexen und stressigen Teamsituation ist elementar.",
      cite: "Robert Schröder",
      span:"Bundesligaschiedsrichter"
    },
    {
      quote: "Keine langen theoretischen Beiträge und Ausschweifungen. Der Mehrwert war sofort zu spüren und ohne großen Aufwand umsetzbar.",
      cite: "Dr. Nahit Emeklibas",
      span: "Zahnarzt"
    }
  ],
  [
    {
      quote: "Die Zusammenarbeit war sehr angenehm und äußerst professionell. Neben der theoretischen Herleitung haben die Praxisübungen mit den Schiedsrichter dazu geführt, dass die definierten Standardprozesse von jedem übernommen werden konnten.",
      cite: "Deutscher Fussball Bund",
      span: "Projekt Video-Assistant"
    },
    {
      quote: "Patrick und Christoph haben sich sehr schnell und präzise und unsere Abläufe eingearbeitet und mit ihrem Wissen aus dem Flugbetrieb adaptiert.",
      cite: "Robert Schröder",
      span:"Bundesligaschiedsrichter"
    },
    {
      quote: "Ich kann mir keine Branche vorstellen, in der kein Mehrwert durch ein die Arbeit von BN-Training entstehen soll.",
      cite: "Dr. Nahit Emeklibas",
      span: "Zahnarzt"
    },
    {
      quote: "Wir haben jetzt verstanden, wie wichtig der offene Umgang mit Fehlern innerhalb unseres Teams ist.",
      cite: "Sabine Schulze",
      span: "CEO ISBF"
    }
  ]
]

quotes.forEach(quoteContainer => {
  const pagination = quoteContainer.querySelectorAll('.quote__page')
  pagination.forEach(page => page.addEventListener('click', handlePaginationClick))
})

function handlePaginationClick(e) {
  const clicked = e.target.dataset.number;
  const pagination = e.target.parentElement
  const box = pagination.dataset.box

  pagination.querySelectorAll('.quote__page').forEach(page => page.classList.remove('active'))
  e.target.classList.add('active')

  const quoteStore = quotes[box].children[0]
  const quote = quoteStore.children[0]
  const cite = quoteStore.children[1].children[0]
  const span = quoteStore.children[1].children[1]

  const newQuote = quoteData[box][clicked]
  quote.innerText = newQuote.quote
  cite.innerText = newQuote.cite
  quote.innerText = newQuote.quote
}

