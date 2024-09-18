const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
async function getPokemon(url) {
  const data = await fetch(url + "?limit=50").then((res) => res.json());
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
