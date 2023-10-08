class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if (this.tipo === "Mago") {
            return "magia";
        } else if (this.tipo === "Guerreiro") {
            return "espada";
        } else if (this.tipo === "Monge") {
            return "artes marciais";
        } else {
            return "shuriken";
        }
    }
}

let Guerreiro = new Heroi("Kraven", "26", "Guerreiro");
let Mago = new Heroi("Harry", "27", "Mago");
let Monge = new Heroi("Stranger", "30", "Monge");
let Ninja = new Heroi("Bruce", "35", "Ninja");

console.log(`O ${Guerreiro.tipo} ${Guerreiro.nome} atacou usando ${Guerreiro.atacar()}`);
console.log(`O ${Mago.tipo} ${Mago.nome} atacou usando ${Mago.atacar()}`);
console.log(`O ${Monge.tipo} ${Monge.nome} atacou usando ${Monge.atacar()}`);
console.log(`O ${Ninja.tipo} ${Ninja.nome} atacou usando ${Ninja.atacar()}`);