function hitungJumlahDigitGenap(angka) {
  let split = ("" + angka).split("");
  let bilangangenap = split.filter((num) => num % 2 === 0);
  console.log(bilangangenap.length);
}

// Ekspektasi hasil:
hitungJumlahDigitGenap(1234567890);
