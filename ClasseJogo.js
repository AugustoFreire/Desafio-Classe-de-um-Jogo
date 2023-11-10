//Códigos Para Informações do Personagem
class jornada {
    constructor(nome, idade, tipo) {
        this.heroi ={
            nome: nome,
            idade: idade,
            tipo: tipo
        }
    }
    tipoEmRelacaoAtaque() {
        if (this.heroi.tipo == "Mago"){
            return "magia"
        } else if(this.heroi.tipo == "Guerreiro"){
            return "espada"
        } else if(this.heroi.tipo == "Ninja"){
            return "shuriken"
        } else if(this.heroi.tipo == "Monge"){
            return "artes marciais"
        } else if(this.heroi.tipo == "Arqueiro"){
            return "arco e flecha"
        }        
    }
}
// Tipos permitidos: "Mago", "Guerreiro", "Ninja", "Monge" e "Arqueiro".
let jogador = new jornada ("Alisson", 23, "Ninja")
console.log(`O herói ${jogador.heroi.nome}, possuindo ${jogador.heroi.idade} anos, do tipo ${jogador.heroi.tipo} atacou usando ${jogador.tipoEmRelacaoAtaque()}.`)