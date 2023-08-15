const carritos = []
carritos.push("Galletitas")
carritos.push("Vino")

localStorage.setItem("En carrito",carritos)
const carritoSeleccionado = localStorage.getItem("En carrito").split(' ')
console.log(carritoSeleccionado)

