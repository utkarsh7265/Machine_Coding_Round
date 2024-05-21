import { useState } from 'react'
import './App.css'

function Accordion({ question }) {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    }
    return (
        <>
            <div key={question.id} className='accordion'>
                <div className='title'>
                    <p>{question.id}. {question.title}</p>
                    <span className="toggle-btn" onClick={() => handleShow()}>{show ? '-' : '+'}</span>
                </div>
                {
                    show &&
                    <div className='panel' >
                        {question.info}
                    </div>
                }

            </div>
        </>
    )
}

export default Accordion
