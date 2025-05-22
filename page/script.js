fetch('brand.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.cardbrand');
    data.forEach((brand, index) => {
      const brandCard = document.createElement('div');
      brandCard.classList.add('logocard');
      brandCard.style.setProperty('--position', index + 1);

      const img = document.createElement('img');
      img.src = brand.img;
      img.alt = brand.name;
      img.style.width = brand.width;
      img.style.height = brand.height;
      if (brand.marginBottom) img.style.marginBottom = brand.marginBottom;
      if (brand.marginTop) img.style.marginTop = brand.marginTop;

      const name = document.createElement('p');
      name.textContent = brand.name;

      brandCard.appendChild(img);
      brandCard.appendChild(name);
      container.appendChild(brandCard);
    });
  })
  .catch(error => {
    console.error('Error loading brand data:', error);
  });
