function contar() {
        let txt1 = window.document.getElementById('txtn1')
        let txt2 = window.document.getElementById('txtn2')
        let txt3 = window.document.getElementById('txtn3')
        let res = window.document.getElementById('res')

        if(txt1.value.length == 0 || txt2.value.length == 0 ||txt3.value.length == 0) {
            window.alert('[ERRO] Não é possivel calcular')
            
        } else{
            res.innerHTML = `Contando: `
            let i = Number(txt1.value)
            let f = Number(txt2.value)
            let p = Number(txt3.value)

            
        for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} ${'😵‍💫'}`
        }
        res.innerText += `🤯`
    }
 }

   
