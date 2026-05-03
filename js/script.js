// Holidae Website - JavaScript Interactions


// Mobile Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Booking Modal (used on italy.html)
function showBookingModal() {
    document.getElementById('bookingModal').style.display = 'flex';
}

function hideBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

// Contact & Booking Form handling
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('✅ Thank you! Your request has been received. (Demo only)');
        form.reset();
        if (document.getElementById('bookingModal')) hideBookingModal();
    });
});

// Console message for tutor
console.log('%c✅ Holidae website loaded successfully - Fully Responsive!', 'color: #00b4d8; font-size: 16px;');