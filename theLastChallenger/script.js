
let txtn = document.getElementById('txtn')


function adicionar() {
    
    var n = Number(txtn.value)
    var res = document.getElementById('flista')
    
    

    if(txtn.length == 0 && n > 100) {
        window.alert('valor invalido.')
        
    }
        else {
            
            res.innerHTML += `<option class="numeros">O numero ${n} foi adicionado</option>`
} 

    
}



function a() {
    //var num = document.getElementById('n1').value
    var valor = document.getElementById('res')
    var cal = document.createElement("p")
    var valores = Number(valor)
    
    cal.textContent = ""
    valor.appendChild(cal)

    
    
    
    
    var calculo = [valores]

    for(var i = 0;i < calculo.length;i++){
        
        
        alert(calculo[i])
      //c.innerHTML += `<p>oi ${calculo[valores]}</p>`
      //c.innerHTML += `<p>a ${calculo}</p>`
}

//calculo += valores
    //var t = document.getElementsById('res')

    //for(let i = 0;i < num.length;i++){
        //num.textContet = `[i]`

    //}
    


}