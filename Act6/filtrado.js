let arreglo = [];

function agregarNumero() {
    const input = document.getElementById("numero").value.trim();

    if (!input) {
        alert("Ingresa un número o 'fin'");
        return;
    }

    if (input.toLowerCase() === "fin") {
        alert("Ingreso de números finalizado. Ahora puedes filtrar.");
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

function filtrarArreglo() {
    const valor = parseFloat(document.getElementById("valorFiltro").value);

    if (isNaN(valor)) {
        alert("Por favor ingresa un valor numérico válido para filtrar.");
        return;
    }

    const filtrados = arreglo.filter(num => num > valor);
    document.getElementById("resultado").textContent = `[${filtrados.join(", ")}]`;
}
