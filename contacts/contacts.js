// Функциональность для страницы контактов
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик отправки формы
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Простая валидация формы
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const submitBtn = this.querySelector('button[type="submit"]');
            
            let isValid = true;
            
            // Валидация имени
            if (nameInput.value.trim() === '') {
                showError(nameInput, 'Пожалуйста, введите ваше имя');
                isValid = false;
            } else {
                clearError(nameInput);
            }
            
            // Валидация email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                showError(emailInput, 'Пожалуйста, введите корректный email');
                isValid = false;
            } else {
                clearError(emailInput);
            }
            
            // Валидация сообщения
            if (messageInput.value.trim() === '') {
                showError(messageInput, 'Пожалуйста, введите сообщение');
                isValid = false;
            } else {
                clearError(messageInput);
            }
            
            if (isValid) {
                // Здесь обычно отправка данных на сервер
                // Для демонстрации просто покажем сообщение об успехе
                
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Сообщение отправлено';
                submitBtn.style.backgroundColor = 'var(--accent-color)';
                submitBtn.style.color = 'var(--primary-dark)';
                submitBtn.style.borderColor = 'var(--accent-color)';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                    submitBtn.style.borderColor = '';
                    submitBtn.disabled = false;
                    contactForm.reset();
                    
                    // Показать сообщение об успехе
                    showSuccessMessage('Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
                }, 3000);
            }
        });
    }
    
    // Функция для показа ошибки
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        
        // Удаляем старую ошибку, если есть
        const existingError = formGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Добавляем новую ошибку
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = '#ff6b6b';
        errorElement.style.fontSize = '0.85rem';
        errorElement.style.marginTop = '5px';
        errorElement.textContent = message;
        
        formGroup.appendChild(errorElement);
        input.style.borderColor = '#ff6b6b';
    }
    
    // Функция для очистки ошибки
    function clearError(input) {
        const formGroup = input.closest('.form-group');
        const existingError = formGroup.querySelector('.error-message');
        
        if (existingError) {
            existingError.remove();
        }
        
        input.style.borderColor = 'var(--border-color)';
    }
    
    // Функция для показа сообщения об успехе
    function showSuccessMessage(message) {
        // Создаем элемент сообщения
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.style.backgroundColor = 'rgba(104, 221, 37, 0.1)';
        successMessage.style.border = '1px solid var(--accent-color)';
        successMessage.style.borderRadius = '2px';
        successMessage.style.padding = '1rem';
        successMessage.style.marginTop = '1.5rem';
        successMessage.style.color = 'var(--accent-color)';
        successMessage.style.textAlign = 'center';
        successMessage.textContent = message;
        
        // Добавляем сообщение после формы
        contactForm.appendChild(successMessage);
        
        // Удаляем сообщение через 5 секунд
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
    
    // Анимация для контактных элементов
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 100 + index * 100);
    });
});