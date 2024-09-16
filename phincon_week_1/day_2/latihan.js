// function jumlahAngkaGenap(angka) {
//   let count = 0;
//   for (let i = 1; i <= angka; i++) {
//     if (i % 2 == 0) {
//       count += i;
//     }
//   }
//   console.log("Jumlah angka genap dari 1 hingga 100 adalah:" + " " + count);
// }

// jumlahAngkaGenap(100);

function star(bintang) {
  for (let i = 1; i <= bintang; i++) {
    let gambar = "";
    for (let j = 1; j <= i; j++) {
      //   console.log(j);
      gambar += "*";
    }
    console.log(gambar);
  }
}

star(5);
