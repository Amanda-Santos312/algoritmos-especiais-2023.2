import {print} from "./inputs.js"

export function fatorial(num) {
    if (num === 0) return 1

    let fat = num
    num --

    while (num > 1) {
        fat = fat * num
        num --
    }
    return fat
}

export function fatorial_recursiva(num) {
    if (num === 0 || num === 1) {
        return 1
    } 

    return num * fatorial_recursiva(num - 1)
}

export function print_tabuada(num, tipo) {
    if (tipo === 'SOMA') {
        tabuada_soma(num)
    } else if (tipo === 'SUBTRACAO') {
        tabuada_subtracao(num)
    } else if (tipo === 'MULTIPLICACAO') {
        tabuada_multiplicacao(num)
    } else if (tipo === 'DIVISAO') {
        tabuada_divisao(num
            )
    } else {
        print('Tipo inválido!')
    }
}

function tabuada_soma(num) {
    let parcela = 1
    print('\n----> SOMA <----')
    print('----------------')

    while (parcela <= 10) {
        const soma = num + parcela
        print(`${parcela} + ${num} = ${soma}`)
        parcela++
    }
}

function tabuada_subtracao(num) {
    let minueno = num + 1
    print('\n----> SUBTRACAO <----')
    print('---------------------')

    while (minueno <= (num + 10)) {
        const diferenca = minueno - num
        print(`${minueno} - ${num} = ${diferenca}`)
        minueno++
    }
}

function tabuada_multiplicacao(num) {
    let fator = 1
    print('\n----> MULTIPLICACAO <----')
    print('-------------------------')

    while (fator <= 10) {
        const produto = num * fator
        print(`${num} * ${fator} = ${produto}`)
        fator++
    }
}

function tabuada_divisao(num) {
    let dividendo = num
    print('\n----> DIVISAO <----')
    print('-------------------')

    while (dividendo <= (10 * num)) {
        const quociente = dividendo / num
        print(`${dividendo} / ${num} = ${quociente}`)
        dividendo = dividendo + num
    }
}