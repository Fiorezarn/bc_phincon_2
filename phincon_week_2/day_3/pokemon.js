const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
let number = [1, 2, 3, 4, 5];
async function getPokemon(url) {
  const data = await fetch(url + `?limit=20&offset=0`).then((res) =>
    res.json()
  );
  const getPokemon = data.results;
  const promises = getPokemon.map((data) =>
    fetch(data.url).then((res) => res.json())
  );

  let datas = [];

  const result = await Promise.all(promises);
  result.forEach((data) => {
    datas.push({
      name: data.species.name,
      image: data.sprites.front_default,
    });
  });

  const container = document.getElementById("pokemon-card");

  datas.forEach((data) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add(
      "card",
      "border-2",
      "border-red-500",
      "text-center"
    );
    pokemonCard.innerHTML = `
      <img class="mx-auto w-[200px]" src="${data.image}" alt="${data.name}" />
      <h3 class="font-bold text-white bg-red-500 border-2 border-red-500">${data.name}</h3>
      `;
    container.appendChild(pokemonCard);
  });
}

async function generateButton(array) {
  let buttons = array;
  let currentPage = document.getElementById("current-page").value;
  document.getElementById("pagination").innerHTML = "";
  buttons.forEach((button) => {
    let classBg = "bg-red-500";
    if (Number(currentPage) === button) {
      classBg = "bg-red-700";
    }
    const createButton = document.createElement("button");
    createButton.classList.add(
      classBg,
      "hover:bg-red-700",
      "text-white",
      "font-bold",
      "py-2",
      "px-4",
      "rounded"
    );
    createButton.textContent = button;
    document.getElementById("pagination").appendChild(createButton);
    createButton.addEventListener("click", () => {
      pagination(button);
    });
  });
}

generateButton([1, 2, 3, 4, 5]);

const jumpPrev = document.getElementById("jump-prev");
const jumpNext = document.getElementById("jump-next");
jumpPrev.addEventListener("click", async () => {
  const startPage = 1;
  const limit = 20;
  let offset = (startPage - 1) * limit;
  const cardElement = document.getElementById("pokemon-card");
  cardElement.textContent = "";
  const url = BASE_URL + `?limit=${limit}&offset=${offset}`;
  await getPokemon(url);
});

jumpNext.addEventListener("click", async () => {
  let numbers = [];
  const data = await fetch(BASE_URL + `?limit=20&offset=0`).then((res) =>
    res.json()
  );
  const limit = 20;
  const endPage = Math.ceil(data.count / 20);
  let offset = (endPage - 1) * limit;
  if (offset) {
    numbers = number.map((n) => endPage - n + 1).reverse();
    generateButton(numbers);
  }
  const cardElement = document.getElementById("pokemon-card");
  cardElement.textContent = "";
  const url = BASE_URL + `?limit=${limit}&offset=${offset}`;
  await getPokemon(url);
});

async function pagination(page) {
  if (page === "prev") {
    number = number.map((n) => n - 1);
    page = document.getElementById("current-page").value;
    page--;
  } else if (page === "next") {
    number = number.map((n) => n + 1);
    page = document.getElementById("current-page").value;
    page++;
  }

  if (page === 1) {
    document.getElementById("prev").classList.add("cursor-not-allowed");
    document.getElementById("prev").setAttribute("disabled", "true");
  } else {
    document.getElementById("prev").classList.remove("cursor-not-allowed");
    document.getElementById("prev").removeAttribute("disabled");
  }

  const limit = 20;
  let offset = (page - 1) * limit;
  const cardElement = document.getElementById("pokemon-card");
  cardElement.textContent = "";
  const url = BASE_URL + `?limit=${limit}&offset=${offset}`;
  document.getElementById("current-page").value = page;
  generateButton(number);
  await getPokemon(url);
}

getPokemon(BASE_URL);

async function getSpecificPokemon(searchPokemon) {
  const container = document.getElementById("pokemon-card");
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add(
    "card",
    "border-2",
    "border-red-500",
    "text-center"
  );
  pokemonCard.innerHTML = `
      <img class="mx-auto w-[200px]" src="${searchPokemon.sprites.front_default}" alt="${searchPokemon.name}" />
      <h3 class="font-bold text-white bg-red-500 border-2 border-red-500">${searchPokemon.name}</h3>
      `;
  container.appendChild(pokemonCard);
}

async function searchPokemon(e) {
  const cardElement = document.getElementById("pokemon-card");
  try {
    e.preventDefault();
    const searchBar = document.getElementById("search").value;
    const searchPokemon = await fetch(BASE_URL + "/" + `${searchBar}`).then(
      (response) => response.json()
    );

    if (searchPokemon && searchPokemon.count) {
      cardElement.textContent = "";
      getPokemon(BASE_URL);
    } else {
      cardElement.textContent = "";
      getSpecificPokemon(searchPokemon);
    }
  } catch (error) {
    cardElement.textContent = "";
    console.log(error);
  }
}
