const cat = document.getElementById('cat');
const line = document.getElementById('line');

// Обработчик клика на кота
cat.addEventListener('click', () => {
    alert('Кот прыгает!');

    // Получаем координаты клика для прыжка
    const rect = cat.getBoundingClientRect();
    const x1 = rect.left;
    const y1 = rect.top;
    const x2 = x1 + Math.floor(Math.random() * 200 + 50);
    const y2 = y1 - Math.floor(Math.random() * 200 + 50);

    // Анимация перемещения кота
    cat.style.transform = `translate(${x2 - rect.width/2}px, ${y2 - rect.height/2}px)`;
    
    // Рисуем линию на SVG для алгоритма Краскала
    line.innerHTML = `<line x1="${x1 + rect.width/2}" y1="${y1 + rect.height/2}" x2="${x2}" y2="${y2}"></line>`;
});