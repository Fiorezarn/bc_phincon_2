function hitungKataUnik(kalimat) {
  let kataUnik = new Set(kalimat.split(" "));
  console.log(kataUnik.size);

  return kataUnik.size;
}

console.log(hitungKataUnik("Saya suka makan nasi suka minum air"));
// size adalah bawaan dari set method untuk mencari yang unique
