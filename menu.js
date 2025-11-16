function orderWhatsApp(itemName, price) {
    const phoneNumber = "+6285185084941";
    const message = `Halo Seblak Dikzz! 🍜\n\nSaya ingin memesan:\n\n📦 *${itemName}*\n💵 ${price}\n\nBisa info lebih lanjut tentang menu ini?`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
function quickOrder() {
    const phoneNumber = "+6285185084941";
    const message = "Halo Seblak Dikzz! 🍜\n\nSaya ingin bertanya tentang menu dan pemesanan. Bisa dibantu?";
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true
    });
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categorySections = document.querySelectorAll('.category-section');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            categorySections.forEach(section => {
                if (filterValue === 'all' || section.getAttribute('data-category') === filterValue) {
                    section.style.display = 'block';
                    const items = section.querySelectorAll('[data-aos]');
                    items.forEach(item => {
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 50);
                    });
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
    window.enhancedOrder = function(itemName, price, description = '') {
        const phoneNumber = "+6285185084941";
        let message = `Halo Seblak Dikzz! 🍜\n\n`;
        message += `Saya ingin memesan:\n\n`;
        message += `📦 *${itemName}*\n`;
        message += `💵 ${price}\n`;
        
        if (description) {
            message += `📝 ${description}\n`;
        }
        
        message += `\nBisa info:\n`;
        message += `• Estimasi waktu pengiriman\n`;
        message += `• Level pedas yang tersedia\n`;
        message += `• Opsi pembayaran\n\n`;
        message += `Terima kasih! 🙏`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const menuItem = this.closest('.menu-item');
            const itemName = menuItem.querySelector('h3').textContent;
            const price = menuItem.querySelector('.price').textContent;
            const description = menuItem.querySelector('p').textContent;
            
            enhancedOrder(itemName, price, description);
        });
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    document.querySelectorAll('.btn, .order-btn, .cta-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const originalText = this.innerHTML;
            this.innerHTML = '<div class="loading"></div> Memproses...';
            this.disabled = true;
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
    window.addToCart = function(itemName, price) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--primary);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <strong>${itemName}</strong> ditambahkan ke keranjang!
        `;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    };
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.menu-overlay').forEach(overlay => {
                overlay.style.opacity = '0';
            });
        }
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .menu-item {
            transition: all 0.3s ease;
        }
        
        .order-btn {
            transition: all 0.3s ease;
        }
        
        .filter-btn {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});
window.bulkOrder = function() {
    const phoneNumber = "+6285185084941";
    const message = `Halo Seblak Dikzz! 🍜\n\nSaya ingin melakukan pemesanan dalam jumlah banyak untuk:\n\n`;
    message += `• Acara kantor\n`;
    message += `• Pesta ulang tahun\n`;
    message += `• Catering harian\n\n`;
    message += `Bisa minta info tentang:\n`;
    message += `• Harga khusus untuk pesanan besar\n`;
    message += `• Minimum order\n`;
    message += `• Waktu pengerjaan\n`;
    message += `• Opsi pengiriman\n\n`;
    message += `Terima kasih! 🙏`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
};

window.customOrder = function() {
    const phoneNumber = "+6285185084941";
    const message = `Halo Seblak Dikzz! 🍜\n\nSaya ingin melakukan pesanan custom dengan spesifikasi:\n\n`;
    message += `• Level pedas: \n`;
    message += `• Topping tambahan: \n`;
    message += `• Kebutuhan khusus: \n`;
    message += `• Catatan lain: \n\n`;
    message += `Bisa dibantu untuk harga dan ketersediaannya?`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
};