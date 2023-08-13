// Defino mis elementos
const head = document.head
const body = document.body
const navbar = document.getElementById('navbar')



//practica en clase

// como crear el titulo de la url
const titulo = document.createElement('title') // creo el elemento titulo

titulo.innerText = "Maxiquisco FC - JS 3ra entrega" //agrego el contenido

head.appendChild(titulo) // agrego el elemento a mi estructura


// HEAD

// meta
// link
// title


// BODY
// navbar


// const links = ['Home','Productos','Carrito','Contacto']

// for ( const link of links) {
//     const li = document.createElement('li')
//     li.innerHTML = link
//     navbar.appendChild(li)
// }


// Titulo del maxiquiosco
const h1 = document.createElement('h1') //asigno el tag titulo a un H1

h1.innerHTML = `<strong>Maxiquisco FC</strong>`; // genero el texto para mi tag h1
h1.style.color = 'black'
document.body.append(h1) // Agrego el nodo titulo

// let titulo = document.createElement("h1"); //asigno el tag titulo a un H1

// titulo.innerHTML = "<h1>Maxikiosco FC</h1>"; // genero el texto para mi tag titulo

// document.body.append(titulo) // Agrego el nodo titulo

// searchBar



// contenido main page


// promociones main


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

let ul = document.createElement('ul')

productos.forEach((prod) => {
    ul.innerHTML += `<h3>${prod.nombre}</h3>
                      <p>Precio: ${prod.precio}</p>
                      <p>Tipo: ${prod.tipo}</p>`
})

body.appendChild(ul)




//tengo el srting de mis productos
// const concatProductos = `Id: ${productos.id} es el producto: ${productos.nombre} con un precio de $${productos.precio} por unidad`

// console.log(concatProductos)



// FOOTER



















// let padre = document.getElementById("personas")

// let personas = ["Homero","Marge","Bart","Lisa","Maggie"]

// for (const persona of personas){
//     let li = document.createElement("li")
//     li.innerHTML = persona
//     padre.appendChild(li);
// }

// let producto = {id: 1, nombre: "Arroz", precio: 125};

// let contenedor = document.createElement("div");

// contenedor.innerHTML = '<h3>ID: ${producto.id}</h3> <p>Producto: ${producto.name}</p> <b>$ ${producto.precio}</b>';

// document.body.appendChild(contenedor);


// const productos = [
//     {id: 1, nombre: "Galletitas", precio: 520, tipo: "almacen"},
//     {id: 2, nombre: "Alfajores", precio: 220, tipo: "almacen"},
// 	{id: 3, nombre: "Queso crema", precio: 850, tipo: "almacen"},
// 	{id: 4, nombre: "Agua", precio: 620, tipo: "bebidas"},
// 	{id: 5, nombre: "Gaseosa", precio: 750, tipo: "bebidas"},
// 	{id: 6, nombre: "Vino", precio: 1200, tipo: "bebidas alcoholicas"},
// 	{id: 7, nombre: "Cerveza", precio: 700, tipo: "bebidas alcoholicas"},
// ];

// for (const producto of productos){
//     let contenedor = document.createElement("div");
//     contenedor.innerHTML = '<h3>ID: ${producto.id}</h3> <p>Producto: ${producto.nombre}</p> <b>$ ${producto.precio}</b>';

// document.body.appendChild(contenedor); 
// }






