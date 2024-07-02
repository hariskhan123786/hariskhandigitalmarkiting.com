// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate service cards on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Dynamic copyright year
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Digital Marketing Agency. All rights reserved by M.Haris Khan.`;

    // Form validation (assuming you add a contact form later)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form validation logic here
            console.log('Form submitted');
        });
    }

    // Mobile menu toggle (for responsive design)
    const menuToggle = document.createElement('button');
    menuToggle.textContent = '☰';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('nav').prepend(menuToggle);

    menuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });
});
// main.js

document.addEventListener('DOMContentLoaded', function() {
    // Service card functionality
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        // Add click event to each card
        card.addEventListener('click', function() {
            // Toggle an 'active' class for styling
            this.classList.toggle('active');

            // Find the description paragraph
            const description = this.querySelector('p');

            // Toggle expanded description
            if (this.classList.contains('active')) {
                const fullDescription = getFullDescription(this.querySelector('h3').textContent);
                description.textContent = fullDescription;
            } else {
                description.textContent = getShortDescription(this.querySelector('h3').textContent);
            }
        });

        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Function to get full description (you can customize these)
    function getFullDescription(service) {
        const descriptions = {
            "SEO Optimization": "Our SEO optimization service includes keyword research, on-page optimization, link building, and continuous monitoring to improve your website's search engine rankings. We use cutting-edge techniques to increase your online visibility and drive organic traffic.",
            "Social Media Marketing": "Our social media marketing strategies are tailored to your brand's voice and target audience. We create engaging content, manage your social media accounts, run targeted ads, and analyze performance to maximize your social media presence and engagement.",
            "Content Marketing": "Our content marketing service focuses on creating valuable, relevant, and consistent content to attract and retain a clearly defined audience. We develop comprehensive content strategies, create high-quality content across various formats, and distribute it effectively to boost your brand authority and drive conversions."
        };
        return descriptions[service] || "Detailed description coming soon.";
    }

    // Function to get short description (original descriptions)
    function getShortDescription(service) {
        const descriptions = {
            "SEO Optimization": "Boost your website's visibility in search results.",
            "Social Media Marketing": "Engage with your audience across popular platforms.",
            "Content Marketing": "Create compelling content that drives conversions."
        };
        return descriptions[service] || "Learn more about our services.";
    }

    // Smooth scrolling for navigation (keeping this from the previous script)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle (keeping this from the previous script)
    const menuToggle = document.createElement('button');
    menuToggle.textContent = '☰';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('nav').prepend(menuToggle);

    menuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Existing service card functionality
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
            const description = this.querySelector('p');
            if (this.classList.contains('active')) {
                const fullDescription = getFullDescription(this.querySelector('h3').textContent);
                description.textContent = fullDescription;
            } else {
                description.textContent = getShortDescription(this.querySelector('h3').textContent);
            }
        });

        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Function to get full description (you can customize these)
    function getFullDescription(service) {
        const descriptions = {
            "SEO Optimization": "Our SEO optimization service includes keyword research, on-page optimization, link building, and continuous monitoring to improve your website's search engine rankings. We use cutting-edge techniques to increase your online visibility and drive organic traffic.",
            "Social Media Marketing": "Our social media marketing strategies are tailored to your brand's voice and target audience. We create engaging content, manage your social media accounts, run targeted ads, and analyze performance to maximize your social media presence and engagement.",
            "Content Marketing": "Our content marketing service focuses on creating valuable, relevant, and consistent content to attract and retain a clearly defined audience. We develop comprehensive content strategies, create high-quality content across various formats, and distribute it effectively to boost your brand authority and drive conversions."
        };
        return descriptions[service] || "Detailed description coming soon.";
    }

    // Function to get short description (original descriptions)
    function getShortDescription(service) {
        const descriptions = {
            "SEO Optimization": "Boost your website's visibility in search results.",
            "Social Media Marketing": "Engage with your audience across popular platforms.",
            "Content Marketing": "Create compelling content that drives conversions."
        };
        return descriptions[service] || "Learn more about our services.";
    }

    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.textContent = '☰';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('nav').prepend(menuToggle);

    menuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });

    // New: Skill items animation
    const skillItems = document.querySelectorAll('.skill-item');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });

    // New: Testimonial slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;

    function showSlide(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialSlides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    showSlide(currentSlide); // Show initial slide
});document.addEventListener('DOMContentLoaded', function() {
    // Existing service card functionality
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
            const description = this.querySelector('p');
            if (this.classList.contains('active')) {
                const fullDescription = getFullDescription(this.querySelector('h3').textContent);
                description.textContent = fullDescription;
            } else {
                description.textContent = getShortDescription(this.querySelector('h3').textContent);
            }
        });

        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Function to get full description (you can customize these)
    function getFullDescription(service) {
        const descriptions = {
            "SEO Optimization": "Our SEO optimization service includes keyword research, on-page optimization, link building, and continuous monitoring to improve your website's search engine rankings. We use cutting-edge techniques to increase your online visibility and drive organic traffic.",
            "Social Media Marketing": "Our social media marketing strategies are tailored to your brand's voice and target audience. We create engaging content, manage your social media accounts, run targeted ads, and analyze performance to maximize your social media presence and engagement.",
            "Content Marketing": "Our content marketing service focuses on creating valuable, relevant, and consistent content to attract and retain a clearly defined audience. We develop comprehensive content strategies, create high-quality content across various formats, and distribute it effectively to boost your brand authority and drive conversions."
        };
        return descriptions[service] || "Detailed description coming soon.";
    }

    // Function to get short description (original descriptions)
    function getShortDescription(service) {
        const descriptions = {
            "SEO Optimization": "Boost your website's visibility in search results.",
            "Social Media Marketing": "Engage with your audience across popular platforms.",
            "Content Marketing": "Create compelling content that drives conversions."
        };
        return descriptions[service] || "Learn more about our services.";
    }

    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.textContent = '☰';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('nav').prepend(menuToggle);

    menuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });

    // New: Skill items animation
    const skillItems = document.querySelectorAll('.skill-item');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });

    // New: Testimonial slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;

    function showSlide(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        testimonialSlides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
    showSlide(currentSlide); // Show initial slide
});