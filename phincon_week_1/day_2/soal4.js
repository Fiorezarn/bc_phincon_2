function cariBilanganPrima(n) {
  let count = 1;
  for (let i = 2; i <= n; i++) {
    let bilangan = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        bilangan++;
      }
    }
    if (bilangan === 2) {
      console.log(i);
      count++;
    }
  }
  console.log(`Jumlah bilangan prima: ${count}`);
}

cariBilanganPrima(100);
