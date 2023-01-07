/* Escreva um programa para ler e mostrar 2 valores (considere que não serão 
informados valores iguais) e informe o maior valor deles */

// Código:

function verificar() {
        var txtv1 = document.getElementById('txtv1')
        var txtv2 = document.getElementById('txtv2')
        var res = document.getElementById('res')
        var v1 = Number(txtv1.value)
        var v2 = Number(txtv2.value)
        
        if (v1 > v2) {
            res.innerHTML = `Primeiro valor: ${v1} <br/> Segundo valor: ${v2} <br/> 
            Maior valor: ${v1}`    
        } else {
                res.innerHTML = `Primeiro valor: ${v1} <br/> Segundo valor: ${v2} <br/> 
                Maior valor: ${v2}`
        }

}
