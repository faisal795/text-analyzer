import React, { useState } from 'react';


function Textform(props) {

    const [myText, setmyText] = useState('');
    // Convert the all text convertUppercase
    function convertUppercase() {
        let newText = myText.toUpperCase();
        setmyText(newText);
    }
    // Convert the all text convertLowerCase
    function convertLowerCase() {
        let newText = myText.toLowerCase();
        setmyText(newText);
    }
    // clear the All Text TextArea
    function clearAllText() {
        let newText = '';
        setmyText(newText);
    }
    // capitalize the First Text
    function capitalizeText() {
        let firstchar = myText.charAt(0);
        let newText = firstchar.toUpperCase();
        console.log(newText + myText.slice(1));
        setmyText(newText + myText.slice(1));
    }
    // copythe All Text to textArea
    function copyText() {
        // let textArea = document.querySelector('#myBox');
        // textArea.select();
        // textArea.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(myText);
        // document.getSelection().removeAllRanges();
        // alert("text copied successfully");
    }
    // Remove All Extra Spaces 
    function removeSpaces() {
        let newText = myText.split(/ [ ] + /);
        setmyText(newText.join(' '));
        // alert("Remove All Extra Spaces  successfully");
    };
    // Call the onChangeHandler function
    function onChangeHandler(event) {
        setmyText(event.target.value);
    }
    let wordCounter = myText.trim().split(/\s+/).filter((myText) => myText !== "").length;
    let SPACECOUNTER; (wordCounter === 1) ? SPACECOUNTER = 0 : SPACECOUNTER = wordCounter;



    return (
        <>
            <div className="container py-4">
                <h2 className='text-warning text-center'>{props.title}</h2>
                <div className="mb-3">
                    <label htmlFor="myBox" className={`form-label ${(props.textMode === 'DarkMode')? 'text-dark': 'text-light' }`}>Try Text Analyzer & TextUtils-word-Counter & Remove extra spaces!</label>
                    <textarea className="form-control" id="myBox" placeholder='Enter your text here' value={myText} onChange={onChangeHandler} rows="8"></textarea>
                </div>
                <button disabled={myText.length < 1} className='btn btn-outline-success m-2' onClick={convertUppercase}>Uppercase Text</button>
                <button disabled={myText.length < 1} className='btn btn-outline-info m-2' onClick={convertLowerCase}>LowerCase Text</button>
                <button disabled={myText.length < 1} className='btn btn-outline-danger m-2' onClick={clearAllText}>Clear Text</button>
                <button disabled={myText.length < 1} className='btn btn-outline-warning m-2' onClick={capitalizeText}>Firt chr Upper</button>
                <button disabled={myText.length < 1} className='btn btn-outline-primary m-2' onClick={copyText}>Copy Text</button>
                <button disabled={myText.length < 1} className='btn btn-outline-secondary m-2' onClick={removeSpaces}>Remove Extr Spaces</button>





            </div>

            <div className="container">
                <h3 className='text-center text-muted'>Your Text Summary</h3>
                <div className="row text-white">
                    <div className="col m-1 bg-danger"><p>CHARACTERS: <span>{myText.length}</span></p></div>
                    <div className="col m-1 bg-warning"><p>WORDS: <span>{SPACECOUNTER}</span></p></div>
                    <div className="col m-1 bg-success"><p>SENTENCES: <span>{myText.trim().split(".").filter((myText) => myText !== "").length}</span></p></div>
                    <div className="col m-1 bg-secondary"><p>MINUTS READ: <span>{(0.03 * SPACECOUNTER).toFixed(2)}</span></p></div>
                    <div className="col m-1 bg-dark"><p>CHARACTERS WITHOUT SPACE: <span>{myText.length - myText.split(" ").length + 1}</span></p></div>
                    <div className="col m-1 bg-info"><p>PARAGRAPH: <span>{myText.split(/\r?\n|\r/).filter((myText) => myText !== "").length}</span></p></div>
                </div>
                <div className="row">

                    <div className="col-md-6">


                    </div>
                    <div className="col-md-6"></div>

                </div>
                <div className="row py-3">
                    <h3 className='text-center text-info'>Preview</h3>
                    <div className="col">
                        <p className={`lead ${(props.textMode === 'DarkMode')? 'text-dark': 'text-light' }`}>{myText.length > 0 ? myText : 'Enter something in the above textarea and preview it here!'}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Textform;