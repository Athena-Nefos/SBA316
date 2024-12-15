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
        correctAnswer: "document.getElementsByClassName()"
    },
    {
        question: "Which method of the window.history object allows the user to move one step back in the browser's history?",
        options: ["history.previous()", "history.goBack()", "history.back()"],
        correctAnswer: "history.back()"
    },
    {
        question: "What is the primary purpose of the window.navigator object?",
        options: ["To provide information about the web browser and its capabilites", "To interface with the computer's file system", "To handle navigation requests to other pages"],
        correctAnswer: "To provide information about the web browser and its capabilities"
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
        correctAnswer: "element.addEventListener()"
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

// Step 1: Cache at least one element using getElementById
const quizContainer = document.getElementById('quiz-container'); 
// Cache the main quiz container (creates a reusable variable)
const questionContainer = document.getElementById('question-container'); //Cache the container for questions

//Step 2: Cache at least one element using querySelector
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');
const quizForm = document.querySelector('#quiz-form');

// Step: 2/2 Initialize required variables
let currentQuestionIndex = 0; 
//Tracks the current question index
let userAnswers = []; 
//Store's the user's answers

// Step 3: Create at least one element using createElement
//Function to dynamically create and add a question to the DOM
function loadQuestion() {
    const questionData = quizData[currentQuestionIndex];

    //Clear previous question
    questionContainer.innerHTML = '';

    //Create a question <p>
    const questionElement = document.createElement('p');
    questionElement.textContent = questionData.question; 
    //Set the question text
    questionContainer.appendChild(questionElement); 
    // Append the question to the container

    // Step 4: Use appendChild to add new elements to the DOM
    questionData.options.forEach((option, index) => {
        // Iterates through radio buttons
        //create radio button inputs
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = `q${currentQuestionIndex}`;
        radioInput.value = option;
        radioInput.id = `option${index}`;

        //Create label for the radio button
        const label = document.createElement('label');
        label.htmlFor = `option${index}`;
        label.textContent = option;

        //Append radio input and label to the container
        questionContainer.appendChild(radioInput);
        questionContainer.appendChild(label);

        //Line break for better presentation
        questionContainer.appendChild(document.createElement('br')); 
    });
}

//Step 5: Modify HTML content in response to user interaction using innerHTML
function showResults() {
    let score = 0;
    quizData.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            score++;
        }
    });

    // Display the final result
    resultContainer.innerHTML =
        `<h2>Quiz Completed!</h2>
        <p>You scored ${score} out of ${quizData.length}.</p>
        <button onclick="restartQuiz()">Restart Quiz</button>`;
}

// Step 6:  Modify the style or CSS classes in response to user Interation
submitButton.addEventListener('mouseover', () => {
     submitButton.style.backgroundColor = '#5b9d5f';
      //Change button color on hover
});
submitButton.addEventListener('mouseout', () => {
    submitButton.style.backgroundColor = '(rgb(168, 133, 133))';
     //Reset button color 
});

//Step 7: Modify an attribute of an element in response to user interaction
submitButton.addEventListener('click', () => {
    submitButton.setAttribute('disabled', true);
    // Disable button after after click
    setTimeout(() => {
        submitButton.removeAttribute('disabled'); 
        //Re-enable button after 1 second
    }, 500);
});

//Step 8: Register at least two different event listeners with event handlers
//Event listener for form submission
document.querySelector('#quiz-form');
quizForm.addEventListener('submit', function (e) {
    e.preventDefault(); //Prevent page reload

    //Validate user input
    const selectedAnswer = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
    if (selectedAnswer) {
        userAnswers.push(selectedAnswer.value);
        currentQuestionIndex++;

        //Load the next question or show results if it was the last question
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResults();
        }
    } else {
        alert('Please select an answer'); //Notify user to select an answer
    }
});

//restarting the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    resultContainer.innerHTML = ''; //Clears the result container
    loadQuestion(); //Reload the first question
}

//Step 9: Use at least two BOM properties or methods
console.log(window.innerWidth); //logs browser window's width
console.log(window.location.href); //logs current page URL

// Start Quiz
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
}); 