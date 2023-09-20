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

![w:120 h:120](./../ifrn-vertical.png)
# Design Web
Prof. Romerito Campos

---

# Plano de Aula

- Objetivo: compreender as propriedades flex aplicadas ao container flex.

- Conteúdo programático:
  - `align-items` e `align-content` (container)
- introdução ao flex-item.
  - Propriedade `flex`: **item flex**
    - flex, min-width, flex-grow, flex-shrink

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

# Align-items (container)

---

# align-items (container)

- Define como os itens serão acomodados no eixo `cross`.
  
- O fluxo dos itens é em relação ao eixo `cross-start` ou `cross-end`.

- Há 5 valores para esta propriedade:
  - `stretch` (padrão), `flex-start`, `flex-end`, `center`, `baseline`.

---

# align-items (container)

- `flex-start`: [Exemplo01](http://localhost:8000/exemplo01.html)

```css
.flex {
    display: flex;
    height: 120px;
    padding: 5px;
    align-items: flex-start;
    border: 1px solid black;
}
.item {
    border: 1px solid black;
    width: 100px;
}
```
```html
<div class="flex">
  <div class="item">
      box 1
  </div>
  <div class="item">
      box 2
  </div>
  <div class="item">
      box 3
  </div>
</div>
```

---
# align-items 

- `flex-end`: [Exemplo02](http://localhost:8000/exemplo02.html)

```css
.flex {
    display: flex;
    height: 120px;
    padding: 5px;
    align-items: flex-end;
    border: 1px solid black;
}
.item {
    border: 1px solid black;
    width: 100px;
}
```
```html
<div class="flex">
  <div class="item">
      box 1
  </div>
  <div class="item">
      box 2
  </div>
  <div class="item">
      box 3
  </div>
</div>
```

--- 
# align-items 

- `center`: [Exemplo03](http://localhost:8000/exemplo03.html)

```css
.flex {
    display: flex;
    height: 120px;
    padding: 5px;
    align-items: center;
    border: 1px solid black;
}
.item {
    border: 1px solid black;
    width: 100px;
}
```
```html
<div class="flex">
  <div class="item">
      box 1
  </div>
  <div class="item">
      box 2
  </div>
  <div class="item">
      box 3
  </div>
</div>
```

---

# align-items

- `baseline`: [Exemplo04](http://localhost:8000/exemplo04.html)

```css
/* vai parecer com flex-start */
.flex {
    display: flex;
    height: 120px;
    padding: 5px;
    align-items: baseline;
    border: 1px solid black;
}
.item {
    border: 1px solid black;
    width: 100px;
}
```
```html
<div class="flex">
  <div class="item">
      box 1
  </div>
  <div class="item">
      box 2
  </div>
  <div class="item">
      box 3
  </div>
</div>
```
---

# align-items

- `baseline`: [Exemplo05](http://localhost:8000/exemplo05.html)
  
- Neste exemplo, há de fato impacto no uso de baseline

```html
<div class="flex">
  <div class="item" style="font-size: 40px; margin-top: 10px">
      box 1
  </div>
  <div class="item">
      box 2
  </div>
  <div class="item">
      box 3
  </div>
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

# align-content (container)

---

# align-content (container)

- Controla como o espaço extra no eixo `cross` pode ser usado.
- Semelhante a `justify-content`, que atua no eixo principal.
- **Válido para containers multi-linhas.**
  
- Há 6 valores possíveis: `flex-start`, `flex-end`, `center`, `space-around`, `space-between` e `strech`.

---

# align-content

- `flex-start`: [Exemplo06](http://localhost:8000/exemplo06.html)

```css
.flex {
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    height: 120px;
    padding: 5px;
    align-content: flex-start;
    border: 1px solid black;
}
.item {
    border: 1px solid black;
    width: 100px;
}
```

--- 

# align-content

- [Exemplo Geral](http://localhost:8000/exemplo07.html)

- Vejamos como ficam alinhados todos os elementos de acordo com cada valor de propriedade


---

# align-content vs align-itens

- Podem parecer equivalentes, mas produzem efeitos diferentes.
  
- align-content atua no espaço extra entre as linhas (coluna).
  - considera o espaço no eixo `cross`
  
- align-items atua alinhando os elementos dentro de cada linha(coluna).
  - considera o eixo `cross`

[Comparação](http://localhost:8000/exemplo08.html)






