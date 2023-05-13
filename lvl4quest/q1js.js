const arrow = document.getElementById('arrow_next');
const variants = document.querySelectorAll('[data-variant]');

variants.forEach(item => {
    item.addEventListener('click', () => {
        variants.forEach(variant => {
            if (variant !== item) {
                variant.classList.remove('active');
            }
        });
        item.classList.add('active');
        if (variants[0].classList.contains('medved') && variants[0].classList.contains('active')) {
            arrow.classList.remove('not_active');
            arrow.addEventListener('click', () => {
                window.location.href = 'Q2.html';
            });
        } else {
            arrow.classList.add('not_active');
        }
    });
});


// тут я даже не знаю как обьяснить, дикимии костылями заставляем все работать. проще через радио
// такое делать, но мы не ищем легких путей(но лучше делайте через радио)