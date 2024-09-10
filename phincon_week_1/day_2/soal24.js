function cariBilanganMunculSekali(arr) {
  const unik = arr.filter((angka) => {
    return arr.indexOf(angka) === arr.lastIndexOf(angka);
  });

  return unik;
}
console.log(cariBilanganMunculSekali([1, 2, 2, 3, 3, 4, 5, 5]));
