function hitungJumlahVokal(str) {
  //g untuk mencari seluruh string, i membuatnya tidak peka huruf besar/kecil) dan i mengembalikan jumlah kecocokan
  let m = str.match(/[aeiou]/gi);
  if (m === null) {
    console.log(0);
  } else {
    console.log(m.length);
  }
}

hitungJumlahVokal("javascript");
