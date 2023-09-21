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

**Objetivo**: apresentar as principais propriedades dos itens flex

**Conteúdo**: 
- `flex`
- `flex-grow`
- `flex-shrink`
- `flex-basis`

---

# Resposta atividade

- Utilizando apenas as propriedades de container, acaba-se não aproveitando totalmente a potencialidade do flex.

- Exemplo somente com propriedades de container
[Resposta 01](http://localhost:8000/atividade0.html)

- Exemplo com propriedades de container e de itens flex.
[Resposta 02](https://localhost:8000/atividade1.html)

---

# Propriedades Flex

- A forma abrevidade apilcar propriedades flex é: `flex`.

```css
.item {
    flex: 1 1 200px;
}
```
<br>
As seguintes propriedades foram aplicadas:

  - `flex-shrink: 1;`
  - `flex-grow: 1;`
  - `flex-basis: 200px;`

---

# Propriedades Flex

- `flex-shrink` indica se o item vai encolher para caber dentro de um container
  - o valor escolhido é um **fator de ecolhimento**
  
- `flex-grow` indica se o elemento vai crescer em relação ao eixo principal quando houver espaço
  - o valor escolhido é um **fator de crescimento**

- `flex-basis` indica um tamanho mínimo inicial do elemento.

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

# flex-shrink

---

# flex-shrink

- Calcula a quantidade de espaço negativo que precisa ser distribuído quando há overflow.

- O valor padrão é 1, que indica o **fator de encolhimento**

- Os elementos encolhem considerando o `width` ou `flex-basis`.

- Quando os itens têm larguras (width) diferentes, o cálculo do fator muda.

- Os itens encolhem de modo proporcional ao fator de encolhimento e à largura dos itens (`width`).

--- 

# flex-shrink

- valor padrão vs valores diferentes

```html
<div class="container">
    <div class="box">
        width: 250px;
    </div>
    <div class="box">
        width: 250px;
    </div>        
</div>
```

```html
<div class="container">
    <div class="box" style="flex-shrink: 1;">
        width: 250px;
    </div>
    <div class="box" style="flex-shrink: 2;">
        width: 250px;
    </div>        
</div>
```
<br>

[Exemplo](http://localhost:8000/exemplo01.html)

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
# flex-grow

--- 

# flex-grow

- Esta propriedade permite que um item cresça ao longo do eixo principal quando há espaço disponível.
- O valor padrão é `flex-grow: 0`.
- Apenas valor positivo. Valores maiores significam mais crescimento.
- Os itens podem ter fatores de crescimento diferentes.
- O espaço disponível é distribuído com base nos fatores de crescimento.

---

# flex-grow

- Comparação sem e com flex-grow: [Exemplo](http://localhost:8000/exemplo02.html)

```html
<!-- flex-grow: 0 -->
<div class="container">
  <div class="box">
      width: 250px;
  </div>
  <div class="box">
      width: 250px;
  </div>        
</div>

```

```html
<!-- flex-grow 1 -->
<div class="container">
    <div class="box" style="flex-grow: 1;">
        width: 250px;
    </div>
    <div class="box" style="flex-grow: 1;">
        width: 250px;
    </div>        
</div>
```

---

# flex-grow

- Fatores de crescimento diferentes





