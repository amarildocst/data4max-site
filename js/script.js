// ===============================
// 📌 Formulário de Inscrição (Google Apps Script)
// ===============================
const scriptURL = "https://script.google.com/macros/s/AKfycbzUttOAHhspIV8d4oZj1LfCSrbZnrrLIGMSGVqbxlgPv0Nnq5l_1PbbK4loJMADAkS-zA/exec";
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

// ===============================
// 📌 Menu Responsivo
// ===============================
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// ===============================
// 📌 Scroll Suave
// ===============================
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

// ===============================
// 📌 Animações com IntersectionObserver
// ===============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });

document.querySelectorAll(".section").forEach(section => {
  section.classList.add("fade-in");
  observer.observe(section);
});

// ===============================
// 📌 Modo Escuro com Persistência
// ===============================
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

// ===============================
// 📌 Efeito Parallax (Giroscópio)
// ===============================
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", (event) => {
    const banner = document.querySelector(".banner-content");
    if (banner) {
      banner.style.transform = `rotateY(${event.gamma / 10}deg) rotateX(${event.beta / 20}deg)`;
    }
  });
}

// ===============================
// 📌 LGPD + Statcounter
// ===============================
document.addEventListener("DOMContentLoaded", function() {
  const aviso = document.getElementById("avisoLGPD");
  const aceitar = document.getElementById("aceitarLGPD");

  // Se já aceitou antes, não mostra aviso e carrega Statcounter
  if (localStorage.getItem("lgpdAceito")) {
    aviso.style.display = "none";
    carregarStatcounter();
  }

  if (aceitar) {
    aceitar.addEventListener("click", function() {
      localStorage.setItem("lgpdAceito", "true");
      aviso.style.display = "none";
      carregarStatcounter();
    });
  }
});

// Função que injeta o código Statcounter
function carregarStatcounter() {
  // Configuração do Statcounter
  var scScript = document.createElement("script");
  scScript.type = "text/javascript";
  scScript.innerHTML = `
    var sc_project=13295865; 
    var sc_invisible=1; 
    var sc_security="4c26ab0c"; 
  `;
  document.body.appendChild(scScript);

  // Script principal do Statcounter
  var scCounter = document.createElement("script");
  scCounter.type = "text/javascript";
  scCounter.src = "https://www.statcounter.com/counter/counter.js";
  scCounter.async = true;
  document.body.appendChild(scCounter);

  // Noscript opcional (para navegadores sem JS)
  var noScript = document.createElement("noscript");
  noScript.innerHTML = '<div class="statcounter"><a title="Web Analytics" href="https://statcounter.com/" target="_blank"><img class="statcounter" src="https://c.statcounter.com/13295865/0/4c26ab0c/1/" alt="Web Analytics" referrerPolicy="no-referrer-when-downgrade"></a></div>';
  document.body.appendChild(noScript);
}
