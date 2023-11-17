// var dragFranchiseName = [
//   "Drag Race US",
//   "Drag Race UK",
//   "Canada's Drag Race",
//   "Drag Race Down Under",
// ];

var dragFranchiseImage = [
  "https://m.media-amazon.com/images/M/MV5BODJkZjk3MzgtNzhhNy00ZmFhLTkxNzktZGYzOWU4Y2E1MjZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZTg2ZWUyNTEtYTliYy00ZDUzLWFlMGQtYjU3YjZlNzEwNGRhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
  "https://www.academy.ca/wp-content/uploads/2023/02/1665668817043ts_CDR3FeatureSubmissionImagePortrait-10-scaled.jpg",
  "https://m.media-amazon.com/images/M/MV5BMGFhMjhiZmEtYjQwNC00NDNkLWJmOWUtNzBlMTQ1YmU2MjI0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
];

var renderArrayElements = document.getElementById("array");

for (var i = 0; i < dragFranchiseImage.length; i++) {
  var imgElement = document.createElement("img"); // Cria um novo elemento <img>
  imgElement.src = dragFranchiseImage[i]; // Define o atributo 'src' do elemento <img> com o URL da imagem no índice 'i' do array
  renderArrayElements.appendChild(imgElement); // Adiciona o elemento <img> ao elemento com o ID 'array' no DOM
}
