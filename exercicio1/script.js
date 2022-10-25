// EXERCÍCIOS FUNÇÕES
// PARTE 1

function imprimirOlaLucas(){
    const nome = "Olá, Lucas Breia!"
    console.log(nome)
}
imprimirOlaLucas()

//PARTE 2

function tabuadaSeis(valores){
    const tabuadaCompleta = valores
    console.log(tabuadaCompleta)
}
tabuadaSeis("Tabuada de 6:")
tabuadaSeis("6x1 = 6")
tabuadaSeis("6x2 = 12")
tabuadaSeis("6x3 = 18")
tabuadaSeis("6x4 = 24")
tabuadaSeis("6x5 = 30")
tabuadaSeis("6x6 = 36")
tabuadaSeis("6x7 = 42")
tabuadaSeis("6x8 = 48")
tabuadaSeis("6x9 = 54")
tabuadaSeis("6x10 = 60")

//PARTE 3 - EXPRESSÕES DE FUNÇÕES OU ARROW FUNCTION 

//EXPRESSÃO DE FUNÇÃO
const imprimirOlaLucas2 = function(){
    const nome = "Olá, Lucas Breia!";
    console.log(nome);
}
imprimirOlaLucas2();

//ARROW FUNCTION
const tabuadaSeis2 = (valores) => {
    const tabuadaCompleta =  valores;
    console.log(tabuadaCompleta);
}
tabuadaSeis2("Tabuada de 6:");
tabuadaSeis2("6x1 = 6");
tabuadaSeis2("6x2 = 12");
tabuadaSeis2("6x3 = 18");
tabuadaSeis2("6x4 = 24");
tabuadaSeis2("6x5 = 30");
tabuadaSeis2("6x6 = 36");
tabuadaSeis2("6x7 = 42");
tabuadaSeis2("6x8 = 48");
tabuadaSeis2("6x9 = 54");
tabuadaSeis2("6x10 = 60");
