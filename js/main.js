// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Interactive elements effect
const interactiveElements = document.querySelectorAll('a, button, .service-tab, .floating-btn, input, textarea');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = 'rgba(255, 165, 0, 0.8)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.2)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'rgba(255, 165, 0, 0.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Interactive Background Animation
const interactiveBg = document.getElementById('interactiveBg');
const bgCircles = document.querySelectorAll('.bg-circle');

interactiveBg.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    bgCircles.forEach((circle, index) => {
        const speed = (index + 1) * 0.1;
        const newX = x * 100 * speed;
        const newY = y * 100 * speed;
        
        circle.style.transform = `translate(calc(-50% + ${newX}px), calc(-50% + ${newY}px))`;
    });
});

interactiveBg.addEventListener('mouseleave', () => {
    bgCircles.forEach(circle => {
        circle.style.transform = 'translate(-50%, -50%)';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const serviceTabs = document.querySelectorAll('.service-tab');
    const serviceContents = document.querySelectorAll('.service-content');

    serviceTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            serviceTabs.forEach(t => t.classList.remove('active'));
            serviceContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Show corresponding content
            const target = this.getAttribute('data-service');
            const content = document.getElementById(target + '-content');
            if(content) {
                content.classList.add('active');
            }
        });
    });
});

// Brain Particle Animation
const brainParticles = document.getElementById('brain-particles');
const particleCount = 30;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position within brain container
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    
    // Random size
    const size = Math.random() * 6 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random animation
    const duration = Math.random() * 10 + 5;
    const delay = Math.random() * 5;
    
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    
    brainParticles.appendChild(particle);
}

// Add floating animation to particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translate(0, 0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Booking Modal
const bookNowBtn = document.getElementById('book-now-btn');
const bookingModal = document.getElementById('booking-modal');
const closeModal = document.getElementById('close-modal');

bookNowBtn.addEventListener('click', (e) => {
    e.preventDefault();
    bookingModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    bookingModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});



// Close modal when clicking outside
bookingModal.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
        bookingModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Animate brain section on scroll
const brainSection = document.querySelector('.brain-section');
const brainAnimation = document.querySelector('.brain-animation');

const animateOnScroll = () => {
    const sectionTop = brainSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.75) {
        brainAnimation.style.transform = 'scale(1.1)';
        brainAnimation.style.transition = 'transform 0.5s ease';
        
        // Trigger particle animation
        document.querySelectorAll('.particle').forEach(particle => {
            particle.style.animationPlayState = 'running';
        });
    }
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Check on load