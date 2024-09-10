function hitungBilanganGanjil(n) {
  let bilangan = 0;
  // looping digunakan untuk mengecek bilangan ganjil
  for (let i = 1; i <= n; i++) {
    // i berisi 1 sampai n
    if (i % 2 !== 0) {
      bilangan++;
    }
  }
  console.log(bilangan);
  return bilangan;
}

hitungBilanganGanjil(20);

// Ekspektasi hasil:
// hitungBilanganGanjil(10) => 5
// hitungBilanganGanjil(20) => 10
