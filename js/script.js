const scriptURL = "https://script.google.com/macros/s/AKfycbzAPhGKtr2tcgy9_w3tW3OyncdMMVoJt9ADlLSVI1AwQG_xz1vTgtLkWGa4uYhV5NotfA/exec"; // URL do Google Apps Script
const form = document.getElementById("formInscricao");
const mensagem = document.getElementById("mensagemConfirmacao");

form.addEventListener("submit", e => {
  e.preventDefault();
  const data = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    interesse: document.getElementById("interesse").value,
    consentimento: document.getElementById("consentimento").checked ? "Aceito" : "Não aceito"
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(response => {
    form.style.display = "none";
    mensagem.style.display = "block";
  })
  .catch(error => alert("Erro ao enviar inscrição: " + error));
});
