function bandingAngka(angka1, angka2) {
  if (angka1 > angka2) {
    console.log("true");
  } else if (angka1 < angka2) {
    console.log("false");
  } else {
    console.log("-1");
  }
}

bandingAngka(6, 6);

function balikKata(kata) {
  console.log(kata.split("").reverse().join(""));
}

balikKata("John Doe");
