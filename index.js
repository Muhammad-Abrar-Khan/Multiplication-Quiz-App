document.addEventListener('DOMContentLoaded', function() {
    const questionElement = document.getElementById('ques');
    const answerElement = document.getElementById('input');
    const formElement = document.getElementById('form');
    const scoreElement = document.getElementById('score');
    let score = 0; // Initialize score to 0

    // Function to generate a new multiplication question
    function generateQuestion() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        questionElement.textContent = `What is ${num1} multiply by ${num2}?`;
        return num1 * num2;
    }

    // Function to handle the submission of the answer
    function submitAnswer(event) {
        event.preventDefault(); // Prevent form submission
        const userAnswer = parseInt(answerElement.value);
        if (userAnswer === correctAnswer) {
            scoreElement.textContent = 'Correct!';
            score++;
        } else {
            scoreElement.textContent = 'Incorrect. Try again!';
            if (score > 0) {
                score--;
            }
        }
        scoreElement.textContent = `Score: ${score}`;
        correctAnswer = generateQuestion();
        answerElement.value = '';
    }

    let correctAnswer = generateQuestion();
    scoreElement.textContent = `Score: ${score}`; // Update score display

    formElement.addEventListener('submit', submitAnswer);
});
