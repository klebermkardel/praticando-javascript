/*Escreva um programa para ler e imprimir no console o ano de nascimento de uma pessoa e 
escrever uma mensagem que diga se ela pode votar este ano ou não. (não é necessário	considerar
o mês em	que	ela	nasceu).

*/

// Código:

function verificar() {
    var txtano = document.getElementById('txtano')
    var situacao = document.getElementById('situacao')
    var data = new Date()
    var nasc = Number(txtano.value)
    var anoAtual = data.getFullYear()
    var idade = anoAtual - nasc
    
    if (idade < 16) {
        situacao.innerHTML = `Você nasceu em ${nasc}, tem ${idade} anos e ainda não pode votar`
    } else if (idade < 18 || idade >= 65) {
        situacao.innerHTML = `Você nasceu em ${nasc}, tem ${idade} anos e o seu voto é opcional`
    } else {
        situacao.innerHTML = `Você nasceu em ${nasc}, tem ${idade} anos e o seu voto é obrigatório`
    }
}






