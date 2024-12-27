document.querySelector('.contactForm').addEventListener('submit', function (e) { 
    e.preventDefault(); 
    const name = this.querySelector('[name="name"]');
    const email = this.querySelector('[name="email"]');
    const message = this.querySelector('[name="message"]');
 
    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill in all the fields.');
    } else { 
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    }
});
