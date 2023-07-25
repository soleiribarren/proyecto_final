let productos = [];

fetch("./jason/articulos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        guardarProductosLS(productos);
    })

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

function renderBotonCarrito() {
    let botonCarrito = document.getElementById("botonCarrito");
    let contenido = `<button type="button" class="btn bg-light position-relative">
    <img src="/Fotos/bag.svg" alt="CarritoFallido" width="32">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${cantidadTotalProductos()}
    </span>
    </button>`;
    botonCarrito.innerHTML = contenido;    
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

function eliminarProducto(id) { 
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
    cartelCarrito();
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

//Libreria - Sweet Alert

let cartelCarrito = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
        buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
        title: 'Estas seguro/a?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, borralo',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
            'Borrado!',
            'Tu carrito esta vacio.',
            'success'
        )
        } else if (
        result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
            'Cancelado',
            'Tu carrito esta a salvo :)',
            'error'
        )
        }
    })
}





