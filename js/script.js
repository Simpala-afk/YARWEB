// ПРОВЕРКА ТЕМЫ ИЗ LOCALSTORAGE ДО ЗАГРУЗКИ DOM
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// ПЕРЕКЛЮЧЕНИЕ СТРАНИЦ
function showPage(pageId) {
    document.body.setAttribute('data-page', pageId);
    
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const activeNavItem = document.getElementById('btn-' + pageId);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
}

// УПРАВЛЕНИЕ ЛИД-ФОРМОЙ
function openLeadForm() { 
    const nameInput = document.getElementById('clientName');
    const phoneInput = document.getElementById('clientPhone');
    nameInput.value = '';
    phoneInput.value = '';
    nameInput.classList.remove('invalid-field');
    phoneInput.classList.remove('invalid-field');
    document.getElementById('leadModalOverlay').classList.add('open');
}

function closeLeadModal() { 
    document.getElementById('leadModalOverlay').classList.remove('open'); 
}

function submitForm() {
    const nameInput = document.getElementById('clientName');
    const phoneInput = document.getElementById('clientPhone');
    let hasError = false;

    if (nameInput.value.trim() === "") {
        nameInput.classList.add('invalid-field');
        hasError = true;
    } else {
        nameInput.classList.remove('invalid-field');
    }

    if (phoneInput.value.trim() === "") {
        phoneInput.classList.add('invalid-field');
        hasError = true;
    } else {
        phoneInput.classList.remove('invalid-field');
    }

    if (hasError) {
        alert('Пожалуйста, заполните все обязательные поля!');
        return;
    }

    alert('Заявка успешно отправлена!');
    closeLeadModal();
}

// УПРАВЛЕНИЕ КАРТОЙ
function openMap() { document.getElementById('mapOverlay').classList.add('open'); }
function closeMap() { document.getElementById('mapOverlay').classList.remove('open'); }

// ИНТЕРАКТИВ С КАРТИНКАМИ (ПРЕИМУЩЕСТВА)
function switchFeature(index, color) {
    document.querySelectorAll('.feature-item-row').forEach((row, idx) => {
        if (idx === (index - 1)) { row.classList.add('active'); } else { row.classList.remove('active'); }
    });
    const frame = document.getElementById('imageFrame');
    if (frame) { frame.style.setProperty('--frame-color', color); }
    document.querySelectorAll('.big-image-frame img').forEach(img => img.classList.remove('visible'));
    const activeImg = document.getElementById('feat-img-' + index);
    if (activeImg) { activeImg.classList.add('visible'); }
}

// СМЕНА ТЕМЫ СТРАНИЦЫ
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('themeBtn');
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeBtn.innerHTML = '☀️';
        themeBtn.style.background = 'linear-gradient(135deg, #ffea00, #ff5e3a)';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.innerHTML = '🌙';
        themeBtn.style.background = 'linear-gradient(135deg, #ff3366, #ff5e3a)';
        localStorage.setItem('theme', 'light');
    }
}