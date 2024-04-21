module.exports = function geraMatricula(max, min) {
    var matriculaAleatoria = Math.floor(Math.random() * min) + max; // Numeros aleatorios de 7 digitos

    const matriculaGerada = matriculaAleatoria.toString(); // Convertendo matricula para string

    return matriculaGerada;
}