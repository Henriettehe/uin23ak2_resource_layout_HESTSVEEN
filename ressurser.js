const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

//Definerer tomme varibler som skal brukes i funksjonene. 
let tabs = ""
let menyLinks = ""

const makeContent = (event) => {
    const articleElement = document.querySelector(".infoTab")
    let articleContainer = ""
    
    //Mapper ut resources, om den targetet id er er lik eller samme som category. Print ut. 
    resources.map(content => {
        if (event.target.id === content.category) {
            let links = ""
            //Går gjennom sources array, og bruker array funksjon for å si at legg til i links listepunkter med disse objekt og nøkkelparene.
            content.sources.map(source => links += `<li><a href="${source.url}">${source.title}</a></li>`)

            //ArtikkelContainer legge til content.category, conent.text og links i egne HTML tagger. 
            articleContainer += `
            <h2>${content.category}</h2>
            <p>${content.text}</p>
            <ul>${links}</ul> 
            `
        }
        
    })
    //Skriver ut til HTML/nettsiden
    articleElement.innerHTML = articleContainer
}

//Legger til button med id category, og en onClick når makeContent funksjonen kjører. Slik at det viser innholdet. 
const menu = () => {
    resources.map((item) => {
        tabs += `<button id="${item.category}" onClick="makeContent(event)">${item.category}</button>`
        item.sources.map((links) => {
            menyLinks += `<a>${links.title}</a>`
        })
    }) 
}

//reset menu 
menu()

//Printe ut til HTML/websiden
document.querySelector("#meny ul").innerHTML = tabs
