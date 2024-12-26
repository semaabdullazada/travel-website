const addButtonAboutUs = document.querySelectorAll('.add');
const texts = document.querySelectorAll('.text');

addButtonAboutUs.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const text = texts[index];
    if (text.style.display === '' || text.style.display === 'none') {
      text.style.display = 'block';
      btn.src = './minus.png'; 
    } else {
      text.style.display = 'none';
      btn.src = './add.png'; 
    }
  });
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
