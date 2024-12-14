// Step 1. Define the questions and correct answers
const quizData = [
    {
        question: "Which property would you use to get the next sibling of an element?",
        options: ["nextNode", "nextSibling", "followingSibling"],
        correctAnswer: "nextSibling"
    },
    {
        question: "If element is an instance of an HTML Element, what property could you use to get its direct parent node?",
        options: ["element.getParent", "element.parent", "element.parentNode"],
        correctAnswer: "element.parentNode"
    },
    {
        question: "Which method would you use to add a child element to a parent element?",
        options: ["parent.appendChild(child)", "parent.push(child)", "parent.addELement(child)"],
        correctAnswer: "parent.appendChild(child)"
    },
    {
        question: "Which method would you use to create a new element in the DOM?",
        options: ["document.newElement()", "document.addElement()", "document.createElement()"],
        correctAnswer: "document.createElement()"
    },
    {
        question: "Which method returns a NodeList of elements with a specified class name?",
        options: ["document.getElementByClassName()", "document.getElementByClass()", "document.querySelector()"],
        correctAnswer: "document.getElementsByClassName"
    },
    {
        question: "Which method of the window.history object allows the user to move one step back in the browser's history?",
        options: ["history.previous()", "history.goBack()", "history.back()"],
        correctAnswer: "history.back()"
    },
    {
        question: "What is the primary purpose of the window.navigator object?",
        options: ["To provide information about the web browser and its capabilites", "To interface with the computer's file system", "To handle navigation requests to other pages"],
        correctAnswer: "To provide informamtion about the web browser and its capabilities"
    },
    {
        question: "Which of the following best describe the Browser Object Model?",
        options: ["An interface for maniplulating HTML documents from JavaScript", "An interface for interacting with the browser environment from JavaScript", "An interface for manipilating CSS styles from JavaScript"],
        correctAnswer: "An interface for interacting with the browser environment from JavaScript"
    },
    {
        question: "Which method allows you to create a new browser window or a new tab?",
        options: ["window.open()", "window.tab()", "window.new()"],
        correctAnswer: "window.open()"
    },
    {
        question: "If you wanted to determine the resolution of the user's screen, which object would you examine?",
        options: ["navigator.screen", "window.screen", "window.display"],
        correctAnswer: "window.screen"
    },
    {
        question: "Which method is used to attach an event handler to an element?",
        options: ["element.listen()", "element.addEvent()", "element.addEventListener()"],
        correctAnswer: "element.addEventListener"
    },
    {
        question: "if you want to capture an event before it reaches its target element, during which phase should you add the event listener?",
        options: ["Target phase", "Capture phase", "Bubbling phase"],
        correctAnswer: "Capture phase"
    },
    {
        question: "In which phase does as event travel from the target element to the root element?",
        options: ["Targeting", "Capturing", "Bubbling"],
        correctAnswer: "Bubbling"
    },
    {
        question: "Which method is used to stop further bubbling or capturing of an event?",
        options: ["event.stop()", "event.pause", "event.stopPropagation()"],
        correctAnswer: "event.stopPropagation"
    },
    {
        question: "In the context of an event handler, what provides information about the event, such as the type of event and the target element?",
        options: ["event.detail", "event.type", "event.info"],
        correctAnswer: "event.type"
    },
    {
        question: "How can you verify, using JavaScript, that a user has selected at least one option from a group of radio buttons?",
        options: ["By checking if any radio button's checked property is true.", "By checking the value attribute of each radio button.", "By checking the status property of the radio buttons."],
        correctAnswer: "By checking if any radio button's checked property is true."
    },
    {
        question: "Which psuedo-class gets applied to an input feild when its value is invalid according to its validation rules?",
        options: [":invalid", ":mistake", ":error"],
        correctAnswer: ":invalid"
    },
    {
        question: "Which input type automatically validates that the entered information has the structure of an email address?",
        options: ["email", "isValidEmail", ".Text"],
        correctAnswer: "email"
    },
    {
        question: " Which attribute allows you to set a specific pattern that the input data should match?",
        options: ["pattern", "fit", "regex"],
        correctAnswer: "pattern"
    },
    {
        question: "Which event fires when an element's value is changed?",
        options: ["onchange", "onmodify", "onupdate"],
        correctAnswer: "onchange"
    },
    {
        question: "Which method allows you to set a custom validation message for an input element?",
        options: ["setCustomValidity()", "setCustomError()", "setCustomMesssage()"],
        correctAnswer: "setCustomValidity()"
    },
];

//Track the user's answers and the current question index
let currentQuestionIndex = 0;
let userAnswers = [];

//Function to load the current question
function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML =
        `<div class="question">
            <p>${questionData.question}</p>
            ${questionData.options.map((option, index) =>
            `<input type="radio" name="q" value="${option}" id="option${index}"/>
            <label for="option${index}">${option}</label><br/>`).join('')}
        </div>`
        ;
}

//Function to handle form submission (tracking answers and showing next question)
document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    //Get selected answer for the current question
    const selectedAnswer = document.querySelector('input[name="q"]:checked');
    
    if (selectedAnswer) {
        // Save the user's answer
        userAnswers.push(selectedAnswer.value);
        currentQuestionIndex++;
        
        // If there are more questions, load the next question
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            // If it's the last question, show the results
            showResults();
        }
    } else {
        alert('Please select an answer');
    }
});

// Function to show the final score
function showResults() {
    let score = 0;
    quizData.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>You scored ${score} out of ${quizData.length}.</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    document.getElementById('result').innerHTML = '';
    loadQuestion();
}

// Initial load of the first question
loadQuestion();
