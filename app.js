// Variables globales
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 0;
let timer = null;
let userAnswers = []; // Chaque élément sera un tableau contenant les index des réponses sélectionnées
let questionStartTime = 0; // Temps de début pour chaque question
let questionTimes = []; // Tableau pour stocker le temps pris pour chaque question
let errorCounts = []; // Tableau pour compter les erreurs par question
const MAX_POINTS_PER_QUESTION = 100; // Points maximum par question
const POINTS_DEDUCTION_PER_ERROR = 25; // Points perdus par erreur

// Éléments DOM
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');

const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');

const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const timeSpan = document.getElementById('time');

const scoreElement = document.getElementById('score');
const maxScoreElement = document.getElementById('max-score');
const percentageElement = document.getElementById('percentage');
const resultsDetails = document.getElementById('results-details');

// Événements
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', goToNextQuestion);
restartButton.addEventListener('click', restartQuiz);

// Fonction pour démarrer le quiz
function startQuiz() {
    // Initialiser les variables
    currentQuestions = getRandomQuestions(20); // Limiter à 20 questions
    currentQuestionIndex = 0;
    score = 0;
    // Initialiser les réponses utilisateur comme des tableaux vides pour chaque question
    userAnswers = Array(currentQuestions.length).fill().map(() => []);
    questionTimes = Array(currentQuestions.length).fill(0);
    errorCounts = Array(currentQuestions.length).fill(0);
    
    // Mettre à jour l'affichage
    totalQuestionsSpan.textContent = currentQuestions.length;
    
    // Cacher l'écran de démarrage et afficher l'écran de quiz
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    // Afficher la première question
    showQuestion(currentQuestionIndex);
    
    // Démarrer le timer
    startTimer();
    
    // Enregistrer le temps de début de la première question
    questionStartTime = Date.now();
}

// Fonction pour afficher une question
function showQuestion(index) {
    // Mettre à jour l'index de la question actuelle
    currentQuestionSpan.textContent = index + 1;
    
    // Récupérer la question actuelle
    const question = currentQuestions[index];
    
    // Afficher la question
    questionText.textContent = question.question;
    
    // Vider le conteneur de réponses
    answersContainer.innerHTML = '';
    
    // Ajouter une indication que plusieurs réponses sont possibles
    const multipleChoiceIndicator = document.createElement('p');
    multipleChoiceIndicator.className = 'multiple-choice-indicator';
    multipleChoiceIndicator.textContent = '(Plusieurs réponses possibles - cliquez pour sélectionner/désélectionner)';
    answersContainer.appendChild(multipleChoiceIndicator);
    
    // Créer les options de réponses
    question.options.forEach((option, i) => {
        const answerElement = document.createElement('div');
        answerElement.className = 'answer-option';
        
        // Créer une case à cocher pour chaque option
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `answer-${i}`;
        checkbox.className = 'answer-checkbox';
        
        // Vérifier si cette option a déjà été sélectionnée
        if (userAnswers[index].includes(i)) {
            checkbox.checked = true;
            answerElement.classList.add('selected');
        }
        
        // Créer un label pour la case à cocher
        const label = document.createElement('label');
        label.htmlFor = `answer-${i}`;
        label.textContent = option;
        
        // Ajouter les éléments à l'option de réponse
        answerElement.appendChild(checkbox);
        answerElement.appendChild(label);
        
        // Ajouter un événement au clic sur l'élément complet
        answerElement.addEventListener('click', (e) => {
            // Empêcher le comportement par défaut si le clic est sur le label
            if (e.target.tagName === 'LABEL') {
                e.preventDefault();
            }
            toggleAnswer(i, answerElement, checkbox);
        });
        
        // Ajouter l'option au conteneur
        answersContainer.appendChild(answerElement);
    });
    
    // Mettre à jour l'état du bouton suivant
    updateNextButtonState();
    
    // Enregistrer le temps de début pour cette question (sauf si on revient sur une question déjà répondue)
    if (userAnswers[index].length === 0) {
        questionStartTime = Date.now();
    }
}

// Fonction pour basculer une réponse (sélection/désélection)
function toggleAnswer(answerIndex, answerElement, checkbox) {
    const answers = userAnswers[currentQuestionIndex];
    
    // Vérifier si cette réponse est déjà sélectionnée
    const isSelected = answers.includes(answerIndex);
    
    if (isSelected) {
        // Désélectionner la réponse
        userAnswers[currentQuestionIndex] = answers.filter(index => index !== answerIndex);
        answerElement.classList.remove('selected');
        checkbox.checked = false;
    } else {
        // Sélectionner la réponse
        userAnswers[currentQuestionIndex] = [...answers, answerIndex];
        answerElement.classList.add('selected');
        checkbox.checked = true;
    }
    
    // Mettre à jour l'état du bouton suivant
    updateNextButtonState();
}

// Fonction pour mettre à jour l'état du bouton suivant
function updateNextButtonState() {
    // Activer le bouton uniquement si au moins une réponse a été sélectionnée
    nextButton.disabled = userAnswers[currentQuestionIndex].length === 0;
}

