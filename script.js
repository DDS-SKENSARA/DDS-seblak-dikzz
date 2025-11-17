AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 61, 0, 0.98)';
            navbar.style.backdropFilter = 'blur(30px)';
        } else {
            navbar.style.background = 'rgba(255, 61, 0, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    }
});

function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        const cleanHref = linkHref.replace('.html', '');
        const cleanCurrent = currentPage.replace('.html', '');
        
        if (cleanHref === cleanCurrent || (cleanCurrent === '' && cleanHref === 'index')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
function orderWhatsApp(itemName, price) {
    const message = `Halo Seblak Dikzz! 🍜🔥%0A%0ASaya ingin memesan:%0A*${itemName}*%0AHarga: ${price}%0A%0ABisa info kan cara pemesanan dan estimasi pengirimannya?%0A%0ATerima kasih! 😊`;
    window.open(`https://wa.me/message/Z7XNBUWPS4CPD1?text=${message}`, '_blank');
}

function quickOrder() {
    const message = `Halo Seblak Dikzz! 🍜🔥%0A%0ASaya ingin memesan seblak, bisa tolong infokan menu yang tersedia hari ini?%0A%0ATerima kasih! 😊`;
    window.open(`https://wa.me/message/Z7XNBUWPS4CPD1?text=${message}`, '_blank');
}
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
function initCustomCursor() {
    if (window.innerWidth < 768) return;
    
    const cursor = document.createElement('div');
    const cursorFollower = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorFollower.className = 'cursor-follower';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    const interactiveElements = document.querySelectorAll(
        'button, a, .menu-item, .feature-card, .btn, .nav-link, .order-btn'
    );
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.background = 'var(--primary)';
            cursorFollower.style.transform = 'scale(1.5)';
            cursorFollower.style.opacity = '0.5';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'var(--secondary)';
            cursorFollower.style.transform = 'scale(1)';
            cursorFollower.style.opacity = '1';
        });
    });
}
function initLoadingStates() {
    const buttons = document.querySelectorAll('.btn, .order-btn, .cta-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.href || this.onclick) {
                const originalText = this.innerHTML;
                this.innerHTML = '<div class="loading"></div>';
                this.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.pointerEvents = 'auto';
                }, 2000);
            }
        });
    });
}
function updateFooterYear() {
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = `&copy; ${currentYear} Seblak Dikzz. All rights reserved. | Designed with ❤️ for culinary innovation`;
    }
}
function initParallax() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavigation();
    initCustomCursor();
    initLoadingStates();
    updateFooterYear();
    initParallax();
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            scrollTimeout = null;
        }, 10);
    }
});
window.addEventListener('error', (e) => {
    console.log('Error occurred:', e.error);
});
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check' : 'info'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}
const notificationStyles = `
    .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--dark);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: var(--radius-lg);
        padding: var(--space-md);
        box-shadow: var(--shadow-xl);
        transform: translateX(400px);
        transition: transform 0.3s ease;
        z-index: 10000;
        max-width: 400px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        border-left: 4px solid var(--success);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        color: var(--white);
    }
    
    .notification-content i {
        color: var(--success);
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});
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
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .menu-item, .hero-stats .stat-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn, .order-btn, .cta-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.href || this.onclick) {
                const originalText = this.innerHTML;
                this.innerHTML = '<div class="loading"></div>';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            }
        });
    });
});
function initWhatsAppFloat() {
    const navCta = document.querySelector('.nav-cta');
    if (navCta) {
        navCta.style.display = 'none';
    }
    const whatsappFloat = document.createElement('a');
    whatsappFloat.href = 'https://wa.me/message/Z7XNBUWPS4CPD1';
    whatsappFloat.target = '_blank';
    whatsappFloat.className = 'whatsapp-float';
    whatsappFloat.innerHTML = '<i class="fab fa-whatsapp"></i>';
        whatsappFloat.setAttribute('title', 'Pesan Sekarang via WhatsApp');
    
    document.body.appendChild(whatsappFloat);
}
function adjustValueCardsGap() {
    const valueCards = document.querySelectorAll('.value-card, .feature-card');
    valueCards.forEach(card => {
        card.style.marginBottom = 'var(--space-lg)';
    });
    
    const valueSections = document.querySelectorAll('.values-section, .features');
    valueSections.forEach(section => {
        const grids = section.querySelectorAll('.features-grid, .values-grid');
        grids.forEach(grid => {
            grid.style.gap = 'var(--space-xl)';
            grid.style.marginBottom = 'var(--space-lg)';
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavigation();
    initCustomCursor();
    initLoadingStates();
    updateFooterYear();
    initParallax();
    initWhatsAppFloat();
    adjustValueCardsGap();
    
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
function initWhatsAppFloat() {
    const navCta = document.querySelector('.nav-cta');
    if (navCta) {
        navCta.style.display = 'none';
    }
    if (!document.querySelector('.whatsapp-float')) {
        const whatsappFloat = document.createElement('a');
        whatsappFloat.href = 'https://wa.me/6285185084941';
        whatsappFloat.target = '_blank';
        whatsappFloat.className = 'whatsapp-float';
        whatsappFloat.innerHTML = '<i class="fab fa-whatsapp"></i>';
        whatsappFloat.setAttribute('title', 'Pesan Sekarang via WhatsApp');
        whatsappFloat.setAttribute('aria-label', 'Pesan Sekarang via WhatsApp');
        
        document.body.appendChild(whatsappFloat);
    }
}
function quickOrder() {
    const message = `Halo Seblak Dikzz! 🍜🔥%0A%0ASaya ingin memesan seblak, bisa tolong infokan menu yang tersedia hari ini?%0A%0ATerima kasih! 😊`;
    window.open(`https://wa.me/6285185084941?text=${message}`, '_blank');
}

function orderWhatsApp(itemName, price) {
    const message = `Halo Seblak Dikzz! 🍜🔥%0A%0ASaya ingin memesan:%0A*${itemName}*%0AHarga: ${price}%0A%0ABisa info kan cara pemesanan dan estimasi pengirimannya?%0A%0ATerima kasih! 😊`;
    window.open(`https://wa.me/6285185084941?text=${message}`, '_blank');
}

function quickOrderItem(itemName, price) {
    const message = `Halo Seblak Dikzz! 🍜🔥%0A%0ASaya ingin memesan:%0A*${itemName}*%0AHarga: ${price}%0A%0ABisa info kan cara pemesanan dan estimasi pengirimannya?%0A%0ATerima kasih! 😊`;
    window.open(`https://wa.me/6285185084941?text=${message}`, '_blank');
}
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavigation();
    initCustomCursor();
    initLoadingStates();
    updateFooterYear();
    initParallax();
    initWhatsAppFloat();
    adjustValueCardsGap();
    
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});
