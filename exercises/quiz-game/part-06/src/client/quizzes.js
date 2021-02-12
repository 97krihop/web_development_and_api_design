/*
const quiz = [{
    question: 'what is absolute zero?',
    answers: ['-300 Celsius', '0 Kelvin', '0  Fahrenheit', '0 Celsius'],
    correct: 1,
}, {
    question: 'do i like pickles?',
    answers: ['yes', 'no', 'what a stupid question', 'dont know'],
    correct: 1,
}, {
    question: 'what is a tomato?',
    answers: ['vegetable', 'herb', 'berry', 'fruit'],
    correct: 3,
}];

export function getRandomQuizzes(numberOfQuizzes) {
    if (numberOfQuizzes < 1) throw "Invalid number too low";

    if (numberOfQuizzes > quiz.length) throw "Too many quizzes asked for";

    const list = Array(numberOfQuizzes);

    let i = 0;
    while (i < numberOfQuizzes) {

        const k = Math.floor(quiz.length * Math.random());
        if (!list.includes(k)) {
            list[i] = k;
            i++;
        }
    }
    return Array.from(list).map(x => quiz[x])
}*/
export async function getRandomQuizzes(numberOfQuizzes) {
    if (numberOfQuizzes < 1) throw 'Invalid number too low';

    const url = 'https://opentdb.com/api.php?type=multiple&amount=';
    let response;
    let data;
    try {
        response = await fetch(url + numberOfQuizzes);
        data = await response.json();
    } catch (err) {
        return null;
    }

    if (response.status !== 200) return null;
    return data.results.map((x) => {
        const pos = Math.floor(Math.random() * Math.floor(3));
        x.incorrect_answers.splice(pos, 0, x.correct_answer);
        return {
            question: x.question,
            answers: x.incorrect_answers,
            indexOfRightAnswer: pos,
        };
    });
}
