
var inputTamanho = document.querySelector("[name=tamanho]")
var outputTamanho = document.querySelector("[for=tamanho]")

inputTamanho.oninput = mostrarTamanho

function mostrarTamanho() {
  outputTamanho.value = inputTamanho.value
}
