function verificar(){
    var ano = Number(document.getElementById("ano").value)
    var data = new date()
    var idade = data.getFullYear - ano

    if(idade <= 12){
        console.log(idade)
    }
    else if((idade > 13) && (idade <= 21)){
        console.log(idade)
    }
    else if((idade > 22) && (idade <= 59)){
        console.log(idade)
    }
    else if((idade >= 60) && (idade <= 100)){
        console.log(idade)
    }
    else{
        console.log("voce é pó amigo...")
    }
 
}
