const themeToggle = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.dataset.theme = "dark";
    themeToggle.setAttribute("aria-pressed", "true");
}

themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";

    if (isDark) {
        delete document.documentElement.dataset.theme;
        themeToggle.setAttribute("aria-pressed", "false");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.dataset.theme = "dark";
        themeToggle.setAttribute("aria-pressed", "true");
        localStorage.setItem("theme", "dark");
    }
});

const projectsContent = document.querySelector("#projects-content");

const projects = [];

function renderProjects() {
    projectsContent.replaceChildren();

    if (projects.length === 0) {
        const emptyMessage = document.createElement("p");

        emptyMessage.textContent = "No projects available.";

        projectsContent.append(emptyMessage);
        return;
     } 

    projects.forEach((project) => {
        const article = document.createElement("article");
        const title = document.createElement("h3");
        const description = document.createElement("p");

        title.textContent = project.name;
        description.textContent = project.description;

        article.append(title, description);
        projectsContent.append(article);
    });
}

function retryProjects() {
  projectsContent.replaceChildren();

  const loadingMessage = document.createElement("p");
  loadingMessage.textContent = "Loading projects...";

  projectsContent.append(loadingMessage);

  setTimeout(() => {
    renderError();
  }, 500);
}

function initializeProjects() {
  renderError();

  const retryButton = projectsContent.querySelector("button");

  retryButton.addEventListener("click", retryProjects);
}

initializeProjects();

function renderError() {
  projectsContent.replaceChildren();

  const errorMessage = document.createElement("p");
  const retryButton = document.createElement("button");

  errorMessage.textContent = "Unable to load projects.";
  retryButton.type = "button";
  retryButton.textContent = "Retry";

  projectsContent.append(errorMessage, retryButton);
}