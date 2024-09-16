function hitungJumlahDigitGenap(angka) {
  let split = ("" + angka).split("");
  let bilangangenap = split.filter((num) => num % 2 === 0);
  // console.log(bilangangenap.length);
  return bilangangenap.length;
}

// Ekspektasi hasil:
console.log(hitungJumlahDigitGenap(1234567890));

// hitungJumlahDigitGenap(1234567890);
