import React, {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import CheckMode from "./CheckMode";
import WriteMode from "./WriteMode";

export default (props) => {
    const location = useLocation();
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);

    return (
        <div className="game-page">
            <NavLink to='/training'>
                <button className="btn-exit">Exit</button>
            </NavLink>
            <div className="points-block">
    <span className="correct-title">Correct: {correctAnswer}</span>
    <span className="error-title">Error: {wrongAnswer}</span>
            </div>
            {location.pathname === '/training/check-mode' ?
                <CheckMode 
                    setScore={props.setScore}
                    score={props.score}
                    correctAnswer={correctAnswer}
                    setCorrectAnswer={setCorrectAnswer}
                    wrongAnswer={wrongAnswer}
                    setWrongAnswer={setWrongAnswer}
                /> :
            location.pathname === '/training/write-mode' ?
                <WriteMode /> : null}
        </div>
    );
};