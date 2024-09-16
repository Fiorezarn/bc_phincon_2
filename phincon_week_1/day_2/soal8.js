function deretFibonacci(n) {
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    // console.log((arr[i] = arr[i - 1] + arr[i - 2]));

    // Elemen ke-i adalah hasil penjumlahan dua elemen sebelumnya (arr[i-1] dan arr[i-2])
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
}

console.log(deretFibonacci(8));

// Output yang diharapkan: [0, 1, 1, 2, 3, 5, 8, 13]
