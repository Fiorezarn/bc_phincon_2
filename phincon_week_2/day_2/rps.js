function rockPaperScissors(player1Name, player2Name, ...inputs) {
  let player1Point = 0;
  let player2Point = 0;

  inputs.forEach((input) => {
    for (let i = 0; i < input.length - 1; i++) {
      const player1 = input[i];
      const player2 = input[i + 1];

      if (
        (player1 === "r" && player2 === "s") ||
        (player1 === "s" && player2 === "p") ||
        (player1 === "p" && player2 === "r")
      ) {
        player1Point++;
      } else if (player1 === player2) {
        player1Point++;
        player2Point++;
      } else {
        player2Point++;
      }
    }
  });

  if (player1Point > player2Point) {
    return player1Name;
  } else if (player1Point < player2Point) {
    return player2Name;
  } else {
    return "draw";
  }
}

console.log(
  rockPaperScissors("budi", "benson", ["p", "s"], ["r", "s"], ["p", "r"])
);
