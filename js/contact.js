// 1. Проверка и установка темной темы при запуске
if (localStorage.getItem('theme') === 'dark') { 
    document.body.classList.add('dark-theme'); 
}

// 2. Считывание тарифа из URL для динамического изменения цвета кнопки и комментариев
const urlParams = new URLSearchParams(window.location.search);
const tariff = urlParams.get('tariff');

if (tariff) {
    const tariffConfig = {
        vizitka: { name: 'Сайт-визитка', color: '#33ccff' },
        corp: { name: 'Корпоративный сайт', color: '#ff3366' },
        shop: { name: 'Интернет-магазин', color: '#b800ff' }
    };

    const current = tariffConfig[tariff];
    if (current) {
        document.getElementById('formTitle').innerText = `Заявка на "${current.name}"`;
        document.getElementById('projectComment').value = `Здравствуйте! Меня интересует тариф "${current.name}".`;
        document.documentElement.style.setProperty('--accent-color', current.color);
    }
}

// 3. Анимация плавного появления элементов при загрузке
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => { document.body.classList.add('loaded'); }, 100);
});