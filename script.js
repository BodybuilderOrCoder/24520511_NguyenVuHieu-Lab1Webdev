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

const projects = [
    {
        name: "FreshLoop",
        description: "A predictive inventory grocery application."
    },
    {
        name: "Portfolio Website",
        description: "A responsive personal developer portfolio."
    }
];

function renderProjects() {
    projectsContent.replaceChildren();

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

renderProjects();