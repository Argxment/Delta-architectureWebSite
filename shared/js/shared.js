// Общие функции для всех страниц
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация активной ссылки в навигации
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('href').split('/').pop();
            
            if (currentPage === '' || currentPage === 'index.html') {
                if (linkPage === 'index.html' || linkPage === '') {
                    link.classList.add('active');
                }
            } else if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    }
    
    setActiveNavLink();
    
    // Анимация появления контента при загрузке
    const mainContent = document.querySelector('main');
    if (mainContent && !mainContent.id === 'home') {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        mainContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 100);
    }
});