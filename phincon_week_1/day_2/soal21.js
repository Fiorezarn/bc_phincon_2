// fungsi cariBilanganHilang digunakan untuk mencari angka yang hilang dalam array
// contoh: jika arraynya adalah [1, 2, 3, 5, 6, 7], maka angka yang hilang adalah 4
function cariBilanganHilang(arr) {
  // loop digunakan untuk mengecek apakah ada angka yang berdekatan
  // kenapa -1 karena bilangan yang hilang ada  1
  for (let i = 0; i < arr.length - 1; i++) {
    // i tidak samapai tiga karena sudah ada angka yang hilang
    // console.log(i);
    console.log(
      i,
      "<<<<<<<<<<<",
      arr[i + 1], // misal i = 0, arr[i+1] = 1 berarti array dengan indeks 1 yaitu 2
      "<<<<<<<<<<<<",
      arr[i] + 1, // misal i = 0, arr[0] = 1 + 1 = 2 berarti array dengan indeks 0 + 1 = 2
      "<<<<<<<<<"
    );

    // jika ada angka yang berdekatan, return angka yang berdekatan
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i] + 1;
    }
  }
}

// contoh penggunaan
console.log(cariBilanganHilang([1, 2, 3, 5, 6, 7])); // output: 4
// cariBilanganHilang([1, 2, 3, 5, 6, 7]);
