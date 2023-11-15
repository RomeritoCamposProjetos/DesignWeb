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
<style scoped>pre{margin-right: 45px}</style>

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
## Data e Tempo

---
## Data e Tempo

<style scoped>pre{float: none}</style>

- A classe `Data` representa e manipula os números que representam uma data.


- Datas em JavaScript são objetos.

```javascript
let timestap = Data.now(); //string
let agora = new Date(); //objeto
let ms = now.getTime(); //milesecs
```

- Há uma vasta quantidade de métodos para manipular as informações de um objeto do tipo data.

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
# Texto

---
## Texto

- As **strings** são utilizadas para representar texto em JavaScript.
  
- São imutáveis

- Podem ser acessadas por sintaxe de array e a primeira posição é `0`:
 ```javascript
 let nome = "javascript";
 //mostra o caractere 'a'
 console.log(nome[0]);
 ```
---
## Texto

<style scoped>pre{float:none; margin: -10px 0px 15px}</style>
- há várias formas de escrever **literais strings**
```javascript
""
'testing'
"3.14"
'nome="js"'
"usando contrações como wouldn't"
```

```javascript
console.log('duas\nlinhas');

//string de uma linha
"one\
two\
tree"
```

---
## Texto

<style scoped>pre{float: none}</style>

- Sequências de escape - **backslash character (\\)**
```javascript
//testar no console do browser
console.log(\tjavascript)
console.log(\nteste\n)
console.log(\u03c0)
```

- Os caracteres de escape permitem aplicar teclas como tab, quebra de linhas entre outras. Também é possível reprentar emojis.

---

## Texto
<style>pre{float:none}</style>
- JavaScipt fornece um API rica para manipulação de String

```javascript
//remove todos os espaços
console.log("test    ".trim())
//repete o 'R' 10 vezes
console.log("R".repate(10))
```

- Lembre-se que string são **imutáveis**
  - Algumas operações aparentemente modificam a string, mas na verdade geram uma nova cópia: `"teste".toUpperCase()` 

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
# Boolean

---

## Boolean

- Há apenas dois valores possíveis
- 
- Qualquer valor JavaScript pode ser convertido para boolean

- Converter `undefined`, `null`, `0`, `-0`, `NaN` e `""` para booelan resulta em **false**.
  
- Qualquer outro valor, incluíndo objetos e arrays, são convertidos para false: `a = []; console.log(Boolean(a))`.

---
## Boolean

- Os operadores lógicos e, ou e a negação são definidos como:
  - `&&` - operador **AND**
  - `||` - operador **OR**
  - `!` - operador **NOT**

```javascript
let a=10, b=11;

if ((a===b && b === 20) || !(a+b < 20)) {

}
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
# null e undefined
---

## null e undefined

---

## Referências

FLANAGAN, D. **JavaScript - The Definitive Guide**. 7. ed. Sebastopol, CA, USA: O’Reilly Media, 2020.

