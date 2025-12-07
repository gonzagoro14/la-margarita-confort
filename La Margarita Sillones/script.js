// =======================
// MENÚ MOBILE
// =======================
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu   = document.getElementById('mobileMenu');
const mobileClose  = document.getElementById('mobileClose');

if (mobileToggle && mobileMenu && mobileClose) {
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });

    mobileClose.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });

    // cerrar menú al tocar un link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
}

// =======================
// GALERÍA PRODUCTO (SOHO)
// =======================
const mainImg = document.querySelector('.product-main-img');
const thumbs  = document.querySelectorAll('.product-thumb');

if (mainImg && thumbs.length) {
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            mainImg.src = thumb.src;

            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
}
