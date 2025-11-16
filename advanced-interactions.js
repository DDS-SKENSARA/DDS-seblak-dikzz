document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .nav-link { color: #FFFFFF !important; }
        .nav-link:hover { color: #FFC107 !important; }
        .nav-link.active { color: #FFC107 !important; }
        .navbar { background: rgba(229, 57, 53, 0.95) !important; }
    `;
    document.head.appendChild(style);
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});