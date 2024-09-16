function cekPalindrom(str) {
  let rev = str.split("").reverse().join("");
  if (rev == str) {
    return true;
  }
  return false;
}
console.log(cekPalindrom("katak"));

// cekPalindrom("katak");
