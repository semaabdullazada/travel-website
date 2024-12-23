// For About Us section
const addButtonAboutUs = document.querySelector('.add.aboutUs');
const aboutUsText = document.querySelector('.aboutUs');
aboutUsText.style.display = 'none'; // Initially hidden
addButtonAboutUs.addEventListener('click', () => {
  // Toggle between 'none' and 'block' display values
  if (aboutUsText.style.display === 'none' || aboutUsText.style.display === '') {
    aboutUsText.style.display = 'block';
  } else {
    aboutUsText.style.display = 'none';
  }
});

// For Our History section
const addButtonHistory = document.querySelector('.add.ourHistory');
const historyText = document.querySelector('.ourHistory');
historyText.style.display = 'none'; // Initially hidden
addButtonHistory.addEventListener('click', () => {
  // Toggle between 'none' and 'block' display values
  if (historyText.style.display === 'none' || historyText.style.display === '') {
    historyText.style.display = 'block';
  } else {
    historyText.style.display = 'none';
  }
});


function toggleDisplay(id) {
  var element = document.getElementById(id);
  if (element.style.display === "none") {
      element.style.display = "block"; // Show the content
  } else {
      element.style.display = "none"; // Hide the content
  }
}
