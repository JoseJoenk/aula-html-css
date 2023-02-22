function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/crianca-homem.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/crianca-mulher.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-mulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-mulher.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`
        res.appendChild(img)
    }
}