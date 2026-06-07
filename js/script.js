// 1. Formulário de inscrição
const scriptURL = "https://script.google.com/macros/s/AKfycbwR2XRY3XftLn4RloqST3lQFRWmY6NK2Rg7A4Ogs7aTFULsafMcnu7qpP9t_j_y6ZlL/exec";
const form = document.getElementById("formInscricao");
const mensagem = document.getElementById("mensagemConfirmacao");

form.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);

  const botao = form.querySelector("button");
  botao.textContent = "Enviando...";
  botao.disabled = true;

  fetch(scriptURL, { method: "POST", body: data })
    .then(response => {
      form.style.display = "none";
      mensagem.style.display = "block";
    })
    .catch(error => alert("Erro ao enviar inscrição: " + error))
    .finally(() => {
      botao.textContent = "Enviar inscrição";
      botao.disabled = false;
    });
});

// 2. Menu responsivo (hambúrguer)
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// 3. Scroll suave para seções
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    if (window.innerWidth < 769) {
      menu.classList.remove("active");
    }
  });
});

// 4. Animações de entrada nas seções
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".section").forEach(section => {
  section.classList.add("fade-in");
  observer.observe(section);
});

// 5. Alternância manual de tema com persistência
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Carregar preferência salva
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});
