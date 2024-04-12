// Smooth scrolling function
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


// Quiz function
function getQuizResult() {

 // Get selected answers and result
let answer1 = document.querySelector('input[name="time"]:checked')
let answer2 = document.querySelector('input[name="fur"]:checked')
const result = document.getElementById('result');
const resultImage = document.getElementById('pet-image');

// Check if both answers are selected
if (answer1 && answer2) {
    answer1 = answer1.value;
    answer2 = answer2.value;

// Check answers to determine result
let petResult = "";
let petImage = "";

if (answer1 === "option1" && answer2 === "option2" || answer2 === "option3") {
   petResult = "Your perfect pet is a dog!";
petImage = "./Images/dog.jpeg";
} else if (answer1 === "option2" || answer1 === "option3" && answer2 === "option2" ) {
    petResult = "Your perfect pet is a cat!";
petImage = "./Images/cat.jpeg";
} else {
    petResult = "Your perfect pet is a fish!";
petImage = "./Images/fish.jpeg";
 }

 // Display result on final page
result.innerHTML = petResult;
resultImage.src = petImage;
smoothScroll('#final-page');

// Display alert if both questions are not answered
} else {
    alert("Please answer all questions to reveal your perfect pet!");
}
}


// Reset Quiz function
function resetAndScrollToTop() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');

    radioButtons.forEach((radio) => {
        radio.checked = false;
    });

    const finalText = document.getElementById('result');
    finalText.innerHTML = 'Your perfect pet is...';

    const finalImage = document.getElementById('pet-image');
    finalImage.src = './Images/questionMark.png';

    smoothScroll('#header');
}

