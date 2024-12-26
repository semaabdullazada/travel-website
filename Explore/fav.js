const favData = JSON.parse(localStorage.getItem('favorites')) || [];
const favContainer = document.getElementById('favContainer');

favData.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('info-card');
  card.innerHTML = `
    <img src="${item.image}" alt="${item.country}">
    <h3>Ölkə: ${item.country}</h3>
    <p>Şəhər: ${item.city}</p>
    <p>Əhali: ${item.population}</p>
    <div class="buy-container">
      <button class="buy-button">Buy a ticket</button>
    </div>
  `;
  favContainer.appendChild(card);
});