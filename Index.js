const radioButtons = document.querySelectorAll('input[type="radio"]');
const totalPrice = document.getElementById('totalPrice');


radioButtons.forEach(button => {
    button.addEventListener('change', function() {
        const unitCount = parseInt(this.value, 10);
        if (unitCount === 1) {
            totalPrice.innerText = '10.00';
        } else if (unitCount === 2) {
            totalPrice.innerText = '18.00';
        } else if (unitCount === 3) {
            totalPrice.innerText = '24.00';
        }

        // Show/hide size-color sections
        radioButtons.forEach(radio => {
            radio.parentElement.classList.remove('active');
        });
        this.parentElement.classList.add('active');

        
    });
});
