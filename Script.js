// JavaScript for handling interactive toggles
const toggleCurrency = document.getElementById('toggleCurrency');
const prices = document.querySelectorAll('.price h1');

toggleCurrency.addEventListener('change', () => {
    prices.forEach(price => {
        if (toggleCurrency.checked) {
            price.textContent = price.textContent.replace('$', '₹');
            price.textContent = price.textContent.replace('10', '399');
            price.textContent = price.textContent.replace('20', '599');
            price.textContent = price.textContent.replace('30', '799');
        } else {
            price.textContent = price.textContent.replace('₹', '$');
            price.textContent = price.textContent.replace('399', '10');
            price.textContent = price.textContent.replace('599', '20');
            price.textContent = price.textContent.replace('799', '30');
        }
    });
});