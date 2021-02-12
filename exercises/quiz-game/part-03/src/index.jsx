import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { getRandomQuizzes } from './quizzes';

const App = () => {
    const [quiz, setQuiz] = useState(getRandomQuizzes(1)[0]);
    const handleClick = (correct) => {
        if (correct) {
            alert('Correct!!!');
            setQuiz(getRandomQuizzes(1)[0]);
        } else alert('Wrong answer');
    };

    const renderAnswerTag = (prefix, answer, correct) => (
        <div className="answer" onClick={() => handleClick(correct)}>
            {' '}
            {prefix + answer}{' '}
        </div>
    );

    return (
        <>
            <p className="question">Question: {quiz.question} </p>
            {renderAnswerTag('A: ', quiz.answers[0], quiz.correct === 0)}
            {renderAnswerTag('B: ', quiz.answers[1], quiz.correct === 1)}
            {renderAnswerTag('C: ', quiz.answers[2], quiz.correct === 2)}
            {renderAnswerTag('D: ', quiz.answers[3], quiz.correct === 3)}
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
