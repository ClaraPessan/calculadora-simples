const primeiroNumero = document.querySelector('#primeiro-numero')
const segundoNumero = document.querySelector('#segundo-numero')
const resultado = document.querySelector('span')

function adicao() {
    resultado.innerHTML = parseFloat(primeiroNumero.value) + parseFloat(segundoNumero.value)
}

function subtracao() {
    resultado.innerHTML = parseFloat(primeiroNumero.value) - parseFloat(segundoNumero.value)
}

function multiplicacao() {
    resultado.innerHTML = parseFloat(primeiroNumero.value) * parseFloat(segundoNumero.value)
}

function divisao() {
    resultado.innerHTML = parseFloat(primeiroNumero.value) / parseFloat(segundoNumero.value)
}

function limpar() {
    primeiroNumero.value = "";
    segundoNumero.value = "";
    resultado.innerHTML = "";
}