// Fonction pour passer à la question suivante
function goToNextQuestion() {
    // Calculer le temps pris pour répondre à la question
    const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);
    questionTimes[currentQuestionIndex] = timeTaken;
    
    // Vérifier si c'est la dernière question
    if (currentQuestionIndex === currentQuestions.length - 1) {
        // Si c'est la dernière question, terminer le quiz
        finishQuiz();
    } else {
        // Sinon, passer à la question suivante
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

// Fonction pour terminer le quiz
function finishQuiz() {
    // Arrêter le timer
    clearInterval(timer);
    
    // Calculer le score
    calculateScore();
    
    // Afficher les résultats
    displayResults();
    
    // Cacher l'écran de quiz et afficher l'écran des résultats
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
}

// Fonction pour calculer le score avec système de points dégressifs
function calculateScore() {
    score = 0;
    const maxPossibleScore = MAX_POINTS_PER_QUESTION * currentQuestions.length;
    
    userAnswers.forEach((selectedAnswers, index) => {
        const question = currentQuestions[index];
        
        // Vérifier si les réponses sont correctes (convertir en tableau si nécessaire)
        const correctAnswers = Array.isArray(question.correctAnswer) 
            ? question.correctAnswer 
            : [question.correctAnswer];
            
        // Calculer le nombre d'erreurs
        let errors = 0;
        
        // Compter les faux positifs (options sélectionnées qui ne sont pas correctes)
        const falsePositives = selectedAnswers.filter(answer => !correctAnswers.includes(answer)).length;
        
        // Compter les faux négatifs (options correctes non sélectionnées)
        const falseNegatives = correctAnswers.filter(answer => !selectedAnswers.includes(answer)).length;
        
        errors = falsePositives + falseNegatives;
        errorCounts[index] = errors;
        
        // Si toutes les bonnes réponses sont sélectionnées et pas de mauvaises réponses
        if (errors === 0) {
            score += MAX_POINTS_PER_QUESTION;
        } 
        // Si partiellement correct (au moins une bonne réponse sélectionnée)
        else if (selectedAnswers.some(answer => correctAnswers.includes(answer))) {
            let pointsForQuestion = MAX_POINTS_PER_QUESTION - (errors * POINTS_DEDUCTION_PER_ERROR);
            pointsForQuestion = Math.max(0, pointsForQuestion);
            score += pointsForQuestion;
        }
    });
    
    // Arrondir le score final
    score = Math.round(score);
}

// Fonction pour afficher les résultats
function displayResults() {
    // Mettre à jour les éléments du score
    scoreElement.textContent = score;
    const maxPossibleScore = MAX_POINTS_PER_QUESTION * currentQuestions.length;
    maxScoreElement.textContent = maxPossibleScore;
    const percentage = Math.round((score / maxPossibleScore) * 100);
    percentageElement.textContent = percentage;
    
    // Vider le conteneur de détails
    resultsDetails.innerHTML = '';
    
    // Afficher les détails de chaque question
    currentQuestions.forEach((question, index) => {
        const selectedAnswers = userAnswers[index];
        
        // Récupérer les réponses correctes (convertir en tableau si nécessaire)
        const correctAnswers = Array.isArray(question.correctAnswer) 
            ? question.correctAnswer 
            : [question.correctAnswer];
        
        // Vérifier si la réponse est entièrement correcte
        const isFullyCorrect = 
            correctAnswers.every(correct => selectedAnswers.includes(correct)) && 
            selectedAnswers.length === correctAnswers.length;
            
        // Vérifier si la réponse est partiellement correcte
        const isPartiallyCorrect = 
            !isFullyCorrect && 
            selectedAnswers.some(answer => correctAnswers.includes(answer));
        
        // Calculer les points
        let pointsForQuestion = 0;
        if (isFullyCorrect) {
            pointsForQuestion = MAX_POINTS_PER_QUESTION;
        } else if (isPartiallyCorrect) {
            pointsForQuestion = MAX_POINTS_PER_QUESTION - (errorCounts[index] * POINTS_DEDUCTION_PER_ERROR);
            pointsForQuestion = Math.max(0, pointsForQuestion);
        }
        
        const resultItem = document.createElement('div');
        resultItem.className = `result-item ${isFullyCorrect ? 'correct' : isPartiallyCorrect ? 'partially-correct' : 'incorrect'}`;
        
        let selectedAnswersText = selectedAnswers.map(idx => question.options[idx]).join(", ");
        let correctAnswersText = correctAnswers.map(idx => question.options[idx]).join(", ");
        
        resultItem.innerHTML = `
            <h3>Question ${index + 1}: ${question.question}</h3>
            <p><strong>Vos réponses:</strong> ${selectedAnswersText || "Aucune réponse"}</p>
            <p><strong>Réponses correctes:</strong> ${correctAnswersText}</p>
            <p><strong>Temps pris:</strong> ${questionTimes[index]} secondes</p>
            <p><strong>Erreurs:</strong> ${errorCounts[index]}</p>
            <p><strong>Points:</strong> ${pointsForQuestion}/${MAX_POINTS_PER_QUESTION}</p>
            <p><strong>Explication:</strong> ${question.explanation}</p>
        `;
        
        resultsDetails.appendChild(resultItem);
    });
}

// Fonction pour redémarrer le quiz
function restartQuiz() {
    // Cacher l'écran des résultats et afficher l'écran de démarrage
    resultsScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// Fonction pour démarrer le timer
function startTimer() {
    // Réinitialiser le temps
    timeLeft = 0;
    
    // Mettre à jour l'affichage du timer
    updateTimerDisplay();
    
    // Démarrer le timer
    timer = setInterval(() => {
        timeLeft++;
        updateTimerDisplay();
    }, 1000);
}

// Fonction pour mettre à jour l'affichage du timer
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    timeSpan.textContent = `${minutes}:${seconds}`;
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Désactiver le bouton suivant par défaut
    nextButton.disabled = true;
}); 