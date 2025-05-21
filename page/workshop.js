// fetch('workshop.json')
//   .then(response => response.json())
//   .then(data => {
//     const item = data[2];

//     document.getElementById('foto').src = item.foto;
//     document.getElementById('judul').textContent = item.judul;
//     document.getElementById('isi').innerHTML = item.isi;
//   })
//   .catch(error => console.error('Gagal memuat data:', error));

fetch('workshop.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('workshop-container');

    data.forEach(item => {
      // Buat elemen wrapper
      const contentDiv = document.createElement('div');
      contentDiv.className = 'content';

      // Buat elemen gambar
      const img = document.createElement('img');
      img.src = item.foto;
      img.alt = item.judul;

      // Buat elemen teks
      const textDiv = document.createElement('div');
      textDiv.className = 'workshoptext';

      const title = document.createElement('h1');
      title.textContent = item.judul;

      const desc = document.createElement('p');
      desc.innerHTML = item.isi; // gunakan innerHTML karena ada <br>

      // Susun struktur elemen
      textDiv.appendChild(title);
      textDiv.appendChild(desc);

      contentDiv.appendChild(img);
      contentDiv.appendChild(textDiv);

      // Tambahkan ke container
      container.appendChild(contentDiv);
    });
  })
  .catch(error => console.error('Gagal memuat data:', error));
