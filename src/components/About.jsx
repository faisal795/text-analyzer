import React, { useState } from 'react'

function About() {

    const [MyStyle, setMyStyle] = useState({
        backgroundColor: '#fff',
        color: '#000'
    });
    const [myMode, setmyMode] = useState('Enable Dark Mode')

    const changDark = () => {
        if (MyStyle.color === '#fff') {
            setMyStyle({
                backgroundColor: '#fff',
                color: '#000'
            });
            setmyMode('Enable Dark Mode')
        } else {
            setMyStyle({
                backgroundColor: '#000',
                color: '#fff'
            });
            setmyMode('Disable Dark Mode')
        }
    }

    return (
        <>
            <div className="container p-2" style={MyStyle}>

                <h1>About Us</h1>
                <div className="accordion" id='accordion'>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id='headingOne'>
                            <button className='accordion-button' type='button' data-bs-toggle='collapes' data-bs-target='#collapesOne'
                                aria-expanded='true' aria-controls='collapesOne' style={MyStyle}>Accordion-item #1</button>
                        </h2>
                        <div className="accordion-collapes collapes show" id='collapesOne' aria-labelledby='headingOne' data-bs-parent='accordion'>
                            <div className="accordion-body" style={MyStyle}>
                                <strong>This is first Item-accordion-body.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cumque aliquid at sit reiciendis asperiores quas, sapiente dicta unde labore?
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id='headingTwo'>
                            <button className='accordion-button' type='button' data-bs-toggle='collapes' data-bs-target='#collapesTwo'
                                aria-expanded='false' aria-controls='collapesTwo' style={MyStyle}>Accordion-item #1</button>
                        </h2>
                        <div className="accordion-collapes collapes" id='collapesTwo' aria-labelledby='headingTwo' data-bs-parent='accordion'>
                            <div className="accordion-body" style={MyStyle}>
                                <strong>This is first Item-accordion-body.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cumque aliquid at sit reiciendis asperiores quas, sapiente dicta unde labore?
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id='headingThree'>
                            <button className='accordion-button' type='button' data-bs-toggle='collapes' data-bs-target='#collapesThree'
                                aria-expanded='false' aria-controls='collapesThree' style={MyStyle}>Accordion-item #1</button>
                        </h2>
                        <div className="accordion-collapes collapes" id='collapesThree' aria-labelledby='headingThree' data-bs-parent='accordion'>
                            <div className="accordion-body" style={MyStyle}>
                                <strong>This is first Item-accordion-body.</strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cumque aliquid at sit reiciendis asperiores quas, sapiente dicta unde labore?
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container py-4">
                <button className="btn btn-info" onClick={changDark}>{myMode}</button>
            </div>
        </>
    )
}


export default About;