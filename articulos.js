const productos = [
    {id: 1, nombre: "Agenda de viaje", categoria: "Producto", pais: "Argentina", precio: 1000, imgUrl: "https://dondemellevelviento.com/wp-content/uploads/2021/10/Agenda-anillos-dorados-Perseguir-tus-suen%CC%83os.jpg"},
    {id: 2, nombre: "Calendario de fotos", categoria: "Producto", pais: "Argentina", precio: 1500, imgUrl: "https://img.elo7.com.br/product/zoom/33F0E36/foto-polaroid-calendario-fotopolaroidcalendario.jpg"},
    {id: 3, nombre: "Community Manager", categoria: "Servicio", pais: "Internacional", precio: 2000, imgUrl: "https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/a0713b6f-6420-4a1e-9c2e-b7bfeb05d725?rule=detail_640x480"},
    {id: 4, nombre: "Drone y Fotografia", categoria: "Servicio", pais: "Internacional", precio: 2500, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Autumn_Drone_%28cropped%29.jpg"},
    {id: 5, nombre: "Bitacoras de viaje", categoria: "Producto", pais: "Internacional", precio: 3000, imgUrl: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677939.jpg"},
    {id: 6, nombre: "Stickers viajeros", categoria: "Producto", pais: "Argentina", precio: 3500, imgUrl: "https://http2.mlstatic.com/D_NQ_NP_728295-MLA53318658022_012023-W.jpg"},
    {id: 7, nombre: "Diseño de Pagina WEB", categoria: "Servicio", pais: "Internacional", precio: 20000, imgUrl: "https://webcion.com/wp-content/uploads/2021/11/pngwing.com-1.png"},
    {id: 8, nombre: "Asistente Virtual", categoria: "Servicio", pais: "Internacional", precio: 2000, imgUrl: "https://escuelanomadadigital.com/wp-content/uploads/2020/02/como-ser-asistente-virtual.jpg"},
    {id: 9, nombre: "Bolso de Viaje", categoria: "Producto", pais: "Argentina", precio: 1500, imgUrl: "https://scontent.fmdz1-1.fna.fbcdn.net/v/t1.6435-9/47386343_307012239913641_4796561159106854912_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=109&ccb=1-7&_nc_sid=2d5d41&_nc_ohc=6osWF_7NAVcAX8U1p8T&_nc_ht=scontent.fmdz1-1.fna&oh=00_AfBcJMKiVugHVGy4j9qmqZAO4yn1TL7oXIEfGLo-Em-UyQ&oe=64CE3549"},
    {id: 10, nombre: "Manta viajera", categoria: "Producto", pais: "Argentina", precio: 1500, imgUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/878/653/products/20210410_1658081-41d1e9a182dd3a65a316180886424308-240-0.jpg"},
    {id: 11, nombre: "Armado de itinerario", categoria: "Servicio", pais: "Internacional", precio: 2000, imgUrl: "https://img.freepik.com/fotos-premium/fondo-mapa-accesorios-viaje-vacaciones-vista-superior-vertical_771335-11736.jpg?w=740"},
    {id: 12, nombre: "Viajemos en grupo!", categoria: "Servicio", pais: "Argentina", precio: 50000, imgUrl: "https://img.freepik.com/fotos-premium/amigos-multirraciales-sonrientes-toman-selfie-mirando-camara-copia-espacio-imagen-vertical-amistad-concepto-redes-sociales_411082-992.jpg?w=740"}
];

// // Guardo los productos en la LS
// function guardarProductosLS() {
//     localStorage.setItem("productos", JSON.stringify(productos))
//   }
  
//   function cargarProductosLS() {
//     return JSON.parse(localStorage.getItem("productos"));
//   }
  
//   function guardarCarritoLS(carrito) {
//     localStorage.setItem("carrito", JSON.stringify(carrito))
//   }
  
//   function cargarCarritoLS() {
//     return JSON.parse(localStorage.getItem("carrito")) || [];
//   }
  
guardarProductosLS();

