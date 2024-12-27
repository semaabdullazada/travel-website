const eventSelect = document.getElementById('event');
const adultSelect = document.getElementById('adult');
const childSelect = document.getElementById('child');
const totalPrice = document.getElementById('total-price');
const backPage = document.querySelector('.back');
function goBack() {
    window.history.back();
}

backPage.addEventListener('click', goBack);

function calculatePrice() {
    const prices = {
        rio: { adult: 240, child: 40 },
        holi: { adult: 240, child: 90 },
        karaoke: { adult: 400, child: 50 },
        venice: { adult: 400, child: 40 },
        holi: { adult: 150, child: 90 },
        skydiving: { adult: 120, child: 70 }
    };

    const selectedEvent = eventSelect.value;
    const adultPrice = prices[selectedEvent].adult;
    const childPrice = prices[selectedEvent].child;

    const adults = parseInt(adultSelect.value);
    const children = parseInt(childSelect.value);

    const total = (adults * adultPrice) + (children * childPrice);
    totalPrice.textContent =   `$${total}`;
}

eventSelect.addEventListener('change', calculatePrice);
adultSelect.addEventListener('change', calculatePrice);
childSelect.addEventListener('change', calculatePrice);
calculatePrice();
 
