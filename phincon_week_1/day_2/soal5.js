function hitungJumlahDigit(angka) {
  const total = angka.toString().split("").map(Number);
  let sum = 0;
  for (const element of total) {
    sum += element;
  }
  //   for (let i = 0; i < total.length; i++) {
  //     sum += total[i];
  //   }
  console.log(sum);
}

// Ekspektasi hasil:
hitungJumlahDigit(12345);
hitungJumlahDigit(9876);
