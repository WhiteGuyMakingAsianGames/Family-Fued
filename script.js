const questions = [
    {
        question: "Name something you bring to the beach",
        answers: [
            { answer: "Towel", points: 30 },
            { answer: "Sunscreen", points: 25 },
            { answer: "Umbrella", points: 20 },
            { answer: "Swimsuit", points: 15 },
            { answer: "Cooler", points: 10 }
        ],
        prize: "Beach Ball"
    },
    {
        question: "Name a popular fruit",
        answers: [
            { answer: "Apple", points: 30 },
            { answer: "Banana", points: 25 },
            { answer: "Orange", points: 20 },
            { answer: "Grapes", points: 15 },
            { answer: "Strawberry", points: 10 }
        ],
        prize: "Fruit Basket"
    },
    {
        question: "Name a common pet",
        answers: [
            { answer: "Dog", points: 30 },
            { answer: "Cat", points: 25 },
            { answer: "Fish", points: 20 },
            { answer: "Bird", points: 15 },
            { answer: "Hamster", points: 10 }
        ],
        prize: "Pet Toy"
    }
];

let currentQuestion;
let score = 0;

document.getElementById('startGame').addEventListener('click', () => {
    score = 0;
    document.getElementById('feedback').innerHTML = '';
    loadNextQuestion();
});

document.getElementById('submitAnswer').addEventListener('click', () => {
    const answerBox = document.getElementById('answerBox');
    const feedback = document.getElementById('feedback');
    const guess = answerBox.value.trim().toLowerCase();
    let correct = false;

    for (let answer of currentQuestion.answers) {
        if (answer.answer.toLowerCase() === guess) {
            score += answer.points;
            correct = true;
            feedback.innerHTML = `Correct! You earned ${answer.points} points. Total score: ${score}`;
            break;
        }
    }

    if (!correct) {
        feedback.innerHTML = "Incorrect guess. Try again!";
    }

    answerBox.value = '';
    loadNextQuestion();
});

function loadNextQuestion() {
    if (questions.length > 0) {
        currentQuestion = questions.shift();
        document.getElementById('question').innerHTML = currentQuestion.question;
    } else {
        document.getElementById('question').innerHTML = `Game Over! Your total score is: ${score}`;
        document.getElementById('feedback').innerHTML += `<br>You won a: ${determinePrize(score)}`;
    }
}

function determinePrize(score) {
    if (score >= 75) {
        return "Gold Medal";
    } else if (score >= 50) {
        return "Silver Medal";
    } else {
        return "Bronze Medal";
    }
}
