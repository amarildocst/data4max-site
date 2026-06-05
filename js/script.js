const scriptURL = "https://script.google.com/macros/library/d/1j-inKpFY2ZoUvYdfLXQiUZIGTKE8_hh0IRIT5huYqqolga1rLlC_W5tX/1"; // URL do Google Apps Script publicado
const form = document.getElementById("formInscricao");
const mensagem = document.getElementById("mensagemConfirmacao");

form.addEventListener("submit", e => {
  e.preventDefault();

  const data = new FormData(form);

  fetch(scriptURL, { method: "POST", body: data })
    .then(response => {
      form.style.display = "none";
      mensagem.style.display = "block";
    })
    .catch(error => alert("Erro ao enviar inscrição: " + error));
});