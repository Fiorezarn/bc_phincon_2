function cariFaktorBilangan(angka) {
  for (let i = 1; i <= angka; i++) {
    if (angka % i == 0) {
      console.log(i);
    }
  }
}

cariFaktorBilangan(12);
