// Smooth scrolling with offset to account for fixed header
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
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
  
  // Typing effect
  function typeText() {
    const text = "Aspiring Software Engineer";
    const typingText = document.getElementById('typing-text');
    let charIndex = 0;
  
    function type() {
      if (charIndex < text.length) {
        typingText.textContent = text.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 2000);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        typingText.textContent = text.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
      } else {
        setTimeout(type, 1000);
      }
    }
  
    type();
  }
  
  // Theme toggle
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
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
  
  // Initialize
  document.addEventListener('DOMContentLoaded', function() {
    // Set initial theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${savedTheme}-mode`);
    
    // Start typing effect
    typeText();
    
    // Add scroll reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('[data-aos]').forEach((el) => observer.observe(el));
  });
