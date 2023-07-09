function renderProducto() {
    let producto = JSON.parse(localStorage.getItem("producto"));
    let contenido = `<div class="col-md-4 offset-md-3">
    <img src="${producto.imgUrl}" class="img-fluid" alt="${producto.nombre}">
    </div>

    <div class="col-md-4">
        <p class="text-body-tertiary">${producto.categoria}</p>
        <h3 class="text-danger">${producto.nombre}</h3>
        <h4 class="text-primary">$${producto.precio}</h4>
        <p class="my-5"><button class="btn btn-primary" onclick="agregarProducto(${producto.id})";>Agregar al carrito</button></p>
    </div>`;

    document.getElementById("contenido").innerHTML = contenido;
}

renderProducto();
renderBotonCarrito();




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
//   }
  
//   function buscarProducto(id) {
//     let productos = cargarProductosLS();
  
//     return productos.find(p => p.id === id);
//   }