import React, { useState } from 'react'
import PropTypes from "prop-types"

export default function TextForm(props) {
    const [text, setText] = useState('');
    const wpm = 0.004;

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCase = () => {
        setText(text.toLowerCase());
    }

    const handleExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(" "));
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }

    const handleClear = () => {
        setText("");
    }

    const wordCount = (text) => text === "" ? 0 : text.split(" ").length;

    return (
        <div className='container my-3' style={{color: props.mode==='light'?"#042743":"white"}}>
            <div className="container">
                <h2 className='my-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'#042743'}} className={`form-control ${props.mode==='dark'?'placeholder-color':''}`} placeholder='Enter text here' value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpperCase}>Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerCase}>Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
            </div>
            <div className="container my-3">
                <h3>Text Summary</h3>
                <p>{wordCount(text)} words and {text.length} characters</p>
                <p>{Math.floor(wpm * wordCount(text))} minutes and {((wpm * wordCount(text) - Math.floor(wpm * wordCount(text))) * 60).toFixed(2)} seconds to read</p>
                <h3>Preview</h3>
                <pre>{text}</pre>
            </div>
        </div>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
    heading: "Enter the text below",
};
