function cekTahunKabisat(tahun) {
  if (tahun % 400 === 0) {
    console.log("Tahun kabisat");
  } else if (tahun % 100 === 0) {
    console.log("Bukan tahun kabisat");
  } else if (tahun % 4 === 0) {
    console.log("Tahun kabisat");
  } else {
    console.log("Bukan tahun kabisat");
  }
}

cekTahunKabisat(2020);
