// Funcționalitate pentru zoom imagine
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('zoomedImage');
    const closeBtn = document.querySelector('.close');
    
    // Adăugăm event listeners pentru toate imaginile clickable
    const clickableImages = document.querySelectorAll('.winner-image, .popularity-image, .podium-image');
    
    clickableImages.forEach(img => {
        img.addEventListener('click', function() {
            const imgSrc = this.querySelector('img') ? this.querySelector('img').src : this.src;
            modal.style.display = 'block';
            modalImg.src = imgSrc;
        });
    });
    
    // Închidere modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Închidere modal cu click în afara imaginii
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Închidere modal cu tasta ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
    
    // Touch optimization pentru dispozitive mobile
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // Prevent default pentru butoanele PDF pe touch
        const pdfLinks = document.querySelectorAll('.pdf-list a');
        pdfLinks.forEach(link => {
            link.addEventListener('touchstart', function() {
                this.classList.add('touch-optimized');
            });
            
            link.addEventListener('touchend', function() {
                this.classList.remove('touch-optimized');
            });
        });
    }
});