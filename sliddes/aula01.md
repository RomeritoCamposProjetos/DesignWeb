---
marp: true
theme: gaia
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
    
---

![bg left:25% 50%](./ifrn-vertical.png)
# Design Web
Prof. Romerito Campos

---

##  Plano de Aula

**Objetivo:** apresentar o uso da propriedade display para  construção de layouts.

**Conteúdo**
- display: `inline`, `block` e `inline-block`
- display: `table`
- multi-columns layout
- Float: `left` e `right`

---

## Fluxo Normal

- Os elementos HTML são desenhados no viewport de acordo com o fluxo normal.
  
- Nessa situação, a propriedade display é utilizada de acordo com o padrão de cada elemento: *inline* ou *block*

- Os elementos inline são chamados de **elementos de nível inline** e os elementos de block são chamados de **elementos de nível de block**

---

## Fluxo Normal

Elementos HTML desenhados de acordo com o fluxo padrão. 

Os elementos `h1` e `p` são elementos de nível de bloco. O elemento `a` é um elemento de nível inline. 

```html
<body>
    <h1>Título da página</h1>
    <p>Texto qualquer</p>
    <a href="">Link 1</a>
    <a href="">Link 1</a>
    <a href="">Link 1</a>
</body>
```

--- 

![bg center:70% 70%](image1.png) 


---
## Fluxo Normal

- É possível modificar a propriedade padrão de cada elemento html.
  
- Isso permite mais flexibidade para construir layouts.
  
- O código abaixo aplica em qualquer âncora (anchor) o `display: block` quando a classe `.block` é usada.

<style> 
    pre {
        float: left;
        width: 45%;
        margin-right: 5px;
        margin-top: 0px
    }
</style>

```css
    /* Código CSS */
    .block {
        display: block
    }
```

```html
<body>
    <h1>Título da página</h1>
    <p>Texto qualquer</p>
    <a class="block" href="">Link 1</a>
    <a class="block" href="">Link 1</a>
    <a class="block" href="">Link 1</a>
</body>
```

---
<style>
    figure {
        border: 5px solid black;
    }
</style>
![bg center: 70%](./image2.png)

---
# Fluxo Normal e Layouts

- É possível utilizar fluxo normal de desenho dos elementos para gerar um layout de uma aplicação

- Obviamente, alguns problemas surgem como redimencionamento dos elementos e dificuldades de alinhamento dos elementos.

- Vejamos como configurar um layout simples com os seguintes elementos: `<header>`, `<asise>`, `<section>` e `<footer>`.


Verical align tag

https://www.w3schools.com/css/css_inline-block.asp


https://medium.com/collabcode/pare-de-chutar-e-aprenda-como-funciona-o-display-inline-block-4e6cba2f19d4

https://www.treinaweb.com.br/blog/css-float-vs-inline-block-qual-usar-em-meus-layouts

---
