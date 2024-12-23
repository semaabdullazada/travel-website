const addButton = document.querySelector('.add');
const aboutUsText = document.querySelector('.aboutUs');
aboutUsText.style.display = 'none';
addButton.addEventListener('click', () => {
  if(aboutUsText.style.display === 'block'){
  aboutUsText.style.display = 'none';
  }else{
    aboutUsText.style.display = 'block';
  }
})