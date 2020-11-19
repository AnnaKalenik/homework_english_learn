import React, {useRef, useState, useContext, useEffect} from "react";
import {Context} from './../../context';

export default (props) => {
    const context = useContext(Context);

    const inputRef = useRef();
    const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || [{id: '', word: '', translate: ''}])
    const [index, setIndex] = useState(0);

    useEffect(() => {
        return () => {
            localStorage.setItem('score', context.score);
        };
    });

    const checkKeyPress = (event) => {
        if(event.key === 'Enter') {
            checkGame();
        };
    };

    const checkGame = () => {
        if (library.length - 1 !== index) {
            if(inputRef.current.value === library[index].translate.replace(/^(the|a)i/, '').trim().toLowerCase()) {
                setIndex(index + 1);
                props.setCorrectAnswer(props.correctAnswer + 1);
                context.setScore(context.score + 1);

                library[index].correct = library[index].correct + 1;
                localStorage.setItem('library', JSON.stringify(library));
            } else {
                props.setWrongAnswer(props.wrongAnswer + 1);

                library[index].error = library[index].error + 1;
                localStorage.setItem('library', JSON.stringify(library));
            };
        } else {
            alert('Good job!');

            props.setCorrectAnswer(0);
            props.setWrongAnswer(0);
            setIndex(0);
        };

        inputRef.current.value = '';
    };

    return (
        <div className="mode-wrapper">
            <div className="mode-title-word">
               {library[index].word}
            </div>
            <p className="mode-title-word-description">Set translation for this word</p>
            <div className="input-block">
                <input onKeyPress={checkKeyPress} ref={inputRef} type="text" placeholder="Enter word" className="customInput"/>
                <button className="btn-enter" onClick={checkGame}>Enter</button>
            </div>
        </div>
    );
};