// Formulário
const scriptURL = "https://script.google.com/macros/s/AKfycbydmsxMCbtUAgaYBCUE5v2KGeed2PiKzmvuOj1HnF4IlXYcC4TcuVwVLTKN4YN7rV-4kw/exec";
const form = document.getElementById("formInscricao");
const mensagem = document.getElementById("mensagemConfirmacao");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form);
    const botao = form.querySelector("button");
    botao.textContent = "Enviando...";
    botao.disabled = true;

    fetch(scriptURL, { method: "POST", body: data })
      .then(() => {
        form.style.display = "none";
        mensagem.style.display = "block";
      })
      .catch(error => alert("Erro: " + error))
      .finally(() => {
        botao.textContent = "Enviar inscrição";
        botao.disabled = false;
      });
  });
}

// Menu responsivo
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// Scroll suave
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    if (window.innerWidth < 769) menu.classList.remove("active");
  });
});

// Animações
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });

document.querySelectorAll(".section").forEach(section => {
  section.classList.add("fade-in");
  observer.observe(section);
});

// 🌙 Modo escuro com persistência
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (themeToggle) {
  // Carregar estado salvo
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
}

// Giroscópio (efeito parallax simples)
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", (event) => {
    const banner = document.querySelector(".banner-content");
    if (banner) {
      banner.style.transform = `rotateY(${event.gamma / 10}deg) rotateX(${event.beta / 20}deg)`;
    }
  });
}
