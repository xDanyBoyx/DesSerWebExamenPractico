function revertirFrase() {
    const frase = document.getElementById("frase").value;
    
    // Separamos la frase en palabras, invertimos el orden y las unimos de nuevo
    const fraseInvertida = frase.split(" ").reverse().join(" ");

    document.getElementById("resultado").textContent = fraseInvertida;
}
