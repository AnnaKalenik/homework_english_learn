import React from "react";
//import delete from "../images/delete.svg";

class Library extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            translation: '',
            value: '',
            library: JSON.parse(localStorage.getItem('library')) || [{id: '', word: 'Добро пожаловать', translate: 'Welcome'}]
        }; 

        this.wordsRef = Array(this.state.library.length);

        this.changeMode = this.changeMode.bind(this);
        this.getValue = this.getValue.bind(this);
        this.addWordToLibrary = this.addWordToLibrary.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', (event) => {
            if (this.state.value.length > 0 && this.state.isOpen && event.key === 'Enter') {
                this.addWordToLibrary();
            };
        });
    }

    changeMode() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    async removeWordFromLibrary(index) {
        await this.setState(prevState => ({
            library: prevState.library.filter((word, i) => i !== index)
        }));

        await localStorage.setItem('library', JSON.stringify(this.state.library));
    }

    async addWordToLibrary() {
        try {
            const response = await fetch(`http://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${this.state.value}`, {
                "method": "GET"
            });

            const result = await response.json();

            if(result.translate) {
                await this.setState( () => ({
                    translation: result.translate
                }));
            };

            await this.setState(prevState => ({
                library: [...prevState.library, {id: this.state.library.length, word: this.state.value, translate: this.state.translation, correct: 0, learn: 0, error: 0}]
            }));
            
            await localStorage.setItem('library', JSON.stringify(this.state.library));
            
            await this.changeMode();

            await this.setState( () => ({
                translation: ''
            }));
        }
        catch (error) {
            console.log(error);
        };
    }

    async getValue(event) {
        const value = event.currentTarget.value;
        this.setState( () => ({
            value: value
        }));  
    }

    render() {
        return (
            <div className="page-container">

                <div className="add-word-container">
                    {!this.state.isOpen ? 
                        <span className="label-title">Add new word</span> :
                        <div>
                            <input onChange={this.getValue} placeholder="Enter new word" />
                            <span>{this.state.translation}</span>
                            <button onClick={this.addWordToLibrary} className="btn-round check">✓</button>
                        </div>
                    }
                    <button onClick={this.changeMode} className={this.state.isOpen ? 'btn-round close' : 'btn-round add'}></button>
                </div>

                <div className="library-container">
                    <div className="library-header">
                        <div>Word</div>
                        <div>Translate</div>
                        <div>Learn level</div>
                    </div>
                    {this.state.library.map((word, index) => (
                        <div key={index} ref={el => this.wordsRef[index] = el}>
                            <div>
                                {word.id}
                            </div>
                            <div>
                                {word.word}
                            </div>
                            <div>
                                {word.translate}
                            </div>
                            <div onClick={() => this.removeWordFromLibrary(index)} className="btn-delete"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Library;