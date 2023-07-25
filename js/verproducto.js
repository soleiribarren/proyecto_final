function renderProducto() {
    let producto = JSON.parse(localStorage.getItem("producto"));
    let contenido = `
    <div class="col-md-4">
    <img src="${producto.imgUrl}" class="img-fluid" alt="${producto.nombre}">
    </div>

    <div class="col-md-4">
        <p class="text-body-tertiary text-center">${producto.categoria}</p>
        <p class="text-body-tertiary text-center">¿Donde se encuentra disponible? ${producto.pais}</p>
        <h3 class="text-primary">${producto.nombre}</h3>
        <h4 class="text-info">$${producto.precio}</h4>
        <p class="m-5"><button class="btn btn-primary p-1" onclick="agregarProducto(${producto.id})";>Agregar al carrito</button></p>
    </div>
    
    <div class="container-fluid text-primary col-md-4 p-2">
    <p>${producto.descripcion}</p>
    </div>`;

    document.getElementById("contenido").innerHTML = contenido;
}

renderProducto();
renderBotonCarrito();
