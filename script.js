// ==============================
// PORTFÓLIO — JAVASCRIPT
// ==============================

const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const topBtn = document.getElementById("topBtn");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const year = document.getElementById("year");

// Atualiza o ano automaticamente
year.textContent = new Date().getFullYear();

// Menu responsivo
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Modo claro/escuro
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");

  const lightMode = body.classList.contains("light");
  themeToggle.textContent = lightMode ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    lightMode ? "Ativar modo escuro" : "Ativar modo claro"
  );

  localStorage.setItem("portfolioTheme", lightMode ? "light" : "dark");
});

// Recupera o tema escolhido
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
  body.classList.add("light");
  themeToggle.textContent = "☀";
  themeToggle.setAttribute("aria-label", "Ativar modo escuro");
}

// Botão voltar ao topo
window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 500);
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animações quando os elementos aparecem na tela
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

// Formulário visual
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  formMessage.textContent =
  `Olá, ${name}! Obrigada pelo contato. Sua mensagem foi registrada com sucesso!`;
    

  contactForm.reset();
});
