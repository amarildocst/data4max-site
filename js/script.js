const scriptURL = "https://script.google.com/macros/s/AKfycbwR2XRY3XftLn4RloqST3lQFRWmY6NK2Rg7A4Ogs7aTFULsafMcnu7qpP9t_j_y6ZlL/exec"; // URL do Google Apps Script publicado
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
