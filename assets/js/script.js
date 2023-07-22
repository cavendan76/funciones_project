function pintar(elemento, color= "green") {

    elemento.style.backgroundColor = color;
}

ele1.addEventListener("click", () => pintar(ele1, "yellow"));
