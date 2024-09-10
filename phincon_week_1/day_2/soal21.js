function cariBilanganHilang(arr) {
  // loop digunakan untuk mengecek apakah ada angka yang berdekatan
  for (let i = 0; i < arr.length - 1; i++) {
    // jika ada angka yang berdekatan, return angka yang berdekatan
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i] + 1;
    }
  }
}

console.log(cariBilanganHilang([1, 2, 3, 5, 6, 7]));
