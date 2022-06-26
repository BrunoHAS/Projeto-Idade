function verificar(){
    var ano = Number(document.getElementById("ano").value)
    const data = new Date()
    const idade = data.getFullYear() - ano
    var p = document.getElementById("texto")
    var img = document.getElementById("img")
    var genero = document.getElementsByClassName("genero")

    for(let i = 0; i < genero.length; i++){
        if(genero[i].checked == true){
            sexo = genero[i].value
        }
    }

    if(sexo == "M"){
        if((idade >= 0) && (idade <= 12)){
            p.innerText = "Você é criança"
            img.setAttribute("src","img/criançaM.jpg")
        }
        else if((idade >= 13) && (idade <= 21)){
            p.innerText = "Você é jovem"
            img.setAttribute("src","img/jovemM.jpg")
        }
        else if((idade >= 22) && (idade <= 59)){
            p.innerText = "Você é adulto"
            img.setAttribute("src","img/adulto.jpg")
        }
        else if((idade >= 60) && (idade <= 100)){
            p.innerText = "Você é idoso"
            img.setAttribute("src","img/criançaF.jpg")
        }
        else{
            p.innerText = "Você é pó amigo..."
            img.setAttribute("src","img/criançaF.jpg")
        }
    }

    if(sexo == "F"){
        if((idade >= 0) && (idade <= 12)){
            p.innerText = "Você é criança"
            img.setAttribute("src","img/criançaF.jpg")
        }
        else if((idade >= 13) && (idade <= 21)){
            p.innerText = "Você é jovem"
            img.setAttribute("src","img/jovemF.jpg")
        }
        else if((idade >= 22) && (idade <= 59)){
            p.innerText = "Você é adulto"
            img.setAttribute("src","img/criançaF.jpg")
        }
        else if((idade >= 60) && (idade <= 100)){
            p.innerText = "Você é idoso"
            img.setAttribute("src","img/criançaF.jpg")
        }
        else{
            p.innerText = "Você é pó amigo..."
            img.setAttribute("src","img/criançaF.jpg")
        }
    }
}
