// scripts/main.js

// --- Core Logic & Theme ---
const html = document.documentElement;
const cursor = document.getElementById('cursor'); // Get cursor element once

function updateIcons(isDark) {
    document.querySelectorAll('.sun-icon').forEach(el => isDark ? el.classList.remove('hidden') : el.classList.add('hidden'));
    document.querySelectorAll('.moon-icon').forEach(el => isDark ? el.classList.add('hidden') : el.classList.remove('hidden'));
}

function checkTheme() {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
        updateIcons(true);
    } else {
        html.classList.remove('dark');
        updateIcons(false);
    }
}
checkTheme(); // Apply theme on script load

function toggleTheme() {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        updateIcons(false);
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateIcons(true);
    }
}
window.toggleTheme = toggleTheme; // Make it globally accessible for onclick events

// --- UI Interactions (Custom Cursor) ---
function attachCursorEvents() {
    if (!cursor) return; // Ensure cursor element exists
    document.querySelectorAll('a, button, .hover-trigger, input, select, textarea').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        if (cursor) {
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
            attachCursorEvents(); // Attach to initial elements
        }
    }
});
window.attachCursorEvents = attachCursorEvents; // Make it globally accessible for dynamic content

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// --- Loader Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('app-loader');
    if (!loader) return;
    const hasSeenLoader = sessionStorage.getItem('pioneer_loader_seen');
    const delay = hasSeenLoader ? 0 : 1200;
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        setTimeout(() => { loader.style.display = 'none'; }, 600);
        sessionStorage.setItem('pioneer_loader_seen', 'true');
    }, delay);
});
// Failsafe: บังคับปิดหลัง 5 วิ ไม่ว่าจะเกิดอะไร
setTimeout(() => {
    const loader = document.getElementById('app-loader');
    if (loader) { loader.style.opacity = '0'; loader.style.pointerEvents = 'none'; setTimeout(() => loader.style.display = 'none', 600); }
}, 5000);

// --- PWA & Version ---
document.addEventListener('DOMContentLoaded', () => {
    const versionEl = document.getElementById('app-version');
    if (versionEl) versionEl.innerText = "beta 0.10";

    let deferredPrompt;
    const installBtn = document.getElementById('install-pwa-btn');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (installBtn) installBtn.classList.remove('hidden');
    });

    if (installBtn) {
        installBtn.addEventListener('click', () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then(() => {
                    deferredPrompt = null;
                });
            }
            installBtn.classList.add('hidden'); // Hide button after prompt
        });
    }
});

// --- Scroll Reveal Animation ---
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Reveal once
            }
        });
    }, observerOptions);
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
});
