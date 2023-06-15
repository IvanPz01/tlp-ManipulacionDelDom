function sumar() {
    let primer = parseInt(document.getElementById('valor1').value);
    let segundo = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = primer + segundo;
}
function restar() {
    let primer = parseInt(document.getElementById('valor1').value);
    let segundo = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = primer - segundo;
}
function dividir() {
    let primer = parseInt(document.getElementById('valor1').value);
    let segundo = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = (primer / segundo).toFixed(2);
}
function multiplicar() {
    let primer = parseInt(document.getElementById('valor1').value);
    let segundo = parseInt(document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML = (primer * segundo).toFixed(2);
}