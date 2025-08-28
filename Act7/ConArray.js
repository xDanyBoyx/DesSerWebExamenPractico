let arreglo1 = [];
let arreglo2 = [];

function agregarArray1() {
    const valor = document.getElementById("array1Input").value.trim();
    if (!valor) return;

    if (valor.toLowerCase() === "fin") {
        alert("Ingreso del primer arreglo finalizado.");
        document.getElementById("array1Input").value = "";
        return;
    }

    arreglo1.push(valor);
    document.getElementById("arreglo1").textContent = `[${arreglo1.join(", ")}]`;
    document.getElementById("array1Input").value = "";
    document.getElementById("array1Input").focus();
}

function agregarArray2() {
    const valor = document.getElementById("array2Input").value.trim();
    if (!valor) return;

    if (valor.toLowerCase() === "fin") {
        alert("Ingreso del segundo arreglo finalizado.");
        document.getElementById("array2Input").value = "";
        return;
    }

    arreglo2.push(valor);
    document.getElementById("arreglo2").textContent = `[${arreglo2.join(", ")}]`;
    document.getElementById("array2Input").value = "";
    document.getElementById("array2Input").focus();
}

function concatenarArreglos() {
    const concatenado = arreglo1.concat(arreglo2);
    document.getElementById("resultado").textContent = `[${concatenado.join(", ")}]`;
}
