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
      quote: "Durch die Zusammenarbeit erarbeiteten wir einen Standardprozess, wie er unter Piloten im alltäglichen Berufsleben angewendet wird und in der Kommunikation der Video-Assistenten mit den Schiedsrichtern implementiert wurde.",
      cite: "Deutscher Fussball Bund",
      span: "Projekt Video-Assistant"
    },
    {
      quote: "Patrick und Christoph haben uns geholfen, eine klare, bestimmte aber einfache Struktur in unterschiedlichen Stressituationen im Funk mit mehreren Personen zu entwickeln.",
      cite: "Christian Dingert",
      span:"Bundesligaschiedsrichter"
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
    }
  ],
  [
    {
      quote: "The goal of the collaboration was to define standard processes, as they are used by pilots in everyday life, and to implement them in communication between referees and their video replay assistants",
      cite: "German Football Association",
      span: "Project Video-Assistant"
    },
    {
      quote: "Patrick and Christoph helped us develop a clear and precise, but altogether easy structure for different stressful situations during radio communication between multiple persons.",
      cite: "Christian Dingert",
      span:"Bundesliga referee"
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
    }
  ]
]

const rndQuotesDE = {
  top: [    
    {
      quote: "Die klare und präzise Kommunikation in einer komplexen und stressigen Teamsituation ist elementar.",
      cite: "Robert Schröder",
      span:"Bundesligaschiedsrichter"
    },
    {
      quote: "Keine langen theoretischen Beiträge und Ausschweifungen. Der Mehrwert war sofort zu spüren und ohne großen Aufwand umsetzbar.",
      cite: "Dr. Nahit Emeklibas",
      span: "Zahnarzt"
    },
    {
      quote: "Seit der Zusammenarbeit achte ich noch mehr auf die Kommunikation und die dazugehörigen Kommunikationsprozesse.",
      cite: "Florian Heft",
      span:"Leiter Private Banking Kreissparkasse Bersenbrück"
    },
    {
      quote: "Die Arbeit mit BN-Training hat uns die Probleme verdeutlicht, die speziell bei uns im Betrieb zu bewerkstelligen sind.",
      cite: "Dr. Nahit Emeklibas",
      span: "Zahnarzt"
    },
    {
      quote: "Wir arbeiten jetzt zielgerichteter und lassen uns nicht durch Kleinigkeiten vom Kurs abbringen. Ein sehr bereicherndes Erlebnis.",
      cite: "Dr. Sabine Schulze",
      span: "CEO ISBF"
    }
  ],
  bottom: [
    {
      quote: "Ich kann mir keine Branche vorstellen, in der kein Mehrwert durch ein die Arbeit von BN-Training entstehen soll.",
      cite: "Dr. Nahit Emeklibas",
      span: "Zahnarzt"
    },
    {
      quote: "Wir haben jetzt verstanden, wie wichtig der offene Umgang mit Fehlern innerhalb unseres Teams ist.",
      cite: "Dr. Sabine Schulze",
      span: "CEO ISBF"
    },
    {
      quote: "Jeder einzelne im Team konnte davon profitieren, da man sich durch die Anwendung von Standardprozessen und Standardkommunikation noch mehr aufs Wesentliche fokussieren kann.",
      cite: "Christian Dingert",
      span: "Bundesligaschiedsrichter"
    },
    {
      quote: "Die Zusammenarbeit lief sehr professionell und strukturiert ab.",
      cite: "Florian Heft",
      span: "Leiter Private Banking Kreissparkasse Bersenbrück"
    },
    {
      quote: "Ich verstand, dass menschliche Kommunikation in jeder Branche mit denselben Problemen zu kämpfen hat und sah schnell die Parallelen zu meinem Betrieb.",
      cite: "Dr. Nahit Emeklibas",
      span: "Zahnarzt"
    }
  ]
}
const rndQuotesEN = {
  top: [
    {
      quote: "Clear and precise communication within a team is elementary in complex and stressful situations.",
      cite: "Robert Schröder",
      span:"Bundesliga referee"
    },
    {
      quote: "No endless theoretical topics and digressions. The added value was almost immediately recognizable and easy to implement.",
      cite: "Dr. Nahit Emeklibas",
      span: "Dentist"
    },
    {
      quote: "Our work is far more goal orientated and we don`t let the little things throw us off course. A very enriching experience",
      cite: "Dr. Sabine Schulze",
      span: "CEO ISBF"
    },
    {
      quote: "Since our collaboration I have been even more focused on correct communication and its processes.",
      cite: "Florian Heft",
      span: "Head of Private Banking Sparkasse Bersenbrück"
    },
    {
      quote: "Our work with BN-Training clarified the problems we specifically had to work on within our business.",
      cite: "Dr. Nahit Emeklibas",
      span: "Dentist"
    }
  ],
  bottom: [
    {
      quote: "I can’t think of a field that won`t profit from such a coaching",
      cite: "Dr. Nahit Emeklibas",
      span: "Dentist"
    },
    {
      quote: "We now understand how important an open approach towards errors within our team is.",
      cite: "Dr. Sabine Schulze",
      span: "CEO ISBF"
    },
    {
      quote: "Every single member of the team profited. By applying standard processes and using standardized methods of communication, you are able to focus even more on the important things",
      cite: "Christian Dingert",
      span: "Bundesliga Referee"
    },
    {
      quote: "I understood that communication between humans had it´s problems in every field and quickly noticed parallels to my business.",
      cite: "Dr. Nahit Emeklibas",
      span: "Dentist"
    },
    {
      quote: "Our work together was very professional und well structured",
      cite: "Florian Heft",
      span: "Head of Private Banking Sparkasse Bersenbrück"
    }
  ]
}

