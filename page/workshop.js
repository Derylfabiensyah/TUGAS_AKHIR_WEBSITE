fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const item = data[2];

    document.getElementById('foto').src = item.foto;
    document.getElementById('judul').textContent = item.judul;
    document.getElementById('isi').innerHTML = item.isi;
  })
  .catch(error => console.error('Gagal memuat data:', error));
