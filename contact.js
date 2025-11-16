function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        question.setAttribute('aria-expanded', 'false');
        answer.setAttribute('aria-hidden', 'true');
        
        question.addEventListener('click', function() {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                    otherItem.querySelector('.faq-answer').setAttribute('aria-hidden', 'true');
                }
            });
            const isActive = item.classList.contains('active');
            item.classList.toggle('active');
            if (item.classList.contains('active')) {
                question.setAttribute('aria-expanded', 'true');
                answer.setAttribute('aria-hidden', 'false');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                question.setAttribute('aria-expanded', 'false');
                answer.setAttribute('aria-hidden', 'true');
                answer.style.maxHeight = '0';
            }
        });
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
}
function handleOrderForm(event) {
    event.preventDefault();
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="loading"></div> Mengirim...';
    submitBtn.disabled = true;
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const message = `Halo Seblak Dikzz! 🍜🔥%0A%0A*DATA PEMESANAN*%0A%0ANama: ${data.customerName}%0AWhatsApp: ${data.customerPhone}%0AAlamat: ${data.customerAddress}%0A%0A*DETAIL PESANAN*%0AMenu: ${data.seblakType}%0ALevel Pedas: ${data.spicyLevel}%0AJumlah: ${data.quantity} porsi%0A%0A*PEMBAYARAN*%0AMetode: ${data.paymentMethod}%0A%0ACatatan: ${data.additionalNotes || 'Tidak ada catatan'}%0A%0ASaya ingin memesan dengan data di atas, bisa diproses?`;
    setTimeout(() => {
        window.open(`https://wa.me/6285185084941?text=${message}`, '_blank');
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }, 500);
}
function quickOrderItem(itemName, price) {
    const message = `Halo Seblak Dikzz! 🍜🔥%0A%0ASaya ingin memesan:%0A*${itemName}*%0AHarga: ${price}%0A%0ABisa info kan cara pemesanan dan estimasi pengirimannya?%0A%0ATerima kasih! 😊`;
    window.open(`https://wa.me/6285185084941?text=${message}`, '_blank');
}
document.addEventListener('DOMContentLoaded', function() {
    initFAQ();
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderForm);
    }
    const buttons = document.querySelectorAll('.btn-order-small, .order-btn, .faq-question');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('focus', function() {
            this.style.fontSize = '16px';
        });
    });
});
function quickOrder() {
    const message = `Halo Seblak Dikzz! 🍜🔥%0A%0ASaya ingin memesan seblak, bisa tolong infokan menu yang tersedia hari ini?%0A%0ATerima kasih! 😊`;
    window.open(`https://wa.me/6285185084941?text=${message}`, '_blank');
}