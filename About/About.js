const addButtonAboutUs = document.querySelector('.add.aboutUs');
const aboutUsText = document.querySelector('.aboutUs');
aboutUsText.style.display = 'none'; 
addButtonAboutUs.addEventListener('click', () => {
  if (aboutUsText.style.display === 'none' || aboutUsText.style.display === '') {
    aboutUsText.style.display = 'block';
  } else {
    aboutUsText.style.display = 'none';
  }
});

const addButtonHistory = document.querySelector('.add.ourHistory');
const historyText = document.querySelector('.ourHistory');
historyText.style.display = 'none'; 
addButtonHistory.addEventListener('click', () => {
  if (historyText.style.display === 'none' || historyText.style.display === '') {
    historyText.style.display = 'block';
  } else {
    historyText.style.display = 'none';
  }
});


function toggleDisplay(id) {
  var element = document.getElementById(id);
  if (element.style.display === "none") {
      element.style.display = "block"; 
  } else {
      element.style.display = "none"; 
  }
}
