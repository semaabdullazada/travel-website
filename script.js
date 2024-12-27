const form = document.querySelector(".login-form");
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#mail');
const successM = document.querySelector('.sucsessMessage');
const failMessage = document.querySelector('.failMessage');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

  if (name.length === 0) {
    alert('Adınızı daxil edin!');
    failMessage.style.display = "none";
    successM.style.display = "none";
    return;
  }

 
  if (email.length === 0) {
    alert('Email daxil edin!');
    failMessage.style.display = "none";
    successM.style.display = "none";
    return;
  } else if (!emailRegex.test(email)) {
    failMessage.style.display = "block"; 
    successM.style.display = 'none';
    return;
  }

 
  failMessage.style.display = "none";
  successM.style.display = 'block'; 
  alert("Form uğurla göndərildi!"); 

  form.reset(); 
});
