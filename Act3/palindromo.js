function verificarPalindromo() {
    let palabra = document.getElementById("palabra").value;

    // Limpiamos la palabra: eliminamos espacios y pasamos a minúsculas
    const palabraLimpia = palabra.replace(/\s+/g, "").toLowerCase();

    // Invertimos la palabra
    const palabraInvertida = palabraLimpia.split("").reverse().join("");

    // Comparamos
    const esPalindromo = palabraLimpia === palabraInvertida;

    document.getElementById("resultado").textContent = esPalindromo
        ? `"${palabra}" es un palíndromo ✅`
        : `"${palabra}" no es un palíndromo ❌`;
}
