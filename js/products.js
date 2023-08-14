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

// Titulo de index
const h1Titulo = document.createElement('h1') //asigno el tag titulo a un H1

h1Titulo.innerHTML = `<strong>Maxiquiosco FC</strong>`; // genero el texto para mi tag h1
h1Titulo.style.color = 'white'
document.body.append(h1Titulo) // Agrego el nodo titulo


// searchBar

// main
const main = document.createElement('main') //creo el main
body.append(main)                           // inserto el main

// listado de productos

const productos = [
    {id: 1, nombre: "Galletitas Oreo", precio: 520, tipo: "almacen"},
    {id: 2, nombre: "Alfajor Jorgito", precio: 220, tipo: "almacen"},
	{id: 3, nombre: "Queso crema Finlandia", precio: 850, tipo: "almacen"},
	{id: 4, nombre: "Agua Villavicencio", precio: 620, tipo: "bebidas"},
	{id: 5, nombre: "Coca Cola", precio: 750, tipo: "bebidas"},
	{id: 6, nombre: "Vino Trivento Malbec", precio: 1200, tipo: "bebidas alcoholicas"},
	{id: 7, nombre: "Cerveza Heineken", precio: 700, tipo: "bebidas alcoholicas"},
];

let ulProds = document.createElement('ul')

const botonCompra = document.createElement('button')
botonCompra.innerHTML = "Agregar"

productos.forEach((prod) => {
    ulProds.innerHTML += `<img src="" alt="">
                     <h3>${prod.nombre}</h3>
                     <p>Precio: ${prod.precio}</p>
                     <p>Tipo: ${prod.tipo}</p>
                     `

})

main.append(ulProds)




//tengo el srting de mis productos
// const concatProductos = `Id: ${productos.id} es el producto: ${productos.nombre} con un precio de $${productos.precio} por unidad`

// console.log(concatProductos)



// FOOTER

const footer = document.createElement('footer')
body.append(footer)

footer.className = 'footer'
footer.innerHTML = `
                    Contenido para el footer - Links redes sociales - Fecha - Derechos reservados
                   `
footer.style.background = '#80ff80'


