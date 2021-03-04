let tanya = true;
while ( tanya ){  
  alert('program memasukan angka positif dan negatif')
  let angka = parseInt(prompt('masukan angka'))

  if (angka >= 0) {
    alert('angka ini positif');
  } else if (angka == 0) {
    alert('angka ini adalah 0');
  } else if (angka < 0) {
    alert('angka ini adalah negatif');
  } else {
    alert('ini bukan angka');
  }
  tanya = confirm('apakah anda mau memasukan ulang?');
} 
alert('terimakasi');
