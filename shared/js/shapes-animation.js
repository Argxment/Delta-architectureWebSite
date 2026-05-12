// Создание и анимация геометрических фигур
function createGeometricShapes() {
    const container = document.getElementById('shapes-container');
    if (!container) return;
    
    const shapesCount = 15;
    const shapes = [];
    const shapeTypes = ['square', 'circle', 'triangle', 'rectangle', 'line'];
    
    // Создаем фигуры
    for (let i = 0; i < shapesCount; i++) {
        const shape = document.createElement('div');
        const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        
        shape.classList.add('geometric-shape', `shape-${shapeType}`);
        
        let width, height;
        switch(shapeType) {
            case 'square':
                width = height = Math.random() * 60 + 20;
                break;
            case 'circle':
                width = height = Math.random() * 70 + 20;
                shape.style.borderRadius = '50%';
                break;
            case 'triangle':
                width = height = Math.random() * 80 + 20;
                const size = width;
                const color = Math.random() > 0.5 ? 'var(--accent-color)' : 'var(--light-oak)';
                shape.style.width = '0';
                shape.style.height = '0';
                shape.style.borderLeft = `${size/2}px solid transparent`;
                shape.style.borderRight = `${size/2}px solid transparent`;
                shape.style.borderBottom = `${size}px solid ${color}`;
                shape.style.backgroundColor = 'transparent';
                shape.style.border = 'none';
                shape.style.opacity = '0.07';
                break;
            case 'rectangle':
                width = Math.random() * 100 + 30;
                height = Math.random() * 40 + 15;
                break;
            case 'line':
                width = Math.random() * 150 + 50;
                height = 1;
                break;
        }
        
        shape.style.width = `${width}px`;
        shape.style.height = `${height}px`;
        
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        shape.style.left = `${startX}%`;
        shape.style.top = `${startY}%`;
        
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        const rotationSpeed = (Math.random() - 0.5) * 0.5;
        
        shapes.push({
            element: shape,
            x: startX,
            y: startY,
            speedX: speedX,
            speedY: speedY,
            rotation: 0,
            rotationSpeed: rotationSpeed
        });
        
        container.appendChild(shape);
    }
    
    // Анимация движения фигур
    function animateShapes() {
        shapes.forEach(shapeData => {
            shapeData.x += shapeData.speedX;
            shapeData.y += shapeData.speedY;
            shapeData.rotation += shapeData.rotationSpeed;
            
            if (shapeData.x < -10) {
                shapeData.x = -10;
                shapeData.speedX = Math.abs(shapeData.speedX);
            }
            if (shapeData.x > 100) {
                shapeData.x = 100;
                shapeData.speedX = -Math.abs(shapeData.speedX);
            }
            if (shapeData.y < -10) {
                shapeData.y = -10;
                shapeData.speedY = Math.abs(shapeData.speedY);
            }
            if (shapeData.y > 100) {
                shapeData.y = 100;
                shapeData.speedY = -Math.abs(shapeData.speedY);
            }
            
            shapeData.element.style.left = `${shapeData.x}%`;
            shapeData.element.style.top = `${shapeData.y}%`;
            shapeData.element.style.transform = `rotate(${shapeData.rotation}deg)`;
            
            const opacity = 0.05 + Math.sin(Date.now() / 2000 + shapeData.x) * 0.05;
            shapeData.element.style.opacity = opacity;
        });
        
        requestAnimationFrame(animateShapes);
    }
    
    animateShapes();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    createGeometricShapes();
});