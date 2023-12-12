// criando classe do herói
class hero{
	constructor(name, age, type){
	  this.name = name
      this.age = age
      this.type = type
  }
  
  // método para definir e mostrar o ataque feito
  atack(){

	let weapon
  
    switch (this.type){
        case "guerreira":
        case "guerreiro":
            weapon = "espada"
            break
        case "maga":
        case "mago":
            weapon = "magia"
            break

       case "monge":
            weapon = "artes marciais"
            break

       case "ninja":
            weapon = "shuriken"
            break
      }
// mensagem de saída pedido-o {tipo} atacou usando {ataque} 
	console.log(`${this.type} atacou usando ${weapon}`)
    
// menagem de saída alternativa
	console.log("Mensagem alternativa: ")
	console.log(`${this.name} atacou usando ${weapon} por ser ${this.type}`)
  }	
}

// criando os heróis
let warrior = new hero("Galak", 20, "guerreira")
let wizard = new hero("Beliack", 19, "maga")
let monk = new hero("Nykx", 20, "monge")
let ninja = new hero("Sasuke", 5, "ninja")

// chamando objetos (heróis) com os métodos atack
warrior.atack()
wizard.atack()
monk.atack()
ninja.atack()
