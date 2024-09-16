function hitungRataRata(arr) {
  // penjumlahan array
  //   Iterasi pertama: 1 + 2 = 3
  // Iterasi kedua: 3 + 3 = 6
  // Iterasi ketiga: 6 + 4 = 10
  // Iterasi keempat: 10 + 5 = 15
  let penjumlahanArray = arr.reduce((a, b) => a + b);
  let totalArray = arr.length;
  let hasil = penjumlahanArray / totalArray;
  return hasil;
}
console.log(hitungRataRata([1, 2, 3, 4, 5]));
