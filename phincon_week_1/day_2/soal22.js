function hitungJumlahHari(tanggal1, tanggal2) {
  let tanggalPertama = new Date(tanggal1);
  let tanggalKedua = new Date(tanggal2);

  let bedaWaktu = tanggalKedua.getTime() - tanggalPertama.getTime();
  let bedaHari = bedaWaktu / (1000 * 60 * 60 * 24);
  return bedaHari;
}

console.log(hitungJumlahHari("2023-01-01", "2023-12-31"));
