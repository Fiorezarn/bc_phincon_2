function hitungKarakterUnik(str) {
  const hasil = str
    .split("")
    //filter untuk menghilangkan huruf yang sama
    .filter(function (item, i, ar) {
      return ar.indexOf(item) === i;
    })
    .join("").length;
  console.log(hasil);
}

// Ekspektasi hasil:
hitungKarakterUnik("hello world");
// => 8
