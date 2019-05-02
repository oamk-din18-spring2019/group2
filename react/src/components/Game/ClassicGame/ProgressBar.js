import React from 'react'

// Filler component for the progress bar
function Filler(props) {
    return <div className="filler" style={{ width: `${props.percentage}%`}}/>
}

// The actual progress bar component
function ProgressBar(props) {
    return (
        <div className="progress-bar">
            <Filler percentage={props.percentage} />
        </div>
    )
}

export default ProgressBar