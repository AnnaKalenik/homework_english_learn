import React, {useRef, useState} from "react";

export default (props) => {
    // const arrayElement = ['1', '3', '5'];
    const inputRef = useRef();
    // const arrayRef = useRef(Array(arrayElement.length));
    // const checkWord = () => {
    //     let s = arrayRef.current[2];
    //     console.log(s);
    // };
    const library = JSON.parse(localStorage.getItem('library')) || [{id: '', word: '', translate: ''}];
    const [index, setIndex] = useState(0);

    const checkGame = () => {
        if(inputRef.current.value === library[index].translate.replace('the', '')) {
            setIndex(index + 1);
            inputRef.current.value = '';

            props.setCorrectAnswer(props.correctAnswer + 1);
        } else {
            props.setWrongAnswer(props.wrongAnswer + 1);
        };
    };

    return (
        <div className="mode-wrapper">
            <div className="mode-title-word">
               {library[index].word}
            </div>
            <p className="mode-title-word-description">Set translation for this word</p>
            <div className="input-block">
                <input ref={inputRef} type="text" placeholder="Enter word" className="customInput"/>
                <button className="btn-enter" onClick={checkGame}>Enter</button>
            </div>
        </div>
    );
};