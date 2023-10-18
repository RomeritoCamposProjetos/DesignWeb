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

**Objetivo**: compreender o uso de media queries para promover o design responsivo.

**Conteúdo**:

- `@media`
- `media type`
- `media feature` 

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
# @media

---
# @media

- Maneira de aplicar CSS quando o browser ou o ambiente do dispositivo casar com uma regra que você especificou (mudança de tamanho).
  
- São importantes para o design responsivo.
  
- Vão além do design responsivo, permitindo que detecte-se que o usuário está usando touch-screen ao invés do mouse.

---

# Media Query

- Uma regra `@media` possui um *media type* e um *media feature*:
    - *Media type* pode ser `screen`, `print`.
    - *Media feature rule* é um alvo que serve como referência para aplicação de CSS.

```css
@media screen and (width: 600px) {
    .tag {
        display: none
    }
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
# Media feature rules

---
# Media feature rules

- `Width` e `Height` são dois parâmetros mais comuns para website responsivo.
    - Exemplo de uso: `@media screen and (max-width: 600px) { //estilo }`
    - O media feature `max-width: 600px` implica que a faixa de valores até 600 pixels força a aplicação de alguma definição CSS.

---

# Media feature rules

- `Orientation`
    - A orientação pode ser `landscape` ou `portrait`.
    - Exemplo: `@media (orientation: landscape) {}`

---

# Media feature rules

- `Pointing Devices` (Dispositivos Apontadores)
    
    - O media feature `hover` permite verificar se o usuário pode passar o apontador sobre um elemento.
  
    - Outro media feature é o `pointer` que permite identificar qual o tipo de interação sobre os elementos. Por exemplo, `coarse` indica que o usuário está usando o dedo.

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
# Media queries mais complexas
---

# Media queries mais complexas

- É possível combinar media features para obter arranjos mais completos.
- O operador `and` permite combinar *media-features* e *media-type*.
    - Exemplo: `@media screen and (min-width: 600px) and (orientation: landscape) {}`


---

# Media queries mais complexas

- O operador `or` permite combinação sem que todos os *media-features* sejam verdadeiros.

- O operador `not` permite negar medias.
    - Exemplo: `@media not all and (orientation: landscape) {}`
        - Neste caso, as regras são aplicadas apenas quando a orientação for *landscape*.

---
# Referências

MDN Web Docs. CSS Layout and Media Queries. Disponível em: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries. Acesso em: 18 out. 2023.