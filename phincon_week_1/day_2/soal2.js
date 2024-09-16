//  =  1 memasukan nilai ke variabel
//  == untuk membandingkan nilai
//  === membandingkan sama persis
function cekTahunKabisat(tahun) {
  let isKabisat = false;
  if (typeof tahun !== "number") {
    return "Invalid value";
  }
  if (tahun % 400 === 0 || tahun % 4 === 0) {
    isKabisat = true;
  } else if (tahun % 100 === 0) {
    return isKabisat;
  }
  return isKabisat;
}

console.log(cekTahunKabisat(2020));
console.log(cekTahunKabisat(2021));
