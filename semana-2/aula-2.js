//Tipos de dados
let nomeAluno = "Julian";
let salario = 2.600;
let brasilGanhou = false;
let valorIndefinido; // Valor undefined
let valorNulo = null; //Valor nulo, diferente do undefined, é um campo não preenchido, é intencional. 
let simbolo = Symbol("id")
/*   let usuario = {
  nome: "Carlos"
};

// Criamos o símbolo
let id = Symbol("id");

// Adicionamos o símbolo como uma propriedade do objeto
usuario[id] = 12345;

console.log(usuario[id]); // Retorna: 12345
console.log(usuario.nome); // Retorna: Carlos

*/


let valorBigInt = 12345974941949745536216549514965n;
/*// Criando um BigInt (repare no 'n' no final)
let numeroGigante = 9007199254740991n;

console.log(numeroGigante + 1n); // 9007199254740992n
console.log(numeroGigante + 2n); // 9007199254740993n (Precisão perfeita!)
*/

let aluno = { //Objetos
    nome: "Julian",
    idade: 32,
    curso: "Sctec",
    ativo: true
}

let alunos = ["Julian", "David", "Fernando", "Gabriela"]; //Array

console.log("nomeAluno: " + typeof nomeAluno);
console.log("salario: " +typeof salario);
console.log("brasilGanhou: " +typeof brasilGanhou);
console.log("nomeAluno: " +typeof nomeAluno);
console.log("valorIndefinido: " +typeof valorIndefinido);
console.log("valorNulo: " +typeof valorNulo);
console.log("simbolo: " +typeof simbolo);
console.log("valorBigInt: " +typeof valorBigInt);
console.log("aluno: " +typeof aluno);
console.log("alunos " +typeof alunos);


//OPERADORES ARITMÉTICOS
let valorA = 10;
let valorB = 5;
let resultado = valorA % valorB;

console.log("resultado: " + resultado);
console.log("valorA + valorB: " + (valorA + valorB));
console.log("valorA - valorB: " + (valorA - valorB));
console.log("valorA * valorB: " + (valorA * valorB));
console.log("valorA / valorB: " + (valorA / valorB));
console.log("valorA % valorB: " + (valorA % valorB));
console.log("valorA ** valorB: " + (valorA ** valorB));

console.log("-----------------------------------------")
//OPERADORES DE ATRIBUIÇÃO
let valorC = 2;
let valorD = 5;
//let resultadoSoma = valor

console.log("Atribuicao: " + valorC);  
console.log("Atribuicao de adicao: " + (valorC += valorD));
console.log("Atribuicao de subtracao: " + (valorC -= valorD));
console.log("Atribuicao de multiplicacao: " + (valorC *= valorD));
console.log("Atribuicao de divisao: " + (valorC /= valorD));
console.log("Atribuicao de resto: " + (valorC %= valorD));
console.log("Atribuicao de exponenciacao: " + (valorC **= valorD));
console.log("-----------------------------------------")
//OPERADORES LOGICOS
let verdadeiro = true;
let falso = false;

console.log("AND &&: " + (verdadeiro && falso));
console.log("OR || : " + (verdadeiro || falso));
console.log("NOT ! : " + (!verdadeiro));
console.log("-----------------------------------------")
//OPERADORES DE COMPARAÇÃO
let valorE = 10;
let valorF = 5;

console.log("valorE == valorF: " + (valorE == valorF));
console.log("valorE != valorF: " + (valorE != valorF));
console.log("valorE === valorF: " + (valorE === valorF));
console.log("valorE !== valorF: " + (valorE !== valorF));
console.log("valorE > valorF: " + (valorE > valorF));
console.log("valorE < valorF: " + (valorE < valorF));
console.log("valorE >= valorF: " + (valorE >= valorF));
console.log("valorE <= valorF: " + (valorE <= valorF));
console.log("-----------------------------------------")
//OPERADORES UNARIOS
//INCREMENTO
let contador = 1;
console.log("contador++: " + (contador++));
console.log("variavel contador: " + contador);

//DECREMENTO
let contadorDescremento = 100;
console.log("contador--: " + (contadorDescremento--));
console.log("variavel contadorDescremento: " + contadorDescremento);
 

//teste commit 


