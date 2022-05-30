import React from 'react';
import './Question.css';

const Question = (props) => {
    return (
        <>
            <h1><span><b>{props.step}.</b></span>  {props.question[0]}</h1>
            {
                props.question[1] !== '' ? (
                    <div className='imageProp'>
                    <div className="imageContainer">
                        <img src={props.question[1]} alt=""/>
                    </div>
                    </div>
                ) : ''
            }
        </>
    );
}

export default Question;