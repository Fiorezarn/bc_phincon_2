function hitungKemunculanKarakter(str) {
  const hasil = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    console.log(`Karakter saat ini: '${char}'`);

    if (hasil[char]) {
      hasil[char] += 1;
      console.log(
        `Karakter '${char}' sudah ada. Jumlah saat ini: ${hasil[char]}`
      );
    } else {
      hasil[char] = 1;
      console.log(`Karakter '${char}' baru ditemukan. Set ke 1.`);
    }

    console.log("Object hasil sementara:", hasil);
  }

  return hasil;
}

console.log(hitungKemunculanKarakter("hello world"));
