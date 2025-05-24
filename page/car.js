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

fetch('car.json')
  .then(response => response.json())
  .then(data => {
    const viewCarContainer = document.querySelector('.viewcar');

    const groupedCars = {};

    data.forEach(car => {
      if (!groupedCars[car.group]) {
        groupedCars[car.group] = [];
      }
      groupedCars[car.group].push(car);
    });

    Object.keys(groupedCars).sort((a, b) => a - b).forEach(group => {
      const cardGroup = document.createElement('div');
      cardGroup.classList.add('card1');

      groupedCars[group].forEach(car => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.classList.add('imagecar');
        img.src = car.img;
        img.alt = car.name;

        const title = document.createElement('h2');
        title.textContent = car.name;

        card.appendChild(img);
        card.appendChild(title);
        cardGroup.appendChild(card);
      });

      viewCarContainer.appendChild(cardGroup);
    });
  })
  .catch(error => {
    console.error('Error loading car data:', error);
  });
