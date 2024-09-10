function deretFibonacci(n) {
  // buat array untuk menyimpan deret fibonacci kenapa 0 dan 1 karena awalnya ada 0 dan 1
  let arr = [0, 1];
  // looping sampai n
  for (let i = 2; i < n; i++) {
    // menambahkan elemen ke array
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  console.log(arr);
}

// Ekspektasi hasil:
deretFibonacci(8);
// => [0, 1, 1, 2, 3, 5, 8, 13]
