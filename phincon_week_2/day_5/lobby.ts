const buttonStart = document.getElementById(
  "start-button"
) as HTMLButtonElement;
const gameCount = document.getElementById("game-count") as HTMLInputElement;

buttonStart?.addEventListener("click", () => {
  localStorage.setItem("Round", gameCount.value);
  window.location.href = "battle.html";
});
