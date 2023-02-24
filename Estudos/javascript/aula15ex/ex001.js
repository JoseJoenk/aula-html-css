function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var feet = document.getElementById('feet')

    for (num = ini; num <= fim; num =+ feet) {
        res.innerHTML = res.innerHTML + `${num.value} => `
    }

   /* res.innerText = `Começa no ${ini.value}, termina no ${fim.value} e anda a cada ${feet.value}!`*/
}