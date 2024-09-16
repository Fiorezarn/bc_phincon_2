function cariBilanganMunculSekali(arr) {
  // angka adalah 1-8 sejumlah array
  const unik = arr.filter((angka) => {
    console.log("ini angka", angka);
    console.log("index of>>>>", arr.indexOf(angka));
    console.log("last index of>>>>", arr.lastIndexOf(angka));

    return arr.indexOf(angka) === arr.lastIndexOf(angka);
  });

  return unik;
}
console.log(cariBilanganMunculSekali([1, 2, 2, 3, 3, 4, 5, 5]));
