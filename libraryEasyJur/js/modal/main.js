function openModal(imgSrc, name, description, author) {
  document.getElementById("modalImg").src = imgSrc;
  document.getElementById("modalName").innerText = `Livro: ${name}`;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalAuthor").innerText = `Autor: ${author}`;

  const modal = document.getElementById("bookModal");
  modal.style.display = "block";
}

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
