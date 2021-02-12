import { getRandomQuizzes } from './quizzes';

function answerTag(answer, correct) {
    let onclick;

    if (answer === correct)
        onclick = "alert('Correct!!!');  EntryPoint.displayNewQuiz();";
    else onclick = "alert('Wrong answer');";

    return (
        "<div class='answer' onclick=\"" + onclick + '">' + answer + '</div>'
    );
}

function displayQuiz(quiz) {
    let html = "<p class='question'>Question: \"" + quiz.question + '"</p>';
    quiz.forEach((x) => {
        html += answerTag(x, quiz.correct);
    });
    const quizDiv = document.getElementById('quizDivId');

    quizDiv.innerHTML = html;
}

export function displayNewQuiz() {
    const quiz = getRandomQuizzes(1)[0];

    displayQuiz(quiz);
}
