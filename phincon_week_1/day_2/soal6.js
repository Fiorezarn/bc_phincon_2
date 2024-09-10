function cekPalindrom(str) {
  let rev = str.split("").reverse().join("");
  if (rev == str) {
    console.log("true");
  } else console.log("false");
}

cekPalindrom("katak");
