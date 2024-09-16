function hitungBilanganFaktorial(n) {
  // Mulai dari 1 adalah yang benar, karena dalam faktorial,
  // angka pertama kali dikalikan adalah 1, dan selanjutnya dikalikan dengan angka-angka berikutnya.
  let bilangan = 1;
  for (let i = 1; i <= n; i++) {
    bilangan *= i;
  }
  return bilangan;
}

console.log(hitungBilanganFaktorial(-5));
