// Função responsável por validar o número digitado
function validarNumero() {

    // Captura o valor digitado no campo input
    let numero = document.getElementById("numero").value;

    // Captura o elemento onde a mensagem será exibida
    let mensagem = document.getElementById("mensagem");

    // Verifica se o campo está vazio
    if (numero === "") {

        // Exibe mensagem de erro
        mensagem.textContent = "Por favor, insira um número.";

        // Define cor vermelha
        mensagem.style.color = "red";

    } else {

        // Converte texto para número inteiro
        numero = parseInt(numero);

        // Verifica se o número é maior que 10
        if (numero > 10) {

            mensagem.textContent = "O número é maior que 10.";
            mensagem.style.color = "green";

        // Verifica se o número é maior que 5
        } else if (numero > 5) {

            mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10.";
            mensagem.style.color = "orange";

        // Caso seja 5 ou menor
        } else {

            mensagem.textContent = "O número é 5 ou menor.";
            mensagem.style.color = "blue";
        }
    }
}