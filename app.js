// Step 1. Define the questions and correct answers
const quizData = [
    {
        question: "Which property would you use to get the next sibling of an element?",
        options: ["nextNode", "nextSibling", "followingSibling"],
        correctAnswer: "nextSibling"
    },
    {
        question: "If element is an instance of an HTMLElement, what property could you use to get its direct parent node?",
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
        option: ["navigator.screen", "window.screen", "window.display"],
        correctAnswer: "window.screen"
    },
    {
        question: "Which method ids used to attach an event handler to an element?",
        option: ["element.listen()", "element.addEvent()", "element.addEventListener()"],
        correctAnswer: "element.addEVentListener"
    },
    {
        question: "if you want to capture an event before it reaches its target element, during which phase should you add the event listener?",
        option: ["Target phase", "Capture phase", "Bubbling phase"],
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
        correctanswer: "event.stopPropagation"
    },
    {
        question: "In the context of an event handler, what provides informationabout the event, such as the type of event and the target element?"
        options: ["event.detail", "event.type", "event.info"],
        correctAnswer: "event.type"
    },
    
]