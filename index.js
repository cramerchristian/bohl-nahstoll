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
      quote: "Patrick und Christoph haben sich sehr schnell und präzise ins unsere Abläufe eingearbeitet und mit ihrem Wissen aus dem Flugbetrieb adaptiert.",
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
  ],
  [
    {
      quote: "Our goal of the collaboration  was to define standard processes, as they are used by pilots in everyday life, and to implement them in communication between referees and their video replay assistants",
      cite: "German Football Association",
      span: "Project Video-Assistant"
    },
    {
      quote: "Patrick and Christoph helped us develop a clear and precise, but altogether easy structure for different stressful situations during radio communication between multiple persons.",
      cite: "Christian Dingert",
      span:"Bundesliga referee"
    },
    {
      quote: "Clear and precise communication within a team is elementary in complex and stressful situations.",
      cite: "Robert Schröder",
      span:"Bundesliga referee"
    },
    {
      quote: "No endless theoretical topics and digressions. The added value was almost immediately recognizable and easy to implement.",
      cite: "Dr. Nahit Emeklibas",
      span: "Dentist"
    }
  ],
  [
    {
      quote: "The collaboration was very pleasant and extremely professional. In addition to the theoretical aspects, the practical exercises with our referees led to every one of them being able to take on the defined standardized processes.",
      cite: "German Football Association",
      span: "Project Video-Assistant"
    },
    {
      quote: "Patrick and Christoph familiarized themselves very quickly and precisely with our procedures and used their knowledge of flight operations to adapt them.",
      cite: "Robert Schröder",
      span:"Bundesliga referee"
    },
    {
      quote: "I can’t think of a field that won`t profit from such a coaching",
      cite: "Dr. Nahit Emeklibas",
      span: "Dentist"
    },
    {
      quote: "We now understand how important an open approach towards errors within our team is.",
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
  let box = parseInt(pagination.dataset.box)
  const newQuote = quoteData[box][clicked]

  nextQuote(pagination, clicked, box)
}

// swipe
const quoteContainers = Array.from(document.querySelectorAll(".quote"))
let startTouch, moveTouch, quote

quoteContainers.forEach(quoteContainer => {
  quoteContainer.addEventListener("touchstart", startTouchF)
  quoteContainer.addEventListener("touchmove",moveTouchF)
  quoteContainer.addEventListener("touchend", endTouchF)
})

function startTouchF(e){
  console.log(e.target)
  startTouch = e.touches[0].clientX

  quoteContainers.forEach( item => {
    if(item.contains(e.target)){
      quote = item.firstElementChild.firstElementChild
    }
  })
}

function moveTouchF(e){
  moveTouch = e.touches[0].clientX

  if(startTouch === null){
    return
  }

  quote.style.transform = `translateX(${moveTouch - startTouch}px)`
}

function endTouchF(e){
  quote.style.transform = `translateX(0px)`

  if(Math.abs(moveTouch-startTouch) < 50){
    quote=null
    startTouch=null
    return
  }
  else if((moveTouch + 50) < startTouch){
    newQuote(quote, true)
    quote=null
    startTouch=null
  } else if ((moveTouch - 50) > startTouch){
    newQuote(quote, false)
    quote=null
    startTouch=null
  }
}

function newQuote(quote, isFwd){
  let pagination = quote.parentElement.children[1]
  let box = parseInt(pagination.dataset.box)

  const active = Array.from(pagination.children).filter(page => page.classList.contains("active"))
  const nextNumber = parseInt(active[0].dataset.number) + (isFwd ? 1 : - 1)

  if(nextNumber >= 0){
    nextQuote(pagination, nextNumber, box)
  }
}

function nextQuote(pagination,nextQuestionNumber, quoteContainerNumber){
  const box = quoteContainerNumber

  const newQuote = quoteData[quoteContainerNumber][nextQuestionNumber]

  // rename, sodass englische version funktioniert
  if(quoteContainerNumber === 2){
    quoteContainerNumber = 0
  } else if(quoteContainerNumber === 3){
    quoteContainerNumber = 1
  }

  pagination.querySelectorAll('.quote__page').forEach(page => page.classList.remove('active'))

  pagination.children[nextQuestionNumber].classList.add("active")

  const quoteStore = quotes[box].children[0]
  const quote = quoteStore.children[0]
  const cite = quoteStore.children[1].children[0]
  const span = quoteStore.children[1].children[1]

  quote.innerText = newQuote.quote
  cite.innerText = newQuote.cite
  span.innerText = newQuote.span
}

