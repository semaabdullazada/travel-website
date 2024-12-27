const dataContainer = document.getElementById('dataContainer');
const favoritesContainer = document.getElementById('favoritesContainer');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('search');
const seenCountries = new Set();
const goTicket = document.querySelector('.buy-button');

const ticketPrices = {
  "Azerbaijan": "$200",
  "Turkey": "$150",
  "USA": "$500",
  "Åland Islands": "$300",
  "Albania": "$540",
  "Algeria": "$230",
  "American Samoa": "$310",
  "Andorra": "$340",
  "Anguilla": "$540",
  "Antigua and Barbuda": "$210",
  "Argentina": "$400",
  "Armenia": "$120",
  "Aruba": "$230",
  "Australia": "$340",
  "Austria": "$390",
  "Bahrain": "$312",
  "Azerbaijan": "$320",
  "Bahamas": "$340",
  "Bangladesh": "$370",
  "Barbados": "$210",
  "Belarus": "$530",
  "Belgium": "$540",
  "Bermuda": "$200",
  "Bhutan": "$540",
  "Bolivia (Plurinational State of)": "$650",
  "Bosnia and Herzegovina": "$700",
  "Botswana": "$700",
  "Brazil": "$200",
  "British Virgin Islands": "$350",
  "Brunei Darussalam": "$370",
  "Bulgaria": "$320",
  "Burkina Faso": "$320",
  "Burundi": "$300",
  "Cabo Verde": "$200",
  "Cameroon": "$400",
  "Canada": "$540",
  "Cayman Islands": "$545",
  "Central African Republic": "$310",
  "Chad": "$343",
  "Chile": "$320",
  "China": "$360",
  "China, Hong Kong SAR": "$370",
  "Colombia": "$310",
  "China, Macao SAR": "$400",
  "Comoros": "$360",
  "Congo": "$310",
  "Cook Islands": "$306",
  "Costa Rica": "$340",
  "Côte d'Ivoire": "$230",
  "Croatia": "$400",
  "Cuba": "$550",
  "Czech Republic": "$440",
  "Democratic People's Republic of Korea": "$320",
  "Denmark": "$340",
  "Dominica": "$370",
  "Dominican Republic": "$320",
  "Ecuador": "$350",
  "Egypt": "$370",
  "El Salvador": "$360",
  "Equatorial Guinea": "$300",
  "Eritrea": "$300",
  "Estonia": "$500",
  "Faeroe Islands": "$600",
  "Falkland Islands (Malvinas)": "$700",
  "Fiji": "$300",
  "Finland": "$300",
  "France": "$300",
  "French Guiana": "$700",
  "French Polynesia": "$700",
  "Gabon": "$300",
  "Gambia": "$300",
  "Georgia": "$300",
  "Germany": "$400",
  "Ghana": "$700",
  "Gibraltar": "$300",
  "Greece": "$300",
  "Greenland": "$300",
  "Grenada": "$300",
  "Guadeloupe": "$700",
  "Guam": "$300",
  "Guatemala": "$300",
  "Guernsey": "$300",
  "Guinea": "$700",
  "Guinea-Bissau": "$700",
  "Guyana": "$300",
  "Holy See": "$600",
  "Honduras": "$700",
  "Hungary": "$300",
  "Iceland": "$350",
  "India": "$370",
  "Indonesia": "$300",
  "Iran (Islamic Republic of)": "$300",
  "Iraq": "$2100",
  "Ireland": "$340",
  "Isle of Man": "$360",
  "Israel": "$330",
  "Italy": "$376",
  "Jamaica": "$370",
  "Japan": "$302",
  "Jersey": "$354",
  "Jordan": "$306",
  "Kazakhstan": "$360",
  "Kenya": "$320",
  "Kiribati": "$400",
  "Kuwait": "$200",
  "Kyrgyzstan": "$350",
  "Lao People's Democratic Republic": "$300",
  "Latvia": "$350",
  "Lebanon": "$350",
  "Lesotho": "$307",
  "Liberia": "$308",
  "Liechtenstein": "$310",
  "Lithuania": "$3050",
  "Luxembourg": "$3050",
  "Madagascar": "$360",
  "Malawi": "$305",
  "Malaysia": "$350",
  "Maldives": "$320",
  "Malta": "$360",
  "Marshall Islands": "$300",
  "Martinique": "$360",
  "Mauritania": "$360",
  "Mauritius": "$300",
  "Mexico": "$300",
  "Micronesia (Federated States of)": "$300",
  "Monaco": "$300",
  "Mongolia": "$300",
  "Montenegro": "$300",
  "Montserrat": "$360",
  "Mozambique": "$320",
  "Myanmar": "$430",
  "Namibia": "$320",
  "Nauru": "$120",
  "Nepal": "$540",
  "Netherlands": "$400",
  "New Caledonia": "$320",
  "New Zealand": "$1200",
  "Nicaragua": "$320",
  "Niger": "$364",
  "Nigeria": "$300",
  "Niue": "$200",
  "Northern Mariana Islands": "$310",
  "Norway": "$380",
  "Oman": "$400",
  "Pakistan": "$600",
  "Palau": "$100",
  "Papua New Guinea": "$200",
  "Paraguay": "$400",
  "Peru": "$100",
  "Philippines": "$600",
  "Pitcairn": "$200",
  "Poland": "$370",
  "Portugal": "$320",
  "Puerto Rico": "$360",
  "Qatar": "$340",
  "Republic of Korea": "$100",
  "Republic of Moldova": "$330",
  "Republic of South Sudan": "$120",
  "Réunion": "$330",
  "Romania": "$350",
  "Russian Federation": "$400",
  "Rwanda": "$340",
  "Saint Helena ex. dep.": "$650",
  "Saint Kitts and Nevis": "$700",
  "Saint Lucia": "$540",
  "Saint Pierre and Miquelon": "$240",
  "Saint Vincent and the Grenadines": "$340",
  "Samoa": "$200",
  "San Marino": "$760",
  "Sao Tome and Principe": "$350",
  "Saudi Arabia": "$500",
  "Senegal": "$300",
};


