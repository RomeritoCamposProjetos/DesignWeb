
let object = {nome: 'pessoa', snome: 'nomepessoa'}

//opcao 1
function objectToArray(object) {
    let array = []
    for (const key in object) {
        array.push([key, object[key]])
    }
    return array;
}
console.log(objectToArray(object))

//opcao 2 - sem funcao
console.log(Object.entries(object))

