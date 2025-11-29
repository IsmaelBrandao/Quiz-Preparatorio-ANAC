// =========================================================================
// ARQUIVO: script.js (ATUALIZADO PARA SIMULADOS ALEATÓRIOS)
// (Este arquivo DEVE ser carregado DEPOIS de questions.js e quiz-config.js)
// =========================================================================

// Variáveis Globais de Controle
const menuContainer = document.getElementById('menu-container');
const quizContainer = document.getElementById('quiz-container');
const quizBody = document.getElementById('quiz-body');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const navigation = document.getElementById('navigation');
const resultsContainer = document.getElementById('results');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const quizHeader = document.getElementById('quiz-header');
const quizTitle = document.getElementById('quiz-title');
const resultsTitle = document.getElementById('results-title');

let currentQuizData = [];
let currentQuestion = 0;
let userAnswers = [];
let currentLevel = '';

/**
 * NOVA FUNÇÃO: Embaralhar Arrays (Fisher-Yates Shuffle)
 * Necessária para misturar as perguntas nos simulados.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Função startQuiz ATUALIZADA
 * Agora ela verifica se o quiz é "fixo" ou se precisa ser "montado" (aleatório).
 */
function startQuiz(level) {
    // Busca as informações do quiz no objeto mestre (quiz-config.js)
    const quizInfo = allQuizInfo[level];
    
    if (!quizInfo) {
        console.error("Quiz '" + level + "' não foi encontrado em allQuizInfo.");
        alert("Erro: Quiz não encontrado.");
        return;
    }

    currentLevel = level;
    
    // Define os textos e classes visuais (Mantido igual)
    quizTitle.innerHTML = `${quizInfo.title} <span>${quizInfo.subtitle}</span>`;
    resultsTitle.innerText = `Quiz ${quizInfo.title} (${quizInfo.subtitle}) Finalizado!`;
    quizHeader.className = quizInfo.className;
    progressBar.className = quizInfo.className;

    // --- NOVA LÓGICA DE SIMULADO ---
    // 1. Verifica se já existe uma prova gerada salva no navegador para este nível.
    // Isso garante que se o aluno der F5, as perguntas aleatórias continuam as mesmas.
    const savedQuizData = localStorage.getItem(`quizDataGenerated_${currentLevel}`);
    
    if (savedQuizData) {
        // Se existe prova salva, carregamos ela.
        currentQuizData = JSON.parse(savedQuizData);
    } else {
        // Se não existe, vamos verificar como montar o quiz.
        
        if (quizInfo.composition) {
            // É UM SIMULADO COMPOSTO (ALEATÓRIO)!
            currentQuizData = [];
            
            // Para cada bloco definido na configuração...
            quizInfo.composition.forEach(block => {
                // 1. Junta todas as questões das fontes desse bloco num "balde" único
                let pool = [];
                block.sources.forEach(sourceArray => {
                    if(sourceArray) pool = pool.concat(sourceArray);
                });

                // 2. Embaralha esse balde
                shuffleArray(pool);

                // 3. Pega só a quantidade que a gente quer (ex: 5 questões)
                const selectedQuestions = pool.slice(0, block.count);
                
                // 4. Adiciona na prova final
                currentQuizData = currentQuizData.concat(selectedQuestions);
            });

            // Dá mais uma embaralhada geral na prova final para misturar as matérias
            shuffleArray(currentQuizData);

            // Salva essa prova gerada no navegador
            localStorage.setItem(`quizDataGenerated_${currentLevel}`, JSON.stringify(currentQuizData));

        } else {
            // É UM QUIZ NORMAL (FIXO)
            // Usa o array direto do arquivo, como sempre foi.
            currentQuizData = quizInfo.questions;
        }
    }

    // Oculta o menu e exibe o quiz (Mantido igual)
    menuContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    quizBody.classList.remove('hidden'); 
    navigation.classList.remove('hidden');

    loadProgress(); // Carrega o progresso salvo (respostas)
    showQuestion(); // Exibe a questão
}

function backToMenu() {
    saveProgress(); // Salva o progresso antes de sair
    quizContainer.classList.add('hidden');
    menuContainer.classList.remove('hidden');
}

function showQuestion() {
    const questionData = currentQuizData[currentQuestion];
    quizBody.innerHTML = ''; // Limpa o corpo do quiz

    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');

    const questionText = document.createElement('h3');
    questionText.innerHTML = `${currentQuestion + 1}. ${questionData.question}`;
    questionBlock.appendChild(questionText);

    const optionsList = document.createElement('ul');
    optionsList.classList.add('options');
    optionsList.classList.remove('disabled'); // Garante que as opções sejam clicáveis

    questionData.options.forEach(option => {
        const optionItem = document.createElement('li');
        
        // Cria um label para melhor acessibilidade e clique
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question${currentQuestion}`;
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${option}`));
        optionItem.appendChild(label);

        // Verifica se esta opção já foi respondida
        if (userAnswers[currentQuestion] === option) {
            optionItem.classList.add('selected');
            input.checked = true;
        }

        // Adiciona o evento de clique na LI para selecionar o radio
        optionItem.addEventListener('click', (e) => {
            // Previne duplo clique se o label já cuidou disso
            e.stopPropagation(); 
            if (optionsList.classList.contains('disabled')) return;

            document.querySelectorAll(`#quiz-body ul li`).forEach(li => li.classList.remove('selected'));
            optionItem.classList.add('selected');
            optionItem.querySelector('input').checked = true;
            selectAnswer(option);
        });

        optionsList.appendChild(optionItem);
    });

    questionBlock.appendChild(optionsList);
    quizBody.appendChild(questionBlock);
    
    updateNavigation();
    updateProgress();
}

