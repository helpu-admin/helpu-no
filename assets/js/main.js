// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll-triggered fade-in for section headers
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all section h2 headers
const sectionHeaders = document.querySelectorAll('.section h2');
sectionHeaders.forEach(header => {
  observer.observe(header);
});

// Observe all cards
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  // Add slight delay for staggered effect
  card.style.transitionDelay = `${index * 0.1}s`;
  observer.observe(card);
});
