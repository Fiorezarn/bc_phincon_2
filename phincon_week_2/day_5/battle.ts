const round = localStorage.getItem("Round");
let halaman: HTMLElement | null = document.getElementById("title-count");

if (halaman && round !== null) {
  halaman.textContent = `Match 1 dari ${round}`;
} else {
  console.error("Element not found or round is null.");
}

// Variabel untuk melacak skor dan jumlah pertandingan
let totalRounds = parseInt(round ?? "5"); // Default ke 5 ronde jika round tidak ditemukan
let currentRound = 0;
let player1TotalPoints = 0;
let player2TotalPoints = 0;

let player1Choices: string[] = [];
let player2Choices: string[] = [];

// Menangani pilihan pemain
function handleChoice(value: string) {
  if (value.startsWith("P1")) {
    player1Choices.push(value.split("-")[1]); // Simpan pilihan player 1
  } else if (value.startsWith("P2")) {
    player2Choices.push(value.split("-")[1]); // Simpan pilihan player 2
  }

  // Setelah kedua pemain membuat pilihan, hitung hasilnya
  if (player1Choices.length === player2Choices.length) {
    currentRound++;
    const result = rockPaperScissors(
      "Player 1",
      "Player 2",
      player1Choices,
      player2Choices
    );
    console.log(`Round ${currentRound} Result: ${result}`);

    // Tambahkan poin berdasarkan hasil pertandingan
    if (result === "Player 1") {
      player1TotalPoints++;
    } else if (result === "Player 2") {
      player2TotalPoints++;
    }

    // Reset pilihan setelah setiap ronde
    player1Choices = [];
    player2Choices = [];

    // Update judul match saat ini
    if (halaman) {
      halaman.textContent = `Match ${currentRound + 1} dari ${totalRounds}`;
    }

    // Jika pertandingan selesai, tentukan pemenang dan simpan di localStorage
    if (currentRound === totalRounds) {
      const finalResult =
        player1TotalPoints > player2TotalPoints
          ? "Player 1 Menang"
          : player2TotalPoints > player1TotalPoints
          ? "Player 2 Menang"
          : "Draw";

      localStorage.setItem("FinalResult", finalResult);
      window.location.href = "winner.html";
    }
  }
}

// Fungsi untuk menghitung hasil batu-gunting-kertas
function rockPaperScissors(
  player1Name: string,
  player2Name: string,
  player1: string[],
  player2: string[]
) {
  let player1Point = 0;
  let player2Point = 0;

  for (let i = 0; i < player1.length; i++) {
    const p1 = player1[i];
    const p2 = player2[i];

    if (
      (p1 === "gunting" && p2 === "kertas") ||
      (p1 === "batu" && p2 === "gunting") ||
      (p1 === "kertas" && p2 === "batu")
    ) {
      player1Point++;
    } else if (p1 === p2) {
      player1Point++;
      player2Point++;
    } else {
      player2Point++;
    }
  }

  if (player1Point > player2Point) {
    return player1Name;
  } else if (player1Point < player2Point) {
    return player2Name;
  } else {
    return "draw";
  }
}
