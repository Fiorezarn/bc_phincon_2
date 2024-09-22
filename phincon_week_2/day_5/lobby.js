"use strict";
const buttonStart = document.getElementById("start-button");
const gameCount = document.getElementById("game-count");
buttonStart === null || buttonStart === void 0 ? void 0 : buttonStart.addEventListener("click", () => {
    localStorage.setItem("Round", gameCount.value);
    window.location.href = "battle.html";
});
