//

/* 
if(condicao) {

} else {}
*/

const idade = 15;

if(idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

Enunciado
Crie um programa que receba a nota de um aluno.
Se a nota for maior ou igual a 7, exiba "Aprovado".
Caso contrário, exiba "Reprovado".

//

/* 
if(condicao) {

}
*/

const idade = 15;

if(idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

const respostaIdade = idade < 18 ? "menor de idade" : "maior de idade";

console.log("resposta de idade: " + respostaIdade);

const nota = 5;

const respostaNota = nota < 6 ? "Você está em recuperação" :
 nota === 6 ? "Você passou na média" : 
 nota === 7 ? "Você passou com uma nota um pouco acima da média" : 
 "Verifique sua nota com o professor";


if(nota < 6) {
    console.log("Você está em recuperação");
} else if(nota === 6) {
    console.log("Você passou na média");
} else if (nota === 7) {
    console.log("Você passou com uma nota um pouco acima da média");
} else {
    console.log("Verifique sua nota com o professor");
}

//condicao ? valor : valor;

const dia = 3;

switch(dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    default:
        console.log("Dia inválido");
}

const cor = "vermelho";

switch(cor) {
    case "azul":
        console.log("A cor é azul");
    case "verde":
        console.log("A cor é verde");
    case "vermelho":
        console.log("A cor é vermelho");
    default:
        console.log("Cor inválida");
}

const fruta = "melão";

switch(fruta) {
    case "banana":
    case "maçã":
    case "uva":
        console.log("tudo é fruta");
        break;
}

const opcao = 10;

switch (opcao) {
  case 1:
    console.log("Executou o 1");
  case 2:
    console.log("Executou o 2");
  case 3:
    console.log("Executou o 3");
}

console.log("Fim do programa");