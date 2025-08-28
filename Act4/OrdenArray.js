function ordenarArreglo() {
    const input = document.getElementById("numeros").value;

    if (!input) {
        alert("Por favor, ingresa algunos números separados por coma.");
        return;
    }

    // Convertimos la cadena en un arreglo de números
    let arreglo = input.split(",").map(num => parseFloat(num.trim()));

    // Validamos que todos los elementos sean números
    if (arreglo.some(isNaN)) {
        alert("Todos los valores deben ser números válidos.");
        return;
    }

    // Ordenamos de menor a mayor
    arreglo.sort((a, b) => a - b);

    // Mostramos el resultado
    document.getElementById("resultado").textContent = `Arreglo ordenado: [${arreglo.join(", ")}]`;
}
