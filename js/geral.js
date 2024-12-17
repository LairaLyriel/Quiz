// Questões e alternativas
const questions = [
    {
        question: "Qual o coletivo de abelhas?",
        options: [
            { text: "A) Colmeia", correct: false },
            { text: "B) Enxame", correct: true },
            { text: "C) Cardume", correct: false },
            { text: "D) Abelhada", correct: false }
        ]
    },
    {
        question: "Qual o maior planeta do sistema solar?",
        options: [
            { text: "A) Terra", correct: false },
            { text: "B) Netuno", correct: false },
            { text: "C) Vênus", correct: false },
            { text: "D) Júpiter", correct: true }
        ]
    },
    {
        question: "De quem é a famosa frase “Penso, logo existo”?",
        options: [
            { text: "A) Descartes", correct: true },
            { text: "B) Galileu", correct: false },
            { text: "C) Sócrates", correct: false },
            { text: "D) Aristóteles", correct: false }
        ]
    },
    {
        question: "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
        options: [
            { text: "A) Getúlio Vargas", correct: false },
            { text: "B) João Goulart", correct: false },
            { text: "C) Jânio Quadros", correct: true },
            { text: "D) João Figueredo", correct: false }
        ]
    }
];

// Contador das questões no array
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
