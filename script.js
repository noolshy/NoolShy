// Функция для обработки ошибок загрузки аватарки
function handleAvatarError(img) {
    console.log('⚠️ Аватарка не найдена');
    img.style.background = '#222';
    img.style.display = 'flex';
    img.style.alignItems = 'center';
    img.style.justifyContent = 'center';
    img.innerHTML = '<i class="fas fa-user" style="color:#666; font-size:2.5rem;"></i>';
}

// Анимация аватарки
function initAvatarAnimation() {
    const avatar = document.getElementById('avatar');
    if (!avatar) return;
    
    if (avatar.complete && avatar.naturalHeight === 0) {
        handleAvatarError(avatar);
    }
    
    avatar.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        
        const glow = document.querySelector('.avatar-glow');
        if (glow) {
            glow.style.opacity = '0.8';
            glow.style.animation = 'glowPulse 0.5s infinite alternate';
        }
    });
    
    avatar.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        
        const glow = document.querySelector('.avatar-glow');
        if (glow) {
            glow.style.opacity = '0.5';
            glow.style.animation = 'glowPulse 3s infinite alternate';
        }
    });
}

// Основная инициализация
document.addEventListener('DOMContentLoaded', function() {
    console.log('⚡ Неоновая тема активирована');
    
    initAvatarAnimation();
    initGlitchEffects();
    
    // Инициализация эффектов статуса
    const statusDot = document.querySelector('.status-dot');
    if (statusDot) {
        setInterval(() => {
            statusDot.style.boxShadow = `
                0 0 ${10 + Math.random() * 5}px #fff,
                inset 0 0 ${3 + Math.random() * 3}px #000
            `;
        }, 1000);
    }
    
    // Анимация никнейма
    const nickname = document.querySelector('.nickname');
    if (nickname) {
        setInterval(() => {
            nickname.style.textShadow = `
                0 0 ${8 + Math.random() * 8}px rgba(255, 255, 255, ${0.5 + Math.random() * 0.3}),
                0 0 ${25 + Math.random() * 15}px rgba(255, 255, 255, ${0.3 + Math.random() * 0.2})
            `;
        }, 2000);
    }
});

// Эффекты глитча
function initGlitchEffects() {
    const glitchElements = document.querySelectorAll('.nickname, .description-text');
    
    glitchElements.forEach(el => {
        setInterval(() => {
            if (Math.random() > 0.96) {
                const glitchDuration = 80 + Math.random() * 150;
                
                el.style.transform = `translateX(${(Math.random() - 0.5) * 1.5}px)`;
                el.style.opacity = '0.85';
                
                setTimeout(() => {
                    el.style.transform = '';
                    el.style.opacity = '';
                }, glitchDuration);
            }
        }, 2500);
    });
}