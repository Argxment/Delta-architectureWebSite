// Функциональность для страницы команды
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для карточек команды
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('click', function() {
            // Здесь можно добавить функциональность для открытия детальной страницы члена команды
            console.log('Открыть детали члена команды:', this.querySelector('.member-name').textContent);
        });
    });
    
    // Анимация при наведении на фото члена команды
    const memberPhotos = document.querySelectorAll('.member-photo');
    
    memberPhotos.forEach(photo => {
        photo.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.05)';
        });
        
        photo.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
});