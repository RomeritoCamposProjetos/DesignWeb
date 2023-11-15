---
marp: true
theme: gaia
footer: Design Web - Prof. Romerito Campos
_class: lead
size: 16:9
backgroundColor: #fff
style: |
    .linha {
        text-decoration: underline;
        color: blue;
    } 
    h2 {
        text-decoration: underline;
    }    
    pre {
        float: left;
        width: 45%;
        margin-right: 5px;
        margin-top: 0px
    }
---

![w:120 h:120](../../../assets/ifrn-vertical.png)
# Design Web
Prof. Romerito Campos

---

##  Plano de Aula

**Objetivo:** 

**Conteúdo**

- Estrutura Léxica
- Tipos/Valores/Variáveis
- Expressões (primária, object e array, function, acesso a propriedades)
- Declarações (Condicionais, loops)

---
<style scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}

h1 {
    text-align:center;
}
</style>

# Javascript
## Tipos, Valores e Variáveis

---

## Visão geral

- O Javascript divide os tipos em duas categorias:
  - tipos primitivos: números, string de texto, boolean
  - tipos objeto
- Os valores especiais `null` e `undefined` são valores primitivos
- Há um tipo chmado `Symbol`
- **Tudo que não for número, string, boolean, symbol, null ou undefined é considerado objeto**
- A linguagem considera arrays como um tipo de objeto

---

## Visão geral

- Javascript aplica coleta de lixo ([Garbage Collector]([https://](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)))) automático.

- Há também o conceito de imutabilidade aplicado aos valores aos tipos de dados: **String são imutáveis**

```javascript
let nome = "teste";
//mostra a letra t
consolo.log(nome[0]);

//não altera a string original
//imutável
nome[0] = 'b';
```

---
<style scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}

h1 {
    text-align:center;
}
</style>

# Javascript
## Números

---
## Números

- Quando um número aparece diratamente no código, ele é chamado de **literal** (aplica-se aos outros tipos).

```javascript
//exemplos de literais
3.14 //float
2345.123123  //float
6.1e10 // 6.1 * 10 elevado a 10
1000
100000
```
---

## Aritmética em JavaScript

- A linguagem fornece operadores básicos para aritmética: `+`, `-`, `%`, `**` e etc.

- Além disso, há suporte para operações mais complexas com funções e constantes definidas como propriedades do objeto `Math`.

- [Aqui]([https://](https://www.w3schools.com/js/js_math.asp)) há um resumo das operações disponíveis

---

## Aritmética em JavaScript

- Em linguagens de progração, os tipos números tem os limites inferior e superior que são capazes de representar.

- Algumas operações podem ultrapassar esses limites gerando **underflow**, **overflow**.

- Além disso, há também o problema da **divisião por zero**

- JavaScript não lança erros para os problemas citados acima. 


---
## Aritmética em JavaScript

- O valor `Infinity` é usado para os casos de underflow, overflow nas operações matemáticas.

```javascript
//acessando o valor infinito
console.log(Infinify)
console.log(-Infinify)
console.log(typeof(Infinify))
console.log(typeof(-Infinify))
```

```javascript
//provando um overflow
//Number é um objeto assim como Math.
console.log(Number.MAX_VALUE * 2)
```
---

## Aritmética em JavaScript
<style>pre{margin-right: 45px}</style>

- Há outro valor importante é o **Not-a-Number** ou `NaN`.

- Quando realizamos uma divisão por zero, o resultado é um "não-é-número".

```javascript
//vai produzir um NaN
console.log(10 / 0) 
```
- Aplique a função `typeof(NaN)` e veja o tipo de dado ao qual `NaN` pertence.

---
<style scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}

h1 {
    text-align:center;
}
</style>

# Javascript
## Dadas e Tempo

---
## Dadas e Tempo

---

## Referências

FLANAGAN, D. **JavaScript - The Definitive Guide**. 7. ed. Sebastopol, CA, USA: O’Reilly Media, 2020.

