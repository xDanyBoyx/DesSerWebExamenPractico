// Mostrar título
document.write("<h1>Concatenación de Arreglos</h1>");

// Función para capturar strings y formar un arreglo
function capturarArreglo(nombreArreglo) {
    let arreglo = [];
    let entrada;

    while (true) {
        entrada = prompt(`Ingresa un valor para ${nombreArreglo} (o escribe 'fin' para terminar):`);

        if (entrada === null || entrada.toLowerCase() === "fin") {
            break;
        }

        if (entrada.trim() !== "") {
            arreglo.push(entrada.trim());
        } else {
            alert("No se permiten valores vacíos.");
        }
    }

    return arreglo;
}

// Capturar datos para ambos arreglos
let arreglo1 = capturarArreglo("Arreglo 1");
let arreglo2 = capturarArreglo("Arreglo 2");

// Concatenar los arreglos
let arregloFinal = arreglo1.concat(arreglo2);

// Mostrar resultados
document.write("Arreglo 1: " + arreglo1.join(", ") + "<br>");
document.write("Arreglo 2: " + arreglo2.join(", ") + "<br>");
document.write("Arreglo concatenado: " + arregloFinal.join(", "));
