import React from 'react';

// A stateless button component just for code readability
function Button(props) {
    return (
        <button onClick={props.onClick} className="answer-button">{props.answer}</button>
    )
}

export default Button;