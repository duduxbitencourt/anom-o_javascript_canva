# Trabalho Prático (U2, A2): Animação Interativa em JavaScript

**Trabalho prático da disciplina de Desenvolvimento em JavaScript (Unidade 2, Aula 2).** Este projeto demonstra a criação de uma animação interativa em HTML5 Canvas 2D, com um ciclo de cores HSL que acelera com eventos `mouseenter` do mouse.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando a "Trindade do Front-End" e as APIs nativas do navegador:

* **HTML5:** Para a estrutura básica da página e o elemento `<canvas>`.
* **CSS3:** Para a estilização, centralização do layout (Flexbox) e feedback visual (`cursor: pointer`).
* **JavaScript (ES6+):** Para toda a lógica da animação, manipulação do DOM e gerenciamento de eventos.
* **API Canvas 2D:** Utilizada para desenhar (`ctx.arc`, `ctx.fill`) e limpar (`ctx.clearRect`) a tela.
* **API `requestAnimationFrame`:** Para criar um loop de animação eficiente e suave.

---

## ⚙️ Funcionalidades

* **Ciclo de Cores HSL:** O círculo central "pulsa" suavemente por todo o espectro de cores (arco-íris) ao ter seu `hue` (matiz) incrementado a cada quadro.
* **Interatividade de Mouse:** Ao passar o mouse sobre o canvas (`mouseenter`), a velocidade do ciclo de cores é drasticamente aumentada. Ao retirar o mouse (`mouseleave`), a velocidade retorna ao normal.

---

## 🏃 Como Executar

Este projeto não requer instalação de dependências ou um servidor.

1.  Clone ou baixe este repositório (`Code` > `Download ZIP`).
2.  Descompacte a pasta.
3.  Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge).

---

## 🎥 Preview da Animação

**[Link para ver a animação em ação](https://drive.google.com/file/d/1__sOLFltkwDoZT90J_3Fgjd3Kz5f5I7w/view?usp=sharing)**
