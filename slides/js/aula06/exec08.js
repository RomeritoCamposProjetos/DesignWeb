
let object = {nome: 'pessoa', snome: 'nomepessoa'}

function convert (object) {
    let obj = {}
    for(const key in object) {
        obj[object[key]] = key
    }
    return obj;
}

console.log( convert(object) );
