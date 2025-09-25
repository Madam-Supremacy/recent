// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form handling (demo: alert on submit)
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (this.checkValidity()) {
    alert('Booking submitted! We\'ll contact you soon. (Demo - integrate with backend for real submission.)');
    this.reset();
  } else {
    alert('Please fill in all required fields.');
  }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (this.checkValidity()) {
    alert('Message sent! Thanks for reaching out. (Demo)');
    this.reset();
  } else {
    alert('Please fill in all required fields.');
  }
});