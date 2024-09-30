// Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('form');
    
    bookingForm.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const guests = document.getElementById('guests').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        if (!name || !email || !guests || !date || !time) {
            alert("All fields are required.");
            event.preventDefault();
        } else if (guests < 1 || guests > 20) {
            alert("Please select between 1 to 20 guests.");
            event.preventDefault();
        }
    });
});