function sortInRndQuotes(rndQuotes, IndexOfArrayToSortIn){
  for( let i= 0; i < 2; i++){
    const rndNum = Math.floor(Math.random() * rndQuotes.length)
    quoteData[IndexOfArrayToSortIn].push(rndQuotes[rndNum])
    rndQuotes.splice(rndNum,1)
  }
}

sortInRndQuotes(rndQuotesDE.top, 0)
sortInRndQuotes(rndQuotesDE.bottom, 1)
sortInRndQuotes(rndQuotesEN.top, 2)
sortInRndQuotes(rndQuotesEN.bottom, 3)

//pagination triggers
quotes.forEach(quoteContainer => {
  const pagination = quoteContainer.querySelectorAll('.quote__page')
  pagination.forEach(page => page.addEventListener('click', handlePaginationClick))
})

function handlePaginationClick(e) {
  const clicked = e.target.dataset.number;
  const pagination = e.target.parentElement
  let box = parseInt(pagination.dataset.box)
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
  if(e.target.classList.contains("quote__pagination") || e.target.classList.contains("quote__page")){
    return
  }

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

  quote.style.transform = `translateX(${(moveTouch - startTouch)/2}px)`
}

function endTouchF(e){
  if(e.target.classList.contains("quote__pagination") || e.target.classList.contains("quote__page")){
    return
  }

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

  if(nextNumber >= 0 && nextNumber<= 3){
    nextQuote(pagination, nextNumber, box)
  }
}

function nextQuote(pagination,nextQuestionNumber, quoteContainerNumber){
  const newQuote = quoteData[quoteContainerNumber][nextQuestionNumber]

  // rename, sodass englische version funktioniert
  if(quoteContainerNumber === 2){
    quoteContainerNumber = 0
  } else if(quoteContainerNumber === 3){
    quoteContainerNumber = 1
  }

  pagination.querySelectorAll('.quote__page').forEach(page => page.classList.remove('active'))

  pagination.children[nextQuestionNumber].classList.add("active")

  const quoteStore = quotes[quoteContainerNumber].children[0]
  const quote = quoteStore.children[0]
  const cite = quoteStore.children[1].children[0]
  const span = quoteStore.children[1].children[1]

  quoteStore.style.opacity = 0;

  setTimeout(() => {
    quote.innerText = `"${newQuote.quote}"`
    cite.innerText = newQuote.cite
    span.innerText = newQuote.span
    quoteStore.style.opacity = 1;
  },300
  )
}

