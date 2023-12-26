
let pessoa = {nome: 'romerito', snome: 'campos'}

let professor = Object.create(pessoa)
professor.matricula = 1212312


console.log("Own: ", Object.getOwnPropertyNames(professor))
console.log("Inherit: ", Object.getOwnPropertyNames(professor.__proto__))
