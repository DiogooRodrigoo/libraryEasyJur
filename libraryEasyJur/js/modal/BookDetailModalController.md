## Visão Geral

Este guia explica como integrar o componente **openModal** em outras partes do código

## Descrição

O componente **openModal** permite exibir uma janela modal com informações sobre um livro, como imagnes, nome, dewcrição e autor. O modal é exibido ao chamar a função `openModal` e pode ser fechada clicando no botão de fechar ou fora da janela do modal.

## Parâmetros

- **imgSrc**: string - URL da imagem do livro.
- **name**: string - Nome do livro.
- **description**: string - Descrição do livro.
- **author**: string - Autor do livro.

## Código da Função `openModal`
```bash
function openModal(imgSrc, name, description, author) {
  document.getElementById("modalImg").src = imgSrc;
  document.getElementById("modalName").innerText = `Livro: ${name}`;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalAuthor").innerText = `Autor: ${author}`;

  const modal = document.getElementById("bookModal");
  modal.style.display = "block";
}
```

## Inicialização do Componente

### Elementos Necessários

1. Modal: Um elemento com o id `bookModal` deve estar presente no HTML.
2. Botão Fechar: Um elemento com a classe `close` deve estar presente dentro do modal.

### Exemplo do código

```bash
<div id="bookModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <img id="modalImg" src="" alt="Imagem do Livro">
    <h2 id="modalName"></h2>
    <p id="modalDescription"></p>
    <p id="modalAuthor"></p>
  </div>
</div>
```

### Comportamento

1. Atualiza o atributo `src` do elemento com id `modalImg` para exibir a imagem do livro.
2. Atualiza o texto do elemento com id `modalName` com o nome do livro.
3. Atualiza o texto do elemento com id `modalDescription` com a descrição do livro.
4. Atualiza o texto do elemento com id `modalAuthor` com o autor do livro.
5. Define o estilo do modal com id `bookModal` para `display: block`, tornando-o visível.

### Exemplo de Uso

```bash
openModal(
  'https://exemplo.com/imagem.jpg',
  'O Grande Livro',
  'Uma descrição fascinante sobre o livro.',
  'Autor Desconhecido'
);
```

## Fechamento do Componente

### Comportamento

1. Botão Fechar: Ao clicar no elemento com a classe close, o `modal` é ocultado.
2. Clique fora do Modal: Ao clicar fora da janela modal, o modal é ocultado.

### Exemplo do código

```bash
const modal = document.getElementById("bookModal");
const closeModal = document.getElementsByClassName("close")[0];

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
```

## CSS Recomendado

```bash
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
```

---

Esta documentação fornece as instruções necessárias para integrar e utilizar o componente modal em seu projeto. Certifique-se de ter os elementos HTML e estilos CSS correspondentes para garantir o funcionamento adequado do modal.
