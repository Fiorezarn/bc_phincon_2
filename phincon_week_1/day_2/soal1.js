function hitungBilanganGanjil(n) {
  let bilangan = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      // console.log(i);

      bilangan++;
    }
  }
  // console.log(bilangan);
  return bilangan;
}

console.log(hitungBilanganGanjil(10));
console.log(hitungBilanganGanjil(5));

// Ekspektasi hasil:
// hitungBilanganGanjil(10) => 5
// hitungBilanganGanjil(20) => 10
