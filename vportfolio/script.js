// Smooth scrolling with offset to account for fixed header
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80; // Height of the fixed header plus some padding
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Form handling
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Clear form
    this.reset();
    alert('Thank you for your message! I will get back to you soon.');
  });