let nomeHeroi = "Gabriel"
let nivelXp = 1001
let mensagem = "O Herói de nome "+ nomeHeroi +" está no nível de "

if(nivelXp <= 1000){
    console.log(mensagem + "Ferro")
}else if(nivelXp >= 1001 && nivelXp <=2000){
    console.log(mensagem + "Prata")
}else if(nivelXp >= 2001 && nivelXp <=5000){
    console.log(mensagem + "Ouro")
}else if(nivelXp >= 6001 && nivelXp <=7000){
    console.log(mensagem + "Platina")
}else if(nivelXp >= 7001 && nivelXp <=8000){
    console.log(mensagem + "Ascendente")
}else if(nivelXp >= 9001 && nivelXp <=10000){
    console.log(mensagem + "Imortal")
}else{
    console.log(mensagem + "Radiante")
};