const display_valor_anterior = document.getElementById('valor-anterior')
const display_valor_actual = document.getElementById('valor-actual')
let valor_anterior = ""
let valor_actual = ""
let tipo_operacion = undefined
let signos = {
    sumar: '+',
    dividir: '/',
    multiplicar: '*',
    restar: '-',
}

display_valor_anterior.innerHTML = valor_anterior
display_valor_actual.innerHTML = valor_actual

const botones_numeros = document.querySelectorAll('.numero')
botones_numeros.forEach(boton => {
    boton.addEventListener('click', () => {
        valor_actual = valor_actual + boton.innerText
        display_valor_actual.innerText = valor_actual
    })
})

function borrar(){
    valor_actual = valor_actual.toString().slice(0,-1)
    display_valor_actual.innerText = valor_actual
}

function borrar_todo(){
    valor_anterior = ""
    valor_actual = ""
    display_valor_anterior.innerText = valor_anterior
    display_valor_actual.innerText = valor_actual
}

const botones_operadores = document.querySelectorAll('.operador')
botones_operadores.forEach(boton => {
    boton.addEventListener('click', () => {
        console.log(boton.value)
        if(boton.value !== ''){
            tipo_operacion = boton.value;
            valor_anterior = valor_actual;
            valor_actual = "";
            display_valor_anterior.innerText = valor_anterior
            display_valor_actual.innerText = valor_actual
        } else {
            console.log(valor_anterior)
            console.log(valor_actual)
            console.log(tipo_operacion)
            let operacion = eval('signos.'+tipo_operacion);
            calcular(operacion);
        }
    })
})

function calcular(operacion){
    valor_anterior = eval(`${parseFloat(valor_anterior)} ${operacion} ${parseFloat(valor_actual)}`);
    valor_actual = "";
    display_valor_anterior.innerText = valor_anterior
    display_valor_actual.innerText = valor_actual
}