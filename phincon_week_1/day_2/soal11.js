function hitungRataRata(arr) {
  // penjumlahan array
  let penjumlahanArray = arr.reduce((a, b) => a + b);
  let totalArray = arr.length;
  let hasil = penjumlahanArray / totalArray;
  console.log(hasil);
}

hitungRataRata([1, 2, 3, 4, 5]);
