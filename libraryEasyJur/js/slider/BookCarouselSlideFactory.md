## Visão Geral

Este guia explica como integrar o componente **createSlide** em outras partes do código

## Descrição

O componente **createSlide** é responsável por criar um slide individual para um carrossel de imagens, que é utilizado em um slider Swipert. Este slide é composto por imagem, um botão "Saiba Mais", e informações associadas ao slide.

## Parâmetros

- **imgSrc**: string - URL da imagem do livro.
- **price**: string - Preço associado ao item no slide (não utilizado diretamente no código atual, mas pode ser adicionado no futuro).
- **name**: string - Nome do livro.
- **description**: string - Descrição do livro.
- **author**: string - Autor do livro.

## Código da Função `createSlide`

```bash
function createSlide({ imgSrc, price, name, description, author }) {
  const slideElement = document.createElement("div");
  slideElement.classList.add("swiper-slide", "tranding-slide");

  slideElement.innerHTML = `
  <div class="container-book">
    <div class="tranding-slide-img">
      <img src="${imgSrc}" alt="${name}" />
    </div>
    <div class="tranding-slide-content">
      <div class="tranding-slide-content-bottom">
        <button class="btn-saber-mais" onclick="openModal('${imgSrc}', '${name}', '${description}', '${author}')" >
        Saiba Mais
        </button>
      </div>
    </div>
    </div>
  `;

  return slideElement;
}
```

### Retorno

**slideElement**: Um elemento div com a classe swiper-slide e tranding-slide. Este elemento é configurado com HTML interno que define a estrutura visual do slide.

## Inicialização do Componente

Para que o componente createSlide funcione corretamente, você deve garantir que todos os elementos necessários estejam presentes e configurados corretamente. A seguir está o procedimento para inicializar o componente e adicionar slides ao carrossel.

### Elementos Necessários

#### Contêiner do Swiper

O carrossel Swiper precisa de um contêiner para os slides. Certifique-se de ter um elemento HTML com o id swiper-wrapper, onde os slides serão adicionados.

```bash
<div class="tranding-slider">
  <div id="swiper-wrapper" class="swiper-wrapper"></div>
  <!-- Navegação e paginação serão adicionadas pelo Swiper -->
  <div class="swiper-pagination"></div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</div>
```

#### Bibliotecas e Estilos

- Swiper JS: Inclua o arquivo JavaScript do Swiper em seu projeto. Exemplo:

```bash
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
```

- Swiper CSS: Inclua o arquivo CSS do Swiper para estilizar o carrossel. Exemplo:

```bash
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
```

#### Função `openModal`

A função openModal é chamada quando o botão "Saiba Mais" é clicado. Esta função deve ser definida em seu código para exibir um modal com mais informações sobre o item.
Para saber mais sobre esse componente: [`openModal`](../modal/BookDetailModalController)

## Código completo de inicialização

A seguir está o código para carregar os slides e inicializar o Swiper quando o documento estiver pronto:

```bash
document.addEventListener("DOMContentLoaded", () => {
  fetch("js/slider/slides-data.json")
    .then((response) => response.json())
    .then((slides) => {
      const swiperWrapper = document.getElementById("swiper-wrapper");

      slides.forEach((slideData) => {
        const slideElement = createSlide(slideData);
        swiperWrapper.appendChild(slideElement);
      });

      // Inicialização do Swiper
      new Swiper(".tranding-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    })
    .catch((error) =>
      console.error("Erro ao carregar os dados dos slides:", error)
    );
});
```

---

Esta documentação fornece as instruções necessárias para integrar e utilizar o componente modal em seu projeto. Certifique-se de ter os elementos HTML e estilos CSS correspondentes para garantir o funcionamento adequado do sliderModal.
