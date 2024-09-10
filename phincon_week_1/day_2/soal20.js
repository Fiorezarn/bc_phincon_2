function hitungHurufKapital(kalimat) {
  let count = 0;
  //   looping kalimat
  for (let i = 0; i < kalimat.length; i++) {
    //   jika huruf kapital
    if (kalimat[i] === kalimat[i].toUpperCase()) {
      count++;
    }
  }
  console.log(count);
}

// Ekspektasi hasil:
hitungHurufKapital("Saya Belajar JavaScript Di DICODING");
