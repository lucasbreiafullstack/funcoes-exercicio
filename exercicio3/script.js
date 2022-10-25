// EXERCÍCIO COMPLETO 

const num1 = Number(prompt("Insira o primeiro número:")) //RECEBENDO DO USUÁRIO O PRIMEIRO NÚMERO
const num2 = Number(prompt("Insira o segundo número:")) //RECEBENDO DO USUÁRIO O SEGUNDO NÚMERO 

//FUNÇÃO SOMA
const soma = (primeironumero, segundoNumero) =>{
    const resultado = num1 + num2 //VARIÁVEL RESULTADO, RECEBENDO O RETORNO DA FUNÇÃO

    return `A soma de ${num1} + ${num2} é: ${resultado}`

}
console.log(soma(num1, num2)) //INVOCANDO A FUNÇÃO SOMA, E PASSANDO COMO ARGUMENTO OS DOIS NÚMEROS DO USUÁRIO.

//FUNÇÃO SUBTRAÇÃO
const subtracao = (primeironumero, segundoNumero) =>{ 
    const resultado = num1 - num2 //VARIÁVEL RESULTADO, RECEBENDO O RETORNO DA FUNÇÃO

    return `A subtração de ${num1} - ${num2} é: ${resultado}`

}
console.log(subtracao(num1, num2)) //INVOCANDO A FUNÇÃO SUBTRAÇÃO, E PASSANDO COMO ARGUMENTO OS DOIS NÚMEROS DO USUÁRIO.

//FUNÇÃO MULTIPLICAÇÃO
const mult = (primeironumero, segundoNumero) =>{
    const resultado = num1 * num2 //VARIÁVEL RESULTADO, RECEBENDO O RETORNO DA FUNÇÃO

    return `A multiplicação de ${num1} * ${num2} é: ${resultado}`

}
console.log(mult(num1, num2)) //INVOCANDO A FUNÇÃO MULTIPLICACÃO, E PASSANDO COMO ARGUMENTO OS DOIS NÚMEROS DO USUÁRIO.

//FUNÇÃO DIVISÃO
const divisao = (primeironumero, segundoNumero) =>{
    const resultado = num1 / num2 //VARIÁVEL RESULTADO, RECEBENDO O RETORNO DA FUNÇÃO

    return `A divisão de ${num1} / ${num2} é: ${resultado}`

}
console.log(divisao(num1, num2)) //INVOCANDO A FUNÇÃO DIVISÃO, E PASSANDO COMO ARGUMENTO OS DOIS NÚMEROS DO USUÁRIO.





