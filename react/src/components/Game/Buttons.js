import React from 'react';

// A stateless button component just for code readability
function Button(props) {
    return (
        <button onClick={props.onClick} id={props.id} className="answer-button">{props.answer}</button>
    )
}

export default Button;