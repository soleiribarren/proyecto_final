const productos = [
    {id: 1, nombre: "Agenda de viaje", categoria: "Producto", precio: 1000, imgUrl: "./Fotos/drone.jpg"},
    {id: 2, nombre: "Calendario de fotos", categoria: "Producto", precio: 1500, imgUrl: "./Fotos/drone.jpg"},
    {id: 3, nombre: "Community Manager", categoria: "Servicio", precio: 2000, imgUrl: "./Fotos/drone.jpg"},
    {id: 4, nombre: "Drone y Fotografia", categoria: "Servicio", precio: 2500, imgUrl: "./Fotos/drone.jpg"},
    {id: 5, nombre: "Bitacoras de viaje", categoria: "Producto", precio: 3000, imgUrl: "./Fotos/drone.jpg"},
    {id: 6, nombre: "Stickers viajeros", categoria: "Producto", precio: 3500, imgUrl: "./Fotos/drone.jpg"},
    {id: 7, nombre: "Diseño de Pagina WEB", categoria: "Servicio", precio: 20000, imgUrl: "./Fotos/drone.jpg"},
    {id: 8, nombre: "Asistente Virtual", categoria: "Servicio", precio: 2000, imgUrl: "./Fotos/drone.jpg"},
    {id: 9, nombre: "Bolso de Viaje", categoria: "Producto", precio: 1500, imgUrl: "./Fotos/drone.jpg"},
    {id: 10, nombre: "Manta viajera", categoria: "Producto", precio: 1500, imgUrl: "./Fotos/drone.jpg"},
    {id: 11, nombre: "Armado de itinerario", categoria: "Servicio", precio: 2000, imgUrl: "./Fotos/drone.jpg"},
    {id: 12, nombre: "Viajemos en grupo!", categoria: "Servicio", precio: 50000, imgUrl: "./Fotos/drone.jpg"}
];


//Declaro un evento (Opcion 2) para que se carguen las compras en el carrito

let botonComprar = document.getElementById("comprar")
botonComprar.onclick = () => {
  localStorage.clear()
  carrito.innerHTML = ""
}

//Capturo mediante DOM los elementos HTML que quiero modificar 
//En este caso "contenedorProductos" - "carrito" y un array vacio para ir cargando lo que el usuario compre

let contenedorProductos = document.getElementById("contenedorProductos")
let carrito = document.getElementById("carrito")
let arrayCarrito = []


if(localStorage.getItem("carrito")) {
  arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
}

renderizarCarrito()
renderizarProductos(productos)

//Funciones


function renderizarProductos(arrayProductos) {
    contenedorProductos.innerHTML = ""
    for (const producto of arrayProductos) {
        let tarjetaProducto = document.createElement("div");
            tarjetaProducto.className = "producto col-sm-4 col-md-3 p-3 bg-dark text-white"
            tarjetaProducto.innerHTML = `<h3> ${producto.nombre}</h3>
                                    <p>  Categoria: ${producto.categoria}</p>
                                    <br>
                                    <img src=${producto.imgUrl} class="img-fluid">
                                    <p> $ ${producto.precio}</p>
                                    <br>
                                    <button class="botonProducto" id=${producto.id}>Agregar al carrito</button>`

        contenedorProductos.append(tarjetaProducto);

    }

    let botones = document.getElementsByClassName("botonProducto")
    for (const boton of botones) {
        boton.addEventListener("click", agregarAlCarrito)
    }
}

let input = document.getElementById("input")
input.addEventListener("input", fnInput)

function fnInput() {
    console.log(input.value)
    let productosFiltrados = productos.filter(producto => producto.nombre.includes(input.value))
    renderizarProductos(productosFiltrados)
}

function agregarAlCarrito(e) {
    let productoBuscado = productos.find(producto => producto.id == e.target.id)
    let posicionProducto = arrayCarrito.findIndex(producto => producto.id == e.target.id)
  
    if (posicionProducto != -1) {
      arrayCarrito[posicionProducto] = {
        id: arrayCarrito[posicionProducto].id, nombre: arrayCarrito[posicionProducto].nombre, precio: arrayCarrito[posicionProducto].precio, unidades: arrayCarrito[posicionProducto].unidades + 1, subtotal: arrayCarrito[posicionProducto].precio * (arrayCarrito[posicionProducto].unidades + 1)
      }
    } else {
      arrayCarrito.push({
        id: productoBuscado.id, nombre: productoBuscado.nombre, precio: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio
      })
    }
  
    let carritoJSON = JSON.stringify(arrayCarrito)
    localStorage.setItem("carrito", carritoJSON)

    renderizarCarrito()
  }
  

function renderizarCarrito() {
  carrito.innerHTML = ""
  for (const itemCarrito of arrayCarrito) {
    carrito.innerHTML += `<tr>
      <table class="itemCarrito table">
        <td class="align-middle">Tu carrito: ${itemCarrito.nombre}</td>
        <td>Cantidad: ${itemCarrito.unidades}</td>
        <td>Subtotal: ${itemCarrito.subtotal}</td>
        <td class="text-end"><button class="btn bg-light btn-sm" onclick="vaciarCarrito();" title="Vaciar Carrito">Vaciar LocalStorage X</button></td>
        </tr>`
    }
  }

function vaciarCarrito() {
    localStorage.removeItem("carrito");
      
}

