/*Escreva um programa para ler e imprimir no console o ano de nascimento de uma pessoa e 
escrever uma mensagem que diga se ela pode votar este ano ou não. (não é necessário	considerar
o mês em	que	ela	nasceu).

*/

// Código:

const anoAtual = 2022
const anoDeNascimento = 1953
const idade = anoAtual - anoDeNascimento


console.log("Ano de Nascimento: " + anoDeNascimento)
console.log(idade)


if(idade >= 18 && idade < 70) {
    console.log("O seu voto é obrigatório este ano")
} else if (idade >= 16 && idade < 18 || idade >= 70) {
    console.log("O seu voto é opcional este ano")
}
 else {
    console.log("Você ainda não pode votar este ano")
}



