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

const sampleProjects = [
    {
        name: "FreshLoop",
        description: "A predictive inventory grocery application.",
        category: "Full Stack"
    },
    {
        name: "Portfolio Website",
        description: "A responsive personal developer portfolio.",
        category: "Frontend"
    }
];

// Change this value to test each request outcome.
const demoMode = "success"; // "success", "empty", "error"

function renderLoading() {
    projectsContent.replaceChildren();

    const skeleton = document.createElement("div");
    skeleton.className = "skeleton-item";
    skeleton.setAttribute("aria-hidden", "true");

    projectsContent.setAttribute("aria-busy", "true");
    projectsContent.append(skeleton);
}

function renderProjects(projects) {
    projectsContent.replaceChildren();
    projectsContent.setAttribute("aria-busy", "false");

    if (projects.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No projects available.";
        projectsContent.append(message);
        return;
    }

    const grid = document.createElement("div");
    grid.className = "project-grid";

    projects.forEach((project) => {
        const article = document.createElement("article");
        article.className = "project-card";

        const title = document.createElement("h3");
        title.textContent = project.name;

        const badge = document.createElement("span");
        badge.className = "project-badge";
        badge.textContent = project.category;

        const description = document.createElement("p");
        description.textContent = project.description;

        article.append(title, badge, description);
        grid.append(article);
    });

    projectsContent.append(grid);
}

function renderError() {
    projectsContent.replaceChildren();
    projectsContent.setAttribute("aria-busy", "false");

    const message = document.createElement("p");
    message.textContent = "Unable to load projects.";

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Retry";
    button.addEventListener("click", loadProjects);

    projectsContent.append(message, button);
}

function fetchProjects() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (demoMode === "error") {
                reject(new Error("Simulated request failure"));
            } else if (demoMode === "empty") {
                resolve([]);
            } else {
                resolve(sampleProjects);
            }
        }, 800);
    });
}

async function loadProjects() {
    renderLoading();

    try {
        const projects = await fetchProjects();
        renderProjects(projects);
    } catch (error) {
        console.error("Project request failed:", error);
        renderError();
    }
}

loadProjects();
