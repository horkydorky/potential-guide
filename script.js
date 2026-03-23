// ===== Mobile Navigation Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavigation() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavigation);

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Journey Tabs Functionality =====
const journeyTabs = document.querySelectorAll('.journey-tab');
const journeyPanels = document.querySelectorAll('.journey-panel');

journeyTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetTab = tab.getAttribute('data-tab');
    
    // Remove active class from all tabs and panels
    journeyTabs.forEach(t => t.classList.remove('active'));
    journeyPanels.forEach(p => p.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding panel
    tab.classList.add('active');
    document.getElementById(targetTab).classList.add('active');
  });
});

// ===== Professional Experience Sidebar Navigation =====
const sidebarItems = document.querySelectorAll('.sidebar-item');
const companyPanels = document.querySelectorAll('.company-panel');

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetCompany = item.getAttribute('data-company');
    
    // Remove active class from all sidebar items and panels
    sidebarItems.forEach(i => i.classList.remove('active'));
    companyPanels.forEach(p => p.classList.remove('active'));
    
    // Add active class to clicked item and corresponding panel
    item.classList.add('active');
    document.getElementById(targetCompany).classList.add('active');
  });
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:adhikariyachana2@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    contactForm.reset();
    
    // Show success message (optional)
    alert('Thank you! Your default email client will open with the message.');
  });
}

// ===== Scroll to Top Button =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
  box-shadow: 0 4px 12px rgba(255, 140, 66, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrollTopBtn.style.opacity = '1';
    scrollTopBtn.style.visibility = 'visible';
  } else {
    scrollTopBtn.style.opacity = '0';
    scrollTopBtn.style.visibility = 'hidden';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

scrollTopBtn.addEventListener('mouseenter', () => {
  scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
  scrollTopBtn.style.transform = 'scale(1)';
});

// ===== Fade-in Animation on Scroll =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll(
    '.project-showcase-card, .research-card, .journey-card'
  );
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});

// ===== Console Message =====
console.log('%c👋 Hello there!', 'font-size: 18px; font-weight: bold; color: #ff8c42;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #666;');
console.log('%cFeel free to reach out: adhikariyachana2@gmail.com', 'font-size: 12px; color: #999;');
