  const images = document.querySelectorAll('.carousel img');
  let index = 0;

  function showNextImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }

  // Tampilkan gambar pertama
  images[0].classList.add('active');

  // Ganti gambar tiap 3 detik
  setInterval(showNextImage, 3000);
