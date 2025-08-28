let nombres = [];

function agregarNombre() {
    const valor = document.getElementById("nombreInput").value.trim();
    if (!valor) return;

    if (valor.toLowerCase() === "fin") {
        alert("Ingreso de nombres finalizado.");
        document.getElementById("nombreInput").value = "";
        return;
    }

    nombres.push(valor);
    document.getElementById("arregloNombres").textContent = `[${nombres.join(", ")}]`;
    document.getElementById("nombreInput").value = "";
    document.getElementById("nombreInput").focus();
}

function buscarNombre() {
    const nombreBuscar = document.getElementById("buscarInput").value.trim();
    if (!nombreBuscar) {
        alert("Ingrese un nombre para buscar.");
        return;
    }

    const encontrado = nombres.includes(nombreBuscar);

    const resultado = document.getElementById("resultadoBusqueda");
    if (encontrado) {
        resultado.textContent = `✅ El nombre "${nombreBuscar}" está presente en el arreglo.`;
    } else {
        resultado.textContent = `❌ El nombre "${nombreBuscar}" NO se encuentra en el arreglo.`;
    }
}
