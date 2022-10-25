//PARTE A 

function resultadoSomaValores(valor1, valor2){
    somaValores =  valor1 + valor2
    console.log("O resultado da soma é:", somaValores)
}
resultadoSomaValores(5, 5)

//PARTE B

const resultadoBooleano = function(num1, num2){
    const funcaoBoo = num1 > num2 || num1 === num2
    console.log("O resultado da operação é:", funcaoBoo)
}
resultadoBooleano(5, 10)

//PARTE C

const numPar = (num) =>{
    const par = num % 2 
    const verificaPar = par === 0
    
    return `O número ${num} é par? ${verificaPar}.`

}
console.log(numPar(10))

//PARTE D 

const mensagem = (string) =>{
    const mensagemFinal = string
    
    return `${string}`

}
console.log(mensagem("imprimindo tamanho da mensagem string"))
console.log(mensagem("IMPRIMINDO TAMANHO DA MENSAGEM STRING EM LETRA MAIÚSCULA"))