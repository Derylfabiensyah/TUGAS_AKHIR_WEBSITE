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
