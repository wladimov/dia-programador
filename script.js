function esBisiesto(año) {
  return (año % 4 === 0 && año % 100 !== 0) || año % 400 === 0;
}

function esDiaDelProgramador(fechaHoy) {
  const año = fechaHoy.getFullYear();
  const primerDia = new Date(año, 0, 1);
  const diaDelProgramador = new Date(primerDia.setDate(255));
  const mensaje = document.getElementById("mensaje");

  if (fechaHoy.toDateString() === diaDelProgramador.toDateString()) {
    mensaje.textContent = "¡Feliz Día del Programador!";
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "Sigue programando...";
    mensaje.style.color = "red";
  }
}

function verificarFecha() {
  const fechaInput = document.getElementById("fecha").value;
  const fechaHoy = new Date(fechaInput);
  const mensaje = document.getElementById("mensaje");

  if (!isNaN(fechaHoy.getTime())) {
    esDiaDelProgramador(fechaHoy);
  } else {
    mensaje.textContent = "Por favor, introduce una fecha válida.";
    mensaje.style.color = "red";
  }
}

function setFechaActual() {
  const hoy = new Date();
  const año = hoy.getFullYear();
  const mes = ("0" + (hoy.getMonth() + 1)).slice(-2);
  const dia = ("0" + hoy.getDate()).slice(-2);
  document.getElementById("fecha").value = `${año}-${mes}-${dia}`;
}

window.onload = setFechaActual;
