function cariBilanganGanjilTerbesar(arr) {
  let ganjil = arr.filter((num) => num % 2 === 1);
  let hasil = Math.max(...ganjil);
  console.log(hasil);
}

// Ekspektasi hasil:
cariBilanganGanjilTerbesar([1, 2, 3, 4, 5, 6, 7, 8, 9, 13]);
