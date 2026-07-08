// NORTE — interações do site
document.addEventListener("DOMContentLoaded", () => {

  // ============ THEME TOGGLE ============
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const htmlElement = document.documentElement;

  // Verificar preferência salva ou preferência do sistema
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  // Aplicar tema inicial
  setTheme(initialTheme);

  function setTheme(theme) {
    if (theme === "dark") {
      htmlElement.classList.add("dark-mode");
      htmlElement.classList.remove("light-mode");
      if (themeIcon) themeIcon.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.add("light-mode");
      htmlElement.classList.remove("dark-mode");
      if (themeIcon) themeIcon.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlElement.classList.contains("dark-mode") ? "dark" : "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    });
  }

  // Ano dinâmico no rodapé
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  const nav = document.getElementById("siteNav");
  const toggle = document.getElementById("navToggle");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // fecha o menu ao clicar em um link (mobile)
    nav.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // fallback: sem suporte a IntersectionObserver, mostra tudo
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
});
