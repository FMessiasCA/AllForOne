// scripts/toggle.js

export function initAsideToggle() {
  const asideToggle = document.getElementById('asideToggle');
  const aside = document.querySelector('aside');

  const savedState = localStorage.getItem('aside-open');

  if (savedState === 'true') {
    aside.classList.add('open');
    document.body.classList.add('aside-open');
    asideToggle.classList.replace('fa-bars', 'fa-xmark');
  }

  asideToggle.addEventListener('click', (e) => {
    e.preventDefault();

    aside.classList.toggle('open');
    document.body.classList.toggle('aside-open');

    const isOpen = aside.classList.contains('open');

    asideToggle.classList.toggle('fa-bars', !isOpen);
    asideToggle.classList.toggle('fa-xmark', isOpen);

    localStorage.setItem('aside-open', isOpen);
  });
}

/* const asideToggle = document.getElementById('asideToggle');
const aside = document.querySelector('aside');

const savedState = localStorage.getItem('aside-open');

if (savedState === 'true') {
  aside.classList.add('open');
  document.body.classList.add('aside-open');
  asideToggle.classList.replace('fa-bars', 'fa-xmark');
}

asideToggle.addEventListener('click', (e) => {
    e.preventDefault();

    aside.classList.toggle('open');
    document.body.classList.toggle('aside-open');

     const isOpen = aside.classList.contains('open');

    if ( isOpen ) {
        asideToggle.classList.replace('fa-bars', 'fa-xmark');
    } else {
        asideToggle.classList.replace('fa-xmark', 'fa-bars');
    };

    localStorage.setItem('aside-open', isOpen);
}); */