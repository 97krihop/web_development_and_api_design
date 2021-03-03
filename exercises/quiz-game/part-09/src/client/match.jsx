import React, {useEffect, useState} from "react";


export function Match() {
    const [error, setError] = useState(null);
    const [quiz, setQuiz] = useState();
    const [victory, setVictory] = useState(false);
    const [defeat, setDefeat] = useState(false);
    const [current, setCurrent] = useState(0);
    const [length, setLength] = useState(0);


    useEffect(() => {
        startGame();
    }, [])


    const startGame = async () => {
        const quizzes = await getRandomQuizzes();
        if (!quizzes) {
            setError("Error when connecting to server");
        } else {
            setError(null);
            setQuiz(quizzes);
            setVictory(false);
            setDefeat(false);
            setCurrent(0);
            setLength(quizzes.length);
        }
    };
    const getRandomQuizzes = async numberOfQuizzes => {
        if (numberOfQuizzes < 1) throw "Invalid number of requested quizzes: " + n;


        const url = "/api/matches";
        let response;
        let payload;

        try {
            response = await fetch(url, {method: "post"});
            payload = await response.json();
        } catch (err) {
            return null;
        }

        if (response.status !== 201) return null;
        return payload;
    };


    const handleClick = (x) => {
        if (x) {
            if (current === length - 1) setVictory(true);
            else setCurrent(current + 1);
        } else setDefeat(true);
    };

    const renderAnswerTag = (prefix, answer, correct) => (
        <button className="answer" onClick={() => handleClick(correct)}>
            {prefix + answer}
        </button>
    );

    if (error) {
        return <h2>{error}</h2>
    }

    if (!quiz) {
        return <h2>loading ...</h2>;
    }

    if (victory) {
        return (
            <div>
                <h2>You Won!</h2>
                <div>
                    <button className="quiz" onClick={startGame}>
                        New Match
                    </button>
                </div>
            </div>
        );
    }

    if (defeat) {
        return (
            <div>
                <h2>Wrong Answer! You Lost!</h2>
                <div>
                    <button className={'quiz'} onClick={startGame}>
                        New Match
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <p className="question">Question: {quiz[current].question} </p>
            <div id={"quiz_" + quiz[current].id} className={'quizContainer'}>
                {renderAnswerTag(
                    'A: ',
                    quiz[current].answers[0],
                    quiz[current].correct === 0
                )}
                {renderAnswerTag(
                    'B: ',
                    quiz[current].answers[1],
                    quiz[current].correct === 1
                )}
                {renderAnswerTag(
                    'C: ',
                    quiz[current].answers[2],
                    quiz[current].correct === 2
                )}
                {renderAnswerTag(
                    'D: ',
                    quiz[current].answers[3],
                    quiz[current].correct === 3
                )}
            </div>
        </div>
    );
}