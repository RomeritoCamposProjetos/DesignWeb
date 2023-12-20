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
# Objetos
Prof. Romerito Campos

---
## Objetos

**Conteúdo**

- Objetos
- Propriedades
- Prototype
- Arrays Associativos
- Remover propriedades

---

## Objetos Javascript

- Um objeto é um valor composto.
- Pode conter valores primários e outras opções.
- Os valores podem ser acessados por nomes.
- Um objeto é uma coleção não ordenada de propriedades.
- Os sets JavaScript são dinâmicos: propriedades podem ser adicionadas ou removidas.

---

## Objetos Javascript

- Qualquer valor que não seja string, number, Symbol, true, false, null, ou undefined são objetos.
- Os objetos são mutáveis e são manipulados por referência (Exemplo).
- Uma propriedade tem um nome e um valor. Cada propriedade deve ter seu próprio nome.
- Propriedades não herdadas são chamadas de `own property`.

---

## Criação de Objetos

- Há 3 maneiras de criar objetos: literais, `new`, `Object.create`.

- A sintaxe literal permite **`let obj = {x: 10, "y": 10}`**.
- Operador `new`:
    - Cria e inicializa um objeto.
    - Invoca um construtor (não chama um construtor).
    - Exemplo: **`let d = new Date();`**

---

## Criação de Objetos

- Protótipos:
    - Quase todos os objetos JS têm um segundo objeto associado a eles: prototype.
    - Todos os objetos literais têm o mesmo protótipo.
    - É possível se referir a este protótipo como **`Object.prototype`**.
    - O protótipo é um mecanismo pelo qual objetos herdam recursos de outros objetos.


--- 

## Criação de Objetos

- **`Object.create()`**:
    - Podemos usar este método estático para criar objetos que herdam de um protótipo dado

- Exemplos...

---

## Obter Valor de Propriedade

- Pode-se usar a notação **`.`** ou o operador **`[]`**.
- Exemplo: **`book.nome`** ou **`book['nome']`**.
- Acesso condicional a propriedades
  - Tentativa de acessar uma propriedade não definida.
  - Acesso condicional à propriedade, a partir do ES 2020: **`book?.nome?.s_nome`**.

---

## Objetos como Arrays associativos

- Objetos JS são arrays associativos.
- O acesso à propriedade pode ser feito usando o operador **`[]`** e chaves.
- Exemplo.

---

## Herança

- Os objetos JS têm suas próprias propriedades.
- Além disso, podem herdar propriedades quando são definidos por **`Object.create()`**.
- Exemplo

---

## Remover Propriedades

- O operador **`delete`** é utilizado para remover uma propriedade de um objeto.
- Exemplo

---

## Referências

FLANAGAN, D. **JavaScript - The Definitive Guide**. 7. ed. Sebastopol, CA, USA: O’Reilly Media, 2020.