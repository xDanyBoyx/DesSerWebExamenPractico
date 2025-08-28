function contarCaracteres() {
    const texto = document.getElementById("texto").value;
    const cantidad = texto.length;
    document.getElementById("resultado").textContent = `${cantidad} caracteres`;
}
