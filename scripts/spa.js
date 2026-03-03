export function initSPA() {
  const app = document.getElementById("app");
  if (!app) return;

  const navLinks = document.querySelectorAll("nav a");

  const routes = {
    "/": "home.html",
    "/developer": "developer.html",
    "/study": "study.html",
    "/work": "work.html",
    "/hobbies": "hobbies.html",
  };

  function getPath() {
    const hash = location.hash || "#/";
    return hash.replace("#", "");
  }

  function updateActiveLink(activePath) {
    navLinks.forEach(link => {
      const linkPath = link.getAttribute("href").replace("#", "");
      link.classList.toggle("active", linkPath === activePath);
    });
  }

  async function loadPage() {
    const path = getPath();
    const file = routes[path] ?? "404.html";

    try {
      const response = await fetch(`./pages/${file}`);
      if (!response.ok) throw new Error("Erro ao carregar página");

      const html = await response.text();
      app.innerHTML = html;

      updateActiveLink(path);

      document.title =
        file === "404.html"
          ? "404 - Página não encontrada"
          : "AllForOne";

    } catch (error) {
      console.error(error);
      app.innerHTML = "<h3>Erro ao carregar página</h3>";
    }
  }

  window.addEventListener("hashchange", loadPage);

  if (!location.hash) location.hash = "#/";

  loadPage();
};