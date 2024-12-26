const dataContainer = document.getElementById('dataContainer');
const favoritesContainer = document.getElementById('favoritesContainer');
const seenCountries = new Set(); 

fetch('https://countriesnow.space/api/v0.1/countries/population/cities')
  .then(response => response.json()) 
  .then(data => {
    const results = data.data; 
    console.log(results);

    results.forEach(item => {
      if (!seenCountries.has(item.country)) {
        seenCountries.add(item.country); 
        const countryImageUrl = getCountryImageUrl(item.country);
        const countryInfo = document.createElement('div');
        countryInfo.classList.add('info-card');
        countryInfo.innerHTML = `
          <img src="${countryImageUrl}" alt="${item.country}">
          <h3>Ölkə: ${item.country}</h3>
          <p>Şəhər: ${item.city}</p>
          <p>Əhali: ${item.populationCounts[0].value}</p>
          <div class="buy-container">
            <button class="buy-button">Buy a ticket</button>
            <img src="./Photos/heart.png" alt="heart" class="favorites"> 
          </div>
        `;

        const favoriteIcon = countryInfo.querySelector('.favorites');
        favoriteIcon.addEventListener('click', () => {
          favoriteIcon.classList.toggle('added'); 
          if (favoriteIcon.classList.contains('added')) {
            favoriteIcon.src = './Photos/heart (1).png'; 
            const clone = countryInfo.cloneNode(true);
            clone.querySelector('.favorites').remove(); 
            favoritesContainer.appendChild(clone);
          } else {
            favoriteIcon.src = './Photos/heart.png';
            const items = favoritesContainer.querySelectorAll('.info-card');
            items.forEach(item => {
              if (item.innerHTML === countryInfo.innerHTML) {
                favoritesContainer.removeChild(item);
              }
            });
          }
        });
        dataContainer.appendChild(countryInfo);
      }
    });
  })
  .catch(error => {
    console.error('Xəta baş verdi:', error);
    dataContainer.innerHTML = '<p>Məlumat yüklənə bilmədi.</p>';
  });
  const favButton = document.querySelector('.fav-button');
  if (favButton) {
    favButton.addEventListener('click', function () {
      const favorites = [];
      const items = favoritesContainer.querySelectorAll('.info-card');
  
      items.forEach(item => {
        const image = item.querySelector('img').src;
        const country = item.querySelector('h3').textContent.replace('Ölkə: ', '');
        const city = item.querySelector('p:nth-child(3)').textContent.replace('Şəhər: ', '');
        const population = item.querySelector('p:nth-child(4)').textContent.replace('Əhali: ', '');
  
        favorites.push({ image, country, city, population });
      });
  
      localStorage.setItem('favorites', JSON.stringify(favorites));
  
      window.open('fav.html', '_blank');
    });
  }
  
