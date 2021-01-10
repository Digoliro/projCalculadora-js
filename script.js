var txtResultado = document.getElementById('resultado')

function adicionarValorResultado(valor) {
    txtResultado.value += valor
}

function calcular() {
    var res = txtResultado.value
    if (res.indexOf('x') != -1) {
        res = res.replace('x', '*')
    }
    res = eval(res)
    txtResultado.value = res
}

function limpar(params) {
    txtResultado.value = ''
}