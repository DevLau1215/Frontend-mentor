const inputArchivo = document.getElementById("fileInput");
const barraProgreso = document.getElementById("progressBar");
const progreso = document.getElementById("progress");
const circulo = document.getElementById("circle");
const usado = document.getElementById("usado");
const porUsar = document.getElementById("porUsar");


let archivosSubidos = 0;

inputArchivo.addEventListener("change", manejarSubidaArchivo);

function manejarSubidaArchivo(evento) {
    const archivos = evento.target.files;
    if (archivos.length === 1 && archivosSubidos < 10) {
        subirArchivo(archivos[0]);
    } else {
        alert("Por favor sube un archivo a la vez. \nNo se pueden subir más de 10 archivos.");
    }
}

function subirArchivo() {
    archivosSubidos++;
    const porcentajeProgreso = archivosSubidos * 10;
    actualizarBarraProgreso(porcentajeProgreso);
}

/*manipulación del DOM*/
function actualizarBarraProgreso(porcentaje) {
    progreso.style.width = porcentaje + "%";
    circulo.style.left = "calc(" + porcentaje + "% - 12px)";
    
    var porcentajeRestante = 100 - porcentaje;

    usado.textContent =  porcentaje + "GB";
    porUsar.textContent = porcentajeRestante;
}
