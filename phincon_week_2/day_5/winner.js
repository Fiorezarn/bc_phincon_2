"use strict";
const winner = document.getElementById("winner");
const playerWinner = localStorage.getItem("FinalResult");
const startAgain = document.getElementById("start-again");
function showWinner() {
    winner.innerHTML = `<h1 class="font-bold text-center text-3xl">${playerWinner}</h1>`;
}
showWinner();
startAgain === null || startAgain === void 0 ? void 0 : startAgain.addEventListener("click", () => {
    localStorage.removeItem("FinalResult");
    localStorage.removeItem("Round");
    window.location.href = "lobby.html";
});
