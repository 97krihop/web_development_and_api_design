const div = document.getElementById('quiz');
const quiz = [
    {
        question: 'what is absolute zero?',
        answers: ['-300 Celsius', '0 Kelvin', '0  Fahrenheit', '0 Celsius'],
        correct: '0 Kelvin',
    },
    {
        question: 'do i like pickles?',
        answers: ['yes', 'no', 'what a stupid question', 'dont know'],
        correct: 'no',
    },
    {
        question: 'what is a tomato?',
        answers: ['vegetable', 'herb', 'berry', 'fruit'],
        correct: 'fruit',
    },
];

let num = -1;
const newGame = () => {
    while (true) {
        let rand = Math.floor(Math.random() * quiz.length);
        if (rand !== num || num === -1) {
            num = rand;
            break;
        }
    }
    game();
};

const game = () => {
    div.innerHTML = `<h2>${quiz[num].question}</h2>`;
    for (const a of quiz[num].answers)
        div.innerHTML += `<button onclick="${answer(a)}">${a}</button>`;
};

const answer = (x) => {
    if (x === quiz[num].correct) return `alert('correct answer')`;
    else return `alert('wrong answer')`;
};
