cambiaColor = (evento, color = "black") => {
  evento.target.style.backgroundColor = color;
};

a.addEventListener("click", cambiaColor);
b.addEventListener("click", cambiaColor);
c.addEventListener("click", cambiaColor);
d.addEventListener("click", cambiaColor);

const divKey = document.getElementById("key");
const divKey1 = document.getElementById("key1");
const mensaje = document.getElementById("texto");

document.addEventListener("keydown", esLaletra);

function esLaletra(evento) {
  let letras = "asdASDqweQWE";

  // Obtiene la tecla pulsada (codigo ASCII)
  let codigoCaracter = evento.keyCode; // || evento.charCode;
  // Obtiene la tecla pulsada
  let caracter = String.fromCharCode(codigoCaracter);
  let color = "";

  // Se Comprueba si la variable "caracter" es una letra permitida
  if (letras.indexOf(caracter) != -1) {
    divKey1.style.backgroundColor = "#F0F8FF";
    divKey.style.backgroundColor = "#F0F8FF";
    switch (caracter) {
      case "A":
        divKey.style.backgroundColor = "#EC407A";
        color = "ROSADO";
        break;
      case "S":
        divKey.style.backgroundColor = "#FF6F00";
        color = "NARANJO";
        break;
      case "D":
        divKey.style.backgroundColor = "#B3E5FC";
        color = "CELESTE";
        break;
      case "Q":
        divKey1.style.backgroundColor = "#FFEE58";
        color = "AMARILLO";
        break;
      case "W":
        divKey1.style.backgroundColor = "#1A237E";
        color = "AZUL";
        break;
      case "E":
        divKey1.style.backgroundColor = "#873600";
        color = "CAFE";
        break;
    }
    mensaje.innerHTML =
      "Se asigno el color " + color + " con la letra " + caracter;
  } else {
    divKey1.style.backgroundColor = "#F0F8FF";
    divKey.style.backgroundColor = "#F0F8FF";
    mensaje.innerHTML =
      "Letra o Número " + caracter + " no tiene color asignado";
  }
}
