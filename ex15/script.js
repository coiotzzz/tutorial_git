function tabuada() {
    let txtn = document.getElementById('txtn').value
    let num = Number(txtn)
    let res = document.getElementById('selttab')
    
    if(txtn.length == 0) {
        window.alert('[ERRO] Não é possivel calcular')
        
    } else{
        
        let c = num
        let n = 0
        //enquanto 0 for menor que 10, adicionar a TAG <p> no html multiplicando e somar 1
        while(n <= 10) {
            
            
            res.innerHTML += `<p>${num} x ${n} = ${num*n}</p>`

            n++
        }
        
    }
    
}

