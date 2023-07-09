// const productos = [
//   {id: 1, nombre: "Agenda de viaje", categoria: "Producto", precio: 1000, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677939.jpg"},
//   {id: 2, nombre: "Calendario de fotos", categoria: "Producto", precio: 1500, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677939.jpg"},
//   {id: 3, nombre: "Community Manager", categoria: "Servicio", precio: 2000, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677939.jpg"},
//   {id: 4, nombre: "Drone y Fotografia", categoria: "Servicio", precio: 2500, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677939.jpg"},
//   {id: 5, nombre: "Bitacoras de viaje", categoria: "Producto", precio: 3000, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677939.jpg"},
//   {id: 6, nombre: "Stickers viajeros", categoria: "Producto", precio: 3500, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677939.jpg"},
//   {id: 7, nombre: "Diseño de Pagina WEB", categoria: "Servicio", precio: 20000, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677939.jpg"},
//   {id: 8, nombre: "Asistente Virtual", categoria: "Servicio", precio: 2000, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677939.jpg"},
//   {id: 9, nombre: "Bolso de Viaje", categoria: "Producto", precio: 1500, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677939.jpg"},
//   {id: 10, nombre: "Manta viajera", categoria: "Producto", precio: 1500, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677939.jpg"},
//   {id: 11, nombre: "Armado de itinerario", categoria: "Servicio", precio: 2000, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677939.jpg"},
//   {id: 12, nombre: "Viajemos en grupo!", categoria: "Servicio", precio: 50000, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677939.jpg"}
// ];

//Declaro un evento (Opcion 2) para que se carguen las compras en el carrito

// let botonComprar = document.getElementById("comprar")
// botonComprar.onclick = () => {
//   localStorage.clear()
//   carrito.innerHTML = ""
// }

// //Capturo mediante DOM los elementos HTML que quiero modificar 
// //En este caso "contenedorProductos" - "carrito" y un array vacio para ir cargando lo que el usuario compre

// let contenedorProductos = document.getElementById("contenedorProductos")
// let carrito = document.getElementById("carrito")
// let arrayCarrito = []


// if(localStorage.getItem("carrito")) {
//   arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
// }

// renderizarCarrito()
// renderizarProductos(productos)

// //Funciones


// function renderizarProductos(arrayProductos) {
//     contenedorProductos.innerHTML = ""
//     for (const producto of arrayProductos) {
//         let tarjetaProducto = document.createElement("div");
//             tarjetaProducto.className = "producto col-sm-6 col-md-3 col-lg-3 col-xxl-3 p-3 bg-info text-white"
//             tarjetaProducto.innerHTML = `<div class="bg-primary"> 
//                                     <h3> ${producto.nombre}</h3>
//                                     <p>  Categoria: ${producto.categoria}</p>
//                                     <br>
//                                     <img src=${producto.imgUrl} class="img-fluid">
//                                     <p> $ ${producto.precio}</p>
//                                     <br>
//                                     <button class="botonProducto" id=${producto.id}>Agregar al carrito</button>
//                                     </div>`

//         contenedorProductos.append(tarjetaProducto);

//     }

//     let botones = document.getElementsByClassName("botonProducto")
//     for (const boton of botones) {
//         boton.addEventListener("click", agregarAlCarrito)
//     }
// }

// let input = document.getElementById("input")
// input.addEventListener("input", fnInput)

// function fnInput() {
//     console.log(input.value)
//     let productosFiltrados = productos.filter(producto => producto.nombre.includes(input.value))
//     renderizarProductos(productosFiltrados)
// }

// function agregarAlCarrito(e) {
//     let productos = cargarProductosLS()
//     let productoBuscado = productos.find(producto => producto.id === id)
//     let posicionProducto = arrayCarrito.findIndex(producto => producto.id == e.target.id)
  
//     if (posicionProducto != -1) {
//       arrayCarrito[posicionProducto] = {
//         id: arrayCarrito[posicionProducto].id, nombre: arrayCarrito[posicionProducto].nombre, precio: arrayCarrito[posicionProducto].precio, unidades: arrayCarrito[posicionProducto].unidades + 1, subtotal: arrayCarrito[posicionProducto].precio * (arrayCarrito[posicionProducto].unidades + 1)
//       }
//     } else {
//       arrayCarrito.push({
//         id: productoBuscado.id, nombre: productoBuscado.nombre, precio: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio
//       })
//     }
  
//     let carritoJSON = JSON.stringify(arrayCarrito)
//     localStorage.setItem("carrito", carritoJSON)

//     renderizarCarrito()
//   }
  

// function renderizarCarrito() {
//   carrito.innerHTML = ""
//   for (const itemCarrito of arrayCarrito) {
//     carrito.innerHTML += `<tr>
//       <table class="itemCarrito table">
//         <td class="align-middle">Tu carrito: ${itemCarrito.nombre}</td>
//         <td>Cantidad: ${itemCarrito.unidades}</td>
//         <td>Subtotal: ${itemCarrito.subtotal}</td>
//         <td class="text-end"><button class="btn bg-light btn-sm" onclick="vaciarCarrito();" title="Vaciar Carrito">Vaciar LocalStorage X</button></td>
//         </tr>`
//     }
//   }



// function guardarCarritoLS(carrito) {
//   localStorage.setItem("carrito", JSON.stringify(carrito))
// }



function renderizacionProductos() {
  let productos = cargarProductosLS();
  let textoBusqueda = document.getElementById("textoBusqueda").value;
  let contenido = "";

  productos = textoBusqueda ? productos.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : productos;

  if (productos.length > 0) {
    productos.forEach(producto => {
      contenido += `<div class="col-md-3 mb-5">
          <a href="verproducto.html" onClick="verProducto(${producto.id})" class="text-decoration-none">
            <div class="card w-100 text-center" style="width: 16rem">
                <img src="${producto.imgUrl}" class="card-img-top" alt="${producto.nombre}">
                <p class="card-text text-secondary">${producto.categoria}</p>
                <p class="card-text text-secondary">Disponible en: ${producto.pais}</p>
                <div class="card-body">
                    <h3>${producto.nombre}</h3>
                    <p class="card-text text-danger">$${producto.precio}</p>
                </div>
            </div>
          </a>
        </div>`
      });
  } else {
      contenido += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos por el término de búsqueda!</div>`;
  }
 
  document.getElementById("contenido").innerHTML = contenido;
};

renderizacionProductos();
renderBotonCarrito();

