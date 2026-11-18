/* Interactive Portfolio Script by Nguyen Kiet */
document.addEventListener("DOMContentLoaded", function() {
  console.log("Portfolio interactive features initialized for Nguyen Kiet.");
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
