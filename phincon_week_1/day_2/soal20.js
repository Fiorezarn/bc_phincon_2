function hitungHurufKapital(kalimat) {
  let count = 0;
  kalimat = kalimat.replace(/\s/g, "").split("");

  console.log(kalimat);

  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === kalimat[i].toUpperCase()) {
      count++;
    }
  }
  // console.log(count);
  return count;
}
console.log(hitungHurufKapital("Saya Belajar JavaScript Di DICODING"));
// Ekspektasi hasil:
