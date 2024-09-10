function hitungKemunculanKata(kalimat, kata) {
  let kataSplit = kalimat.split(" ");
  let count = 0;
  //   looping kata dari kalimat yang di split
  for (let i = 0; i < kataSplit.length; i++) {
    //   jika kata sama dengan kata yang di split
    if (kataSplit[i] === kata) {
      //   tambah count
      count++;
    }
  }
  console.log(count);
}

// Ekspektasi hasil:
hitungKemunculanKata("Saya suka makan nasi, saya juga suka minum air", "suka");
