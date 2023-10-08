
let vitorias = 120;
let derrotas =10;

let result = rankeadas(vitorias,derrotas)


nivel(vitorias,result)


function nivel(victorias,valor){

    if(valor<= 10){
        console.log(`O Herói tem de saldo de ${victorias} está no nível de Ferro`)
    }else if (valor >= 11 && valor <=20){
        console.log (`O Herói tem de saldo de ${victorias} está no nível de Bronze`)
    }else if (valor >= 21 && valor <=50){
        console.log (`O Herói tem de saldo de ${victorias} está no nível de Prata`)
    }else if (valor >= 51 && valor <=80){
        console.log (`O Herói tem de saldo de ${victorias} está no nível de Ouro`)
    }else if (valor >= 81 && valor <=90){
        console.log (`O Herói tem de saldo de ${victorias} está no nível de Diamante`)
    }else if (valor >= 91 && valor <=100){
        console.log (`O Herói tem de saldo de ${victorias} está no nível de Lendário`)
    }else{
        console.log (`O Herói tem de saldo de ${victorias} está no nível de Imortal`)
    }
}


function rankeadas(vitoria,derrota){
    let saldo = vitoria - derrota
    return saldo   
}  



    
