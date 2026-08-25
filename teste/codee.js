
function somador() {
    let txtn1 = document.getElementById('txtn1')
    let txtn2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    if (txtn1.value.length == 0 || txtn2.value.length == 0) {
        alert('[ERRO] falta de dados')
    } else {
        let n1 = Number(txtn1.value)
        let n2 = Number(txtn2.value)

        res.innerHTML = `${n1} + ${n2} = ${n1+n2}`

    }

}