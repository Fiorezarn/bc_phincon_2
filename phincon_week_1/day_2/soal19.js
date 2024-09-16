function cekAnagram(kata1, kata2) {
  kata1 = kata1.replace(/\s/g, "").toLowerCase();
  kata2 = kata2.replace(/\s/g, "").toLowerCase();

  kata1 = kata1.split("").sort().join("");
  // console.log(kata1);
  kata2 = kata2.split("").sort().join("");
  // console.log(kata2);

  if (kata1 === kata2) {
    return true;
  } else return false;
}

// Ekspektasi hasil:
// => true
console.log(cekAnagram("hello", "world"));
console.log(cekAnagram("listen", "silent"));
