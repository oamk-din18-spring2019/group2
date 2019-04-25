import React from 'react';

// A stateless question component just for code readability
function Question(props) {
    return (
        <div className="question">
            <p>{props.question}</p>
        </div>
    )
}

export default Question