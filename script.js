// Aguarda o carregamento do DOM para garantir estabilidade
document.addEventListener("DOMContentLoaded", () => {
    
    // Captura dos elementos do HTML usando seletores específicos
    const btnCheck = document.getElementById("btn-check");
    const quizForm = document.getElementById("quiz-form");
    const feedbackBox = document.getElementById("quiz-feedback");
    const feedbackText = document.getElementById("feedback-text");

    // Processamento do evento de clique do usuário
    btnCheck.addEventListener("click", () => {
        // Captura a opção selecionada pelo usuário
        const selectedOption = quizForm.querySelector('input[name="quiz"]:checked');

        // Validação básica se o usuário deixou em branco
        if (!selectedOption) {
            feedbackBox.className = "feedback-box incorrect";
            feedbackText.textContent = "⚠️ Por favor, selecione uma das alternativas antes de verificar!";
            feedbackBox.classList.remove("hidden");
            return;
        }

        // Armazena o valor em uma variável antes de processar na tela
        const userAnswersValue = selectedOption.value;

        // Limpa classes anteriores para evitar bugs visuais
        feedbackBox.classList.remove("hidden", "correct", "incorrect");

        // Condicional para validar a resposta e manipular o DOM de forma funcional
        if (userAnswersValue === "correta") {
            feedbackBox.classList.add("correct");
            feedbackText.innerHTML = "🎉 Parabéns! Você agiu como um cidadão digital consciente. Checar fontes antes de espalhar conteúdos suspeitos quebra o ciclo de desinformação automatizada.";
        } else {
            feedbackBox.classList.add("incorrect");
            feedbackText.innerHTML = "❌ Resposta incorreta. Compartilhar mídias sem verificação prévia espalha pânico ou notícias falsas. Sempre desconfie de mídias sensacionalistas com baixa qualidade visual.";
        }
    });
});
