import React, {useRef} from "react";

export default (props) => {
    // const arrayElement = ['1', '3', '5'];
    const inputRef = useRef();
    // const arrayRef = useRef(Array(arrayElement.length));
    // const checkWord = () => {
    //     let s = arrayRef.current[2];
    //     console.log(s);
    // };

    return (
        <div className="mode-wrapper">
            <input ref={inputRef} type="text" placeholder="Enter word" />
            {/* <button onClick={checkWord}>Check</button>
            {arrayElement.map((element, index) => {
                <div ref={el => arrayRef.current[index] = el}>{element}</div>
            })} */}
        </div>
    );
};