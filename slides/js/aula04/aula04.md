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
# Declarações em JavaScript
Prof. Romerito Campos

---

## Intro

- Declarações em JS são finalizadas com `;`.
- Declarações são avaliadas de modo que algo aconteça, enquanto expressões produzem um valor.
- Programs em JavaScript são sequências de declarações.
    - Exemplos: condicionais, loops, jumps. Jumps: `break`, `return` e `throw`.

---

## Declarações de expressões

- Operação de atribuição: `nome = "a" + "b"`.
- Operador de incremento: `cont++`.
- Remover uma propriedade de um objeto: `delete a.se`.
- Expressões que têm efeitos colaterais, como mudar o valor de algo, são chamadas de expressões de estado (`state met`).

---

## Declarações vazias e compostas.

- Uma declaração vazia é simplesmente `;`.
- Declaração em bloco:

---

## Condicionais

- `if`
- `if else`
- `switch`
- `if`
- Tomar decisões
- Exemplo:
    
    ```jsx
    if (a >= 10) {
        b = a;
    }
    if (a === 10) {
        b = a;
    }
    
    ```
    
- `switch`: exemplo com código.

---

## Loops

- Há várias opções de laço `for`.
- `while`
- `do/while`
- `for`
- `for/of`
- `for/in`

---

## `while`

- Primeiro avalia a expressão e se for `true`, executa o corpo do laço.

---

## `do/while`

- Nesta variação, pelo menos uma execução do corpo do laço é executada.

---

## `for`

- Laço clássico.

```jsx
for (inicializar; testar; incrementar) {
    // Corpo
}
```

---

## `for/of:`

- Incluído no ES 6
- Trabalha com objetos "iteráveis"
- E campos de objetos: ARRAYS, Strings, sets, MAPS
- `let a = [1, 2, 3, 4]`
- `for (let i of a) {console.log(i);}`
- Objetos não são por padrão iteráveis
Exemplo de uso de `Object.keys(obj)` e `Object.values(obj)`.
- Exemplo com string

---

## `for/in:`

- Similar ao `for/of`, mas não necessita que o objeto seja iterável

---

## Jumps

- Comuns em muitas linguagens
- Mudam o fluxo do programa com um "pulo"
- Exemplo: `break`, `return`

---

## Declaração Rotulada

- Você pode rotular parte do código a partir de um nome e "saltar" para este bloco
    - Somente é útil por declarações (statement) que têm corpo como loops e condicionais.

---

## break

- Usado para encerrar prematuramente um laço ou switch

---

## continue

- Similar ao comando `break`, mas não interrompe o laço. Apenas passa para a próxima iteração.

---

## return

- Aparece apenas no corpo de funções

Outros jumps são `yield`, `throw` e `try/catch`

---

## Referências