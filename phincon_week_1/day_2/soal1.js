function hitungBilanganGanjil(n) {
  let bilangan = 0;
  for (let i = 1; i <= n; i++) {
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