function getCountryImageUrl(country) {
  const countryImages = {
    "Åland Islands": "./Photos/licensed-image.jpg",
    "Albania": "./Photos/licensed-image (1).jpg",
    "Algeria": "./Photos/2024-01-22.jpg",
    "American Samoa": "./Photos/IMG_20230902_103423192.jpg",
    "Andorra": "./Photos/licensed-image (2).jpg",
    "Anguilla": "./Photos/Anguilla.jpg",
    "Antigua and Barbuda": "./Photos/Antigua and Barbuda.jpg",
    "Argentina": "./Photos/Argentina.jpg",
    "Armenia": "./Photos/Armenia.jpg",
    "Aruba": "./Photos/Aruba.jpg",
    "Australia": "./Photos/Australia.jpg",
    "Austria": "./Photos/Austria.jpg",
    "Bahrain": "./Photos/Bahrain.jpg",
    "Azerbaijan": "./Photos/Azerbaijan.jpg",
    "Bahamas": "./Photos/Bahamas.jpg",
    "Bangladesh": "./Photos/Bangladesh.jpg",
    "Barbados": "./Photos/Barbados.jpg",
    "Belarus": "./Photos/Belarus.jpg",
    "Belgium": "./Photos/Belgium.jpg",
    "Bermuda": "./Photos/Bermuda.jpg",
    "Bhutan": "./Photos/Bhutan.jpg",
    "Bolivia (Plurinational State of)": "./Photos/Bolivia.jpg",
    "Bosnia and Herzegovina": "./Photos/Bosnia_and_Herzegovina.jpg",
    "Botswana": "./Photos/Botswana.jpg",
    "Brazil": "./Photos/Brazil.jpg",
    "British Virgin Islands": "./Photos/British_Virgin_Islands.jpg",
    "Brunei Darussalam": "./Photos/Brunei.jpg",
    "Bulgaria": "./Photos/Bulgaria.jpg",
    "Burkina Faso": "./Photos/Burkina_Faso.jpg",
    "Burundi": "./Photos/Burundi.jpg",
    "Cabo Verde": "./Photos/Cabo_Verde.jpg",
    "Cameroon": "./Photos/Cameroon.jpg",
    "Canada": "./Photos/Canada.jpg",
    "Cayman Islands": "./Photos/Cayman_Islands.jpg",
    "Central African Republic": "./Photos/Central_African_Republic.jpg",
    "Chad": "./Photos/Chad.jpg",
    "Chile": "./Photos/Chile.jpg",
    "China": "./Photos/China.jpg",
    "China, Hong Kong SAR": "./Photos/Hong_Kong.jpg",
    "Colombia": "./Photos/Colombia.jpg",
    "China, Macao SAR": "./Photos/Macao SAR.jpg",
    "Comoros": "./Photos/Comoros.jpg",
    "Congo": "./Photos/Congo.jpg",
    "Cook Islands": "./Photos/Cook_Islands.jpg",
    "Costa Rica": "./Photos/Costa_Rica.jpg",
    "Côte d'Ivoire": "./Photos/c.jpg",
    "Croatia": "./Photos/Croatia.jpg",
    "Cuba": "./Photos/Cuba.jpg",
    "Czech Republic": "./Photos/Czech_Republic.jpg",
    "Democratic People's Republic of Korea": "./Photos/North_Korea.jpg",
    "Denmark": "./Photos/Denmark.jpg",
    "Dominica": "./Photos/Dominica.jpg",
    "Dominican Republic": "./Photos/Dominican_Republic.jpg",
    "Ecuador": "./Photos/Ecuador.jpg",
    "Egypt": "./Photos/Egypt.jpg",
    "El Salvador": "./Photos/El_Salvador.jpg",
    "Equatorial Guinea": "./Photos/Equatorial_Guinea.jpg",
    "Eritrea": "./Photos/Eritrea.jpg",
    "Estonia": "./Photos/Estonia.jpg",
    "Faeroe Islands": "./Photos/Faeroe_Islands.jpg",
    "Falkland Islands (Malvinas)": "./Photos/Falkland_Islands.jpg",
    "Fiji": "./Photos/Fiji.jpg",
    "Finland": "./Photos/Finland.jpg",
    "France": "./Photos/France.jpg",
    "French Guiana": "./Photos/French_Guiana.jpg",
    "French Polynesia": "./Photos/French_Polynesia.jpg",
    "Gabon": "./Photos/Gabon.jpg",
    "Gambia": "./Photos/Gambia.jpg",
    "Georgia": "./Photos/Georgia.jpg",
    "Germany": "./Photos/Germany.jpg",
    "Ghana": "./Photos/Ghana.jpg",
    "Gibraltar": "./Photos/Gibraltar.jpg",
    "Greece": "./Photos/Greece.jpg",
    "Greenland": "./Photos/Greenland.jpg",
    "Grenada": "./Photos/Grenada.jpg",
    "Guadeloupe": "./Photos/Guadeloupe.jpg",
    "Guam": "./Photos/Guam.jpg",
    "Guatemala": "./Photos/Guatemala.jpg",
    "Guernsey": "./Photos/Guernsey.jpg",
    "Guinea": "./Photos/Guinea.jpg",
    "Guinea-Bissau": "./Photos/Guinea-Bissau.jpg",
    "Guyana": "./Photos/Guyana.jpg",
    "Holy See": "./Photos/Holy_See.jpg",
    "Honduras": "./Photos/Honduras.jpg",
    "Hungary": "./Photos/Hungary.jpg",
    "Iceland": "./Photos/Iceland.jpg",
    "India": "./Photos/India.jpg",
    "Indonesia": "./Photos/Indonesia.jpg",
    "Iran (Islamic Republic of)": "./Photos/Iran.jpg",
    "Iraq": "./Photos/Iraq.jpg",
    "Ireland": "./Photos/Ireland.jpg",
    "Isle of Man": "./Photos/Isle_of_Man.jpg",
    "Israel": "./Photos/Israel.jpg",
    "Italy": "./Photos/Italy.jpg",
    "Jamaica": "./Photos/Jamaica.jpg",
    "Japan": "./Photos/Japan.jpg",
    "Jersey": "./Photos/Jersey.jpg",
    "Jordan": "./Photos/Jordan.jpg",
    "Kazakhstan": "./Photos/Kazakhstan.jpg",
    "Kenya": "./Photos/Kenya.jpg",
    "Kiribati": "./Photos/Kiribati.jpg",
    "Kuwait": "./Photos/Kuwait.jpg",
    "Kyrgyzstan": "./Photos/Kyrgyzstan.jpg",
    "Lao People's Democratic Republic": "./Photos/Laos.jpg",
    "Latvia": "./Photos/Latvia.jpg",
    "Lebanon": "./Photos/Lebanon.jpg",
    "Lesotho": "./Photos/Lesotho.jpg",
    "Liberia": "./Photos/Liberia.jpg",
    "Liechtenstein": "./Photos/Liechtenstein.jpg",
    "Lithuania": "./Photos/Lithuania.jpg",
    "Luxembourg": "./Photos/Luxembourg.jpg",
    "Madagascar": "./Photos/Madagascar.jpg",
    "Malawi": "./Photos/Malawi.jpg",
    "Malaysia": "./Photos/Malaysia.jpg",
    "Maldives": "./Photos/Maldives.jpg",
    "Malta": "./Photos/Malta.jpg",
    "Marshall Islands": "./Photos/Marshall_Islands.jpg",
    "Martinique": "./Photos/Martinique.jpg",
    "Mauritania": "./Photos/Mauritania.jpg",
    "Mauritius": "./Photos/Mauritius.jpg",
    "Mexico": "./Photos/Mexico.jpg",
    "Micronesia (Federated States of)": "./Photos/Micronesia.jpg",
    "Monaco": "./Photos/Monaco.jpg",
    "Mongolia": "./Photos/Mongolia.jpg",
    "Montenegro": "./Photos/Montenegro.jpg",
    "Montserrat": "./Photos/Montserrat.jpg",
    "Mozambique": "./Photos/Mozambique.jpg",
    "Myanmar": "./Photos/Myanmar.jpg",
    "Namibia": "./Photos/Namibia.jpg",
    "Nauru": "./Photos/Nauru.jpg",
    "Nepal": "./Photos/Nepal.jpg",
    "Netherlands": "./Photos/Netherlands.jpg",
    "New Caledonia": "./Photos/New_Caledonia.jpg",
    "New Zealand": "./Photos/New_Zealand.jpg",
    "Nicaragua": "./Photos/Nicaragua.jpg",
    "Niger": "./Photos/Niger.jpg",
    "Nigeria": "./Photos/Nigeria.jpg",
    "Niue": "./Photos/Niue.jpg",
    "Northern Mariana Islands": "./Photos/Northern_Mariana_Islands.jpg",
    "Norway": "./Photos/Norway.jpg",
    "Oman": "./Photos/Oman.jpg",
    "Pakistan": "./Photos/Pakistan.jpg",
    "Palau": "./Photos/Palau.jpg",
    "Papua New Guinea": "./Photos/Papua_New_Guinea.jpg",
    "Paraguay": "./Photos/Paraguay.jpg",
    "Peru": "./Photos/Peru.jpg",
    "Philippines": "./Photos/Philippines.jpg",
    "Pitcairn": "./Photos/Pitcairn.jpg",
    "Poland": "./Photos/Poland.jpg",
    "Portugal": "./Photos/Portugal.jpg",
    "Puerto Rico": "./Photos/Puerto_Rico.jpg",
    "Qatar": "./Photos/Qatar.jpg",
    "Republic of Korea": "./Photos/South_Korea.jpg",
    "Republic of Moldova": "./Photos/Moldova.jpg",
    "Republic of South Sudan": "./Photos/South_Sudan.jpg",
    "Réunion": "./Photos/Reunion.jpg",
    "Romania": "./Photos/Romania.jpg",
    "Russian Federation": "./Photos/Russia.jpg",
    "Rwanda": "./Photos/Rwanda.jpg",
    "Saint Helena ex. dep.": "./Photos/Saint_Helena.jpg",
    "Saint Kitts and Nevis": "./Photos/Saint_Kitts_and_Nevis.jpg",
    "Saint Lucia": "./Photos/Saint_Lucia.jpg",
    "Saint Pierre and Miquelon": "./Photos/Saint_Pierre_and_Miquelon.jpg",
    "Saint Vincent and the Grenadines": "./Photos/Saint_Vincent_and_the_Grenadines.jpg",
    "Samoa": "./Photos/Samoa.jpg",
    "San Marino": "./Photos/San_Marino.jpg",
    "Sao Tome and Principe": "./Photos/Sao_Tome_and_Principe.jpg",
    "Saudi Arabia": "./Photos/Saudi_Arabia.jpg",
    "Senegal": "./Photos/Senegal"
  };

  return countryImages[country] || "https://source.unsplash.com/250x150/?world"; 
}
