const scriptURL = "https://script.google.com/macros/s/AKfycbwo87iTG5IFyUolsRhDU-ZbGEBqjsp6qpaWKIwDpHwblHSBUEjkZmbbuN7CPjzX5vdB/exec"; // URL do Google Apps Script publicado
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
