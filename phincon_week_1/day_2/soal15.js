function hitungKarakterUnik(str) {
  return str.split("").filter(function (item, i, ar) {
    // console.log(ar, "<<<<<<");
    // console.log(item, "<<<<<<");

    return ar.indexOf(item) === i;
  });
  // .join("").length;
}

// Ekspektasi hasil:
console.log(hitungKarakterUnik("hello world"));
// => 8
