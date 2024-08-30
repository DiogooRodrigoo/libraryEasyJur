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
