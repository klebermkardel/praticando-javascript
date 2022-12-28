/* Dado as quatro notas finais do aluno no ano, calcule a média final e 
imprima no console as notas e a média final e verifique se o mesmo foi aprovado,
ficou de recuperação ou foi reprovado.

01 - Se média for menor que 5, aluno reprovado. 
02 - Se média for entre 5 e 7, aluno em recuperação.
03 - Se média for maior ou igual que 7, aluno aprovado.

*/

// Código:

const n1 = 5
const n2 = 7
const n3 = 6
const n4 = 8

const media = (n1 + n2 + n3 + n4) / 4

console.log("Nota 1° Bimestre: " + n1)
console.log("Nota 2° Bimestre: " + n2)
console.log("Nota 3° Bimestre: " + n3)
console.log("Nota 4° Bimestre: " + n4)

console.log("Média final: " + media)

if(media < 5) {
    console.log("Infelizmente você foi reprovado");
} else if (media >= 5 && media < 7) {
    console.log("Você ficou de recuperação")
} else {
    console.log("Parabéns, você foi aprovado!")
}




