// Efecto suave al hacer scroll (opcional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Confirmación WhatsApp
document.querySelector('.whatsapp-btn').addEventListener('click', function() {
    alert('Serás redirigido a WhatsApp para realizar tu pedido');
});
