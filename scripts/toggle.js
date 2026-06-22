export function asideToggleButton() {
    const aside = document.querySelector('aside');
    const asideToggle = document.getElementById('asideToggle');

    asideToggle.addEventListener('click', () => {
        aside.classList.toggle('asideClosed');
    });
}