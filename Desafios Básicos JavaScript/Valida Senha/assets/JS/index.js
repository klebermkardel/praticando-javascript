/*Escreva um programa que verifique a validade de uma senha fornecida 
pelo usuário. A	senha válida é o número 1234. Devem	ser impressas as 
seguintes mensagens:	

ACESSO	PERMITIDO	caso	a	senha	seja	válida.	

ACESSO	NEGADO	caso	a	senha	seja	inválida.

*/

// Código:

function validar() {
    var senha = document.getElementById('senha')
    var msg = document.getElementById('msg')

    if(senha.value.length < 8) {
        msg.style.color = '#990000'
        msg.innerHTML = `ACESSO NEGADO! Verifique o tamanho da senha (min: 8 caractéres)`
    } else {
        msg.style.color = '#009900'
        msg.innerHTML = `ACESSO PERMITIDO!`
    }
}




