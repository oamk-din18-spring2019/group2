import React from 'react';

// A stateless button component just for code readability
function Button(props) {
    return (
        <button className="answer-button">{props.answer}</button>
    )
}

export default Button;