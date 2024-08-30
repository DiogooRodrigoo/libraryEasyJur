const modal = document.getElementById("bookModal");
const closeModal = document.getElementsByClassName("close")[0];

function openModal(imgSrc, name, description, author) {
  document.getElementById("modalImg").src = imgSrc;
  document.getElementById("modalName").innerText = `Livro: ${name}`;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalAuthor").innerText = `Autor: ${author}`;

  modal.style.display = "block";
}

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
