/* Dado as quatro notas finais do aluno no ano, calcule a média final e informe sua média e sua situação.

01 - Se média for menor que 5, aluno reprovado. 
02 - Se média for entre 5 e 7, aluno em recuperação.
03 - Se média for maior ou igual que 7, aluno aprovado.

*/

// Código:

function calcular() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var tn3 = document.getElementById('txtn3')
    var tn4 = document.getElementById('txtn4')
    var situacao = document.getElementById('situacao')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var n4 = Number(tn4.value)
    var media = (n1+n2+n3+n4)/4

    if(media < 5) {
        situacao.innerHTML = `Sua média foi de ${media} e infelizmente você foi reprovado`
    } else if (media >= 5 && media < 7) {
        situacao.innerHTML = `Sua média foi de ${media} e você ficou de recuperação`
    } else {
        situacao.innerHTML = `Sua média foi de ${media}! Parabéns, você foi aprovado!`

    }
    
}






