// function cargarCarritoLS() {
//     return JSON.parse(localStorage.getItem("carrito")) || [];
//   }
  

  
//   //Esta funcion sirve para guardar el producto seleccionado en la LS
//   //No hace falta guardar el array, puede ser solo el OBJETO
//   function caracteristicasArticulos(id) {
//     //En la variable productos guardo TODOS los productos
//     let productos = cargarProductosLS();
//     let masCaracteristicas = productos.find(item => item.id == id);
//     localStorage.setItem("masCaracteristicas", JSON.stringify(masCaracteristicas));
//     //Redireccionar a la pagina pasada por parametro
//     // location.href = "verproducto.html";
//   }
  
//   function renderProducto() {
//     let producto = JSON.parse(localStorage.getItem("masCaracteristicas"));
//     let contenidoProducto = `<div class="col-md-4 offset-md-3">
//     <img src="${producto.imgUrl}" class="img-fluid" alt="${producto.nombre}">
//     </div>

//     <div class="col-md-4">
//         <p class="text-body-tertiary">${producto.categoria}</p>
//         <h3 class="text-danger">${producto.nombre}</h3>
//         <h4 class="text-primary">$${producto.precio}</h4>
//         <p class="my-5"><button class="btn btn-primary" onclick="agregarProducto(${producto.id})";>Agregar al carrito</button></p>
//     </div>`;

//     document.getElementById("contenidoProducto").innerHTML = contenidoProducto;
// }

// renderProducto();

// function guardarProductosLS() {
//     localStorage.setItem("productos", JSON.stringify(productos))
// }
  
// guardarProductosLS();

// function agregarProducto(id) {
//     let carrito = cargarCarritoLS();
//     let producto = buscarProducto();
//     carrito.push(producto);
//     guardarCarritoLS(carrito);  
//   }
  
//   function buscarProducto(id) {
//     let productos = cargarProductosLS();
  
//     return productos.find(p => p.id === id);
// }

// function agregarProducto(id) {
//     let carrito = cargarCarritoLS();
//     let producto = buscarProducto();
//     carrito.push(producto);
//     guardarCarritoLS(carrito);  
// }
  
// function buscarProducto(id) {
//     let productos = cargarProductosLS();
  
//     return productos.find(p => p.id === id);
//   }  

// function vaciarCarrito() {
//     localStorage.removeItem("carrito");   
// }

// function cargarProductosLS() {
//   return JSON.parse(localStorage.getItem("productos"));
// }



function guardarProductosLS() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function buscarProducto(id) {
    const productos = cargarProductosLS();
    
    return productos.find(item => item.id === id);
}

function subtotal(id) {
    let carrito = cargarCarritoLS();

    return carrito.some(item => item.id === id)
}

function agregarProducto(id) {
    const carrito = cargarCarritoLS();

    if (subtotal(id)) {
        let posicion = carrito.findIndex(item => item.id === id);
        carrito[posicion].cantidad += 1;
    } else {
        const producto = buscarProducto(id);
        producto.cantidad = 1;
        carrito.push(producto);
    }

    guardarCarritoLS(carrito);
    renderBotonCarrito();
}

function eliminarProducto(id) { // Como eliminamos por ID, si tenemos dos productos iguales, elimina los dos
    const carrito = cargarCarritoLS();
    let posicion = carrito.findIndex(item => item.id === id)
    
    if (carrito[posicion].cantidad > 1) {
        carrito[posicion].cantidad -= 1;
    } else {
        carrito.splice(posicion, 1);
    }

    guardarCarritoLS(carrito);
    renderBotonCarrito();
    renderProductos();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderBotonCarrito();
    renderProductos();
}

function cantidadTotalProductos() {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += item.cantidad, 0);
}

function sumaTotalProductos() {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += item.cantidad * item.precio, 0);
}

function verProducto(id) {
    const producto = buscarProducto(id);
    localStorage.setItem("producto", JSON.stringify(producto));
    //location.href = "ver-producto.html"; //Redireccionar a la página pasada por parámetro
}

function renderBotonCarrito() {
    let botonCarrito = document.getElementById("botonCarrito");
    let contenido = `<button type="button" class="btn bg-light position-relative">
    <img src="Fotos/bag.svg" alt="CarritoFallido" width="32">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${cantidadTotalProductos()}
    </span>
    </button>`;
    botonCarrito.innerHTML = contenido;    
}

function filtrarProductos() {
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

  
    renderBotonCarrito();

}

function filtrarProductosCheck() {
    let productos = cargarProductosLS(); 
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");
    let check4 = document.getElementById("check4");
    let contenido = "";

    productos = productos.filter(item => (check1.checked && item.categoria == check1.value) || (check2.checked && item.categoria == check2.value));

    if (check3.checked || check4.checked) {
        productos = productos.filter(item => (check3.checked && item.pais == check3.value) || (check4.checked && item.pais == check4.value));
    }

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
        
        document.getElementById("contenido").innerHTML = contenido;
    } else {
        renderizacionProductos();
    }
}