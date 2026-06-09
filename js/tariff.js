// 1. Проверяем сохраненную тему оформления
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// 2. Получаем тип тарифа из GET-параметра строки URL
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get('type') || 'vizitka';

// 3. База данных тарифов
const tariffData = {
    vizitka: {
        title: 'Сайт-визитка',
        badge: 'Старт',
        price: 'от 4 900 ₽',
        desc: 'Идеальное решение для быстрого старта в сети. Лаконичный одностраничный сайт, который презентует ваши услуги, расскажет о преимуществах и соберет первые контакты клиентов.',
        color: '#33ccff',
        shadow: 'rgba(51, 204, 255, 0.3)',
        features: [
            { icon: '✨', text: 'Уникальный минималистичный веб-дизайн' },
            { icon: '📱', text: 'Полная адаптивность под смартфоны и планшеты' },
            { icon: '⚡', text: 'Высокая скорость загрузки страниц' },
            { icon: '📝', text: 'Удобная форма обратной связи или кнопка Telegram/WhatsApp' },
            { icon: '🔍', text: 'Базовая SEO-оптимизация для индексации в Яндекс' }
        ],
        shapes: {
            sphere: { top: '15%', left: '10%', width: '130px', height: '130px', filter: 'none' },
            donut: { top: '20%', right: '12%', width: '90px', height: '90px', filter: 'blur(3px)' },
            blob: { bottom: '15%', left: '14%', width: '100px', height: '100px', filter: 'blur(2px)' },
            crystal: { bottom: '18%', right: '10%', width: '110px', height: '110px', filter: 'none' }
        }
    },
    corp: {
        title: 'Корпоративный',
        badge: 'Бизнес',
        price: 'от 14 900 ₽',
        desc: 'Полноценный многостраничный сайт компании. Формирует статус бренда, подробно рассказывает о каталоге услуг, содержит блоги, галереи и сложные интерактивные элементы взаимодействия.',
        color: '#ff3366',
        shadow: 'rgba(255, 51, 102, 0.3)',
        features: [
            { icon: '💎', text: 'Премиальный дизайн, разработанный под вашу нишу' },
            { icon: '📂', text: 'Разветвленная структура страниц (О компании, Услуги, Отзывы)' },
            { icon: '📊', text: 'Интеграция интерактивных карт, калькуляторов стоимости' },
            { icon: '🔐', text: 'Подключение систем аналитики (Яндекс Метрика)' },
            { icon: '🚀', text: 'Первичная оптимизация текстов под поисковые запросы' }
        ],
        shapes: {
            donut: { top: '14%', left: '12%', width: '120px', height: '120px', filter: 'none', borderWidth: '26px' },
            crystal: { top: '22%', right: '15%', width: '90px', height: '90px', filter: 'blur(2px)' },
            sphere: { bottom: '18%', left: '10%', width: '110px', height: '110px', filter: 'blur(1px)' },
            blob: { bottom: '12%', right: '12%', width: '140px', height: '140px', filter: 'none' }
        }
    },
    shop: {
        title: 'Интернет-магазин',
        badge: 'Максимум',
        price: 'от 24 900 ₽',
        desc: 'Мощный инструмент для онлайн-торговли. Полноценный каталог товаров, автоматизированные корзины покупок, интеграция платежных систем и личные кабинеты для ваших покупателей.',
        color: '#b800ff',
        shadow: 'rgba(184, 0, 255, 0.3)',
        features: [
            { icon: '🛒', text: 'Каталог с фильтрацией, поиском и умной корзиной' },
            { icon: '💳', text: 'Подключение онлайн-оплаты (СБП, карты, ЮKassa)' },
            { icon: '📦', text: 'Синхронизация заказов с Telegram-уведомлениями или CRM' },
            { icon: '📈', text: 'Удобная панель управления для добавления товаров' },
            { icon: '🛡️', text: 'Повышенная безопасность персональных данных и SSL' }
        ],
        shapes: {
            blob: { top: '16%', left: '15%', width: '120px', height: '120px', filter: 'blur(1px)' },
            sphere: { top: '18%', right: '10%', width: '130px', height: '130px', filter: 'none' },
            crystal: { bottom: '14%', left: '11%', width: '100px', height: '100px', filter: 'none' },
            donut: { bottom: '20%', right: '15%', width: '95px', height: '95px', filter: 'blur(2px)' }
        }
    }
};

const current = tariffData[type] || tariffData.vizitka;

// 4. Наполнение текстового контента на странице
document.getElementById('title').innerText = current.title;
document.getElementById('badge').innerText = current.badge;
document.getElementById('price').innerHTML = current.price + ' <span>/ под ключ</span>';
document.getElementById('desc').innerText = current.desc;

// Настройка внешнего вида бейджа (тега) тарифа
const badgeEl = document.getElementById('badge');
badgeEl.style.backgroundColor = current.color + '20';
badgeEl.style.color = current.color;

// Кастомизация кнопки при наведении (эффект тени)
const actionBtn = document.getElementById('actionBtn');
actionBtn.style.backgroundColor = current.color;
actionBtn.onmouseenter = () => actionBtn.style.boxShadow = `0 12px 28px ${current.shadow}`;
actionBtn.onmouseleave = () => actionBtn.style.boxShadow = '0 10px 25px rgba(26, 21, 58, 0.1)';

// Генерация списка преимуществ (features)
const listEl = document.getElementById('features');
current.features.forEach(f => {
    const li = document.createElement('li');
    li.className = 'feature-item';
    li.innerHTML = `<span class="feature-icon">${f.icon}</span><span>${f.text}</span>`;
    listEl.appendChild(li);
});

// Навигационные функции
function handleBack() {
    window.close();
}

function goToOrderForm() {
    window.location.href = `contact.html?tariff=${type}`;
}

// 5. Динамическое позиционирование и запуск анимации 3D-фигур
window.addEventListener('DOMContentLoaded', () => {
    const shapes = {
        sphere: document.getElementById('shapeSphere'),
        blob: document.getElementById('shapeBlob'),
        donut: document.getElementById('shapeDonut'),
        crystal: document.getElementById('shapeCrystal')
    };

    const config = current.shapes;

    setTimeout(() => {
        document.body.classList.add('loaded');
        
        Object.keys(shapes).forEach(key => {
            const el = shapes[key];
            const cfg = config[key];
            
            if(cfg.top) el.style.top = cfg.top;
            if(cfg.bottom) { el.style.top = 'auto'; el.style.bottom = cfg.bottom; }
            if(cfg.left) el.style.left = cfg.left;
            if(cfg.right) { el.style.left = 'auto'; el.style.right = cfg.right; }
            
            el.style.width = cfg.width;
            el.style.height = cfg.height;
            el.style.filter = cfg.filter;
            if(key === 'donut' && cfg.borderWidth) el.style.borderWidth = cfg.borderWidth;
        });

        setTimeout(() => {
            Object.keys(shapes).forEach(key => shapes[key].classList.add('animated'));
        }, 1400);

    }, 100);
});