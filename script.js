function posicionaFim() {
  const scrollChat = document.querySelector("#messages-list");
  scrollChat.scrollTop = scrollChat.scrollHeight;
}

posicionaFim();

function adicionaMenssagem(textoMenssage) {
  const novaMsg = document.createElement("div");
  novaMsg.innerHTML = `<div class="item2">
                        <div class="user"><strong>User diz:</strong></div>
                        <div class="chat">${textoMenssage}</div>
                      </div>`;

  const menssagens = document.querySelector("#messages-list");
  menssagens.appendChild(novaMsg);

  posicionaFim();
}

function submitAdicionar(event) {
  event.preventDefault();

  const inputMsg = document.querySelector("#message");

  if (inputMsg.value === "") {
    alert("Insira uma menssagem valida!");
    return;
  }

  adicionaMenssagem(inputMsg.value);

  inputMsg.value = "";
}

const formAdd = document.querySelector("#form-chat-send");
formAdd.addEventListener("submit", submitAdicionar);