const newsletterForm = document.getElementById('newsletter-form');
const emailInput = document.getElementById('newsletter-email');
const message = document.getElementById('newsletter-message');

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault(); // forhindrer siden i at reloade

    const email = emailInput.value.trim();

    // Enkel email-validering
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(email)) {
        message.textContent = "Tak for din tilmelding!";
        message.style.color = "green";
        message.style.display = "block";
        emailInput.value = ""; // ryd inputfelt
    } else {
        message.textContent = "Indtast en gyldig emailadresse";
        message.style.color = "red";
        message.style.display = "block";
    }


});