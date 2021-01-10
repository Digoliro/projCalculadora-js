var txtNum1 = document.getElementById('txtNumero1')
var txtNum2 = document.getElementById('txtNumero2')
var selOper = document.getElementById('selOperadores')
var txtRes  = document.getElementById('txtResultado')

function calcular() {
    var n1 = Number(txtNum1.value)
    var n2 = Number(txtNum2.value)
    var operador = selOper.value
    var resultado = eval(`${n1} ${operador} ${n2}`)

    txtRes.value = resultado

}