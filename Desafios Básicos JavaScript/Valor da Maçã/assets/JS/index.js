/*As maçãs custam R$ 0,30 cada se forem compradas menos do	que	uma	
dúzia, e R$	0,25 se	forem compradas	pelo menos doze. Escreva um	programa
que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

*/

// Código:

function calcular() {
    let txtqtd = document.getElementById('txtqtd')
    let comprou = document.getElementById('comprou')
    let valor = document.getElementById('valor')
    let qtd = Number(txtqtd.value)
    let valorUnidade = 0.30
    let valorAcima12 = 0.25

    if(qtd < 12) {
        let preco = qtd * valorUnidade
        comprou.innerHTML = `<strong>Quantidade: </strong> ${qtd}`
        valor.innerHTML = `<strong>Valor: </strong> ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
    } else {
        let preco = qtd * valorAcima12
        comprou.innerHTML = `<strong>Quantidade: </strong> ${qtd}`
        valor.innerHTML = `<strong>Valor: </strong> ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`
    }
}

