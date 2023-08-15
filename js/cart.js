// Defino mis elementos
const head = document.head
const body = document.body
const header = document.createElement('header')
const divs = document.createElement('div')



// HEAD

// meta
// link
// title
const titulo = document.createElement('title') // creo el elemento titulo

titulo.innerText = "Pedido - Maxiquiosco FC" //agrego el contenido

head.appendChild(titulo) // agrego el elemento a mi estructura

// BODY

// logo
const divLogo = document.createElement('div')
divLogo.innerHTML = `<img src="/img/logo.jpg" alt="Logo Maxiquiosco FC">`
divLogo.style.width = '10%'

header.append(divLogo)

// navbar
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
        page: 'contact',
        link: 'Contacto'
    },
    {
        page: 'cart',
        link: '🛒'
    }
]

body.prepend(header)
header.append(navBar)
navBar.append(divs)
divs.append(uls)



header.style.background = 'grey'

// Titulo de index
const h1Titulo = document.createElement('h1') //asigno el tag titulo a un H1

h1Titulo.innerHTML = `Su pedido`; // genero el texto para mi tag h1
h1Titulo.style.color = 'black'
document.body.append(h1Titulo) // Agrego el nodo titulo



// let carrito = [];

// productos.forEach((prod) => {
//     const divProds = document.createElement('div')    
//     divProds.className ='card'
//     divProds.innerHTML += `
//                      <div>
//                      <h3>${prod.nombre}</h3>
//                      <img src="${prod.imag}" alt="${prod.alt}">
//                      <p>Precio: $${prod.precio}</p>
//                      </div>
//                      `;
//     // creo y agrego el boton para comprar
//     const btnComprar = document.createElement('button')
//     btnComprar.innerText = "Agregar al carrito"
//     divProds.append(btnComprar)
//     btnComprar.className = 'btn-comprar'

//     main.append(divProds); //ejecuto todo el foreach en un <div>

//     btnComprar.onclick = () => {
//         carrito.push({
//             id: prod.id,
//             img: prod.imag,
//             nombre: prod.nombre,
//             precio: prod.precio        
//         }); console.log(carrito)
//     }

// })