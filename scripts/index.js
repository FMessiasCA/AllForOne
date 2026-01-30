const asideToggle = document.getElementById('asideToggle');
const aside = document.querySelector('aside');

asideToggle.addEventListener('click', (e) => {
    e.preventDefault();

    aside.classList.toggle('open');
    document.body.classList.toggle('aside-open');

    if ( aside.classList.contains('open') ) {
        asideToggle.classList.replace('fa-bars', 'fa-xmark');
    } else {
        asideToggle.classList.replace('fa-xmark', 'fa-bars');
    }
});