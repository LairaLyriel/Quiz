const questions = [
    {
        question: "Na série de livros Throne of glass, qual a metamorfose pricipal da Lysandra?",
        options: [
            { text: "A) Guepardo", correct: false },
            { text: "B) Leopardo", correct: true },
            { text: "C) Pantera", correct: false },
            { text: "D) Onça", correct: false }
        ]
    },
    {
        question: "No primeiro livro da série Percy Jackson e os olimpianos, onde estava o raio de Zeus?",
        options: [
            { text: "A) No submundo", correct: false },
            { text: "B) No chalé de Hermes", correct: true },
            { text: "C) No escudo do Percy", correct: false },
            { text: "D) No escudo de Ares", correct: false }
        ]
    },
    {
        question: "No livro 'Cidade da Lua Crescente: Casa de terra e sangue' qual o nome da matilha da Danika Fendyr?",
        options: [
            { text: "A) Matilha mortal", correct: false },
            { text: "B) Matilha lunar", correct: false },
            { text: "C) Matilha crescente", correct: false },
            { text: "D) Matilha dos demônios", correct: true }
        ]
    },

]

let currentQuestionIndex = -1;
let shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());
let score = 0;

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showModal();
        return;
    }

    // Atualiza o texto da pergunta e limpa as opções anteriores
    const question = shuffledQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = question.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option.text;
        button.setAttribute('data-correct', option.correct);

        button.addEventListener('click', () => {
            const isCorrect = button.getAttribute('data-correct') === 'true';
            if (isCorrect) {
                button.classList.add('certo');
                score++; // Adiciona ponto para respostas corretas
            } else {
                button.classList.add('errado');
            }

            document.querySelectorAll('.option').forEach(btn => btn.disabled = true);
            setTimeout(showNextQuestion, 1000);
        });

        optionsContainer.appendChild(button);
    });
}

function showModal() {
    const modal = document.getElementById('result-modal');
    const resultText = document.getElementById('result-text');
    resultText.textContent = `Você acertou ${score} de ${shuffledQuestions.length} perguntas.`;
    modal.style.display = 'block'; // Mostrar o modal

    const homeButton = document.getElementById('home-button');
    homeButton.onclick = () => {
        window.location.href = '/inicio/index.html'; // Redireciona para a tela inicial
    };
}

// Iniciar o quiz
document.addEventListener('DOMContentLoaded', showNextQuestion);