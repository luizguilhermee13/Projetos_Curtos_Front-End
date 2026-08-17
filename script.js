document.addEventListener("DOMContentLoaded", () => {
  const ProjetosFeitos = [
    {
      id: 1,
      image: "assets/bikcraftPrint.png",
      titulo: "Bikcraft",
      alt: "ftBikcraft",
      link: "https://luizguilhermee13.github.io/bikcraft/",
    },
    {
      id: 2,
      image: "assets/cafePrint.png",
      titulo: "Cafeteria Gourment",
      alt: "cafeteriaImage",
      link: "https://luizguilhermee13.github.io/cafeteria-projeto/",
    },
    {
      id: 3,
      image: "assets/temporarioImg.jpeg",
      titulo: "PokedexApi",
      alt: "imagePokedex",
      link: "https://luizguilhermee13.github.io/bikcraft/",
    },
    {
      id: 4,
      image: "assets/temporarioImg.jpeg",
      titulo: "YoutubeApi",
      alt: "logoYt",
      link: "https://luizguilhermee13.github.io/bikcraft/",
    },
    {
      id: 5,
      image: "assets/temporarioImg.jpeg",
      titulo: "Gerenciador de Pneus",
      alt: "LogoPneu",
      link: "https://luizguilhermee13.github.io/bikcraft/",
    },
    {
      id: 6,
      image: "assets/temporarioImg.jpeg",
      titulo: "Twitter Page",
      alt: " temporario",
      link: "https://luizguilhermee13.github.io/bikcraft/",
    },
    {
      id: 7,
      image: "assets/temporarioImg.jpeg",
      titulo: "Shopify Page",
      alt: " temporario",
      link: "https://luizguilhermee13.github.io/bikcraft/",
    },
    {
      id: 8,
      image: "assets/temporarioImg.jpeg",
      titulo: "Projeto Hamburgueria",
      alt: " temporario",
      link: "https://luizguilhermee13.github.io/bikcraft/",
    },
    {
      id: 9,
      image: "assets/temporarioImg.jpeg",
      titulo: "Linkedin Page",
      alt: " temporario",
      link: "https://luizguilhermee13.github.io/bikcraft/",
    },
    {
      id: 10,
      image: "assets/temporarioImg.jpeg",
      titulo: "Ana",
      alt: " temporario",
      link: "https://luizguilhermee13.github.io/bikcraft/",
    },
    {
      id: 11,
      image: "assets/temporarioImg.jpeg",
      titulo: "Ana",
      alt: " temporario",
      link: "https://luizguilhermee13.github.io/bikcraft/",
    },
  ];

  const telaInicial = document.querySelector(".container-cards");

  const cards = ProjetosFeitos.map((item) => {
    return `
    <div class="card-body">
    <img src="${item.image}" alt="${item.alt}" />
    <h2>${item.titulo}</h2>
    <button>
      <a href="${item.link}" target="_blank">
        Visualizar Projeto
      </a>
    </button>
  </div>`;
  }).join("");

  telaInicial.innerHTML = cards;
});
