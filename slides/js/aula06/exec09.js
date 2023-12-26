
let object = {cpf: 123123, nome: 'romerito'}

function hasProperty(object, prop) {
    for (let p in object) {
        if (p == prop) {
            return true;
        }
    }
    return false;
}

console.log(hasProperty(object, 'nome'))
console.log(hasProperty(object, 'cpf'))
console.log(hasProperty(object, 'matricula'))