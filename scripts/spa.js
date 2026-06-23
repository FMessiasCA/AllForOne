export class SPA {
    constructor(rootId) {
        this.root = document.getElementById(rootId);
        this.routes = {};
    };

    add(path, file) {
        this.routes[path] = file;
    };

    async render() {
        const path = window.location.pathname;
        const file = this.routes[path] || this.routes['/404'];

        const res = await fetch(file);
        const html = await res.text();

        this.root.innerHTML = html;
    };

    start() {
        window.addEventListener('popstate', () => {
              this.render();
              updateSelectedLink(window.location.pathname);
        });
        this.render();
    };

    navigate(path) {
        window.history.pushState({}, '', path);
        this.render();
    }
}

export function updateSelectedLink(path) {
    document.querySelectorAll('aside nav a').forEach(link => {
        link.classList.remove('selected');
    });

    const activeLink = document.querySelector(`aside nav a[href="${path}"]`);

    if (activeLink) {
        activeLink.classList.add('selected');
    }
}