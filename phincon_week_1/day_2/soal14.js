function konversiSuhu(suhu, jenis) {
  if (jenis == "C") {
    let Fahrenheit = (suhu * 9) / 5 + 32;
    console.log(Fahrenheit, "(Fahrenheit)");
  } else if (jenis === "F") {
    let Celcius = (5 / 9) * (suhu - 32);
    console.log(Celcius, "(Celcius)");
  }
}

// Ekspektasi hasil:
konversiSuhu(30, "C");
konversiSuhu(86, "F");
