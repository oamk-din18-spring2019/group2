import React from 'react';

function Question(props) {
    return (
        <div className="question">
            <p>{props.question}</p>
        </div>
    )
}

export default Question