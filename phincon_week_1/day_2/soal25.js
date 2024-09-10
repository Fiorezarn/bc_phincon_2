function hitungKemunculanKarakter(str) {
  const hasil = {};

  // digunakan untuk mengecek karakter yang sama
  for (const element of str) {
    // char untuk mengecek karakter
    const char = element;
    if (hasil[char]) {
      hasil[char] += 1;
    } else {
      hasil[char] = 1;
    }
  }

  return hasil;
}

console.log(hitungKemunculanKarakter("hello world"));