fetch('https://countriesnow.space/api/v0.1/countries/population/cities')
  .then(response => response.json())
  .then(data => {
    const results = data.data;
    displayCountries(results.slice(0, 2090));
    
    searchButton.addEventListener('click', () => {
      const query = searchInput.value.toLowerCase();
      const filteredResults = results.filter(item => 
        item.country.toLowerCase().includes(query) || item.city.toLowerCase().includes(query)
      );

      displayCountries(filteredResults.slice(0, 50))
    });
  })
  .catch(error => {
    console.error('Xəta baş verdi:', error);
    dataContainer.innerHTML = '<p>Məlumat yüklənə bilmədi.</p>';
  });

function displayCountries(results) {
  dataContainer.innerHTML = ''; 
  seenCountries.clear();

  results.forEach(item => {
    if (!seenCountries.has(item.country)) {
      seenCountries.add(item.country);
      const countryImageUrl = getCountryImageUrl(item.country);
      const ticketPrice = ticketPrices[item.country] || "Qiymət məlum deyil"; 

      const countryInfo = document.createElement('div');
      countryInfo.classList.add('info-card');
      countryInfo.innerHTML = `
        <img src="${countryImageUrl}" alt="${item.country}">
        <h3>Ölkə: ${item.country}</h3>
        <p>Şəhər: ${item.city}</p>
        <p>Əhali: ${item.populationCounts[0].value}</p>
        <div class="buy-container">
          <button class="buy-button">Buy a ticket (${ticketPrice})</button>
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
}

document.querySelector('.fav-button').addEventListener('click', function() {
  window.open('fav.html', '_blank');
});
 

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

