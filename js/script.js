const scriptURL = "https://script.google.com/macros/s/AKfycbzO1IRh8IKrkp1SydESvzvROqG90NS3_lmpuNU-QOmfWzRHj2EkyAUn3_OtWcLS5Hc/exec"; // URL do Google Apps Script publicado
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
