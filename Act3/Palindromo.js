// Mostrar título
document.write("<h1>Verificación de Palíndromos</h1>");

// Pedir palabra al usuario
let palabra = prompt("Escribe una palabra:");

// Pasar a minúsculas y quitar espacios para comparar
let limpia = palabra.toLowerCase().replace(/\s+/g, '');

// Invertir la palabra
let invertida = limpia.split("").reverse().join("");

// Verificar si es palíndromo
if (limpia === invertida) {
    document.write("La palabra '" + palabra + "' ES un palíndromo.");
} else {
    document.write("La palabra '" + palabra + "' NO es un palíndromo.");
}
