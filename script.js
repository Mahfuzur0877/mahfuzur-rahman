// Skill bar animation
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".bar div");
  bars.forEach(bar => {
    bar.style.width = bar.getAttribute("data-width");
  });
});

// Scroll reveal animation
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(r => {
    const windowHeight = window.innerHeight;
    const elementTop = r.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      r.classList.add("active");
    }
  });
}

// Contact form (email redirect)
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your message will be sent via email.");
});
