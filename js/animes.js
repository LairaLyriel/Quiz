const questions = [
    {
        question: "Quais animes fazem parte do Big Three",
        options: [
            { text: "A) one piece, cavaleiros do zodiaco, evangelion", correct: false },
            { text: "B) mobi psycho, fullmetal alchemist, naruto", correct: false },
            { text: "C) Bleach, one piece, naruto", correct: true },
            { text: "D) evangelion, dragon ball, bleach", correct: false }
        ]
    },
    {
        question: "Como o protagonista de Fullmetal Alchemist perdeu sua perna?",
        options: [
            { text: "A) Alquimia humana pelo irmão", correct: false },
            { text: "B) Na guerra de Ishival", correct: false },
            { text: "C) Numa luta contra Scar", correct: false },
            { text: "D) Alquimia humana pela mãe", correct: true }
        ]
    },
    {
        question: "Em Jujutsu Kaisen, qual a técnica inata do Satoro Gojou",
        options: [
            { text: "A) Vazio imensurável", correct: false },
            { text: "B) Ilimitado", correct: true },
            { text: "C) Infinito", correct: false },
            { text: "D) Vazio Roxo", correct: false }
        ]
    },
    {
        question: "No final do mangá de Demon Slayer, quem é o Lua superior 4?",
        options: [
            { text: "A) Kaigaku", correct: false },
            { text: "B) Gyoko", correct: false },
            { text: "C) Hantengu", correct: false },
            { text: "D) Nakime", correct: true }
        ]
    },
    {
        question: "Em Dragon Ball, quem destruiu o planeta Vegeta",
        options: [
            { text: "A) Brooly", correct: false },
            { text: "B) Freeza", correct: true },
            { text: "C) Majin Bull", correct: false },
            { text: "D) Vegeta", correct: false }
        ]
    },
    {
        question: "Em Naruto Shippuden, qual o nome da biju de Duas caldas",
        options: [
            { text: "A) Matatabi", correct: true },
            { text: "B) Shukako", correct: false },
            { text: "C) Gyuuki", correct: false },
            { text: "D) Kyubi", correct: false }
        ]
    },
]

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