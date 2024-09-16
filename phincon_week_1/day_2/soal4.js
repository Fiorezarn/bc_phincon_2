function cariBilanganPrima(n) {
  // inisialisasi variabel count untuk menghitung jumlah bilangan prima
  let count = 1;

  // looping untuk mencari bilangan prima dari 2 hingga n
  for (let i = 2; i <= n; i++) {
    // inisialisasi variabel bilangan untuk menampung jumlah faktor dari i
    let bilangan = 0;

    // looping untuk mencari faktor dari i
    for (let j = 1; j <= i; j++) {
      // jika i habis dibagi j maka bilangan ditambah 1
      if (i % j === 0) {
        bilangan++;
      }
    }

    // jika bilangan hanya 2 maka i adalah bilangan prima
    if (bilangan === 2) {
      // cetak bilangan prima yang ditemukan
      // tambahkan count 1
      count++;
    }
  }

  // cetak jumlah bilangan prima yang ditemukan
  // console.log(`Jumlah bilangan prima: ${count}`);
  return count;
}

// panggil fungsi cariBilanganPrima dengan parameter 100
console.log(cariBilanganPrima(100));
