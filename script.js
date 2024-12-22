// document.addEventListener('DOMContentLoaded', () => {
//   const apiKey = 'H1Dlq31reazcGzPkz2A7jBk2tHEPpm2pPN26PegLxX4';
//   const countries = ['Italy', 'France', 'Spain', 'Germany', 'Turkey', 'Greece', 'Japan', 'Australia', 'Brazil', 'Canada'];

//   async function getCountryImages() {
//     for (const country of countries) {
//       try {
//         const response = await fetch(`https://api.unsplash.com/photos/random?query=${country}&client_id=${apiKey}&count=1`);
//         const data = await response.json();
//         console.log(data);
//         if (data && data.length > 0) {
//           const imageUrl = data[0].urls?.regular;  // Yalnız bir şəkil alınır
//           if (imageUrl) {
//             const countryContainer = document.createElement("div");
//             countryContainer.classList.add('country-container');
//             const countryTitle = document.createElement("h3");
//             countryTitle.textContent = country;
//             countryContainer.appendChild(countryTitle);

//             const slideshow = document.createElement("div");
//             slideshow.classList.add('slideshow-container');
            
//             const imgElement = document.createElement("img");
//             imgElement.src = imageUrl;
//             imgElement.alt = `${country} Image`;
//             imgElement.classList.add('slide');
//             slideshow.appendChild(imgElement);

//             // Şəkil üzərinə klikləyərək onu silmək
//             imgElement.addEventListener('click', () => {
//               imgElement.remove();  // Şəkili silirik
//             });

//             const container = document.querySelector('.container');
//             if (container) {
//               countryContainer.appendChild(slideshow);
//               container.appendChild(countryContainer);
//             } else {
//               console.error('.container elementi tapılmadı');
//             }
//           } else {
//             console.error(`${country} üçün şəkil URL-i tapılmadı`);
//           }
//         } else {
//           console.error(`${country} üçün şəkil alınmadı`);
//         }
//       } catch (error) {
//         console.error(`${country} üçün şəkil əldə edilərkən səhv baş verdi:`, error);
//       }
//     }
//   }

//   getCountryImages();
// });
// const sumbitMessage = document.querySelector('.subscribe');
// const inputValue = document.querySelector('.login');
// sumbitMessage.addEventListener('click',()=>{
//   if(inputValue.value.length > 0){
//     alert('ugurla gonderildi');
//   }
// })
const submitMessage = document.querySelector('.subscribe');
const inputValue = document.querySelector('.login');
const successM = document.querySelector('.sucsessMessage');
const failMessage = document.querySelector('.failMessage');
submitMessage.addEventListener('click', () => {
  const email = inputValue.value; 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  
  if (email.length === 0) {
    alert('Email daxil edin!');
  } else if (!emailRegex.test(email)) {
    failMessage.style.display = "block";
    return;
  } else {
    failMessage.style.display = "none";
    successM.style.display='block';
    // alert('Uğurla göndərildi!');
  }
});




const moreInfo1 = document.querySelector('.about1');
const moreInfo2 = document.querySelector('.about2');
const moreInfo3 = document.querySelector('.about3');
const moreInfo4 = document.querySelector('.about4');
const moreInfo5 = document.querySelector('.about5');
const moreInfo6 = document.querySelector('.about6');
const infoFestival1 = document.querySelector('.info-festival1');
const infoFestival2 = document.querySelector('.info-festival2');
const infoFestival3 = document.querySelector('.info-festival3');
const infoFestival4 = document.querySelector('.info-festival4');
const infoFestival5 = document.querySelector('.info-festival5');
const infoFestival6 = document.querySelector('.info-festival6');

infoFestival1.style.display = 'none';
moreInfo1.addEventListener('click', () => {
  if(infoFestival1.style.display === 'none'){
  infoFestival1.style.display = 'block';
  }else{
    infoFestival1.style.display = 'none';
  }
})

infoFestival2.style.display = 'none';
moreInfo2.addEventListener('click', () => {
  if(infoFestival2.style.display === 'none'){
  infoFestival2.style.display = 'block';
  }else{
    infoFestival2.style.display = 'none';
  }
})

infoFestival3.style.display = 'none';
moreInfo3.addEventListener('click', () => {
  if(infoFestival3.style.display === 'none'){
  infoFestival3.style.display = 'block';
  }else{
    infoFestival3.style.display = 'none';
  }
})

infoFestival4.style.display = 'none';
moreInfo4.addEventListener('click', () => {
  if(infoFestival4.style.display === 'none'){
  infoFestival4.style.display = 'block';
  }else{
    infoFestival4.style.display = 'none';
  }
})

infoFestival5.style.display = 'none';
moreInfo5.addEventListener('click', () => {
  if(infoFestival5.style.display === 'none'){
  infoFestival5.style.display = 'block';
  }else{
    infoFestival5.style.display = 'none';
  }
})

infoFestival6.style.display = 'none';
moreInfo6.addEventListener('click', () => {
  if(infoFestival6.style.display === 'none'){
  infoFestival6.style.display = 'block';
  }else{
    infoFestival6.style.display = 'none';
  }
})


const unsplashApiKey = 'Aybt5-f9Qr7iZ2o239OQDV1_0Dt2EolFWAacsOUJieY';
const url = "https://cors.bridged.cc/https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q6581097&props=labels|descriptions|claims|sitelinks&format=json";

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Burada məlumatı emal edə bilərsiniz.
    })
    .catch(error => console.error('Error:', error));
