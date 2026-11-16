// a) Cuerpo (evento onload usando nombre de color "aliceblue")
function alCargar() {
    document.body.style.backgroundColor = "aliceblue";
}

// b) Encabezados y párrafos (usando "blue" y "black")
const parrafo = document.getElementById("parrafo");
parrafo.addEventListener("mouseover", function() {
    parrafo.style.color = "blue";
    parrafo.style.fontSize = "20px";
});
parrafo.addEventListener("mouseout", function() {
    parrafo.style.color = "black";
    parrafo.style.fontSize = "16px";
});

// c) Listas (usando "green")
const lista = document.getElementById("miLista");
document.getElementById("btnLista").addEventListener("click", function() {
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = "Nuevo elemento";
    nuevoItem.style.color = "green";
    lista.appendChild(nuevoItem);
});

// d) Hiperenlaces
document.getElementById("miEnlace").addEventListener("click", function(evento) {
    evento.preventDefault();
    alert("Hiciste clic en el enlace");
});

// e) Imágenes
const imagen = document.getElementById("miImagen");
imagen.addEventListener("click", function() {
    imagen.style.width = "150px";
});

// f) Tablas
const tabla = document.getElementById("miTabla");
document.getElementById("btnTabla").addEventListener("click", function() {
    const fila = tabla.insertRow();
    const celda = fila.insertCell(0);
    celda.textContent = "Nueva fila";
    tabla.style.borderWidth = "3px";
});

// g) Formularios
const cajaTexto = document.getElementById("cajaTexto");
const textoMostrado = document.getElementById("textoMostrado");

cajaTexto.addEventListener("keyup", function() {
    textoMostrado.textContent = "Escribiendo: " + cajaTexto.value;
});

document.getElementById("miFormulario").addEventListener("submit", function(evento) {
    evento.preventDefault();
    alert("Texto enviado: " + cajaTexto.value);
});