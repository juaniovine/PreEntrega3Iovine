// Defino mis elementos
const head = document.head
const body = document.body

const divs = document.createElement('div')

// HEAD

// meta
// link
// title
const titulo = document.createElement('title') // creo el elemento titulo

titulo.innerText = "Maxiquiosco FC - JS 3ra entrega" //agrego el contenido

head.appendChild(titulo) // agrego el elemento a mi estructura


// BODY


// navbar
const header = document.createElement('header')

// logo
const divLogo = document.createElement('div')
divLogo.innerHTML = `<img src="/img/logo.jpg" alt="Logo Maxiquiosco FC">`
divLogo.style.width = '10%'

header.append(divLogo)

const navBar = document.createElement('navbar')
const uls = document.createElement('ul')
header.className = 'menu'
divs.className = 'nav-menu' // asigno una clase a mi menu

const links = [             // creo los links de mi menu
    {
        page: 'index',
        link: 'Home'
    },
    {
        page: 'products',
        link: 'Productos'
    },
    {
        page: 'cart',
        link: 'Carrito'
    },
    {
        page: 'contact',
        link: 'Contacto'
    }
]

body.prepend(header)
header.append(navBar)
navBar.append(divs)
divs.append(uls)

header.style.background = 'grey'

// searchBar


// Titulo de index
const h1Titulo = document.createElement('h1') //asigno el tag titulo a un H1

h1Titulo.innerHTML = `<strong>Maxiquiosco FC</strong>`; // genero el texto para mi tag h1
h1Titulo.style.color = 'white'
document.body.append(h1Titulo) // Agrego el nodo titulo


// main
const main = document.createElement('main') //creo el main
body.append(main)                           // inserto el main

const sectionMain = document.createElement('section') //creo la section
sectionMain.style.background = '#bfffbf'              // aplico estilos
sectionMain.id = 'promos'                             // agrego un ID "contenedor" PROMOS 
main.append(sectionMain)                              // inserto la section

sectionMain.innerHTML = `<img src="/img/cancha-aerea.jpeg" alt="pasto"> Contenido`


// promociones main




// FOOTER
// incluir Nombre del negocio (y logo de derechos) | redes sociales | año 
const footer = document.createElement('footer')
body.append(footer)

const year = new Date().getFullYear();

footer.className = 'footer'
footer.innerHTML = `
                    Contenido para el footer (derechos res) | redes sociales | ${year}
                   `
footer.style.background = '#80ff80' 