let arreglo = []; // Arreglo global para ir agregando los números

function agregarNumero() {
    const input = document.getElementById("numero").value.trim();

    if (!input) {
        alert("Ingresa un número o 'fin'");
        return;
    }

    if (input.toLowerCase() === "fin") {
        alert("Ingreso de números finalizado. Presiona 'Calcular Suma'.");
        document.getElementById("numero").value = "";
        return;
    }

    const numero = parseFloat(input);

    if (isNaN(numero)) {
        alert("Por favor, ingresa un valor numérico válido.");
        return;
    }

    arreglo.push(numero);
    document.getElementById("arregloActual").textContent = `[${arreglo.join(", ")}]`;
    document.getElementById("numero").value = "";
    document.getElementById("numero").focus();
}

function calcularSuma() {
    if (arreglo.length === 0) {
        alert("No se han agregado números.");
        return;
    }

    const suma = arreglo.reduce((acc, num) => acc + num, 0);
    document.getElementById("resultado").textContent = `La suma de los elementos es: ${suma}`;
}
