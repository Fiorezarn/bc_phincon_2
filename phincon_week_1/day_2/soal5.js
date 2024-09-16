function hitungJumlahDigit(angka) {
  const total = angka.toString().split("").map(Number);
  let sum = 0;
  // for (const element of total) {
  //   sum += element;
  // }
  for (let i = 0; i < total.length; i++) {
    sum += total[i];
  }
  return sum;
  // console.log(sum);
}

// Ekspektasi hasil:
console.log(hitungJumlahDigit(12345));
console.log(hitungJumlahDigit(9876));

// hitungJumlahDigit(12345);
// hitungJumlahDigit(9876);
