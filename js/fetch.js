async function obtenerArticulos() {
    try {
        let respuesta = await fetch("/jason/viajes.json");
        let json = await respuesta.json();

        let salida = "";

        json.forEach(item => {
        salida += `<div class="col-md-4 p-3">
            <div class="card w-100">
                <img src="${item.imgAgenda}" class="img-fluid" alt="card">
            </div>
        </div>`
        });

    document.getElementById("fetch").innerHTML = salida;

    } catch (error) {
        document.getElementById("fetch").innerHTML = `<div class="alert alert-danger text-center" role="alert">No se encontraron los productos</div>`
    }
}

obtenerArticulos()


