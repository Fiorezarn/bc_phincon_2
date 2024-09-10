function cekAnagram(kata1, kata2) {
  kata1 = kata1.replace(/\s/g, "").toLowerCase();
  kata2 = kata2.replace(/\s/g, "").toLowerCase();

  kata1 = kata1.split("").sort().join("");
  kata2 = kata2.split("").sort().join("");

  if (kata1 === kata2) {
    console.log("true");
  } else console.log("false");
}

// Ekspektasi hasil:
// => true
cekAnagram("listen", "silent");

// => false
cekAnagram("hello", "world");
