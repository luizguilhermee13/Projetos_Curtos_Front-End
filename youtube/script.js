document.addEventListener("DOMContentLoaded", async function carregarVideos() {
  const containerCard = document.querySelector(".content");

  const quantidade = 20;
  const termoBusca = "aprenda javascript";

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${quantidade}&q=${termoBusca}&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  data.items.forEach((item) => {
    const titulo = item.snippet.title;
    const canal = item.snippet.channelTitle;
    const thumb = item.snippet.thumbnails.medium.url;

    const card = document.createElement("div");
    card.classList.add("card");

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    const imgThumb = document.createElement("img");
    imgThumb.src = thumb;
    cardHeader.appendChild(imgThumb);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardDescricao = document.createElement("div");
    cardDescricao.classList.add("card-descricao");
    cardDescricao.style.gridColumn = "2";
    const h3 = document.createElement("h3");
    h3.textContent = titulo;
    const p = document.createElement("p");
    p.textContent = canal;
    cardDescricao.appendChild(h3);
    cardDescricao.appendChild(p);

    cardBody.appendChild(cardDescricao);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    containerCard.appendChild(card);
  });
});
