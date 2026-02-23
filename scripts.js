// Seleciona o botão pela classe e adiciona o evento de clique
const botao = document.querySelector('.btn-ghost');

if (botao) {
    botao.addEventListener('click', function() {
        alert("Parabéns! Você concluiu o desafio!");
    });
}