function selectAnswer(answer) {
    userAnswers[currentQuestion] = answer;
    saveProgress();
    updateProgress(); // Atualiza a barra de progresso a cada resposta
}

function updateNavigation() {
    prevBtn.style.display = currentQuestion === 0 ? 'none' : 'inline-block';
    nextBtn.innerText = currentQuestion === currentQuizData.length - 1 ? 'Finalizar' : 'Próximo';
    questionCounter.innerText = `Questão ${currentQuestion + 1} de ${currentQuizData.length}`;
}

function updateProgress() {
    const answeredCount = userAnswers.filter(answer => answer !== undefined && answer !== null).length;
    const progressPercentage = (answeredCount / currentQuizData.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function nextQuestion() {
    const buttonText = nextBtn.innerText;

    if (buttonText === 'Continuar') {
        currentQuestion++;
        showQuestion();
        return;
    }

    if (buttonText === 'Ver Resultados') {
        showResults();
        return;
    }

    const userAnswer = userAnswers[currentQuestion];
    if (userAnswer === undefined || userAnswer === null) {
        alert("Por favor, selecione uma resposta para continuar.");
        return;
    }

    // Feedback visual de resposta
    const optionsList = quizBody.querySelector('.options');
    optionsList.classList.add('disabled'); // Desabilita opções após a resposta
    prevBtn.style.display = 'none'; // Esconde o "Anterior" após confirmar

    const correctAnswer = currentQuizData[currentQuestion].answer;
    const liElements = optionsList.querySelectorAll('li');

    liElements.forEach(li => {
        const radioValue = li.querySelector('input').value;
        if (radioValue === userAnswer) {
            if (userAnswer === correctAnswer) {
                li.classList.add('correct-feedback');
            } else {
                li.classList.add('incorrect-feedback');
                // Mostra qual era a correta
                const correctLi = Array.from(liElements).find(el => el.querySelector('input').value === correctAnswer);
                if (correctLi) correctLi.classList.add('actual-answer');
            }
        }
    });

    if (currentQuestion === currentQuizData.length - 1) {
        nextBtn.innerText = 'Ver Resultados';
    } else {
        nextBtn.innerText = 'Continuar';
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function saveProgress() {
    if (!currentLevel) return;
    const progress = {
        answers: userAnswers,
        currentQuestion: currentQuestion
    };
    // Salva o progresso específico para o nível atual
    localStorage.setItem(`quizProgress_${currentLevel}`, JSON.stringify(progress));
}

function loadProgress() {
    const savedProgress = localStorage.getItem(`quizProgress_${currentLevel}`);
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        // Garante que o progresso salvo é compatível com o quiz atual
        if (progress.answers && progress.answers.length === currentQuizData.length) {
            userAnswers = progress.answers;
            currentQuestion = progress.currentQuestion || 0;
        } else {
            // Se o quiz mudou, reseta o progresso
            userAnswers = Array(currentQuizData.length).fill(undefined);
            currentQuestion = 0;
        }
    } else {
        // Nenhum progresso salvo, começa do zero
        userAnswers = Array(currentQuizData.length).fill(undefined);
        currentQuestion = 0;
    }
}

/**
 * Função resetQuiz ATUALIZADA
 * Agora ela também apaga a prova aleatória gerada, forçando o sorteio de novas perguntas.
 */
function resetQuiz() {
    if (confirm('Tem certeza de que deseja resetar? Se for um simulado, NOVAS perguntas aleatórias serão geradas.')) {
        // Remove as respostas salvas
        localStorage.removeItem(`quizProgress_${currentLevel}`);
        
        // Remove a prova gerada (o "balde" de perguntas sorteadas)
        // Isso obriga o startQuiz a sortear tudo de novo
        localStorage.removeItem(`quizDataGenerated_${currentLevel}`);
        
        // Reinicia o quiz atual
        startQuiz(currentLevel);
    }
}

function showResults() {
    saveProgress(); // Salva a posição final
    quizBody.classList.add('hidden');
    navigation.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    let score = 0;
    currentQuizData.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });

    const scorePercentage = (score / currentQuizData.length) * 100;
    const scoreText = document.getElementById('score-text');
    scoreText.innerText = `Você acertou ${score} de ${currentQuizData.length} questões. (${scorePercentage.toFixed(1)}%)`;
    
    scoreText.classList.remove('low-score'); // Remove a classe antiga
    if (scorePercentage < 70) {
        scoreText.classList.add('low-score'); // Adiciona se a nota for baixa
    }

    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '<h3>Revisão Completa das Questões</h3>';
    
    currentQuizData.forEach((question, index) => {
        const reviewBlock = document.createElement('div');
        reviewBlock.classList.add('review-question');
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.answer;

        reviewBlock.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        let answerHtml;
        if (isCorrect) {
            answerHtml = `<div class="review-answer">Sua resposta: <span class="correct-answer">${userAnswer || 'Não respondida'}</span></div>`;
        } else {
            answerHtml = `
                <div class="review-answer">Sua resposta: <span class="wrong-answer">${userAnswer || 'Não respondida'}</span></div>
                <div class="review-answer">Resposta correta: <span class="correct-answer">${question.answer}</span></div>
            `;
        }
        
        reviewBlock.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${answerHtml}
        `;
        reviewContainer.appendChild(reviewBlock);
    });

    // Rola para o topo dos resultados
    resultsContainer.scrollTop = 0;
}