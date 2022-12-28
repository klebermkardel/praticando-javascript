/*As maçãs custam R$ 0,30 cada se forem compradas menos do	que	uma	
dúzia, e R$	0,25 se	forem compradas	pelo menos doze. Escreva um	programa
que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

*/

// Código:

const quantidade  = 20

if(quantidade < 12) {
    let preco = 0.30

    let valorTotal = preco * quantidade

    console.log("Quantidade: " + quantidade)
    console.log("Valor Total: " + valorTotal)
} else {
    preco = 0.25
    valorTotal = preco * quantidade

    console.log("Quantidade: " + quantidade)
    console.log("Valor Total: " + valorTotal)
}



