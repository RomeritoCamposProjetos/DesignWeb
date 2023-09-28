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

**Valor `0% - Zero basis`**

- Para `flex-basis: auto`, apenas o espaço livre é distribuído entre os itens.
- Para `flex-basis: 0%`, o espaço do item em si é considerado para distribuição do espaço.

[Exemplo 01](http://localhost:8000//exemplo01.html)


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
# flex

---

# flex

Pode-se usar a propriedade `flex` para agrupar de forma mais enxuta as propriedades `flex-basis`, `flex-grow` e `flex-shrink`.
  
- `flex: initial` é equivalente a `flex: 0 1 auto`.
- `flex: auto` é equivalente a `flex: 1 1 auto`.
- `flex: none` é equivalente a `flex: 0 0 auto`.
- `flex: n` é equivalente a `flex: n 0 0%`.

[Exemplo 02](http://localhost:8000/exemplo02.html)

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

<style scoped>
pre {
    width: 100%
}
</style>

- Neste [Exemplo 03](http://localhost:8000/exemplo03.html), temos o seguinte html:

```html
<div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box" style="align-self: center;">Box 3</div>
    <div class="box">Box 4</div>
    <div class="box">Box 5</div>
</div>
```

No exemplo, nota-se que o box 3 fica centralizado no eixo transversal. Sua altura corresponde apenas a altura de seu conteúdo.

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


---

# order
<style scoped>
pre {
    width:100%;
}
</style>

- Neste [Exemplo 03](http://localhost:8000/exemplo03.html), temos o seguinte html:

```html
<div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box" style="order:-1">Box 3</div>
    <div class="box">Box 4</div>
    <div class="box">Box 5</div>
</div>
```
- a `div` com order:-1 será desenhada antes de todas as outras. 

---
# Referência

WEYL, E. Flexbox in CSS. [s.l.] O’Reilly Media, 2017.

