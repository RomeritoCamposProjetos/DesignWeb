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

    pre + br {
        clear: both;
    }
---

![w:120 h:120](../../assets/ifrn-vertical.png)
# Design Web
Prof. Romerito Campos

---

# Plano de Aula

**Objetivo**: compreender o uso das propriedades relacionadas aos itens flex.

**Conteúdo**:

- `flex-basis`
- `position: absolute`
- `min-width`
- `align-self`

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
# flex-basis

---

# flex-basis

- `flex-basis: auto` vs `flex-basis: 0%`.
  - Quando se usa flex-basis e `flex-grow: 1`, o comportamento final no uso do **espaço livre**.

- Vejamos um exemplo: [Exemplo 01](http://localhost:8000/exemplo01.html)

- `flex-basis: auto` - Os itens flex crescem considernado o espaço livre na divisão.
- `flex-basis: 0%` - o espaço do container é dividido com base no flex-grow. 

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
# Forma abreviada - `flex`

---

# Forma abreviada - `flex`

- Até aqui vimos as propriedades `flex-basis`, `flex-grow` e `flex-shrink`. É possível agrupá-las em uma unica propriedade: `flex`. 

As definições da classe abaixo `.item` são equivalentes:
```css
.item {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 200px;
}
```

```css
.item {
    flex: 1 0 200px;
}
```

---

# Forma abreviada - `flex`

A lista abaixo ilustra algumas definições padrão para a propriedade flex.

- `flex: initial` é equivalente a `flex: 0 1 auto`.
- `flex: auto` é equivalente a `flex: 1 1 auto`.
- `flex: none` é equivalente a `flex: 0 0 auto`.
- `flex: n` é equivalente a `flex: n 0 0%`.

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

# align-self
---

# align-self

- Permite definir o alinhamento do item em relação ao eixo transversal.
- Sobrescreve a definição de propriedade `align-items`.
- Admite os seguintes valores:
    - `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.



---

# align-self

No [Exemplo 02](http://localhost:8000/exemplo02.html), temos o seguinte código:

<style scoped>
pre { 
    width: 100%
}

</style>

```html
<div class="container">
    <div class="box" style="align-self: flex-start;">
        <p>flex-start</p>
    </div>
    <div class="box">padrão: stretch</div>
    <div class="box" style="align-self: center;">
        <p>center</p>
    </div>
    <div class="box">padrão: stretch</div>
    <div class="box">padrão: stretch</div>
</div>
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

# order

---

# order

- Os itens são desenhados na ordem em que estão definidos no HTML.
  
- A ordem padrão é `order: 0`.
  
- A ordem com valor negativo é possível, colocando o item desenhado antes dos demais.


- Este propriedade é aplicada a itens flex. Ao nível de container pode-ser usar as proriedades que adimitem valor **reverse**.

---
# order

Vejamos um exemplo do uso da propriedade `order` - [Exemplo 03](http://localhost:8000/exemplo03.html)
<br>
<style scoped>
pre {
    width: 100%;
}
</style>

```html
<div class="container">
    <div class="box">Box 1</div>
    <div class="box" style="order: 2">Box 2 - style="order: 2"</div>
    <div class="box" style="order:-2">Box 3 - style="order:-2"</div>
    <div class="box">Box 4</div>
    <div class="box" style="order: -1;">Box 5 - style="order: -1;"</div>
</div>
```

---
# Referências

WEYL, E. Flexbox in CSS. [s.l.] O’Reilly Media, 2017. [Encontre aqui](https://www.amazon.com.br/Flexbox-CSS-English-Estelle-Weyl-ebook/dp/B072JHT5L4)


