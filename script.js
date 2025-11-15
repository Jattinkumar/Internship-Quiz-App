// This is your data structure for questions (like ArrayList<Question> in Java)
const allQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Multi Language", "Hyperlink Text Management Log", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Object"],
        answer: "Float" // NOTE: In JS, numbers are generally 'Number'
    },
    {
        question: "Which CSS property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: "background-color"
    },
    // ... ADD 27 MORE QUESTIONS HERE!
];

// Variables to manage the quiz state
let currentQuestions = []; // The 10 questions for the current quiz
let currentQuestionIndex = 0;
let score = 0;
let userName = "";

// Function to shuffle an array (essential for 'Random Order')
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// 1. INPUT USER NAME and PERSISTENCE
function startGame() {
    // Get username from input
    const inputElement = document.getElementById('username-input');
    userName = inputElement.value.trim();

    if (userName === "") {
        alert("Please enter your name!");
        return;
    }

    // Persist user name even after refresh (using localStorage)
    localStorage.setItem('quizUserName', userName);

    // Update UI
    document.getElementById('profile-name').textContent = `User: ${userName}`;
    document.getElementById('name-input-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    // Set up the quiz
    setupQuiz();
}

function setupQuiz() {
    // 1. Pick 10 random questions
    const shuffledAll = shuffleArray([...allQuestions]);
    currentQuestions = shuffledAll.slice(0, 10); // Take the first 10

    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').textContent = `Score: 0 / 10`;

    // 2. Start showing questions
    displayQuestion();
}

// 2. QUESTION WITH OPTIONS TO CHOOSE
function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        // All 10 questions are answered
        showResults();
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = q.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; // Clear previous buttons

    // Display options
    shuffleArray(q.options).forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        
        // This is the Event Listener for click
        button.addEventListener('click', () => checkAnswer(button, option, q.answer));
        optionsContainer.appendChild(button);
    });
}

// 3. RED/GREEN COLOR ANIMATION & SCORING
function checkAnswer(selectedButton, selectedOption, correctAnswer) {
    const isCorrect = (selectedOption === correctAnswer);
    
    // Disable all buttons to prevent multiple clicks
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

    // Apply Red/Green Feedback
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        // Also highlight the correct answer in green
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Update Scoreboard
    document.getElementById('score').textContent = `Score: ${score} / 10`;

    // Move to the next question after a short delay (for animation visibility)
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1500); // 1.5 seconds delay
}

// 4. SHOW FINAL SCORE
function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('final-score').textContent = 
        `${userName}, you got ${score} out of 10 questions correct!`;
}

// Check for existing user name on load (Persistence)
window.onload = function() {
    const storedName = localStorage.getItem('quizUserName');
    if (storedName) {
        document.getElementById('username-input').value = storedName;
    }
};