
console.log("JavaScript se está ejecutando correctamente");

const formulario = document.getElementById("formPedido");

formulario.addEventListener("submit", function(evento) {

    // Evita que la página se recargue
    evento.preventDefault();

    // Obtener los datos escritos por el usuario
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let tipo = document.getElementById("tipo").value;
    let detalles = document.getElementById("detalles").value;

    // Mostrar los datos en la consola
    console.log("El nombre del cliente es: " + nombre);
    console.log("El número de teléfono del cliente es: " + telefono);
    console.log("El correo del cliente es: " + correo);
    console.log("El tipo de pedido del cliente es: " + tipo);
    console.log("La solicitud del cliente es: " + detalles);

    // Obtener el elemento donde se mostrarán los resultados
   let resultado = document.getElementById("resultado");

resultado.innerText =
    "Cliente: " + nombre +
    "\nTeléfono: " + telefono +
    "\nCorreo: " + correo +
    "\nPedido: " + tipo +
    "\nSolicitud: " + detalles;
});
