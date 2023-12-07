
class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    getNome () {
        return this.nome
    }

    getSobrenome () {
        return this.sobrenome
    }
}

function addPessoas () {


    const nome = document.getElementById('name');
    const snome = document.getElementById('sname');

    if (nome.value === '' || snome.value === '') {
        alert('Preencha os campos');
        return;
    } 

    const pessoa = new Pessoa(nome.value, snome.value);
    const div = document.getElementById('pessoas');
    const p = document.createElement('p');
    p.innerHTML = pessoa.getNome() + '-' + pessoa.getSobrenome();
    div.appendChild(p);

    nome.value = '';
    snome.value = '';

    nome.focus();    

    return;
}

function init () {
    const button = document.getElementById('enviar');
    button.addEventListener('click',addPessoas);
}

//incializa o botão
init();