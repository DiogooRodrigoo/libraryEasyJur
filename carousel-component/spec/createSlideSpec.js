describe("Função createSlide", function () {
    let slideData;
  
    beforeEach(function () {
      // Configuração de um exemplo de dados de slide
      slideData = {
        imgSrc: "img/test.jpg",
        price: "$10",
        name: "Teste Livro",
        description: "Descrição do Teste",
        author: "Autor Teste"
      };
  
      // Configura o DOM necessário
      document.body.innerHTML = `
        <div id="swiper-wrapper"></div>
        <div id="bookModal" style="display: none;">
          <img id="modalImg" />
          <div id="modalName"></div>
          <div id="modalDescription"></div>
          <div id="modalAuthor"></div>
          <span class="close">Close</span>
        </div>
      `;
    });
  
    it("deve criar um elemento de slide com as classes e propriedades corretas", function () {
      const slideElement = createSlide(slideData);
  
      expect(slideElement).toBeDefined();
      expect(slideElement.classList.contains("swiper-slide")).toBe(true);
      expect(slideElement.classList.contains("tranding-slide")).toBe(true);
  
      const imgElement = slideElement.querySelector("img");
      expect(imgElement).toBeDefined();
      expect(imgElement.src).toContain(slideData.imgSrc);
      expect(imgElement.alt).toBe(slideData.name);
  
      const buttonElement = slideElement.querySelector("button");
      expect(buttonElement).toBeDefined();
      expect(buttonElement.classList.contains("btn-saber-mais")).toBe(true);
      expect(buttonElement.textContent.trim()).toBe("Saiba Mais");
    });
  
    it("deve chamar openModal ao clicar no botão", function () {
      spyOn(window, 'openModal');
      
      const slideElement = createSlide(slideData);
      const buttonElement = slideElement.querySelector("button");
  
      // Simula o clique no botão
      buttonElement.click();
  
      expect(window.openModal).toHaveBeenCalledWith(
        slideData.imgSrc,
        slideData.name,
        slideData.description,
        slideData.author
      );
    });
  });
  
  describe("Função openModal", function () {
    beforeEach(function () {
      document.body.innerHTML = `
        <div id="bookModal" style="display: none;">
          <img id="modalImg" />
          <div id="modalName"></div>
          <div id="modalDescription"></div>
          <div id="modalAuthor"></div>
          <span class="close">Close</span>
        </div>
      `;
    });
  
    it("deve atualizar o modal com as informações corretas e exibi-lo", function () {
      const imgSrc = "img/test.jpg";
      const name = "Teste Livro";
      const description = "Descrição do Teste";
      const author = "Autor Teste";
  
      openModal(imgSrc, name, description, author);
  
      expect(document.getElementById("modalImg").src).toContain(imgSrc);
      expect(document.getElementById("modalName").innerText).toBe(name);
      expect(document.getElementById("modalDescription").innerText).toBe(description);
      expect(document.getElementById("modalAuthor").innerText).toBe(`Author: ${author}`);
      expect(document.getElementById("bookModal").style.display).toBe("block");
    });
  
    it("deve esconder o modal ao clicar no botão de fechar", function () {
      const modal = document.getElementById("bookModal");
      modal.style.display = "block"; // Exibir o modal
  
      const closeModal = document.getElementsByClassName("close")[0];
      closeModal.click(); // Simula o clique no botão de fechar
  
      expect(modal.style.display).toBe("none");
    });
  
    it("deve esconder o modal ao clicar fora dele", function () {
      const modal = document.getElementById("bookModal");
      modal.style.display = "block"; // Exibir o modal
  
      const event = new MouseEvent("click", { bubbles: true });
      window.onclick({ target: modal }); // Simula o clique fora do modal
  
      expect(modal.style.display).toBe("none");
    });
  });
  