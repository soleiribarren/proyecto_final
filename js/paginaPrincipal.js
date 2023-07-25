function renderizacionProductos() {
  let productos = cargarProductosLS();
  let textoBusqueda = document.getElementById("textoBusqueda").value;
  let contenido = "";

  productos = textoBusqueda ? productos.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : productos;

  if (productos.length > 0) {
    productos.forEach(producto => {
      contenido += `
      <div class="card group col-md-4 mb-5 border-primary m-2">
          <a href="/verproducto.html" onClick="verProducto(${producto.id})" class="text-decoration-none">
            <div class="card w-100 text-center border-0" style="width: 16rem">
                <img src="${producto.imgUrl}" class="card-img-top" alt="${producto.nombre}">
                <p class="card-text text-secondary">${producto.categoria}</p>
                <p class="card-text text-secondary">Disponible en: ${producto.pais}</p>
                <div class="card-body">
                    <h5>${producto.nombre}</h5>
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

