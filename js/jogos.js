const questions = [
    {
        question: "Qual o primeiro jogo da franquia Pokemón?",
        options: [
            { text: "A) Fire red", correct: false },
            { text: "B) Red", correct: true },
            { text: "C) Blue", correct: false },
            { text: "D) Leaf green", correct: false }
        ]
    },
    {
        question: "Qual o nome da espada do Link, em Zelda",
        options: [
            { text: "A) Infinity Sword", correct: false },
            { text: "B) Master Sword", correct: true },
            { text: "C) Dead Sword", correct: false },
            { text: "D) Grass Sword", correct: false }
        ]
    },
    {
        question: "No jogo Minecraft, o Mob Creeper surgiu inicialmente a partir de um bug em outro Mob, qual é o Mob?",
        options: [
            { text: "A) Vaca", correct: false },
            { text: "B) Ovelha", correct: false },
            { text: "C) Porco", correct: true },
            { text: "D) Zumbi", correct: false }
        ]
    },
    {
        question: "Em brawl stars, qual brawler foi adicionado ao jogo logo depois que foi lançado?",
        options: [
            { text: "A) Leon", correct: false },
            { text: "B) Pam", correct: false },
            { text: "C) Bull", correct: false },
            { text: "D) Piper", correct: true }
        ]
    },
    {
        question: "Em qual jogo da franquia Sonic, o personagem Shadow tem sua primeira aparição?",
        options: [
            { text: "A) Sonic the hedgehog", correct: false },
            { text: "B) Sonic adventure 2", correct: true },
            { text: "C) Sonic Boom", correct: false },
            { text: "D) Sonic CD", correct: false }
        ]
    },
    {
        question: "Qual é o nome do reino onde a maikoria dos jogos do Mario se passa?",
        options: [
            { text: "A) Dinosaur Land", correct: false },
            { text: "B) Beanbean Kingdom", correct: false },
            { text: "C) Sarasaland", correct: false },
            { text: "D) Mushroom Kingdom", correct: true }
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
