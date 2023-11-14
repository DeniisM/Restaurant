//Redirigir a página principal
document.getElementById("logoBama").addEventListener("click", function (event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  window.location.href = "Rest.html"; // Redirecciona a la página "cocina.html"
});

//Redirigir a cocina
document
  .getElementById("cocinaLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "Cocina.html";
  });

//Redirigir a carta
document
  .getElementById("cartaLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "Carta.html";
  });

//Redirigir a salon
document
  .getElementById("salonLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "Salon.html";
  });

//Redirigir a beachclub
document
  .getElementById("beachLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "Beachclub.html";
  });

//Redirigir a contacto
document
  .getElementById("contactoLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "Contacto.html";
  });

//Formulario Reservas

function realizarReserva() {
  const nombre = document.getElementById("nombre").value;
  const numPersonas = document.getElementById("numPersonas").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  if (nombre && numPersonas && fecha && hora) {
    alert(
      "Has realizado la reserva con éxito.\n\nDetalles de la reserva:\nNombre: " +
        nombre +
        "\nNúmero de Personas: " +
        numPersonas +
        "\nFecha: " +
        fecha +
        "\nHora: " +
        hora
    );
  } else {
    alert("Por favor, completa todos los campos antes de hacer la reserva.");
  }
}
