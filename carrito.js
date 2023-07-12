function renderProductos() {
    let productos = cargarCarritoLS();
    let contenido = "";

    if (cantidadTotalProductos() > 0) {
        contenido += `<table class="table">`;
        contenido += `<tr>
        <td colspan="5" class="bg-warning text-center"><b>Mis compras</b></td>  
        <td class="text-center bg-warning"><b>Eliminar</b></td>
        </tr>`;

        productos.forEach(producto => {
            contenido += `<tr">
            <td class="bg-warning"><img src="${producto.imgUrl}" alt="${producto.nombre}" width="48"></td>
            <td class="align-middle bg-primary text-white">* ${producto.nombre}</td>
            <td class="align-middle bg-primary">$${producto.precio}</td>
            <td class="align-middle bg-primary text-center">Cantidad: ${producto.cantidad}</td>
            <td class="align-middle bg-primary text-white"><b>$${producto.cantidad * producto.precio}</b></td>
            <td class="align-middle text-center bg-warning"><img src="Fotos/trash.svg" alt="Eliminar Producto" title="Eliminar Producto" width="24" onclick="eliminarProducto(${producto.id})";></td>
            </tr>`;
        });

        contenido += `<tr>
        <td>&nbsp;</td>
        <td class="bg-warning text-center">Saldo Total</td>
        <td class="bg-warning">&nbsp;</td>
        <td class="bg-warning">&nbsp;</td>
        <td class="bg-warning"><b>$${sumaTotalProductos()}</b></td>    
        <td class="text-end"><img src="Fotos/bag-x.svg"><button id="eliminar" class="btn bg-primary btn-sm text-white" onclick="vaciarCarrito();" title="Vaciar Carrito">Vaciar Carrito</button></td>
        </tr>
        </table>`;

        contenido += `<div class="text-center"><img src="Fotos/bag-heart.svg"><button id="comprar" class="btn bg-warning btn-sm text-primary" onclick="compra();" title="Compra">Comprar</button></td></div>`;
    
    } else {
        contenido += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos en el carrito!</div>`;
    }
    
    document.getElementById("contenido").innerHTML = contenido;
};

renderProductos();
renderBotonCarrito();

let compra = () => {
    Swal.fire({
        title: 'Gracias por confiar en mi',
        text: 'Proximamente habilitaremos las opciones de pago',
        imageUrl: 'https://img.freepik.com/foto-gratis/mujeres-turistas-mano-tienen-feliz-mapa-viaje_1150-7411.jpghttps://img.freepik.com/foto-gratis/mujeres-turistas-mano-tienen-feliz-mapa-viaje_1150-7411.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}