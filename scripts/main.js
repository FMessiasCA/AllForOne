import { asideToggleButton } from './toggle.js';
import { clockAndCalendar } from './clockAndCalendar.js';

asideToggleButton();
clockAndCalendar();

/* SPA problem :) */
import { SPA, updateSelectedLink } from './spa.js';

const spa = new SPA('app');

spa.add('/', '/pages/home.html');
spa.add('/developerLab', '/pages/developerLab.html');
spa.add('/studyCamp', '/pages/studyCamp.html');
spa.add('/work', '/pages/work.html');
spa.add('/hobbies', '/pages/hobbies.html');

spa.start();

updateSelectedLink(window.location.pathname);

document.querySelectorAll('aside nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const path = link.getAttribute('href');

    spa.navigate(path);
    updateSelectedLink(path);
  });
});