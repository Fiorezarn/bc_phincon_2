const winner = document.getElementById("winner") as HTMLDivElement;
const playerWinner = localStorage.getItem("FinalResult");
const startAgain = document.getElementById("start-again") as HTMLButtonElement;

function showWinner() {
  winner.innerHTML = `<h1 class="font-bold text-center text-3xl">${playerWinner}</h1>`;
}

showWinner();

startAgain?.addEventListener("click", () => {
  localStorage.removeItem("FinalResult");
  localStorage.removeItem("Round");
  window.location.href = "lobby.html";
});
